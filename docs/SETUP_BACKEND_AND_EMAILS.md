# MIWESU Backend & Email – Setup Guide

This guide tells you **what is already implemented in code** and **exactly what you need to do** to get the database, admin portal, and emails working in production. Do the steps in order.

---

## Part A: What’s Already Done in the Codebase

- **Admin auth** – Single-password login at `/admin`. Session is a cryptographically signed cookie (HMAC-SHA256). Optional `SESSION_SECRET` for signing (recommended in production); otherwise `ADMIN_PASSWORD` is used. Cookie is `HttpOnly`, `SameSite=Lax`, `Secure` in production. Auth logic is in `lib/admin-auth.ts` and is marked `server-only` so it never runs on the client.
- **Booking enquiry API** – `POST /api/booking-enquiry` creates a PENDING booking (when DB is connected) and sends an owner notification email via Resend.
- **Availability API** – `GET /api/availability` returns blocked dates from CONFIRMED bookings only.
- **Admin APIs** – Login/logout, bookings list, single booking, send email to guest, rates CRUD, pricelist PDF, invoice PDF. All protected by the same session cookie.
- **Emails** – All outgoing mail goes through Resend (booking notifications, contact form, admin→guest). No SMTP fallback. See `lib/booking-email.ts` and `app/api/contact/route.ts`, `app/api/admin/send-email/route.ts`.
- **Prisma** – Schema in `prisma/schema.prisma` (Booking, Unit, EmailLog, RateItem, Quote, SystemSettings, etc.). Seed in `prisma/seed.ts` is **idempotent** (uses `upsert`). `package.json` has `"prisma": { "seed": "npx tsx prisma/seed.ts" }` so `npx prisma db seed` works.
- **Env template** – `.env.example` lists every variable with short comments.

**What you must do:** Provision the database, set env vars, verify your domain in Resend and add DNS records, then deploy.

---

## Part B: Step-by-Step – What You Do

### 1. Database (PostgreSQL)

The app needs a PostgreSQL database for real bookings, rates, and email logs. Without it, the app still runs (Prisma is stubbed) but no data persists.

**Option A: Vercel Postgres (recommended if you deploy on Vercel)**

1. In [Vercel Dashboard](https://vercel.com) → your project → **Storage** (or **Integrations**).
2. Add **Prisma Postgres** (or “Postgres” from the marketplace). Authorize and create a new database.
3. Choose a region close to your users. Create the database.
4. **Connect the database to your Next.js project.** Vercel will inject `DATABASE_URL` into the project’s environment.
5. If you use the Prisma integration, it may also run migrations; otherwise continue below.

**Option B: Other PostgreSQL (e.g. Supabase, Neon)**

1. Create a PostgreSQL database and get the connection string (e.g. `postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public`).
2. Add it to `.env` as `DATABASE_URL` and in Vercel → Settings → Environment Variables for production.

**Apply schema and seed (after DATABASE_URL is set)**

- Install Prisma if you removed it:  
  `npm install prisma @prisma/client`
- Generate the client and push schema (prototyping):  
  `npx prisma generate`  
  `npx prisma db push`
- Or use migrations (recommended for production):  
  `npx prisma migrate dev`  
  (first time may reset the DB if you previously used `db push`)
- Seed the database (idempotent):  
  `npx prisma db seed`
- For production deploys, run migrations in CI or as a post-build step:  
  `npx prisma migrate deploy`

**Vercel build command (when using Prisma)**  
In Vercel → Project → Settings → Build & Development Settings, set **Build Command** to:

```bash
npx prisma generate && next build
```

This avoids “outdated Prisma client” errors by generating the client before each build. The repo already has a script: use **Build Command** = `npm run vercel-build` in Vercel.

**Replacing the Prisma stub**  
The app uses a stub in `lib/prisma.ts` when the database is disabled. When you connect a real database, replace the contents of `lib/prisma.ts` with a singleton so serverless does not open too many connections:

```ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
export const prisma = globalForPrisma.prisma ?? new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

---

### 2. Environment Variables

Set these in **local `.env`** and in **Vercel → Settings → Environment Variables** for Production (and Preview if you use it). After changing env vars on Vercel, **redeploy** so the new values are used.

| Variable | Required | Purpose |
|----------|----------|--------|
| `DATABASE_URL` | Yes, for real DB | PostgreSQL connection string (from Vercel Postgres or your provider). |
| `ADMIN_PASSWORD` | Yes | Password for `/admin` login. Use a strong password in production. |
| `SESSION_SECRET` | Recommended (prod) | High-entropy secret for signing the admin session cookie. Generate: `openssl rand -base64 32`. If unset, `ADMIN_PASSWORD` is used. |
| `RESEND_API_KEY` | Yes, for email | From [Resend](https://resend.com) → API Keys. |
| `MIWESU_BOOKING_FROM_EMAIL` | Yes, for sending | “From” address for all outgoing mail. **Must** be on a domain you verify in Resend (e.g. `bookings@miwesu.co.za`). |
| `MIWESU_ADMIN_EMAIL` | No | Where booking enquiry notifications are sent (e.g. `info@miwesu.co.za`). |
| `MIWESU_ADMIN_CC` | No | CC for those notifications (comma-separated). |
| `MIWESU_CONTACT_TO` | No | Where contact form submissions go. |
| `MIWESU_CONTACT_CC` | No | CC for contact form. |
| `WOOD_ORDER_EMAIL` | No | Used if you have a wood-order form. |
| `NEXT_PUBLIC_BASE_URL` | No | Base URL for SEO/sitemap (e.g. `https://www.miwesu.co.za`). |

See `.env.example` for the full list and comments.

---

### 3. Resend – API Key and Domain

**Get the API key**

1. Sign up at [resend.com](https://resend.com).
2. **API Keys** → Create API Key → copy it.
3. Set `RESEND_API_KEY=re_xxxx...` in `.env` and in Vercel.

**Verify your domain (required to send from your address)**

Without domain verification, Resend will not let you send from `@miwesu.co.za` (or your domain). You’ll get errors or mail will only work from the sandbox address.

1. In Resend: **Domains** → **Add Domain**.
2. Enter your domain (e.g. `miwesu.co.za`). Resend recommends a **subdomain** for sending (e.g. `send.miwesu.co.za` or `bookings.miwesu.co.za`) to isolate reputation.
3. Resend will show **DNS records** to add at your registrar. You need at least:
   - **SPF** (TXT) – authorizes Resend’s servers to send for your domain.
   - **DKIM** (TXT) – public key so receiving servers can verify the message wasn’t tampered with.
   - Optionally **DMARC** (TXT) – policy for failed SPF/DKIM (start with `p=none` to monitor).

**Add the records at your DNS provider**

- **Cloudflare** – DNS → Add record. For mail records, turn **Proxy off** (grey cloud) so the TXT/MX records are used for verification.
- **Namecheap** – Advanced DNS. Add TXT with the exact name and value Resend gives (e.g. Host: `send` or `resend._domainkey`).
- **GoDaddy** – Resend supports Domain Connect for GoDaddy; you can use “Auto Configure” in Resend if available, or add the TXT/MX records manually in DNS Management.

After saving the records, in Resend click **Verify DNS Records**. Propagation can take a few minutes up to 24 hours. When the domain shows **Verified**, you can use addresses on that domain (e.g. `bookings@miwesu.co.za`) as `MIWESU_BOOKING_FROM_EMAIL`.

**Sandbox (testing only)**  
Resend’s sandbox (e.g. `onboarding@resend.dev`) lets you send to any inbox, but the “From” is fixed. For production, you must verify your own domain and set `MIWESU_BOOKING_FROM_EMAIL` to an address on that domain.

---

### 4. Summary Checklist

- [ ] PostgreSQL created (Vercel Postgres or other) and `DATABASE_URL` set in Vercel and locally.
- [ ] Prisma: `npx prisma generate`, then `npx prisma db push` or `npx prisma migrate dev`, then `npx prisma db seed`.
- [ ] Vercel build command set to `npx prisma generate && next build` (when using Prisma).
- [ ] Resend account created; API key set as `RESEND_API_KEY`.
- [ ] Domain added and verified in Resend; SPF and DKIM (and optionally DMARC) added at your DNS provider.
- [ ] `MIWESU_BOOKING_FROM_EMAIL` set to an address on the verified domain (e.g. `bookings@miwesu.co.za`).
- [ ] `ADMIN_PASSWORD` set; optionally `SESSION_SECRET` set (e.g. `openssl rand -base64 32`).
- [ ] All other env vars from `.env.example` set in Vercel for Production (and Preview if needed).
- [ ] Redeploy after any env or build-command change.

---

## Part C: How It All Fits Together

- **Guest** submits an enquiry on `/book` → `POST /api/booking-enquiry` creates a PENDING booking (if DB connected) and sends you an email via Resend.
- **You** log in at `/admin` with `ADMIN_PASSWORD` → session cookie is set (signed with `SESSION_SECRET` or `ADMIN_PASSWORD`).
- You view bookings, send emails to guests (logged in DB if connected), confirm bookings. Confirmed bookings block dates in `/api/availability`.
- **Emails** (contact form, booking alerts, admin→guest) all use Resend; “From” is `MIWESU_BOOKING_FROM_EMAIL`, which must be on a verified domain.

For more detail on how the backend and emails work, see [BACKEND_AND_EMAILS.md](./BACKEND_AND_EMAILS.md).

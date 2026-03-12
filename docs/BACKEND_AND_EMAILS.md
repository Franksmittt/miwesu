# MIWESU Backend & Email Guide

**Step-by-step setup (database, env vars, Resend, DNS):** see **[SETUP_BACKEND_AND_EMAILS.md](./SETUP_BACKEND_AND_EMAILS.md)**.

## 1. Backend overview

### What the backend is
A **private admin portal** for the lodge owners. It’s the place to see booking enquiries, contact guests, and lock in dates. No payments happen on the site yet; everything is enquiry → you reply → you confirm when paid.

### What we use (tech)
- **Next.js API routes** – handle form submissions and admin actions.
- **Prisma** – database (PostgreSQL). Right now Prisma is **stubbed** (no real DB) so builds stay fast; when you connect a DB and run `db:push` / `db:seed`, bookings and email logs persist.
- **Resend** – the only email provider. All outgoing mail (enquiry alerts, contact form, admin→guest) goes through Resend.
- **Auth** – one password in `.env` (`ADMIN_PASSWORD`). Session is a signed cookie; no separate auth service.

### Booking flow (step by step)

1. **Guest** goes to `/book` → picks dates, accommodation, number of guests → enters name, email, phone, notes → clicks **Submit enquiry**.
2. **Website** calls `POST /api/booking-enquiry`.  
   - If DB is connected: a **PENDING** booking row is created.  
   - If DB is not connected: no row is created, but the next step still runs.
3. **Owner notification email** is sent (if Resend is configured): *“You have a new booking enquiry from [Name]…”* with a link to the admin portal. So even without a DB, you still get the enquiry by email.
4. **You** log in at `/admin` → **Bookings** → open the enquiry → email the guest (pricing, bank details, etc.) from the portal. Each email you send is logged (when DB is connected).
5. When the guest pays, you set the booking status to **Confirmed** in the admin. That blocks those dates so `/api/availability` (and the public site) no longer offers them.

So: **backend = admin portal + booking enquiry API + emails via Resend.** No Stripe/payments in the flow yet.

---

## 2. Emails – how they’re supposed to work

### Provider: Resend only
Every email sent by the app goes through **Resend** (https://resend.com). There is no fallback provider in the code.

### Where emails are sent in the app

| Trigger | What happens | Code |
|--------|----------------|------|
| **Contact form** (`/contact`) | Sends one email to you (and CCs) with the form content. Reply-To is the visitor’s email. | `app/api/contact/route.ts` |
| **Booking enquiry** (`/book` → Submit) | Sends one email to you: “New booking enquiry from [Name]…” with dates, unit, guest details and link to admin. | `lib/booking-email.ts` → `sendOwnerEnquiryNotification`; called from `app/api/booking-enquiry/route.ts` |
| **Admin → guest** (from booking detail) | You write a message in the admin and send; it goes to the guest’s email and is logged (if DB connected). | `app/api/admin/send-email/route.ts` |

(There is also a “booking confirmation” email to the guest in `lib/booking-email.ts` – `sendBookingConfirmationEmail` – used when a booking is confirmed, e.g. after Stripe in the future; it’s not used in the current enquiry-only flow.)

### Env vars that control email

All of these go in `.env` (and in Vercel → Project → Settings → Environment Variables for production).

| Variable | Required | Purpose |
|----------|----------|--------|
| **RESEND_API_KEY** | Yes, for any email | API key from Resend. Without it, no email is sent and the app returns 503 or skips sending. |
| **MIWESU_BOOKING_FROM_EMAIL** | Yes, for sending | The “From” address. **Must be a sender Resend allows** (see below). Default in code: `bookings@miwesu.co.za`. |
| **MIWESU_ADMIN_EMAIL** | No | Where enquiry/booking notifications are sent. Default: `info@miwesu.co.za`. |
| **MIWESU_ADMIN_CC** | No | Extra addresses that get the same owner notification (comma-separated). Default: `admin@miwesu.co.za,bookings@miwesu.co.za`. |
| **MIWESU_CONTACT_TO** | No | Where contact form submissions are sent. Default: `info@miwesu.co.za`. |
| **MIWESU_CONTACT_CC** | No | CC for contact form. Default: `admin@miwesu.co.za,bookings@miwesu.co.za`. |

So for emails to work you **must** set at least:

- `RESEND_API_KEY`
- `MIWESU_BOOKING_FROM_EMAIL` (and it must be a verified/authorized sender in Resend).

---

## 3. Why emails often don’t work (and how to fix it)

### 1) Resend API key missing or wrong
- **Symptom:** Contact form says “Email is not configured” or “try again later”; booking enquiry doesn’t send; admin “Send email” fails with 503.
- **Fix:**  
  - Sign up at https://resend.com.  
  - In Resend dashboard: **API Keys** → Create API Key → copy it.  
  - Put it in `.env` as `RESEND_API_KEY=re_xxxx...`.  
  - Restart the app (and in production set the same variable in Vercel).

### 2) Domain not verified in Resend
- **Symptom:** API key is set but Resend returns an error like “domain not verified” or “sender not allowed”.
- **Fix:**  
  - In Resend: **Domains** → Add domain (e.g. `miwesu.co.za`).  
  - Add the DNS records Resend shows (SPF, DKIM, etc.) at your domain registrar.  
  - Wait until Resend shows the domain as **Verified**.  
  - Send **only** from addresses on that domain (e.g. `bookings@miwesu.co.za`, `info@miwesu.co.za`).

### 3) “From” address not allowed
- **Symptom:** Resend error about invalid or unverified sender.
- **Fix:**  
  - `MIWESU_BOOKING_FROM_EMAIL` must be an address on a domain you’ve verified in Resend (e.g. `bookings@miwesu.co.za`).  
  - Don’t use Gmail/Outlook addresses as “From”; Resend sends from your domain only.

### 4) Using Resend’s sandbox domain
- Resend gives you a sandbox domain like `onboarding@resend.dev` for testing. You can send **to** any email, but **from** is that sandbox address.
- **Fix for real “from” your domain:** Verify `miwesu.co.za` (or your real domain) and set `MIWESU_BOOKING_FROM_EMAIL` to something like `bookings@miwesu.co.za`. For contact form, the code uses the same `MIWESU_BOOKING_FROM_EMAIL` as the “from” (see `app/api/contact/route.ts`: `FROM_EMAIL`).

### 5) Wrong env in production
- **Symptom:** Works locally, fails on Vercel (or vice versa).
- **Fix:** In Vercel → your project → **Settings** → **Environment Variables**, add the same vars (`RESEND_API_KEY`, `MIWESU_BOOKING_FROM_EMAIL`, etc.) for **Production** (and Preview if you want). Redeploy after changing env.

### 6) Emails going to spam
- **Fix:** Finish domain verification in Resend (SPF + DKIM). Use a proper “from” address on your domain and avoid spammy wording. Optionally set up DMARC for the domain.

---

## 4. Quick checklist for “emails not working”

1. **RESEND_API_KEY** in `.env` (and in Vercel for prod) and app restarted / redeployed.  
2. **MIWESU_BOOKING_FROM_EMAIL** set to an address on your domain (e.g. `bookings@miwesu.co.za`).  
3. In Resend: domain **miwesu.co.za** (or the one you use) added and **verified** (DNS records added).  
4. “From” in the app matches that verified domain (no Gmail/Outlook as “from”).  
5. For production: env vars set in Vercel and deploy done after adding them.

---

## 5. Code reference (where to look)

- **Booking enquiry** (create enquiry + email you): `app/api/booking-enquiry/route.ts` → `lib/booking-email.ts` → `sendOwnerEnquiryNotification`.  
- **Contact form**: `app/api/contact/route.ts` (uses `RESEND_API_KEY`, `MIWESU_BOOKING_FROM_EMAIL`, `MIWESU_CONTACT_TO`, `MIWESU_CONTACT_CC`).  
- **Admin sends email to guest**: `app/api/admin/send-email/route.ts` (uses `RESEND_API_KEY`, `MIWESU_BOOKING_FROM_EMAIL`).  
- **All “from” and “to” defaults**: `lib/booking-email.ts` (top) and `app/api/contact/route.ts` (top).  
- **Env template**: `.env.example` lists all optional/required vars.

Once Resend has your domain verified and the env vars are set correctly (locally and on Vercel), contact form, booking enquiry notifications, and admin→guest emails should all work.

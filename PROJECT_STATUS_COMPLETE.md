# MIWESU — Project Status: What’s Done, What’s Left, How to Finish & Invoice

**Purpose:** Single source of truth for project completion, client handover, and invoicing.  
**Last updated:** March 2026.

---

## Executive summary

**Everything that can be done without you is done.** The site is fully built, all code and content are in place, and the only remaining items require **you** (or the client): **backend config** (env vars, database, Stripe, Resend), **hosting/domain**, and **optional** species photos / Search Console. You can invoice for a completed project; the list below is your handover checklist.

---

## 1. Completed without you (dev-done)

Everything in this section is **done**. No backend access or keys were required.

### 1.1 Site build & code (100%)

- **All 48 routes** built and working: Home, About, Residences (Homestead, Stone Villa), Book, Availability, Rates, Contact, FAQ, Activities, Wildlife, Compare, Conservation, Gallery, Partners, Wood, Trophy Export, Blog (2 articles), DE/ES, 14 species pages, admin bookings, sitemap, robots.
- **Design system:** Gold/Onyx/Marble, Cinzel + Montserrat, responsive, mobile-first.
- **Layout & nav:** Fixed nav, full-screen menu, footer, VettingModal, skip link.
- **Hero & activity images:** All use real Thabazimbi/lodge images (`lib/hero-images.ts`, `lib/activity-images.ts`); no placeholder filenames.
- **Motion:** Ken Burns heroes, Design Your Escape (HoverTakeover), Day in Eden (DayInLife), ScrollReveal, gallery by vibe; reduced-motion respected.
- **Build:** `npm run build` passes; TypeScript and lint clean.

### 1.2 Features (100% implemented in code)

- **Booking flow** (`/book`): Date/residence/guests form, calls availability + checkout APIs; success/cancel handling; shows clear “demo mode” message when DB/Stripe not configured.
- **Availability API:** Uses DB when `DATABASE_URL` is set; falls back to mock options when not.
- **Contact form & API:** Validation, intent dropdown; sends via Resend when `RESEND_API_KEY` is set; returns clear 503 if not.
- **Stripe:** Checkout session + webhook implemented; works when keys are set.
- **Prisma:** Schema (Unit, Booking), seed for Homestead + Stone Villa, client; ready for `db:push` + `db:seed` once you have a DB.
- **Admin bookings:** `/admin/bookings?secret=...` and API; protected by `NEXT_PUBLIC_ADMIN_BOOKING_SECRET`.
- **SEO:** Per-page metadata, canonicals, OG/Twitter, JSON-LD, sitemap, robots.

### 1.3 Assets & config done without you

- **OG image:** `public/og-image.jpg` added (copy of Panoramic lodge hero). Social sharing will work; you can replace with a custom 1200×630 later if you want.
- **`.env.example`:** Updated with `NEXT_PUBLIC_BASE_URL` and `NEXT_PUBLIC_APP_URL` so you know what to set in production.

---

## 2. Waiting on you (requires your action)

Nothing in this section can be done without **you** (or the client): credentials, hosting, or real assets.

### 2.1 Backend & environment (you must do)

| Item | What you need to do |
|------|---------------------|
| **Production env vars** | In Vercel (or your host): set at least `NEXT_PUBLIC_BASE_URL` and `NEXT_PUBLIC_APP_URL` (e.g. `https://www.miwesu.com`). See §4 below for full list. |
| **Database (if real bookings)** | Create PostgreSQL (e.g. Supabase or Vercel Postgres), set `DATABASE_URL`, then run `npm run db:push` and `npm run db:seed` (or equivalent in your deploy pipeline). |
| **Contact form sending** | Get a Resend API key, verify sending domain, set `RESEND_API_KEY` (and MIWESU_* emails if different). Without this, form returns 503 and asks user to email directly. |
| **Stripe (if taking payments)** | Add live `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`; configure webhook URL in Stripe dashboard. |
| **Admin bookings (optional)** | Set `NEXT_PUBLIC_ADMIN_BOOKING_SECRET` and open `/admin/bookings?secret=YOUR_SECRET` to view bookings. |

### 2.2 Hosting & domain (you must do)

| Item | What you need to do |
|------|---------------------|
| **Hosting** | Deploy repo to Vercel (or chosen host); connect repo and set env vars. |
| **Domain & SSL** | Point domain to host; ensure HTTPS. |

### 2.3 Optional (only if you want them)

| Item | What you need to do |
|------|---------------------|
| **Google Search Console** | When you have the verification code, add it in `app/layout.tsx` under `verification: { google: 'your-code' }` (see comment around lines 102–104). |
| **Species images (5)** | Dapple Impala, Lechwe, Livingstone Eland, Bushbuck, Golden Wildebeest still use placeholder/wrong-species images. Prompts and filenames are in `docs/*_IMAGE_PROMPTS.md` and `docs/IMAGE_NEEDED_CHECKLIST.md`; you need to supply or commission the photos. |
| **Custom OG image** | Replace `public/og-image.jpg` with a 1200×630 image if you want a dedicated social card. |

---

## 3. Summary: who does what

- **Dev (done):** All code, all pages, all features, OG image in place, `.env.example` updated. Build passes. **Nothing left that can be done without you.**
- **You:** Set env vars, create DB (if needed), run seed, add Resend/Stripe keys, deploy, point domain. Optionally: GSC verification, 5 species images, custom OG image.

---

## 4. Environment variables reference

Use this in production (copy from `.env.example` and fill):

```env
# Required for correct URLs and sitemap
NEXT_PUBLIC_BASE_URL=https://www.miwesu.com
NEXT_PUBLIC_APP_URL=https://www.miwesu.com

# Optional – booking system
DATABASE_URL=postgresql://...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# Optional – contact form & emails
RESEND_API_KEY=re_...
MIWESU_BOOKING_FROM_EMAIL=bookings@miwesu.co.za
MIWESU_ADMIN_EMAIL=info@miwesu.co.za
MIWESU_ADMIN_CC=...
MIWESU_CONTACT_TO=info@miwesu.co.za
MIWESU_CONTACT_CC=...

# Optional – admin bookings page
NEXT_PUBLIC_ADMIN_BOOKING_SECRET=your-secret

# Optional – wood orders
WOOD_ORDER_EMAIL=info@miwesu.co.za
WOOD_ORDER_CORS_ORIGIN=https://www.miwesu.co.za
```

---

## 5. Deployment checklist (your handover)

1. [ ] Hosting chosen; repo connected; env vars set (at least `NEXT_PUBLIC_BASE_URL`, `NEXT_PUBLIC_APP_URL`).
2. [ ] If using DB: create DB, set `DATABASE_URL`, run `db:push` and `db:seed`.
3. [ ] Domain pointed; SSL on.
4. [ ] Contact form: set `RESEND_API_KEY` and test.
5. [ ] If taking payments: Stripe live keys + webhook URL configured.
6. [ ] (Optional) Google Search Console verification code added in layout.
7. [ ] Smoke test: Home, Book, Contact, one species, Compare, Gallery, Rates.

---

## 6. Invoicing position

- **Delivered:** Full site (48 routes), booking flow, contact form, availability API, 14 species pages, compare tool, gallery, blog, DE/ES, SEO, Thabazimbi imagery, motion features, OG image, and `.env.example` ready for production.
- **Outstanding:** Only tasks that require **you** (env, DB, Resend, Stripe, hosting, domain) or optional assets (5 species images, GSC, custom OG). No further dev work is blocked on the codebase.

You can **invoice as project complete** and hand this document (or the checklist in §5) to the client so they know exactly what’s done and what they need to do to go live.

---

*For detailed page list and tech stack see `docs/PROJECT_OVERVIEW.md` and `README.md`.*

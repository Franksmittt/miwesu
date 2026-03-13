# MIWESU – Environment Variables & DNS Reference

**Keep this file private. Do not commit real secrets (passwords, API keys, full connection strings) to git.**

---

## 1. Vercel environment variables (names and purpose)

| Variable | Purpose | Where |
|----------|---------|--------|
| **DATABASE_URL** | Supabase pooler (port 6543, pgbouncer). App runtime. | Vercel + .env |
| **DIRECT_URL** | Supabase pooler (port 5432). Migrations / Prisma. | Vercel + .env |
| **ADMIN_PASSWORD** | Admin portal login. | Vercel + .env |
| **RESEND_API_KEY** | Resend API key (starts with `re_`). Required for all email. | Vercel + .env |
| **MIWESU_BOOKING_FROM_EMAIL** | "From" for all outgoing mail. Must be on verified domain. | Vercel + .env |
| **MIWESU_ADMIN_EMAIL** | Where booking enquiry notifications are sent. | Vercel + .env |
| **MIWESU_ADMIN_CC** | CC for those notifications (comma-separated). | Vercel + .env |
| **MIWESU_CONTACT_TO** | Where contact form submissions are sent. | Vercel + .env |
| **MIWESU_CONTACT_CC** | CC for contact form. | Vercel + .env |
| **WOOD_ORDER_EMAIL** | Wood order form destination. | Vercel + .env |

**Values you have set (summary):**

- **DATABASE_URL:** Supabase pooler `postgres.gtfopwqlnmqjrnyxwvrr` @ `aws-1-eu-west-1.pooler.supabase.com:6543` with `?pgbouncer=true`
- **DIRECT_URL:** Same pooler host, port 5432, `?sslmode=require`
- **ADMIN_PASSWORD:** (your chosen admin password – set in Vercel)
- **RESEND_API_KEY:** One key in Vercel (re_LZsfCcnA_…); another in local .env (re_RsdoxH6x_…). Either works if the domain is verified in Resend.
- **MIWESU_BOOKING_FROM_EMAIL:** bookings@miwesu.co.za
- **MIWESU_ADMIN_EMAIL:** info@miwesu.co.za
- **MIWESU_ADMIN_CC:** admin@miwesu.co.za,bookings@miwesu.co.za
- **MIWESU_CONTACT_TO:** info@miwesu.co.za
- **MIWESU_CONTACT_CC:** admin@miwesu.co.za,bookings@miwesu.co.za
- **WOOD_ORDER_EMAIL:** info@miwesu.co.za

**Optional (not in your list):** SESSION_SECRET, NEXT_PUBLIC_BASE_URL, NEXT_PUBLIC_APP_URL

---

## 2. DNS at Afrihost (for miwesu.co.za)

Records you have (and the one we updated):

### Root domain – SPF (updated for Resend)

- **Record:** TXT  
- **Host:** miwesu.co.za  
- **Content:** `v=spf1 include:spf.aserv.co.za include:amazonses.com +a +mx -all`  
- **Note:** This is the updated value so mail from Resend (Amazon SES) passes SPF for the root.

### Send subdomain – Resend

- **MX**  
  - Host: send.miwesu.co.za  
  - Priority: 10  
  - Content: feedback-smtp.eu-west-1.amazonses.com  

- **TXT (SPF)**  
  - Host: send.miwesu.co.za  
  - Content: v=spf1 include:amazonses.com ~all  

### DKIM for Resend (root domain)

- **TXT**  
  - Host: resend._domainkey.miwesu.co.za  
  - Content: p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCVbjZBHrqwZdqEhzEULgeboYqkFFZgMjwAksiJIYfx0n4WV6l5/I9s3+EfFWO/CPNXQA3PBB9kUKf69j5b4z+Mm1KDfzArBLjqrD4xS3y1zuVcEBYrasyzZ6Kf2DZE9zaZJeebtcFkQo294vT1BW1HjYirBNEJqGe+4FyJeQCX3wIDAQAB  

### Other (unchanged)

- **MX (root):** miwesu.co.za → mx7564341105.spe.ucebox.co.za (priority 10)  
- **DMARC:** _dmarc.miwesu.co.za → v=DMARC1; p=none; fo=0; adkim=s; aspf=s  
- **Default DKIM (Aserv):** default._domainkey.miwesu.co.za → (existing value)  
- **www:** www.miwesu.co.za → CNAME fa516ad2ab9dbec2.vercel-dns-017.com  
- **A, CNAME, SRV, etc.:** As you had them (ftp, cpanel, webmail, mail, autoconfig, autodiscover, etc.)

---

## 3. Resend

- **Domain in Resend:** miwesu.co.za (root), region eu-west-1 (Ireland).
- **API keys:** You created keys in Resend (e.g. for Vercel / local). They start with `re_`. Stored in Vercel as RESEND_API_KEY and in local .env. Do not put the full key in this file or in git.
- **Enable Sending:** On (required).
- **Enable Receiving:** Off (not needed for this app).

---

## 4. Supabase (full reference)

**Project name (in Supabase dashboard):** Miwesu_booking  

**Project ref (ID in URLs):** `gtfopwqlnmqjrnyxwvrr`  

**Dashboard URL:** `https://supabase.com/dashboard/project/gtfopwqlnmqjrnyxwvrr`  

**Region:** `aws-1-eu-west-1` (Ireland)

---

### Database

- **Database password:** Set in Supabase → Project Settings → Database → “Database password”. Use this **only** in `.env` and Vercel (in the connection strings below). Do not put the real password in this file or in git.
- **User (for connection strings):** `postgres.PROJECT_REF` → e.g. `postgres.gtfopwqlnmqjrnyxwvrr`
- **Pooler host:** `aws-1-eu-west-1.pooler.supabase.com`
  - Port **6543** = session mode (use for app runtime, with `?pgbouncer=true`).
  - Port **5432** = transaction mode (use for Prisma migrations / `db push` / `db seed`).
- **Direct DB host:** `db.gtfopwqlnmqjrnyxwvrr.supabase.co:5432` — use only if your network can reach it; many environments (e.g. some CI) only allow the pooler.

**Connection string format (replace `[YOUR-PASSWORD]` with your actual DB password; URL-encode special characters, e.g. `@` → `%40`):**

| Env var | Use | Example value (placeholder) |
|--------|-----|------------------------------|
| **DATABASE_URL** | App / Prisma at runtime | `postgresql://postgres.gtfopwqlnmqjrnyxwvrr:[YOUR-PASSWORD]@aws-1-eu-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true` |
| **DIRECT_URL** | Prisma migrate / db push / db seed | `postgresql://postgres.gtfopwqlnmqjrnyxwvrr:[YOUR-PASSWORD]@aws-1-eu-west-1.pooler.supabase.com:5432/postgres?sslmode=require` |

**Where the password lives:** In Supabase dashboard (you set or reset it there). You then paste it into `.env` and Vercel env vars only. This app uses **Prisma** to talk to Postgres (not the Supabase JS client), so only `DATABASE_URL` and `DIRECT_URL` are required.

---

### Supabase API keys (optional for this app)

The app does **not** use the Supabase anon/service key for API access; it uses Prisma + the DB connection above. If you ever need them (e.g. for Supabase Auth or Realtime):

- **Project URL:** `https://gtfopwqlnmqjrnyxwvrr.supabase.co`
- **Anon (public) key:** Supabase → Project Settings → API → “Project API keys” → anon public. (Starts with `eyJ...`; safe for client-side if you use RLS.)
- **Service role key:** Same page → service_role. (Full access; server-only, never expose.)
- **Publishable key (if shown):** e.g. `sb_publishable_...` — only if you use Supabase’s newer client.

Do not paste real keys here; store them in `.env` / Vercel if you add features that need them.

---

### Database objects (Prisma)

- **Schema:** `public`
- **Tables used:** `Unit`, `Booking`, `RateItem`, `SystemSettings`, `EmailLog` (see `prisma/schema.prisma`).
- **RLS:** Optional. If you enable RLS on `Unit` / `Booking` in Supabase, it only affects direct PostgREST/anon access; Prisma connects as the DB user and bypasses RLS. See `prisma/supabase-rls.sql` for commands.

---

If you need to recreate env from scratch: use the **names** above and fill values in Vercel (and .env locally). Never commit .env or paste full secrets into this doc.

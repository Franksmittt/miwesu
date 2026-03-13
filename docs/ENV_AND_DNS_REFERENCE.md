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

## 4. Supabase (Miwesu_booking)

- **Project ref:** gtfopwqlnmqjrnyxwvrr  
- **Region:** aws-1-eu-west-1  
- **Database password:** (stored in DATABASE_URL and DIRECT_URL – do not put here.)  
- **Connection:** Pooler used for both app (6543) and migrations (5432).

---

If you need to recreate env from scratch: use the **names** above and fill values in Vercel (and .env locally). Never commit .env or paste full secrets into this doc.

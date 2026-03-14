# Resend setup checklist – get emails working

Do these steps **in Resend** and at your **DNS provider** (e.g. Afrihost). No code changes needed.

**Current DNS:** Your Afrihost DNS is in a good state (incoming mail works). The full list is in `docs/ENV_AND_DNS_REFERENCE.md` (section 2). When you add Resend, **add** the Resend records only; do **not** remove or change the root MX (miwesu.co.za → mx7564341105.spe.ucebox.co.za).

---

## What to do right now (isolate the bug)

1. **Redeploy** on Vercel (so env vars are picked up), then go to **Admin → Email** (`/admin/email-status`).
2. Enter your email (e.g. `info@miwesu.co.za`) and click **Send sandbox test**.
3. **If the email arrives:** Your API key and code are fine. The problem is domain/DNS or the receiving mailbox (spam, filters). Fix: ensure root SPF includes `include:amazonses.com`, check spam, add DMARC.
4. **If it does not arrive:** API key missing in production, or you didn’t redeploy after adding it. Add `RESEND_API_KEY` in Vercel and trigger a new deployment; try again.
5. Then click **Send test (your domain)**. If sandbox works but this doesn’t, your “From” address must match the domain you verified in Resend (e.g. if you verified `miwesu.co.za`, use `bookings@miwesu.co.za`).

---

## 1. Resend account and API key

- [ ] Sign up at **[resend.com](https://resend.com)** (or log in).
- [ ] Go to **API Keys** → **Create API Key**.
- [ ] Name it (e.g. "Miwesu production"), choose **Full access** or **Sending access**.
- [ ] **Copy the key** (starts with `re_`). You won’t see it again.
- [ ] Put it in:
  - **Local:** `.env` → `RESEND_API_KEY="re_xxxx..."`
  - **Production:** Vercel → Settings → Environment Variables → `RESEND_API_KEY` (same value).
- [ ] Redeploy on Vercel after adding/updating the variable.

---

## 2. Add and verify your domain in Resend

- [ ] In Resend go to **Domains** → **Add Domain**.
- [ ] Enter your domain:
  - **Root:** `miwesu.co.za` (you can send from `bookings@miwesu.co.za`, `info@miwesu.co.za`, etc.)
  - **Or subdomain (recommended):** e.g. `send.miwesu.co.za` (then use `bookings@send.miwesu.co.za` or set up the subdomain so it’s just for sending – Resend often uses the `send` subdomain for records).
- [ ] Click **Add**. Resend will show a table of **DNS records** you must add at your DNS provider.

---

## 3. Add the DNS records at your provider (Afrihost, Cloudflare, etc.)

Resend will show something like:

| Type | Name / Host        | Value / Content |
|------|--------------------|-----------------|
| **SPF**  | `send` (or the subdomain you use) | e.g. `v=spf1 include:amazonses.com ~all` |
| **DKIM** | `resend._domainkey` (or `resend._domainkey.send`) | Long string (public key) – **copy the full value from Resend** |
| **MX**   | `send`             | e.g. `10 feedback-smtp.eu-west-1.amazonses.com` |

- [ ] Open your **DNS provider** (e.g. Afrihost → DNS / Advanced DNS).
- [ ] Add **each record** exactly as shown in Resend:
  - **SPF:** TXT record. Host = what Resend says (often `send`). Value = the SPF string from Resend.
  - **DKIM:** TXT record. Host = what Resend says (often `resend._domainkey`). Value = the **entire** DKIM string from Resend (no truncation, no extra quotes).
  - **MX:** MX record. Host = what Resend says (often `send`). Priority = 10. Value = the hostname Resend gives (e.g. `feedback-smtp.eu-west-1.amazonses.com`).  
    **If your DNS adds your domain to the end of the MX value,** add a **trailing dot** so it stays a full hostname:  
    `feedback-smtp.eu-west-1.amazonses.com.`
- [ ] Save all records. **Important:** Records are usually for the **`send`** subdomain (or the subdomain you added in Resend), not the root. If Resend says “add to `send.miwesu.co.za`”, the host for SPF/MX is `send`; for DKIM it’s often `resend._domainkey` (under that subdomain) – follow Resend’s labels exactly.

---

## 4. Verify in Resend

- [ ] Wait **5–30 minutes** (sometimes up to 24–72 hours for DNS propagation).
- [ ] In Resend → **Domains** → your domain → click **Verify DNS Records** (or **Verify**).
- [ ] When status is **Verified** (green), you can send from addresses on that domain.

If it fails:

- Use [dns.email](https://dns.email/) (replace `yourdomain.com` with your domain/subdomain) and confirm the TXT and MX values match what Resend shows.
- Check Resend’s domain page for **red underlines** or error messages and fix the listed record.
- **Restart verification** in Resend after fixing DNS.

---

## 5. Use a “From” address on that domain

- [ ] In your app and in Vercel, set **MIWESU_BOOKING_FROM_EMAIL** to an address on the **verified** domain, e.g.:
  - `bookings@miwesu.co.za` (if you verified `miwesu.co.za`)
  - or `bookings@send.miwesu.co.za` (if you verified `send.miwesu.co.za`).
- [ ] Don’t use Gmail/Outlook as “From”; Resend only sends from your verified domain.

---

## 6. Optional: DMARC (extra trust with inbox providers)

- [ ] In Resend → **Domains** → your domain → **DMARC** (or add at your DNS).
- [ ] Add a TXT record at your DNS: host `_dmarc`, value e.g.  
  `v=DMARC1; p=none; rua=mailto:you@miwesu.co.za`  
  Start with `p=none` to monitor; later you can use `p=quarantine` or `p=reject`.

---

## Quick checklist summary

| Step | Where | Action |
|------|--------|--------|
| 1 | Resend | Create API key; put in `.env` and Vercel `RESEND_API_KEY`. |
| 2 | Resend | Domains → Add Domain (e.g. `miwesu.co.za` or `send.miwesu.co.za`). |
| 3 | DNS (Afrihost etc.) | Add SPF (TXT), DKIM (TXT), MX exactly as Resend shows (often on `send` subdomain). |
| 4 | Resend | Verify DNS Records; wait until status = Verified. |
| 5 | App / Vercel | Set `MIWESU_BOOKING_FROM_EMAIL` to an address on the verified domain. |
| 6 | (Optional) | Add DMARC TXT for better deliverability. |

When all of that is done, booking notifications, contact form, and admin→guest emails will send correctly from your domain.

---

## From “Next.js Resend Email Integration Deep Dive”

These points often cause “works in dev, fails in prod” or “delivery delayed”:

### Vercel DNS: Name field (critical)

If your DNS is managed in **Vercel** (Project → Settings → Domains, or team Domains):

- For a subdomain like **send.miwesu.co.za**, in the **Name** field enter **only** `send`, not `send.miwesu.co.za`.
- Vercel appends the root domain automatically. If you type `send.miwesu.co.za`, you get `send.miwesu.co.za.miwesu.co.za` and verification fails.
- Same for DKIM: if Resend says `resend._domainkey.send`, in Vercel you may enter `resend._domainkey.send` (no `.miwesu.co.za`). Check Resend’s exact label and Vercel’s docs.

### Env vars and redeploy

- **Environment variables in Vercel are not applied to existing deployments.** After you add or change `RESEND_API_KEY` (or any env var), you must trigger a **new deployment** (e.g. push a commit or “Redeploy” in Vercel). Otherwise the running app still has the old (or empty) value.

### Sandbox test (isolate domain vs app)

- To prove the app and API key are fine, temporarily send from Resend’s sandbox: set **From** to `onboarding@resend.dev` (e.g. in your code or via Admin → Email test).
- If the email **arrives** with that From address, the fault is **domain verification / DNS**, not the key or the code.
- Then switch back to your verified domain for “From”.

### Where to look when it fails

- **Build logs** only show that the app compiled. For “email didn’t send” or “500”, check **Vercel → Logs** (runtime logs) when the request runs. On Hobby, logs may only be kept ~1 hour.
- If Resend returns an error (e.g. “You can only send from a verified domain”), that’s domain/DNS. If the request returns 200 but mail doesn’t land, it’s deliverability (receiving server deferring, spam, or DNS reputation).

### Vercel × Resend integration

- If you added Resend via **Vercel Marketplace**, the integration can create and attach an API key to the project. You still must **verify your domain** in Resend and add the DNS records; the key alone isn’t enough for sending from your domain.

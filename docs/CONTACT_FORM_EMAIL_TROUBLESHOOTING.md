# Contact form – "Failed to send" troubleshooting

When you submit the contact form, the page now shows the **exact error from Resend** (e.g. "Reason: …"). Use that to fix the issue.

---

## 1. See the real error

Submit the form again. The red error message will include **"Reason: …"** with what Resend returned. Use that text below.

---

## 2. Common errors and fixes

### "You can only send from verified domains" / "Domain not verified"

- **Cause:** The "From" address is not on a domain you verified in Resend.
- **Fix:**
  1. In Resend go to **Domains** and check which domain is **Verified** (green): e.g. `miwesu.co.za` or `send.miwesu.co.za`.
  2. In Vercel (and in `.env` locally) set **MIWESU_BOOKING_FROM_EMAIL** to an address on that domain:
     - If you verified **miwesu.co.za** → use `bookings@miwesu.co.za` or `info@miwesu.co.za`.
     - If you only verified **send.miwesu.co.za** → use `bookings@send.miwesu.co.za`.
  3. **Redeploy** on Vercel after changing the env var.

### "You can only send to your own email address" / Sandbox

- **Cause:** Resend is in sandbox mode; you can only send to the email you used to sign up.
- **Fix:**
  1. In Resend go to **Domains** and finish verifying your domain (add the DNS records they show, wait until status is **Verified**).
  2. Or in Resend **Settings** / dashboard, see if there is an option to leave sandbox (often by verifying the domain).

### "Invalid API key" / "Unauthorized" / 401

- **Cause:** `RESEND_API_KEY` is missing, wrong, or not applied to the running deployment.
- **Fix:**
  1. In Resend go to **API Keys** and create a new key (or copy the existing one).
  2. In Vercel → your project → **Settings** → **Environment Variables** add or update:
     - **Name:** `RESEND_API_KEY`
     - **Value:** `re_xxxx...` (the full key from Resend).
  3. **Redeploy** the project (env vars are only applied on new deployments).

### "Validation error" / "Invalid 'to' address"

- **Cause:** One of the recipient addresses is invalid or not allowed.
- **Fix:** In Vercel (and `.env`) check **MIWESU_CONTACT_TO** and **MIWESU_CONTACT_CC**. Use valid email addresses only, comma-separated for CC (e.g. `info@miwesu.co.za`, `admin@miwesu.co.za,bookings@miwesu.co.za`).

### No "Reason" shown / "Something went wrong"

- **Cause:** The request failed before Resend (e.g. network, crash).
- **Fix:** Check Vercel **Logs** (or **Functions** → select the deployment → logs). Look for `[contact]` to see the server-side error.

---

## 3. Quick checks

| Check | Where |
|-------|--------|
| Resend domain status | Resend → Domains → your domain = **Verified** (green) |
| From address | Same domain as in Resend (e.g. `bookings@miwesu.co.za`) |
| RESEND_API_KEY | Vercel → Environment Variables → present and correct |
| Redeploy after env change | Vercel → Deployments → Redeploy |
| MIWESU_BOOKING_FROM_EMAIL | Matches verified domain (e.g. `bookings@miwesu.co.za`) |

---

## 4. Test without your domain (sandbox sender)

To confirm the API key and code work:

1. Log in to **Admin** on your site.
2. Go to **Email** (`/admin/email-status`).
3. Enter your email and click **"Send sandbox test"** (sends from `onboarding@resend.dev`).

- **If the sandbox email arrives:** The problem is domain/From. Fix the From address and domain verification as in section 2.
- **If it does not arrive:** The problem is API key or deployment. Set `RESEND_API_KEY` in Vercel and redeploy, then try again.

---

After you see the **Reason: …** on the contact form, use the matching section above to fix it. If the message is different, copy it and use it to search Resend’s docs or support.

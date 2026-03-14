# Afrihost – Incoming mail not arriving (info@miwesu.co.za)

**Update:** Incoming mail is now working (Afrihost fixed it). The current DNS baseline is in `docs/ENV_AND_DNS_REFERENCE.md` (section 2). If incoming mail ever stops again, use this checklist.

If **Gmail → info@miwesu.co.za** (or any sender → info@miwesu.co.za) is not arriving, the problem is **incoming mail** at Afrihost, not Resend. Resend only handles **sending** from your domain.

---

## 1. MX record for the root domain (critical)

Incoming mail for **@miwesu.co.za** is delivered to whichever server the **MX record for miwesu.co.za** points to.

**At Afrihost DNS you must have:**

| Type | Host / Name | Value / Points to | Priority |
|------|-------------|------------------|----------|
| **MX** | `miwesu.co.za` or `@` (root) | `mx7564341105.spe.ucebox.co.za` (or the exact hostname Afrihost gave you for your mail) | **10** |

- **Do not** remove or overwrite this MX when adding Resend records. Resend’s MX is only for the **send** subdomain (`send.miwesu.co.za`), not for the root.
- In Afrihost, the “Host” for the root MX is often **blank**, **@**, or **miwesu.co.za** depending on their panel. The result must be: “mail for miwesu.co.za goes to mx7564341105.spe.ucebox.co.za”.

**How to check from your side:**

- Use [MXToolbox](https://mxtoolbox.com/SuperTool.aspx) → **MX Lookup** → enter `miwesu.co.za`.
- You should see an MX record pointing to something like `mx7564341105.spe.ucebox.co.za` (or Afrihost’s mail server). If you see nothing, or a wrong hostname, the MX is missing or wrong at Afrihost.

---

## 2. Mailbox exists in cPanel / Afrihost

- Log in to **Afrihost cPanel** (or wherever you manage mail for miwesu.co.za).
- Confirm that the mailbox **info@miwesu.co.za** actually exists, is active, and is not over quota.
- If it was never created, create it. If the password was reset, use the new one in your mail client.

---

## 3. Spam / Junk

- Check the **Spam** or **Junk** folder for the account that receives info@miwesu.co.za (e.g. in webmail or your mail client).
- If messages are there, mark as “Not spam” and add the sender to contacts/safe senders so future mail goes to Inbox.

---

## 4. Nothing else is taking over the root domain

- You should have **one** MX for the **root** domain (miwesu.co.za) pointing to Afrihost/Ucebox (e.g. `mx7564341105.spe.ucebox.co.za`).
- You can have a **separate** MX for **send.miwesu.co.za** (Resend’s feedback server). That one must **not** replace the root MX.

If you have two MX records for the root and the wrong one has a **lower** priority number, mail can go to the wrong server. So: root MX = Afrihost/Ucebox only; send subdomain MX = Resend only.

---

## 5. What to ask Afrihost support

You can send them something like this:

- “Incoming mail to **info@miwesu.co.za** is not arriving, including from Gmail. Please confirm:
  1. The MX record for **miwesu.co.za** (root domain) points to your mail server (e.g. mx7564341105.spe.ucebox.co.za) with priority 10.
  2. The mailbox **info@miwesu.co.za** exists and is active on your side.
  3. There are no blocks or filters on your side that would reject or drop mail to this address.”

---

## Summary

| What | Where |
|------|--------|
| **Incoming** mail (Gmail → info@…) | MX for **miwesu.co.za** → Afrihost/Ucebox; mailbox must exist in cPanel. |
| **Outgoing** (contact form, Resend) | Resend + DNS for **send** subdomain + SPF/DKIM; no impact on receiving. |

If Gmail → info@miwesu.co.za still doesn’t arrive after checking the above, the next step is for Afrihost to confirm MX and mailbox on their side (and check their logs for bounces or blocks).

# DNS rollback – remove Resend, keep website + incoming mail

**Status:** Rollback done. Incoming mail (Gmail → info@miwesu.co.za) works. The **current baseline DNS** is documented in `docs/ENV_AND_DNS_REFERENCE.md` (section 2). Keep that set as-is when you add Resend.

This doc is for reference: if you ever add Resend and need to roll back again, use the steps below. When you add Resend again, use the “When you add Resend again” section in ENV_AND_DNS_REFERENCE.md.

---

## What to REMOVE (if you ever need to roll back again)

Delete these three records:

| Record / Host | Type | Content (for reference) |
|---------------|------|-------------------------|
| **send.miwesu.co.za** | MX 10 | feedback-smtp.eu-west-1.amazonses.com |
| **send.miwesu.co.za** | TXT | v=spf1 include:amazonses.com ~all |
| **resend._domainkey.miwesu.co.za** | TXT | p=MIGfMA0GCSqGSI... (the long Resend DKIM value) |

---

## What to CHANGE (one record)

Edit the **root SPF** TXT so it no longer includes Resend (Amazon SES):

| Record / Host | Type | Change to |
|---------------|------|-----------|
| **miwesu.co.za** | TXT | `v=spf1 include:spf.aserv.co.za +a +mx -all` |

- **Current (with Resend):** `v=spf1 include:spf.aserv.co.za include:amazonses.com +a +mx -all`  
- **After rollback:** `v=spf1 include:spf.aserv.co.za +a +mx -all`  

(You may have another TXT on miwesu.co.za for `mailconf=...` – leave that one as is. Only change the SPF TXT.)

---

## What to KEEP (do not remove)

| Record | Type | Purpose |
|--------|------|---------|
| miwesu.co.za | SOA | Required for zone |
| miwesu.co.za | NS (all 4) | Nameservers |
| **miwesu.co.za** | **MX 10** | **mx7564341105.spe.ucebox.co.za** ← **Incoming mail** |
| ftp.miwesu.co.za | A | 102.222.124.25 |
| cpanel.miwesu.co.za | A | 102.222.124.25 |
| webmail.miwesu.co.za | A | 102.222.124.25 |
| mail.miwesu.co.za | A | 102.222.124.25 |
| *.miwesu.co.za | A | 102.222.124.25 |
| miwesu.co.za | A | 216.198.79.1 |
| **www.miwesu.co.za** | **CNAME** | **fa516ad2ab9dbec2.vercel-dns-017.com** ← **Website (Vercel)** |
| autoconfig.miwesu.co.za | CNAME | envoy.aserv.co.za |
| autodiscover.miwesu.co.za | CNAME | envoy.aserv.co.za |
| miwesu.co.za | TXT | mailconf=https://envoy.aserv.co.za/mail/config-v1.1.xml |
| miwesu.co.za | TXT | v=spf1 include:spf.aserv.co.za +a +mx -all (after you change it) |
| _dmarc.miwesu.co.za | TXT | v=DMARC1; p=none; fo=0; adkim=s; aspf=s |
| default._domainkey.miwesu.co.za | TXT | v=DKIM1; k=rsa; p=MIIBIj... (Afrihost DKIM – keep) |
| _imaps._tcp.miwesu.co.za | SRV | 0 7200 1 993 envoy.aserv.co.za |
| _autodiscover._tcp.miwesu.co.za | SRV | 0 7200 0 443 envoy.aserv.co.za |
| _submission._tcp.miwesu.co.za | SRV | 0 7200 1 25 envoy.aserv.co.za |

---

## Checklist

1. [ ] Delete **send.miwesu.co.za** MX (feedback-smtp.eu-west-1.amazonses.com).
2. [ ] Delete **send.miwesu.co.za** TXT (SPF for send).
3. [ ] Delete **resend._domainkey.miwesu.co.za** TXT (Resend DKIM).
4. [ ] Edit **miwesu.co.za** SPF TXT: remove `include:amazonses.com` so it reads `v=spf1 include:spf.aserv.co.za +a +mx -all`.
5. [ ] Save and wait for DNS to propagate (often 5–30 minutes, sometimes up to 48 hours).
6. [ ] Test: send an email from Gmail to info@miwesu.co.za and check it arrives in your Afrihost mailbox.

---

## After rollback

- **Website:** Still works (www CNAME → Vercel).
- **Incoming mail:** Handled only by Afrihost (root MX → mx7564341105.spe.ucebox.co.za).
- **Contact form:** Will still show “Failed to send” until you re-add Resend DNS and domain verification later. For now the goal is to confirm normal email (Gmail → info@) works.

---

## When you add Resend again

Your **current** DNS (no Resend) is the safe baseline. To add Resend without breaking incoming mail:

1. **Add** (do not remove or change the root MX):
   - send.miwesu.co.za **MX 10** → feedback-smtp.eu-west-1.amazonses.com
   - send.miwesu.co.za **TXT** → v=spf1 include:amazonses.com ~all
   - resend._domainkey.miwesu.co.za **TXT** → (full DKIM from Resend)
2. **Edit** the root SPF TXT to add Amazon SES:  
   `v=spf1 include:spf.aserv.co.za include:amazonses.com +a +mx -all`

Full current DNS and Resend steps: `docs/ENV_AND_DNS_REFERENCE.md` and `docs/RESEND_SETUP_CHECKLIST.md`.

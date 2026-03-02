# Live site setup (Vercel) – handover checklist

Your `.env` file is **not** deployed (it's in `.gitignore`). For the **live** site to work, add these in **Vercel** and redeploy.

---

## 1. Open Vercel

1. Go to [vercel.com](https://vercel.com) and sign in.
2. Open your **miwesu** project (the one connected to your GitHub repo).

---

## 2. Add environment variables

Go to **Settings** → **Environment Variables**.

Add each variable below. Use **Production**, and optionally **Preview** if you test branches.

| Name | Value | Notes |
|------|--------|--------|
| `DATABASE_URL` | *(copy from your local `.env`)* | Supabase Session pooler URL. Same value as in `.env`. |
| `RESEND_API_KEY` | *(copy from your local `.env`)* | Resend API key (starts with `re_`). Contact form & booking emails. |
| `MIWESU_BOOKING_FROM_EMAIL` | `bookings@miwesu.co.za` | From address for emails. |
| `MIWESU_ADMIN_EMAIL` | `info@miwesu.co.za` | New booking alerts go here. |
| `MIWESU_ADMIN_CC` | `admin@miwesu.co.za,bookings@miwesu.co.za` | CC for booking alerts. |
| `MIWESU_CONTACT_TO` | `info@miwesu.co.za` | Contact form primary recipient. |
| `MIWESU_CONTACT_CC` | `admin@miwesu.co.za,bookings@miwesu.co.za` | CC for contact form. |
| `WOOD_ORDER_EMAIL` | `info@miwesu.co.za` | Wood order form recipient. |

**Optional (later):**

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_BASE_URL` | `https://www.miwesu.co.za` or your live URL (for SEO/canonical). |
| `NEXT_PUBLIC_ADMIN_BOOKING_SECRET` | A secret string (e.g. random password) – required to view `/admin/bookings`; append `?secret=YOUR_SECRET` to the URL. |
| `STRIPE_SECRET_KEY` | When you enable payments. |
| `STRIPE_WEBHOOK_SECRET` | When you enable Stripe webhooks. |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | When you enable payments. |

---

## 3. Redeploy

After saving the variables:

- Go to **Deployments**.
- Open the **⋯** menu on the latest deployment → **Redeploy** (or push a new commit to trigger a deploy).

New deployments will use the env vars; existing ones do not until you redeploy.

---

## 4. Quick check

- **Contact form** – Submit a test; check info@miwesu.co.za (and CCs).
- **Book page** – Choose dates, accommodation, fill details; confirm a booking is created (and, when Stripe is set, that payment works).
- **Admin bookings** – Open `https://your-site.vercel.app/admin/bookings?secret=YOUR_SECRET` (only after setting `NEXT_PUBLIC_ADMIN_BOOKING_SECRET`).

---

## 5. GitHub

- **Do not** commit `.env` (it’s gitignored).
- Code and `.env.example` are in the repo; the **client** or **you** must add the real values in Vercel as above.

---

## 6. Security note

If you ever rotate the Resend API key or Supabase password, update the value in Vercel and redeploy. Revoke old keys in Resend / Supabase as needed.

# Admin Portal – Backend Overview & CRM Vision

## What it is

The admin portal is a **private backend** for the lodge owners (Wayne & Melissa). It’s the control centre for every booking enquiry that comes from the website: see who’s interested, when they want to stay, contact them, agree pricing, and lock in dates once they’ve paid. In that sense it works like a **lightweight CRM** (Customer Relationship Management) for enquiries and bookings.

---

## How it’s meant to work

### 1. **No payment on the website (for now)**

- Guest goes to **Book your stay** → picks dates, accommodation, guest count → enters name, email, phone, optional notes → clicks **Submit enquiry**.
- No payment is taken. The system creates a **PENDING** “booking” (really an enquiry) and sends you an email: *“You have a new booking enquiry from [Name] for [Dates]…”* with a link to the admin portal.

### 2. **You work it in the portal (CRM-style)**

- You log in at **/admin** and land on a **dashboard** that gives you the big picture:
  - How many enquiries are **pending** (need a reply / pricing).
  - How many stays are **confirmed** (dates locked).
  - What’s **upcoming** (next few arrivals).
- You open each enquiry like a **lead**: see full details, your private notes, and every email you’ve sent from the portal. You:
  - **Email the client** (e.g. send pricing, bank details, T&Cs) – all from the portal, so it’s logged.
  - **Generate an invoice PDF** and send it yourself (email or WhatsApp).
  - When they pay, you **change status to Confirmed** – that locks those dates so the website no longer shows them as available.
  - Use **internal notes** for things like “50% received”, “balance on arrival”, “dietary: 1 vegetarian”.

### 3. **One place for the “conversation”**

- Every outbound email you send from the portal is stored (**Email log** per booking). So for each guest you have a simple **thread**: what you sent, when. No separate inbox to search – it’s tied to that enquiry/booking.

### 4. **Mock data**

- When there are no real enquiries yet (or the DB isn’t connected), the portal shows **demo rows** (e.g. Sarah van der Berg, James & Emma Thompson, Pieter Kruger) so you can click through and show the client how the list, detail, email, and invoice work. Real enquiries are shown the same way; mock rows disappear once you have real data (or you can turn mock data off later).

---

## Features and benefits (CRM angle)

| Feature | What it does | Benefit |
|--------|----------------|--------|
| **Dashboard** | Summary cards: pending count, confirmed count, upcoming stays, recent activity. | See workload at a glance; prioritise who to contact first. |
| **Enquiries list** | All PENDING / CONFIRMED / CANCELLED in one table; filter by status. | One list of “leads” and “closed” bookings; no spreadsheets. |
| **Booking detail (per lead/guest)** | Full enquiry: dates, unit, guests, special requests, your notes, email log. | Single place for that guest’s “file” – like a tiny CRM record. |
| **Status** | Pending → Confirmed or Cancelled. | Confirmed = dates blocked on the site; you control availability. |
| **Internal notes** | Private notes per booking (e.g. “Deposit received”, “Balance due”). | Track what you’ve agreed without the guest seeing. |
| **Email from portal** | Compose and send email to the guest; stored in Email log. | All contact in one place; you can see what you sent and when. |
| **Invoice PDF** | Generate a booking confirmation / invoice PDF with guest and dates. | Send by email or WhatsApp; no separate tool. |
| **Login** | One password (e.g. `ADMIN_PASSWORD`); session cookie. | Only you (or whoever has the password) can see the backend. |

---

## Current structure (routes)

- **/admin** – Dashboard (summary + quick links).
- **/admin/login** – Sign in; then redirect to dashboard.
- **/admin/bookings** – List of all enquiries/bookings (the main “CRM” list); filter by status.
- **/admin/bookings/[id]** – One enquiry/booking: view, notes, status, email client, invoice (the “CRM record”).

APIs used:

- `GET/PATCH /api/admin/bookings` – List (with optional status filter) and (in future) bulk actions if needed.
- `GET/PATCH /api/admin/bookings/[id]` – Load and update one booking (status, internal notes).
- `POST /api/admin/send-email` – Send email to guest and log it.
- `GET /api/admin/bookings/[id]/invoice` – Download PDF.

---

## Idea and vision (summary)

- **Backend** = your private dashboard + CRM for lodge enquiries and bookings.
- **Dashboard** = at-a-glance numbers and “what needs attention” (pending enquiries, upcoming arrivals).
- **Bookings list** = your pipeline: pending (to contact) vs confirmed (locked in) vs cancelled.
- **Booking detail** = one screen per guest: details, notes, email thread, actions (email, invoice, set status).
- **Mock data** = so you can demo the flow to the client before real enquiries exist; behaves like real data except no real email is sent for demo rows.

If you want it to feel even more like a CRM, next steps could be: a proper dashboard with counts and “Recent enquiries”, maybe a simple “activity” or “next steps” list (e.g. “Reply to Sarah”), and later things like tags or custom fields. The core idea is already there: one place to see, contact, and close each enquiry.

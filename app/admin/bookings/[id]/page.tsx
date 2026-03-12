'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Mail, FileDown } from 'lucide-react'

type Booking = {
  id: string
  guestName: string
  guestEmail: string
  guestPhone: string | null
  checkIn: string
  checkOut: string
  totalGuests: number
  totalPrice: number
  status: string
  specialRequests: string | null
  internalNotes: string | null
  createdAt: string
  unitName: string
  emailLogs: Array<{ id: string; subject: string; body: string; sentAt: string; direction: string }>
}

export default function AdminBookingDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params?.id as string
  const [booking, setBooking] = useState<Booking | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isDemo, setIsDemo] = useState(false)
  const [status, setStatus] = useState('')
  const [internalNotes, setInternalNotes] = useState('')
  const [savingNotes, setSavingNotes] = useState(false)
  const [savingStatus, setSavingStatus] = useState(false)
  const [emailSubject, setEmailSubject] = useState('')
  const [emailBody, setEmailBody] = useState('')
  const [sendingEmail, setSendingEmail] = useState(false)
  const [emailError, setEmailError] = useState<string | null>(null)

  const loadBooking = useCallback(() => {
    if (!id) return
    setLoading(true)
    fetch(`/api/admin/bookings/${id}`, { credentials: 'include' })
      .then((r) => r.json())
      .then((data) => {
        if (data.ok && data.booking) {
          setBooking(data.booking)
          setStatus(data.booking.status)
          setInternalNotes(data.booking.internalNotes || '')
          setIsDemo(!!data.demo)
        } else setError(data.error || 'Failed to load')
      })
      .catch(() => setError('Failed to load'))
      .finally(() => setLoading(false))
  }, [id])

  useEffect(() => {
    loadBooking()
  }, [loadBooking])

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus)
    setSavingStatus(true)
    fetch(`/api/admin/bookings/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ status: newStatus }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.ok && booking) setBooking({ ...booking, status: newStatus })
      })
      .finally(() => setSavingStatus(false))
  }

  const handleSaveNotes = () => {
    setSavingNotes(true)
    fetch(`/api/admin/bookings/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ internalNotes: internalNotes.trim() || null }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.ok && booking) setBooking({ ...booking, internalNotes: internalNotes.trim() || null })
      })
      .finally(() => setSavingNotes(false))
  }

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setEmailError(null)
    setSendingEmail(true)
    fetch('/api/admin/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ bookingId: id, subject: emailSubject, body: emailBody }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.ok) {
          setEmailSubject('')
          setEmailBody('')
          loadBooking()
        } else setEmailError(data.error || 'Failed to send')
      })
      .catch(() => setEmailError('Failed to send'))
      .finally(() => setSendingEmail(false))
  }

  const invoiceUrl = `/api/admin/bookings/${id}/invoice`

  if (loading && !booking) {
    return (
      <main className="flex flex-1 items-center justify-center">
        <p className="text-gray-400">Loading…</p>
      </main>
    )
  }

  if (error || !booking) {
    return (
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <p className="mb-4 text-red-400">{error || 'Booking not found'}</p>
        <Link href="/admin/bookings" className="text-sm text-gold-400 hover:text-white">← Back to bookings</Link>
      </main>
    )
  }

  const checkIn = new Date(booking.checkIn).toLocaleDateString('en-ZA', { dateStyle: 'long' })
  const checkOut = new Date(booking.checkOut).toLocaleDateString('en-ZA', { dateStyle: 'long' })

  return (
    <main id="main-content" className="flex-1">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-6">
          <Link href="/admin/bookings" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back to bookings
          </Link>
        </div>

        {isDemo && (
          <div className="mb-6 rounded-xl bg-gold-500/10 border border-gold-500/30 px-4 py-3 text-gold-300 text-sm">
            Demo booking. You can try changing status, saving notes, sending an email (no email is sent), and downloading the invoice.
          </div>
        )}

        <div className="space-y-8">
          <section className="rounded-2xl border border-white/10 bg-onyx-light/50 p-6">
            <h1 className="font-serif text-2xl text-white mb-1">{booking.guestName}</h1>
            <p className="text-gray-400 text-sm mb-6">{booking.guestEmail}{booking.guestPhone ? ` · ${booking.guestPhone}` : ''}</p>
            <dl className="grid gap-3 text-sm">
              <div className="flex justify-between"><dt className="text-gray-400">Accommodation</dt><dd className="text-white">{booking.unitName}</dd></div>
              <div className="flex justify-between"><dt className="text-gray-400">Check-in</dt><dd className="text-white">{checkIn}</dd></div>
              <div className="flex justify-between"><dt className="text-gray-400">Check-out</dt><dd className="text-white">{checkOut}</dd></div>
              <div className="flex justify-between"><dt className="text-gray-400">Guests</dt><dd className="text-white">{booking.totalGuests}</dd></div>
              <div className="flex justify-between"><dt className="text-gray-400">Total</dt><dd className="text-gold-400">{booking.totalPrice > 0 ? `ZAR ${booking.totalPrice.toLocaleString()}` : 'Price on request'}</dd></div>
              <div className="flex justify-between items-center">
                <dt className="text-gray-400">Status</dt>
                <dd>
                  <select
                    value={status}
                    onChange={(e) => handleStatusChange(e.target.value)}
                    disabled={savingStatus}
                    className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-white text-sm"
                  >
                    <option value="PENDING">Pending (enquiry)</option>
                    <option value="QUOTED">Quoted</option>
                    <option value="CONFIRMED">Confirmed</option>
                    <option value="CANCELLED">Cancelled</option>
                  </select>
                  <span className="ml-2 text-xs text-gray-500">Confirm when paid to lock dates.</span>
                </dd>
              </div>
            </dl>
            {booking.specialRequests && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Special requests</p>
                <p className="text-gray-300 text-sm whitespace-pre-wrap">{booking.specialRequests}</p>
              </div>
            )}
          </section>

          <section className="rounded-2xl border border-white/10 bg-onyx-light/50 p-6">
            <h2 className="font-serif text-lg text-white mb-2">Internal notes</h2>
            <p className="text-gray-500 text-sm mb-3">Pricing agreed, payment received, etc. Not visible to the guest.</p>
            <textarea
              value={internalNotes}
              onChange={(e) => setInternalNotes(e.target.value)}
              rows={4}
              className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50 resize-none"
              placeholder="e.g. Paid 50% deposit. Balance due on arrival."
            />
            <button
              type="button"
              onClick={handleSaveNotes}
              disabled={savingNotes}
              className="mt-3 py-2 px-4 bg-gold-500/20 text-gold-400 rounded-lg text-sm font-medium hover:bg-gold-500/30 disabled:opacity-50"
            >
              {savingNotes ? 'Saving…' : 'Save notes'}
            </button>
          </section>

          <section className="rounded-2xl border border-white/10 bg-onyx-light/50 p-6">
            <h2 className="font-serif text-lg text-white mb-2 flex items-center gap-2"><Mail className="w-5 h-5 text-gold-500" /> Email client</h2>
            <p className="text-gray-500 text-sm mb-4">Send an email to {booking.guestEmail}. It will be logged below.</p>
            <form onSubmit={handleSendEmail} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Subject</label>
                <input
                  type="text"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-gray-500"
                  placeholder="e.g. MIWESU booking – pricing and next steps"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Message</label>
                <textarea
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                  rows={5}
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-gray-500 resize-none"
                  placeholder="Type your message…"
                  required
                />
              </div>
              {emailError && <p className="text-red-400 text-sm">{emailError}</p>}
              <button
                type="submit"
                disabled={sendingEmail}
                className="py-2 px-6 bg-gold-500 text-onyx font-semibold rounded-xl text-sm hover:bg-gold-400 disabled:opacity-50"
              >
                {sendingEmail ? 'Sending…' : 'Send email'}
              </button>
            </form>

            {booking.emailLogs.length > 0 && (
              <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="text-sm font-medium text-gray-400 mb-3">Sent emails</h3>
                <ul className="space-y-4">
                  {booking.emailLogs.map((log) => (
                    <li key={log.id} className="rounded-lg bg-black/20 p-4">
                      <p className="text-white font-medium text-sm">{log.subject}</p>
                      <p className="text-gray-500 text-xs mt-1">{new Date(log.sentAt).toLocaleString()}</p>
                      <p className="text-gray-400 text-sm mt-2 whitespace-pre-wrap line-clamp-3">{log.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          <section className="rounded-2xl border border-white/10 bg-onyx-light/50 p-6">
            <h2 className="font-serif text-lg text-white mb-2 flex items-center gap-2"><FileDown className="w-5 h-5 text-gold-500" /> Invoice</h2>
            <p className="text-gray-500 text-sm mb-4">Generate a PDF with booking details. Send to the client once pricing is agreed.</p>
            <a
              href={invoiceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2 px-6 bg-gold-500/20 text-gold-400 rounded-xl text-sm font-medium hover:bg-gold-500/30"
            >
              <FileDown className="w-4 h-4" /> Download invoice (PDF)
            </a>
          </section>
        </div>
      </div>
    </main>
  )
}

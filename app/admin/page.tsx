'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, CheckCircle, Clock, XCircle, FileText } from 'lucide-react'

type BookingRow = {
  id: string
  guestName: string
  guestEmail: string
  checkIn: string
  checkOut: string
  unitName: string
  totalGuests: number
  totalPrice: number
  status: string
}

export default function AdminDashboardPage() {
  const [bookings, setBookings] = useState<BookingRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [demo, setDemo] = useState(false)

  const loadBookings = useCallback(() => {
    setLoading(true)
    fetch('/api/admin/bookings', { credentials: 'include' })
      .then((r) => r.json())
      .then((data) => {
        if (data.ok && Array.isArray(data.bookings)) {
          setBookings(data.bookings)
          setDemo(!!data.demo)
        } else setError(data.error || 'Failed to load')
      })
      .catch(() => setError('Failed to load'))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    loadBookings()
  }, [loadBookings])

  const pending = bookings.filter((b) => b.status === 'PENDING')
  const confirmed = bookings.filter((b) => b.status === 'CONFIRMED')
  const cancelled = bookings.filter((b) => b.status === 'CANCELLED')
  const today = new Date().toISOString().slice(0, 10)
  const upcoming = confirmed
    .filter((b) => b.checkIn >= today)
    .sort((a, b) => a.checkIn.localeCompare(b.checkIn))
    .slice(0, 5)

  return (
    <main id="main-content" className="flex-1">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-8">
          <h1 className="font-serif text-2xl sm:text-3xl text-white tracking-tight">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-400">Enquiries and bookings at a glance.</p>
        </div>

        {demo && (
          <div className="mb-6 rounded-xl bg-gold-500/10 border border-gold-500/30 px-4 py-3 text-gold-300 text-sm">
            Demo data. Real enquiries from the website will appear here once guests submit.
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-3 text-red-300 text-sm">
            {error}
          </div>
        )}

        {loading ? (
          <p className="text-gray-500">Loading…</p>
        ) : (
          <div className="space-y-10">
            {/* Summary cards */}
            <section aria-label="Pipeline summary">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/admin/bookings?status=PENDING"
                className="rounded-2xl border border-white/10 bg-onyx-light/50 p-6 hover:border-gold-500/30 hover:bg-onyx-light/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-amber-500/20 p-3">
                    <Clock className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-3xl font-serif text-white">{pending.length}</p>
                    <p className="text-gray-400 text-sm">Pending</p>
                    <p className="text-gray-500 text-xs mt-0.5">Need reply / pricing</p>
                  </div>
                </div>
              </Link>
              <Link
                href="/admin/bookings?status=QUOTED"
                className="rounded-2xl border border-white/10 bg-onyx-light/50 p-6 hover:border-gold-500/30 hover:bg-onyx-light/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-amber-500/20 p-3">
                    <FileText className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-3xl font-serif text-white">{bookings.filter((b) => b.status === 'QUOTED').length}</p>
                    <p className="text-gray-400 text-sm">Quoted</p>
                    <p className="text-gray-500 text-xs mt-0.5">Awaiting confirmation</p>
                  </div>
                </div>
              </Link>
              <Link
                href="/admin/bookings?status=CONFIRMED"
                className="rounded-2xl border border-white/10 bg-onyx-light/50 p-6 hover:border-gold-500/30 hover:bg-onyx-light/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-500/20 p-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-3xl font-serif text-white">{confirmed.length}</p>
                    <p className="text-gray-400 text-sm">Confirmed</p>
                    <p className="text-gray-500 text-xs mt-0.5">Dates locked</p>
                  </div>
                </div>
              </Link>
              <Link
                href="/admin/bookings?status=CANCELLED"
                className="rounded-2xl border border-white/10 bg-onyx-light/50 p-6 hover:border-gold-500/30 hover:bg-onyx-light/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gray-500/20 p-3">
                    <XCircle className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-3xl font-serif text-white">{cancelled.length}</p>
                    <p className="text-gray-400 text-sm">Cancelled</p>
                    <p className="text-gray-500 text-xs mt-0.5">No longer active</p>
                  </div>
                </div>
              </Link>
              </div>
            </section>

            {/* Upcoming stays */}
            {upcoming.length > 0 && (
              <section className="rounded-2xl border border-white/10 bg-onyx-light/50 p-5 sm:p-6" aria-label="Upcoming stays">
                <h2 className="font-serif text-lg text-white mb-1 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gold-500" />
                  Upcoming stays
                </h2>
                <p className="text-gray-500 text-sm mb-4">Next confirmed arrivals.</p>
                <ul className="space-y-3">
                  {upcoming.map((b) => (
                    <li key={b.id}>
                      <Link
                        href={`/admin/bookings/${b.id}`}
                        className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-white/5 bg-black/20 px-4 py-3 hover:border-gold-500/20 hover:bg-gold-500/5 transition-colors"
                      >
                        <span className="font-medium text-white">{b.guestName}</span>
                        <span className="text-gray-400 text-sm">
                          {new Date(b.checkIn).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                          {' → '}
                          {new Date(b.checkOut).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                        </span>
                        <span className="text-gold-400/80 text-sm">{b.unitName}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Quick actions */}
            <section className="space-y-4" aria-label="Quick actions">
            <Link
              href="/admin/rates"
              className="block rounded-2xl border border-white/10 bg-onyx-light/50 p-5 sm:p-6 hover:border-gold-500/30 hover:bg-onyx-light/80 transition-colors"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gold-500/20 p-3">
                    <FileText className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h2 className="font-serif text-lg text-white">Rates Manager</h2>
                    <p className="text-gray-400 text-sm">Update accommodation, species, and activity prices. Export the master pricelist as a branded PDF.</p>
                  </div>
                </div>
                <span className="text-gold-400">Open →</span>
              </div>
            </Link>

            <div className="rounded-2xl border border-gold-500/20 bg-gold-500/5 p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-gold-400 shrink-0" />
                  <div>
                    <h2 className="font-serif text-lg text-white">All enquiries & bookings</h2>
                    <p className="text-gray-400 text-sm">View the full list, filter by status, open each record to email the client, add notes, or generate an invoice.</p>
                  </div>
                </div>
                <Link
                  href="/admin/bookings"
                  className="inline-flex items-center gap-2 py-3 px-5 bg-gold-500 text-onyx font-semibold rounded-xl text-sm hover:bg-gold-400 transition-colors"
                >
                  Open list <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            </section>
          </div>
        )}
      </div>
    </main>
  )
}

'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, LogOut, Eye } from 'lucide-react'

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

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<BookingRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [statusFilter, setStatusFilter] = useState<string>('')
  const [demo, setDemo] = useState(false)
  const router = useRouter()

  const loadBookings = useCallback(() => {
    setLoading(true)
    const params = statusFilter ? `?status=${encodeURIComponent(statusFilter)}` : ''
    fetch(`/api/admin/bookings${params}`, { credentials: 'include' })
      .then((r) => r.json())
      .then((data) => {
        if (data.ok && Array.isArray(data.bookings)) {
          setBookings(data.bookings)
          setDemo(!!data.demo)
        } else setError(data.error || 'Failed to load')
      })
      .catch(() => setError('Failed to load bookings'))
      .finally(() => setLoading(false))
  }, [statusFilter])

  useEffect(() => {
    loadBookings()
  }, [loadBookings])

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST', credentials: 'include' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <main id="main-content" className="min-h-screen bg-onyx text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-flex items-center text-gold-400 hover:text-white text-sm uppercase tracking-widest font-bold">
              <ArrowLeft className="w-4 h-4 mr-2" /> Home
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium"
            >
              <LogOut className="w-4 h-4" /> Log out
            </button>
          </div>
        </div>
        <h1 className="font-serif text-4xl text-white mb-2">Bookings</h1>
        <p className="text-gray-400 mb-6">Enquiries and confirmed stays. Click a row to view details, email the client, or generate an invoice.</p>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <label className="text-sm text-gray-400">Filter by status</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-white text-sm"
          >
            <option value="">All</option>
            <option value="PENDING">Pending (enquiry)</option>
            <option value="CONFIRMED">Confirmed</option>
            <option value="CANCELLED">Cancelled</option>
          </select>
        </div>

        {error && <p className="text-red-400 mb-4">{error}</p>}

        {loading ? (
          <p className="text-gray-500">Loading…</p>
        ) : bookings.length === 0 ? (
          <div className="bg-onyx-light border border-white/10 rounded-lg p-12 text-center">
            <p className="text-gray-400">No bookings yet.</p>
            <p className="text-gray-500 text-sm mt-2">Enquiries from the website will appear here. Confirm a booking when the client has paid to lock in dates.</p>
          </div>
        ) : (
          <>
          {demo && (
            <div className="mb-6 flex items-center gap-3 rounded-xl bg-gold-500/10 border border-gold-500/30 px-4 py-3 text-gold-300 text-sm">
              Demo data shown so you can see how the portal works. Real enquiries will appear here when guests submit from the website.
            </div>
          )}
            <div className="overflow-x-auto border border-white/10 rounded-lg mb-12">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-onyx-light">
                    <th className="px-4 py-3 text-xs uppercase tracking-wider text-gray-400 font-medium">Guest</th>
                    <th className="px-4 py-3 text-xs uppercase tracking-wider text-gray-400 font-medium">Dates</th>
                    <th className="px-4 py-3 text-xs uppercase tracking-wider text-gray-400 font-medium">Unit</th>
                    <th className="px-4 py-3 text-xs uppercase tracking-wider text-gray-400 font-medium">Guests</th>
                    <th className="px-4 py-3 text-xs uppercase tracking-wider text-gray-400 font-medium">Total</th>
                    <th className="px-4 py-3 text-xs uppercase tracking-wider text-gray-400 font-medium">Status</th>
                    <th className="px-4 py-3 text-xs uppercase tracking-wider text-gray-400 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b) => (
                    <tr key={b.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="px-4 py-3">
                        <span className="text-white font-medium">{b.guestName}</span>
                        <span className="block text-gray-500 text-sm">{b.guestEmail}</span>
                      </td>
                      <td className="px-4 py-3 text-gray-300 text-sm">
                        {new Date(b.checkIn).toLocaleDateString()} – {new Date(b.checkOut).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 text-gray-300">{b.unitName}</td>
                      <td className="px-4 py-3 text-gray-300">{b.totalGuests}</td>
                      <td className="px-4 py-3 text-gold-400">{b.totalPrice > 0 ? `ZAR ${b.totalPrice.toLocaleString()}` : '–'}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-1 rounded ${b.status === 'CONFIRMED' ? 'bg-green-500/20 text-green-400' : b.status === 'PENDING' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-gray-500/20 text-gray-400'}`}>
                          {b.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <Link
                          href={`/admin/bookings/${b.id}`}
                          className="inline-flex items-center gap-1 text-gold-400 hover:text-white text-sm font-medium"
                        >
                          <Eye className="w-4 h-4" /> View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

              <h2 className="font-serif text-xl text-white mb-4">Calendar view</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-onyx-light border border-white/10 rounded-lg p-6">
                  <h3 className="text-gold-400 font-serif mb-4">The Homestead</h3>
                  <div className="space-y-2">
                    {bookings.filter((b) => b.unitName === 'The Homestead').map((b) => (
                      <div key={b.id} className="text-sm text-gray-300">
                        {new Date(b.checkIn).toLocaleDateString()} – {new Date(b.checkOut).toLocaleDateString()} · {b.guestName}
                      </div>
                    ))}
                    {bookings.filter((b) => b.unitName === 'The Homestead').length === 0 && (
                      <p className="text-gray-500 text-sm">No bookings</p>
                    )}
                  </div>
                </div>
                <div className="bg-onyx-light border border-white/10 rounded-lg p-6">
                  <h3 className="text-gold-400 font-serif mb-4">The Stone Villa</h3>
                  <div className="space-y-2">
                    {bookings.filter((b) => b.unitName === 'The Stone Villa').map((b) => (
                      <div key={b.id} className="text-sm text-gray-300">
                        {new Date(b.checkIn).toLocaleDateString()} – {new Date(b.checkOut).toLocaleDateString()} · {b.guestName}
                      </div>
                    ))}
                    {bookings.filter((b) => b.unitName === 'The Stone Villa').length === 0 && (
                      <p className="text-gray-500 text-sm">No bookings</p>
                    )}
                  </div>
                </div>
              </div>
          </>
        )}
        </div>
      </main>
  )
}

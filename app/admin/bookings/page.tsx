'use client'

import { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

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
  const [authOk, setAuthOk] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const secret = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '').get('secret')
    const envSecret = process.env.NEXT_PUBLIC_ADMIN_BOOKING_SECRET
    if (envSecret && secret !== envSecret) {
      setAuthOk(false)
      setLoading(false)
      return
    }
    setAuthOk(true)
    if (!envSecret) setError('Set NEXT_PUBLIC_ADMIN_BOOKING_SECRET to protect this page.')

    const q = secret ? `?secret=${encodeURIComponent(secret)}` : ''
    fetch(`/api/admin/bookings${q}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.ok && Array.isArray(data.bookings)) setBookings(data.bookings)
        else setError(data.error || 'Failed to load')
      })
      .catch(() => setError('Failed to load bookings'))
      .finally(() => setLoading(false))
  }, [])

  if (!authOk) {
    return (
      <Layout>
        <main className="min-h-screen bg-onyx text-white flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-serif text-2xl text-white mb-4">Admin access required</h1>
            <p className="text-gray-400 text-sm">Append ?secret=YOUR_SECRET to the URL. Set NEXT_PUBLIC_ADMIN_BOOKING_SECRET in .env.</p>
            <Link href="/" className="inline-block mt-6 text-gold-400 hover:text-white text-sm">Back to home</Link>
          </div>
        </main>
      </Layout>
    )
  }

  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-onyx text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <Link href="/" className="inline-flex items-center text-gold-400 hover:text-white text-sm uppercase tracking-widest font-bold mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Home
          </Link>
          <h1 className="font-serif text-4xl text-white mb-2">Bookings</h1>
          <p className="text-gray-400 mb-8">Lodge owner view. All reservations.</p>

          {error && <p className="text-red-400 mb-4">{error}</p>}

          {loading ? (
            <p className="text-gray-500">Loading…</p>
          ) : bookings.length === 0 ? (
            <div className="bg-onyx-light border border-white/10 rounded-lg p-12 text-center">
              <p className="text-gray-400">No bookings yet.</p>
              <p className="text-gray-500 text-sm mt-2">When the database is connected and guests book, they will appear here.</p>
            </div>
          ) : (
            <>
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
    </Layout>
  )
}

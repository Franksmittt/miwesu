'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon } from 'lucide-react'

type Unit = { id: string; name: string; maxGuests: number }
type Booking = {
  id: string
  unitId: string
  unitName: string
  guestName: string
  checkIn: string
  checkOut: string
  totalGuests: number
  status: string
}

function getDaysInMonth(year: number, month: number): Date[] {
  const first = new Date(year, month, 1)
  const last = new Date(year, month + 1, 0)
  const days: Date[] = []
  for (let d = new Date(first); d <= last; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d))
  }
  return days
}

function getCalendarWeeks(year: number, month: number): (Date | null)[][] {
  const days = getDaysInMonth(year, month)
  const firstDay = new Date(year, month, 1).getDay()
  const startPadding = firstDay === 0 ? 6 : firstDay - 1
  const flat: (Date | null)[] = [...Array(startPadding).fill(null), ...days]
  const weeks: (Date | null)[][] = []
  for (let i = 0; i < flat.length; i += 7) {
    weeks.push(flat.slice(i, i + 7))
  }
  return weeks
}

function isDateInRange(d: Date | null, start: string, end: string): boolean {
  if (!d) return false
  const t = d.getTime()
  const s = new Date(start).setHours(0, 0, 0, 0)
  const e = new Date(end).setHours(0, 0, 0, 0)
  return t >= s && t < e
}

export default function AdminCalendarPage() {
  const [current, setCurrent] = useState(() => {
    const n = new Date()
    return { year: n.getFullYear(), month: n.getMonth() }
  })
  const [units, setUnits] = useState<Unit[]>([])
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [form, setForm] = useState({
    unitId: '',
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    checkIn: '',
    checkOut: '',
    totalGuests: 2,
    totalPrice: 0,
    specialRequests: '',
    status: 'CONFIRMED',
  })

  const load = useCallback(() => {
    setLoading(true)
    Promise.all([
      fetch('/api/admin/units', { credentials: 'include' }).then((r) => r.json()),
      fetch('/api/admin/bookings', { credentials: 'include' }).then((r) => r.json()),
    ])
      .then(([uRes, bRes]) => {
        if (uRes.ok && uRes.units) setUnits(uRes.units)
        if (bRes.ok && Array.isArray(bRes.bookings)) {
          setBookings(
            bRes.bookings.map((b: Record<string, unknown>) => ({
              id: b.id,
              unitId: b.unitId ?? '',
              unitName: b.unitName ?? '',
              guestName: b.guestName ?? '',
              checkIn: b.checkIn as string,
              checkOut: b.checkOut as string,
              totalGuests: Number(b.totalGuests) || 0,
              status: b.status as string,
            }))
          )
        }
        if (uRes.ok && uRes.units?.length && !form.unitId) {
          setForm((f) => ({ ...f, unitId: uRes.units[0].id }))
        }
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const weeks = getCalendarWeeks(current.year, current.month)
  const monthLabel = new Date(current.year, current.month).toLocaleDateString('en-ZA', {
    month: 'long',
    year: 'numeric',
  })

  const prevMonth = () => {
    setCurrent((c) =>
      c.month === 0 ? { year: c.year - 1, month: 11 } : { year: c.year, month: c.month - 1 }
    )
  }
  const nextMonth = () => {
    setCurrent((c) =>
      c.month === 11 ? { year: c.year + 1, month: 0 } : { year: c.year, month: c.month + 1 }
    )
  }

  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)
    setSubmitting(true)
    fetch('/api/admin/bookings/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        unitId: form.unitId,
        guestName: form.guestName,
        guestEmail: form.guestEmail,
        guestPhone: form.guestPhone || undefined,
        checkIn: form.checkIn,
        checkOut: form.checkOut,
        totalGuests: form.totalGuests,
        totalPrice: form.totalPrice || 0,
        specialRequests: form.specialRequests || undefined,
        status: form.status,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.ok) {
          setModalOpen(false)
          setForm({
            unitId: units[0]?.id ?? '',
            guestName: '',
            guestEmail: '',
            guestPhone: '',
            checkIn: '',
            checkOut: '',
            totalGuests: 2,
            totalPrice: 0,
            specialRequests: '',
            status: 'CONFIRMED',
          })
          load()
        } else {
          setFormError(data.error || 'Failed to create booking')
        }
      })
      .catch(() => setFormError('Request failed'))
      .finally(() => setSubmitting(false))
  }

  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <main id="main-content" className="flex-1">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl text-white tracking-tight flex items-center gap-2">
              <CalendarIcon className="h-8 w-8 text-gold-500" /> Calendar
            </h1>
            <p className="mt-1 text-sm text-gray-400">
              When each unit is booked. Add a booking manually when someone books by phone.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setForm((f) => ({ ...f, unitId: f.unitId || units[0]?.id || '' }))
                setModalOpen(true)
                setFormError(null)
              }}
              className="inline-flex items-center gap-2 py-2 px-4 bg-gold-500 text-onyx font-semibold rounded-xl text-sm hover:bg-gold-400"
            >
              <Plus className="h-4 w-4" /> Add booking
            </button>
            <Link
              href="/admin/bookings"
              className="text-sm text-gray-400 hover:text-white"
            >
              View list →
            </Link>
          </div>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading…</p>
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between">
              <button
                type="button"
                onClick={prevMonth}
                className="p-2 rounded-lg text-gray-400 hover:bg-white/10 hover:text-white"
                aria-label="Previous month"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <h2 className="font-serif text-xl text-white">{monthLabel}</h2>
              <button
                type="button"
                onClick={nextMonth}
                className="p-2 rounded-lg text-gray-400 hover:bg-white/10 hover:text-white"
                aria-label="Next month"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6">
              {units.map((unit) => {
                const unitBookings = bookings.filter(
                  (b) => (b.unitId && b.unitId === unit.id) || b.unitName === unit.name
                )
                return (
                  <div
                    key={unit.id}
                    className="rounded-2xl border border-white/10 bg-onyx-light/50 overflow-hidden"
                  >
                    <div className="px-4 py-3 border-b border-white/10 flex justify-between items-center">
                      <span className="font-medium text-white">{unit.name}</span>
                      <span className="text-xs text-gray-500">Max {unit.maxGuests} guests</span>
                    </div>
                    <div className="p-4 overflow-x-auto">
                      <table className="w-full border-collapse min-w-[600px]">
                        <thead>
                          <tr>
                            {dayNames.map((d) => (
                              <th
                                key={d}
                                className="text-center text-xs font-medium text-gray-400 py-2 w-[calc(100%/7)]"
                              >
                                {d}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {weeks.map((week, wi) => (
                            <tr key={wi}>
                              {week.map((day, di) => {
                                const dateKey = day
                                  ? `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, '0')}-${String(day.getDate()).padStart(2, '0')}`
                                  : ''
                                const booking = day
                                  ? unitBookings.find((b) =>
                                      isDateInRange(day, b.checkIn, b.checkOut)
                                    )
                                  : null
                                const isToday =
                                  day &&
                                  new Date().toDateString() === day.toDateString()
                                return (
                                  <td
                                    key={di}
                                    className={`border border-white/5 align-top p-1 ${
                                      day ? 'min-h-[3rem]' : 'bg-white/[0.02]'
                                    } ${isToday ? 'ring-1 ring-gold-500/50' : ''}`}
                                  >
                                    {day && (
                                      <>
                                        <span className="text-xs text-gray-500 block">
                                          {day.getDate()}
                                        </span>
                                        {booking && (
                                          <Link
                                            href={`/admin/bookings/${booking.id}`}
                                            className="block mt-1 rounded px-2 py-1 bg-gold-500/20 text-gold-300 text-xs truncate hover:bg-gold-500/30"
                                            title={`${booking.guestName} (${booking.totalGuests})`}
                                          >
                                            {booking.guestName} ({booking.totalGuests})
                                          </Link>
                                        )}
                                      </>
                                    )}
                                  </td>
                                )
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )
              })}
            </div>

            {units.length === 0 && (
              <div className="rounded-2xl border border-white/10 bg-onyx-light/50 p-8 text-center text-gray-400">
                No units found. Run <code className="text-gray-300">db:seed</code> to add The
                Homestead and The Stone Villa.
              </div>
            )}
          </>
        )}

        {modalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => !submitting && setModalOpen(false)}
          >
            <div
              className="bg-onyx border border-white/10 rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <h2 className="font-serif text-xl text-white mb-4">Add booking manually</h2>
                <p className="text-gray-400 text-sm mb-6">
                  For when someone books by phone. Choose unit, dates, and guest details.
                </p>
                <form onSubmit={handleCreateBooking} className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Unit</label>
                    <select
                      value={form.unitId}
                      onChange={(e) => setForm((f) => ({ ...f, unitId: e.target.value }))}
                      className="admin-select w-full rounded-xl border border-white/20 bg-onyx-light px-4 py-2 text-white text-sm"
                      required
                    >
                      {units.map((u) => (
                        <option key={u.id} value={u.id}>
                          {u.name} (max {u.maxGuests})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Check-in</label>
                      <input
                        type="date"
                        value={form.checkIn}
                        onChange={(e) => setForm((f) => ({ ...f, checkIn: e.target.value }))}
                        className="w-full rounded-xl border border-white/20 bg-onyx-light px-4 py-2 text-white text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Check-out</label>
                      <input
                        type="date"
                        value={form.checkOut}
                        onChange={(e) => setForm((f) => ({ ...f, checkOut: e.target.value }))}
                        className="w-full rounded-xl border border-white/20 bg-onyx-light px-4 py-2 text-white text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Guest name</label>
                    <input
                      type="text"
                      value={form.guestName}
                      onChange={(e) => setForm((f) => ({ ...f, guestName: e.target.value }))}
                      className="w-full rounded-xl border border-white/20 bg-onyx-light px-4 py-2 text-white text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Guest email</label>
                    <input
                      type="email"
                      value={form.guestEmail}
                      onChange={(e) => setForm((f) => ({ ...f, guestEmail: e.target.value }))}
                      className="w-full rounded-xl border border-white/20 bg-onyx-light px-4 py-2 text-white text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Guest phone (optional)</label>
                    <input
                      type="tel"
                      value={form.guestPhone}
                      onChange={(e) => setForm((f) => ({ ...f, guestPhone: e.target.value }))}
                      className="w-full rounded-xl border border-white/20 bg-onyx-light px-4 py-2 text-white text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Guests</label>
                      <input
                        type="number"
                        min={1}
                        value={form.totalGuests}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, totalGuests: parseInt(e.target.value, 10) || 1 }))
                        }
                        className="w-full rounded-xl border border-white/20 bg-onyx-light px-4 py-2 text-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Total price (ZAR)</label>
                      <input
                        type="number"
                        min={0}
                        value={form.totalPrice || ''}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, totalPrice: parseFloat(e.target.value) || 0 }))
                        }
                        className="w-full rounded-xl border border-white/20 bg-onyx-light px-4 py-2 text-white text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Status</label>
                    <select
                      value={form.status}
                      onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))}
                      className="admin-select w-full rounded-xl border border-white/20 bg-onyx-light px-4 py-2 text-white text-sm"
                    >
                      <option value="CONFIRMED">Confirmed</option>
                      <option value="PENDING">Pending</option>
                      <option value="QUOTED">Quoted</option>
                      <option value="CANCELLED">Cancelled</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Notes (optional)</label>
                    <textarea
                      value={form.specialRequests}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, specialRequests: e.target.value }))
                      }
                      rows={2}
                      className="w-full rounded-xl border border-white/20 bg-onyx-light px-4 py-2 text-white text-sm resize-none"
                    />
                  </div>
                  {formError && (
                    <p className="text-red-400 text-sm">{formError}</p>
                  )}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="py-2 px-6 bg-gold-500 text-onyx font-semibold rounded-xl text-sm hover:bg-gold-400 disabled:opacity-50"
                    >
                      {submitting ? 'Creating…' : 'Create booking'}
                    </button>
                    <button
                      type="button"
                      onClick={() => !submitting && setModalOpen(false)}
                      className="py-2 px-6 bg-white/10 text-white rounded-xl text-sm hover:bg-white/20"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

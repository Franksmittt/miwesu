import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/admin-auth'
import { isMockBookingId, getMockBookingDetail } from '@/lib/admin-mock-bookings'

async function isAuthorized(request: NextRequest): Promise<boolean> {
  const session = await getAdminSession()
  if (session) return true
  const secret = request.nextUrl.searchParams.get('secret')
  const envSecret = process.env.ADMIN_PASSWORD || process.env.NEXT_PUBLIC_ADMIN_BOOKING_SECRET
  return !!(envSecret && secret === envSecret)
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthorized(request))) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  if (isMockBookingId(id)) {
    const mock = getMockBookingDetail(id)
    if (!mock) return NextResponse.json({ ok: false, error: 'Booking not found' }, { status: 404 })
    return NextResponse.json({ ok: true, booking: mock, demo: true })
  }

  try {
    const booking = await prisma.booking.findUnique({
      where: { id },
      include: { unit: true, emailLogs: { orderBy: { sentAt: 'desc' } } },
    })
    if (!booking) {
      return NextResponse.json({ ok: false, error: 'Booking not found' }, { status: 404 })
    }
    const b = booking as {
      id: string
      guestName: string
      guestEmail: string
      guestPhone: string | null
      checkIn: Date
      checkOut: Date
      totalGuests: number
      totalPrice: unknown
      status: string
      specialRequests: string | null
      internalNotes: string | null
      createdAt: Date
      unit: { name: string }
      emailLogs: Array<{ id: string; subject: string; body: string; sentAt: Date; direction: string }>
    }
    return NextResponse.json({
      ok: true,
      booking: {
        id: b.id,
        guestName: b.guestName,
        guestEmail: b.guestEmail,
        guestPhone: b.guestPhone,
        checkIn: b.checkIn.toISOString(),
        checkOut: b.checkOut.toISOString(),
        totalGuests: b.totalGuests,
        totalPrice: Number(b.totalPrice),
        status: b.status,
        specialRequests: b.specialRequests,
        internalNotes: b.internalNotes,
        createdAt: b.createdAt.toISOString(),
        unitName: b.unit.name,
        emailLogs: b.emailLogs.map((e) => ({
          id: e.id,
          subject: e.subject,
          body: e.body,
          sentAt: e.sentAt.toISOString(),
          direction: e.direction,
        })),
      },
    })
  } catch {
    return NextResponse.json({ ok: false, error: 'Failed to load booking' }, { status: 500 })
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthorized(request))) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  if (isMockBookingId(id)) {
    const body = await request.json()
    const { status, internalNotes } = body
    return NextResponse.json({
      ok: true,
      booking: {
        id,
        status: status === 'PENDING' || status === 'QUOTED' || status === 'CONFIRMED' || status === 'CANCELLED' ? status : undefined,
        internalNotes: typeof internalNotes === 'string' ? internalNotes : undefined,
      },
      demo: true,
    })
  }

  try {
    const body = await request.json()
    const { status, internalNotes } = body
    const data: { status?: string; internalNotes?: string } = {}
    if (status === 'PENDING' || status === 'QUOTED' || status === 'CONFIRMED' || status === 'CANCELLED') {
      data.status = status
    }
    if (typeof internalNotes === 'string') {
      data.internalNotes = internalNotes
    }
    const booking = await prisma.booking.update({
      where: { id },
      data,
    })
    return NextResponse.json({ ok: true, booking: { id: booking.id, status: booking.status, internalNotes: booking.internalNotes } })
  } catch {
    return NextResponse.json({ ok: false, error: 'Failed to update booking' }, { status: 500 })
  }
}

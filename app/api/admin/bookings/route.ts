import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/admin-auth'

async function isAuthorized(request: NextRequest): Promise<boolean> {
  const session = await getAdminSession()
  if (session) return true
  const secret = request.nextUrl.searchParams.get('secret')
  const envSecret = process.env.ADMIN_PASSWORD || process.env.NEXT_PUBLIC_ADMIN_BOOKING_SECRET
  return !!(envSecret && secret === envSecret)
}

export async function GET(request: NextRequest) {
  if (!(await isAuthorized(request))) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const statusFilter = request.nextUrl.searchParams.get('status') // PENDING | CONFIRMED | CANCELLED
    const bookings = await prisma.booking.findMany({
      orderBy: { checkIn: 'asc' },
      include: { unit: true },
      ...(statusFilter && ['PENDING', 'CONFIRMED', 'CANCELLED'].includes(statusFilter)
        ? { where: { status: statusFilter } }
        : {}),
    }) as Array<{
      id: string
      guestName: string
      guestEmail: string
      checkIn: Date
      checkOut: Date
      unit: { name: string }
      totalGuests: number
      totalPrice: unknown
      status: string
    }>
    const rows = bookings.map((b) => ({
      id: b.id,
      guestName: b.guestName,
      guestEmail: b.guestEmail,
      checkIn: b.checkIn.toISOString(),
      checkOut: b.checkOut.toISOString(),
      unitName: b.unit.name,
      totalGuests: b.totalGuests,
      totalPrice: Number(b.totalPrice),
      status: b.status,
    }))
    return NextResponse.json({ ok: true, bookings: rows })
  } catch {
    return NextResponse.json({ ok: false, bookings: [], error: 'Database not configured' }, { status: 200 })
  }
}

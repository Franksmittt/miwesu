import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  const envSecret = process.env.NEXT_PUBLIC_ADMIN_BOOKING_SECRET
  if (envSecret && secret !== envSecret) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { checkIn: 'asc' },
      include: { unit: true },
    })
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

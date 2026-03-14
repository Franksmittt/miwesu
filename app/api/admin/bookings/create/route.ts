import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/admin-auth'

/**
 * Admin-only: create a booking manually (e.g. someone phoned, owner adds from calendar).
 */
export async function POST(request: NextRequest) {
  if (!(await getAdminSession())) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const {
      unitId,
      guestName,
      guestEmail,
      guestPhone,
      checkIn,
      checkOut,
      totalGuests,
      totalPrice,
      specialRequests,
      status,
    } = body

    if (!unitId || !guestName || !guestEmail || !checkIn || !checkOut || totalGuests == null) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields: unitId, guestName, guestEmail, checkIn, checkOut, totalGuests' },
        { status: 400 }
      )
    }

    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)
    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
      return NextResponse.json({ ok: false, error: 'Invalid dates' }, { status: 400 })
    }
    if (checkOutDate <= checkInDate) {
      return NextResponse.json({ ok: false, error: 'Check-out must be after check-in' }, { status: 400 })
    }

    const unit = await prisma.unit.findUnique({ where: { id: unitId } })
    if (!unit) {
      return NextResponse.json({ ok: false, error: 'Unit not found' }, { status: 400 })
    }

    const guests = Math.max(1, parseInt(String(totalGuests), 10) || 1)
    const price = typeof totalPrice === 'number' && totalPrice >= 0 ? totalPrice : 0
    const statusVal = ['PENDING', 'QUOTED', 'CONFIRMED', 'CANCELLED'].includes(String(status))
      ? (status as 'PENDING' | 'QUOTED' | 'CONFIRMED' | 'CANCELLED')
      : 'CONFIRMED'

    const booking = await prisma.booking.create({
      data: {
        unitId,
        guestName: String(guestName),
        guestEmail: String(guestEmail),
        guestPhone: guestPhone ? String(guestPhone) : null,
        checkIn: checkInDate,
        checkOut: checkOutDate,
        totalGuests: guests,
        totalPrice: price,
        status: statusVal,
        specialRequests: specialRequests ? String(specialRequests) : null,
      },
      include: { unit: true },
    })

    return NextResponse.json({
      ok: true,
      booking: {
        id: booking.id,
        unitId: booking.unitId,
        unitName: booking.unit.name,
        guestName: booking.guestName,
        guestEmail: booking.guestEmail,
        checkIn: booking.checkIn.toISOString(),
        checkOut: booking.checkOut.toISOString(),
        totalGuests: booking.totalGuests,
        totalPrice: Number(booking.totalPrice),
        status: booking.status,
      },
    })
  } catch (e) {
    console.error('[admin bookings create]', e)
    return NextResponse.json({ ok: false, error: 'Failed to create booking' }, { status: 500 })
  }
}

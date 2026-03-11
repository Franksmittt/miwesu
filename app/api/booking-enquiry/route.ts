import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendOwnerEnquiryNotification } from '@/lib/booking-email'

/**
 * Submit a booking enquiry (no payment).
 * Creates a PENDING booking and emails the owner so they can check availability,
 * contact the client with pricing, and confirm once paid (status → CONFIRMED in admin).
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      unitId,
      unitIds,
      optionName,
      guestName,
      guestEmail,
      guestPhone,
      checkIn,
      checkOut,
      totalGuests,
      specialRequests,
    } = body

    if (!guestName || !guestEmail || !checkIn || !checkOut || !totalGuests) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields: guestName, guestEmail, checkIn, checkOut, totalGuests' },
        { status: 400 }
      )
    }

    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)
    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
      return NextResponse.json({ ok: false, error: "Invalid dates" }, { status: 400 })
    }
    if (checkOutDate <= checkInDate) {
      return NextResponse.json({ ok: false, error: 'Check-out must be after check-in' }, { status: 400 })
    }

    const unitIdToUse = Array.isArray(unitIds) && unitIds[0] ? unitIds[0] : unitId
    const displayName = optionName || 'Accommodation'
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || request.nextUrl.origin
    const adminPortalUrl = `${baseUrl}/admin`

    let bookingId: string | null = null

    try {
      const unit = await prisma.unit.findFirst({ where: { id: unitIdToUse } })
      if (!unit) {
        return NextResponse.json(
          {
            ok: false,
            error: 'Unit not found. Run prisma db push and db:seed to enable bookings.',
          },
          { status: 400 }
        )
      }

      const booking = await prisma.booking.create({
        data: {
          unitId: unitIdToUse,
          guestName: String(guestName),
          guestEmail: String(guestEmail),
          guestPhone: guestPhone ? String(guestPhone) : null,
          checkIn: checkInDate,
          checkOut: checkOutDate,
          totalGuests: parseInt(String(totalGuests), 10),
          totalPrice: 0,
          status: 'PENDING',
          specialRequests: specialRequests ? String(specialRequests) : null,
        },
      })
      bookingId = booking.id

      await sendOwnerEnquiryNotification({
        guestName: String(guestName),
        guestEmail: String(guestEmail),
        guestPhone: guestPhone ? String(guestPhone) : null,
        unitName: unit.name,
        checkIn: checkInDate,
        checkOut: checkOutDate,
        totalGuests: parseInt(String(totalGuests), 10),
        specialRequests: specialRequests ? String(specialRequests) : null,
        adminPortalUrl,
      })
    } catch (e) {
      const err = e as Error
      if (err.message?.includes('Prisma is disabled') || err.message?.includes('database')) {
        // No DB: still notify owner with enquiry details so they can follow up manually
        await sendOwnerEnquiryNotification({
          guestName: String(guestName),
          guestEmail: String(guestEmail),
          guestPhone: guestPhone ? String(guestPhone) : null,
          unitName: displayName,
          checkIn: checkInDate,
          checkOut: checkOutDate,
          totalGuests: parseInt(String(totalGuests), 10),
          specialRequests: specialRequests ? String(specialRequests) : null,
          adminPortalUrl,
        })
        return NextResponse.json({
          ok: true,
          message: 'Enquiry received. We will check availability and contact you with pricing and next steps.',
          demo: true,
        })
      }
      throw e
    }

    return NextResponse.json({
      ok: true,
      bookingId,
      message: 'Enquiry received. We will check availability and contact you with pricing and next steps.',
    })
  } catch (e) {
    console.error('[booking-enquiry]', e)
    return NextResponse.json(
      { ok: false, error: 'Could not submit enquiry. Please try again or contact us.' },
      { status: 500 }
    )
  }
}

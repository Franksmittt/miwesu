import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import Stripe from 'stripe'

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2025-02-24.acacia' }) : null

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
      totalPrice,
      specialRequests,
    } = body

    if (!guestName || !guestEmail || !checkIn || !checkOut || !totalGuests) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)
    const price = Number(totalPrice) || 0

    let bookingId: string | null = null

    try {
      const unitIdToUse = Array.isArray(unitIds) && unitIds[0] ? unitIds[0] : unitId
      const createPayload = {
        data: {
          unitId: unitIdToUse,
          guestName: String(guestName),
          guestEmail: String(guestEmail),
          guestPhone: guestPhone ? String(guestPhone) : null,
          checkIn: checkInDate,
          checkOut: checkOutDate,
          totalGuests: parseInt(String(totalGuests), 10),
          totalPrice: price,
          status: 'PENDING' as const,
          specialRequests: specialRequests ? String(specialRequests) : null,
        },
      }
      const unit = await prisma.unit.findFirst({ where: { id: unitIdToUse } })
      if (!unit) {
        return NextResponse.json({ error: 'Unit not found', demo: true, message: 'Database not seeded or unit ID is mock. Run db:push and db:seed.' }, { status: 200 })
      }
      const booking = await prisma.booking.create(createPayload)
      bookingId = booking.id
    } catch (e) {
      return NextResponse.json({
        demo: true,
        message: 'Database not configured. Set DATABASE_URL and run db:push and db:seed to enable real bookings.',
        bookingId: null,
      }, { status: 200 })
    }

    if (stripe && price > 0 && bookingId) {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'zar',
              product_data: {
                name: `MIWESU Lodge – ${optionName}`,
                description: `${checkInDate.toLocaleDateString()} – ${checkOutDate.toLocaleDateString()} · ${totalGuests} guests`,
              },
              unit_amount: Math.round(price * 100),
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.NEXT_PUBLIC_APP_URL || request.nextUrl.origin}/book?success=1`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || request.nextUrl.origin}/book?cancel=1`,
        metadata: { booking_id: bookingId },
        customer_email: guestEmail,
      })
      await prisma.booking.update({
        where: { id: bookingId },
        data: { stripeSessionId: session.id },
      })
      return NextResponse.json({ url: session.url })
    }

    return NextResponse.json({
      demo: true,
      message: 'Stripe not configured. Add STRIPE_SECRET_KEY to enable payment. Booking created with status PENDING.',
      bookingId,
    }, { status: 200 })
  } catch (e) {
    console.error('[checkout]', e)
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 })
  }
}

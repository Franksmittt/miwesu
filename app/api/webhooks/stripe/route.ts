import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { prisma } from '@/lib/prisma'

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2025-02-24.acacia' })
  : null
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(request: NextRequest) {
  if (!stripe || !webhookSecret) {
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 })
  }

  const body = await request.text()
  const sig = request.headers.get('stripe-signature')
  if (!sig) return NextResponse.json({ error: 'No signature' }, { status: 400 })

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown'
    return NextResponse.json({ error: `Webhook signature verification failed: ${message}` }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const bookingId = session.metadata?.booking_id
    if (!bookingId) return NextResponse.json({ error: 'No booking_id in metadata' }, { status: 400 })

    try {
      await prisma.booking.update({
        where: { id: bookingId },
        data: { status: 'CONFIRMED' },
      })

      const booking = await prisma.booking.findUnique({
        where: { id: bookingId },
        include: { unit: true },
      })
      if (booking && process.env.RESEND_API_KEY) {
        const { sendBookingConfirmationEmail } = await import('@/lib/booking-email')
        await sendBookingConfirmationEmail(booking)
      }
    } catch (e) {
      console.error('[webhook] update booking', e)
      return NextResponse.json({ error: 'Failed to update booking' }, { status: 500 })
    }
  }

  return NextResponse.json({ received: true })
}

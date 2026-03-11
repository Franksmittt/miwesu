import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/admin-auth'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const fromEmail = process.env.MIWESU_BOOKING_FROM_EMAIL || 'bookings@miwesu.co.za'

export async function POST(request: NextRequest) {
  if (!(await getAdminSession())) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { bookingId, subject, body: emailBody } = body
    if (!bookingId || !subject || typeof emailBody !== 'string') {
      return NextResponse.json(
        { ok: false, error: 'Missing bookingId, subject, or body' },
        { status: 400 }
      )
    }

    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      select: { guestEmail: true, guestName: true },
    })
    if (!booking) {
      return NextResponse.json({ ok: false, error: 'Booking not found' }, { status: 404 })
    }

    if (!resend) {
      return NextResponse.json(
        { ok: false, error: 'Email not configured. Set RESEND_API_KEY and MIWESU_BOOKING_FROM_EMAIL.' },
        { status: 503 }
      )
    }

    await resend.emails.send({
      from: fromEmail,
      to: booking.guestEmail,
      subject,
      text: emailBody,
    })

    await prisma.emailLog.create({
      data: {
        bookingId,
        subject,
        body: emailBody,
        direction: 'outbound',
      },
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('[admin send-email]', e)
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
  }
}

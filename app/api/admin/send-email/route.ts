import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/admin-auth'
import { isMockBookingId } from '@/lib/admin-mock-bookings'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  if (!(await getAdminSession())) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = (process.env.MIWESU_BOOKING_FROM_EMAIL || 'bookings@miwesu.co.za').trim()
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: 'Email not configured. Set RESEND_API_KEY and MIWESU_BOOKING_FROM_EMAIL.' },
      { status: 503 }
    )
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

    if (isMockBookingId(bookingId)) {
      return NextResponse.json({ ok: true, demo: true })
    }

    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      select: { guestEmail: true, guestName: true },
    })
    if (!booking) {
      return NextResponse.json({ ok: false, error: 'Booking not found' }, { status: 404 })
    }

    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: `MIWESU Lodge <${fromEmail}>`,
      to: booking.guestEmail,
      replyTo: fromEmail,
      subject,
      text: emailBody,
    })

    if (error) {
      console.error('[admin send-email] Resend API error:', error.message || error, 'code:', (error as { code?: string }).code, 'full:', JSON.stringify(error))
      return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
    }

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
    const err = e as Error
    console.error('[admin send-email] Exception:', err.message, err.stack, 'raw:', e)
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
  }
}

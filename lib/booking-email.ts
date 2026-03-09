import { Resend } from 'resend'
import type { Booking, Unit } from '@prisma/client'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const fromEmail = process.env.MIWESU_BOOKING_FROM_EMAIL || 'bookings@miwesu.co.za'
const adminEmail = process.env.MIWESU_ADMIN_EMAIL || 'info@miwesu.co.za'

type BookingWithUnit = Booking & { unit: Unit }

export async function sendBookingConfirmationEmail(booking: BookingWithUnit): Promise<void> {
  if (!resend) return

  const checkIn = new Date(booking.checkIn).toLocaleDateString('en-ZA', { dateStyle: 'long' })
  const checkOut = new Date(booking.checkOut).toLocaleDateString('en-ZA', { dateStyle: 'long' })
  const total = Number(booking.totalPrice)

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking confirmed – MIWESU Lodge</title>
</head>
<body style="margin:0; padding:0; font-family: system-ui, sans-serif; background: #fafafa; color: #111;">
  <div style="max-width: 560px; margin: 0 auto; padding: 32px 24px;">
    <p style="font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; color: #997B3D; font-weight: 600;">MIWESU Lodge</p>
    <h1 style="font-size: 28px; margin: 8px 0 24px; color: #050505;">Your stay is confirmed</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">Dear ${booking.guestName},</p>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">Thank you for booking with us. Here are your reservation details.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 15px;">
      <tr style="border-bottom: 1px solid #eee;"><td style="padding: 12px 0; color: #666;">Check-in</td><td style="padding: 12px 0; text-align: right;">${checkIn}</td></tr>
      <tr style="border-bottom: 1px solid #eee;"><td style="padding: 12px 0; color: #666;">Check-out</td><td style="padding: 12px 0; text-align: right;">${checkOut}</td></tr>
      <tr style="border-bottom: 1px solid #eee;"><td style="padding: 12px 0; color: #666;">Accommodation</td><td style="padding: 12px 0; text-align: right;">${booking.unit.name}</td></tr>
      <tr style="border-bottom: 1px solid #eee;"><td style="padding: 12px 0; color: #666;">Guests</td><td style="padding: 12px 0; text-align: right;">${booking.totalGuests}</td></tr>
      ${total > 0 ? `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 12px 0; color: #666;">Total paid</td><td style="padding: 12px 0; text-align: right;">ZAR ${total.toLocaleString()}</td></tr>` : ''}
    </table>
    <p style="font-size: 14px; color: #666;">Exclusive use. Amenities include boma and braai, swimming pool with slide, lapa with pool table, and more.</p>
    <p style="font-size: 14px; color: #666; margin-top: 24px;">We look forward to welcoming you. For questions, reply to this email.</p>
    <p style="font-size: 14px; color: #999; margin-top: 32px;">MIWESU Game Farm · Makoppa district · Thabazimbi · South Africa</p>
  </div>
</body>
</html>
  `.trim()

  await resend.emails.send({
    from: fromEmail,
    to: booking.guestEmail,
    subject: `Booking confirmed – ${booking.unit.name} – MIWESU Lodge`,
    html,
  })

  const adminCc = process.env.MIWESU_ADMIN_CC || 'admin@miwesu.co.za,bookings@miwesu.co.za'
  const adminTo = [adminEmail, ...adminCc.split(',').map((e) => e.trim()).filter(Boolean)]
  await resend.emails.send({
    from: fromEmail,
    to: [...new Set(adminTo)],
    subject: `New booking: ${booking.guestName} – ${booking.unit.name}`,
    html: `<p>New confirmed booking from ${booking.guestName} (${booking.guestEmail}) for ${booking.unit.name}, ${checkIn} – ${checkOut}, ${booking.totalGuests} guests.</p><p>Wayne & Melissa (MIWESU)</p>`,
  })
}

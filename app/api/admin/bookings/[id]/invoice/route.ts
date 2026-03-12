import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/admin-auth'
import { isMockBookingId, getMockBookingDetail } from '@/lib/admin-mock-bookings'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

async function isAuthorized(request: NextRequest): Promise<boolean> {
  const session = await getAdminSession()
  if (session) return true
  const secret = request.nextUrl.searchParams.get('secret')
  const envSecret = process.env.ADMIN_PASSWORD || process.env.NEXT_PUBLIC_ADMIN_BOOKING_SECRET
  return !!(envSecret && secret === envSecret)
}

function buildInvoicePdf(booking: {
  id: string
  guestName: string
  guestEmail: string
  guestPhone?: string | null
  checkIn: string | Date
  checkOut: string | Date
  totalGuests: number
  totalPrice: number
  unitName?: string
  specialRequests?: string | null
}) {
  const checkIn = new Date(booking.checkIn).toLocaleDateString('en-ZA', { dateStyle: 'long' })
  const checkOut = new Date(booking.checkOut).toLocaleDateString('en-ZA', { dateStyle: 'long' })
  const nights = Math.ceil((new Date(booking.checkOut).getTime() - new Date(booking.checkIn).getTime()) / (1000 * 60 * 60 * 24))
  const unitName = booking.unitName ?? 'Accommodation'
  return { checkIn, checkOut, nights, unitName }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthorized(request))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  let booking: {
    id: string
    guestName: string
    guestEmail: string
    guestPhone?: string | null
    checkIn: Date | string
    checkOut: Date | string
    totalGuests: number
    totalPrice: number
    unit?: { name: string }
    unitName?: string
    specialRequests?: string | null
  } | null = null

  if (isMockBookingId(id)) {
    const mock = getMockBookingDetail(id)
    if (!mock) return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
    booking = { ...mock, unit: { name: mock.unitName } }
  } else {
    try {
      const b = await prisma.booking.findUnique({
        where: { id },
        include: { unit: true },
      })
      booking = b as typeof booking
    } catch {
      return NextResponse.json({ error: 'Failed to load booking' }, { status: 500 })
    }
  }

  if (!booking) {
    return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
  }

  try {
    const { checkIn, checkOut, nights, unitName } = buildInvoicePdf({
      ...booking,
      unitName: booking.unit?.name ?? booking.unitName,
    })

    const doc = await PDFDocument.create()
    const font = await doc.embedFont(StandardFonts.Helvetica)
    const fontBold = await doc.embedFont(StandardFonts.HelveticaBold)
    const page = doc.addPage([595, 842])
    const { width, height } = page.getSize()
    let y = height - 60

    const draw = (text: string, x: number, size = 11, bold = false) => {
      const f = bold ? fontBold : font
      page.drawText(text, { x, y, size, font: f, color: rgb(0.1, 0.1, 0.1) })
      y -= size + 4
    }

    page.drawText('MIWESU Game Farm', { x: 50, y, size: 18, font: fontBold, color: rgb(0.2, 0.15, 0.05) })
    y -= 24
    page.drawText('Invoice / Booking confirmation', { x: 50, y, size: 14, font: font, color: rgb(0.3, 0.3, 0.3) })
    y -= 32

    draw(`Guest: ${booking.guestName}`, 50, 12, true)
    draw(`Email: ${booking.guestEmail}`, 50)
    if (booking.guestPhone) draw(`Phone: ${booking.guestPhone}`, 50)
    y -= 8
    draw(`Accommodation: ${unitName}`, 50, 12, true)
    draw(`Check-in: ${checkIn}`, 50)
    draw(`Check-out: ${checkOut}`, 50)
    draw(`Nights: ${nights}`, 50)
    draw(`Guests: ${booking.totalGuests}`, 50)
    y -= 8
    const total = Number(booking.totalPrice)
    if (total > 0) {
      draw(`Total: ZAR ${total.toLocaleString()}`, 50, 12, true)
    } else {
      draw('Total: Price as agreed (see correspondence)', 50, 12, true)
    }
    if (booking.specialRequests) {
      y -= 8
      draw('Special requests:', 50, 10, true)
      const lines = String(booking.specialRequests).split(/\n/).slice(0, 5)
      lines.forEach((line) => { draw(line.slice(0, 80), 55, 9) })
    }

    y -= 24
    draw('Thank you for booking with MIWESU. Payment terms as agreed.', 50, 9)
    draw('Makoppa district · Thabazimbi · South Africa', 50, 8)

    const pdfBytes = await doc.save()
    return new NextResponse(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="miwesu-booking-${booking.id.slice(0, 8)}.pdf"`,
      },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to generate invoice' }, { status: 500 })
  }
}

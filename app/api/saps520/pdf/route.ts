import { NextRequest, NextResponse } from 'next/server'
import { buildSaps520ApplicationPdf, type SAPS520PdfPayload } from '@/lib/saps520-pdf-build'

/** Legacy API payload (pre–react-hook-form refactor). */
type LegacyPayload = {
  applicant: {
    surname?: string
    initials?: string
    fullNames?: string
    fullName?: string
    passportNumber: string
    dateOfBirth?: string
    nationality?: string
    address?: string
    email?: string
    phone?: string
  }
  travel: SAPS520PdfPayload['travel']
  firearms: SAPS520PdfPayload['firearms']
}

function normalizeToPayload(body: unknown): SAPS520PdfPayload {
  const b = body as LegacyPayload | SAPS520PdfPayload
  const a = b.applicant as SAPS520PdfPayload['applicant'] & LegacyPayload['applicant']
  let fullName = 'fullName' in a && a.fullName ? a.fullName.trim() : ''
  if (!fullName && 'fullNames' in a) {
    const fn = (a as LegacyPayload['applicant']).fullNames?.trim()
    const sn = (a as LegacyPayload['applicant']).surname?.trim()
    fullName = [fn, sn].filter(Boolean).join(' ').trim()
  }
  if (!fullName) fullName = 'Applicant'

  return {
    applicant: {
      fullName,
      passportNumber: a.passportNumber,
      email: a.email,
      phone: a.phone,
      nationality: a.nationality,
      address: a.address,
      dateOfBirth: a.dateOfBirth,
    },
    travel: {
      portOfEntry: b.travel.portOfEntry,
      portOfExit: b.travel.portOfExit,
      arrivalDate: b.travel.arrivalDate,
      departureDate: b.travel.departureDate,
      airline: b.travel.airline,
      flightNumber: b.travel.flightNumber,
      reason: b.travel.reason,
    },
    firearms: b.firearms.map((f) => ({
      make: f.make,
      model: f.model,
      caliber: f.caliber,
      serialNumber: f.serialNumber,
      action: f.action,
    })),
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const payload = normalizeToPayload(body)
    const origin = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '') || ''
    const pdfBytes = await buildSaps520ApplicationPdf(payload, { origin })
    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="SAPS520-MIWESU-application-data.pdf"',
      },
    })
  } catch (e) {
    console.error('SAPS 520 PDF error:', e)
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 })
  }
}

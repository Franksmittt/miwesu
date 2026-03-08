import { NextRequest, NextResponse } from 'next/server'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

export type SAPS520Payload = {
  applicant: {
    surname: string
    initials: string
    fullNames: string
    passportNumber: string
    dateOfBirth: string
    nationality: string
    address: string
    email: string
    phone: string
  }
  travel: {
    portOfEntry: string
    portOfExit: string
    arrivalDate: string
    departureDate: string
    reason: string
  }
  firearms: Array<{
    make: string
    model: string
    caliber: string
    serialNumber: string
    action: string
  }>
}

const LEGAL_NOTICE =
  'Legal imperative: Do not sign this document until instructed to do so by a SAPS officer upon arrival in South Africa. Premature signatures will void the permit.'

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as SAPS520Payload
    const doc = await PDFDocument.create()
    const font = await doc.embedFont(StandardFonts.Helvetica)
    const fontBold = await doc.embedFont(StandardFonts.HelveticaBold)
    const page = doc.addPage([595, 842])
    const { width, height } = page.getSize()
    let y = height - 50

    const write = (label: string, value: string, indent = 0) => {
      page.drawText(label, { x: 50 + indent, y, size: 9, font: fontBold, color: rgb(0.2, 0.2, 0.2) })
      y -= 14
      page.drawText(value || '—', { x: 50 + indent, y, size: 10, font, color: rgb(0, 0, 0) })
      y -= 18
    }

    page.drawText('SAPS 520 — Application data (MIWESU)', {
      x: 50,
      y,
      size: 16,
      font: fontBold,
      color: rgb(0.2, 0.15, 0.05),
    })
    y -= 28

    page.drawText('Applicant details', { x: 50, y, size: 12, font: fontBold, color: rgb(0.3, 0.2, 0.05) })
    y -= 20
    write('Surname', body.applicant.surname)
    write('Initials', body.applicant.initials)
    write('Full names', body.applicant.fullNames)
    write('Passport number', body.applicant.passportNumber)
    write('Date of birth', body.applicant.dateOfBirth)
    write('Nationality', body.applicant.nationality)
    write('Address', body.applicant.address)
    write('Email', body.applicant.email)
    write('Phone', body.applicant.phone)

    y -= 10
    page.drawText('Travel details', { x: 50, y, size: 12, font: fontBold, color: rgb(0.3, 0.2, 0.05) })
    y -= 20
    write('Port of entry', body.travel.portOfEntry)
    write('Port of exit', body.travel.portOfExit)
    write('Arrival date', body.travel.arrivalDate)
    write('Departure date', body.travel.departureDate)
    write('Reason for permit', body.travel.reason)

    y -= 10
    page.drawText('Firearms (max 4)', { x: 50, y, size: 12, font: fontBold, color: rgb(0.3, 0.2, 0.05) })
    y -= 20
    body.firearms.forEach((f, i) => {
      write(`Firearm ${i + 1}`, '', 0)
      write('  Make', f.make, 20)
      write('  Model', f.model, 20)
      write('  Caliber', f.caliber, 20)
      write('  Serial number', f.serialNumber, 20)
      write('  Action', f.action || 'Bolt', 20)
      y -= 4
    })

    y -= 20
    const lastPage = y < 100 ? doc.addPage([595, 842]) : page
    const legalY = y < 100 ? lastPage.getHeight() - 80 : y - 20
    lastPage.drawText(LEGAL_NOTICE, {
      x: 50,
      y: legalY,
      size: 9,
      font: fontBold,
      color: rgb(0.6, 0.35, 0),
      maxWidth: width - 100,
      lineHeight: 11,
    })

    const pdfBytes = await doc.save()
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

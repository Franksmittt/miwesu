import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

export type SAPS520PdfPayload = {
  applicant: {
    fullName: string
    passportNumber: string
    email?: string
    phone?: string
    nationality?: string
    address?: string
    dateOfBirth?: string
  }
  travel: {
    portOfEntry: string
    portOfExit: string
    arrivalDate: string
    departureDate: string
    airline?: string
    flightNumber?: string
    reason?: string
  }
  firearms: Array<{
    make: string
    model?: string
    caliber: string
    serialNumber: string
    action?: string
  }>
}

export const SAPS520_LEGAL_NOTICE =
  'Legal Imperative: Do not sign this document until instructed to do so by a SAPS officer upon arrival in South Africa. Premature signatures will void the permit.'

function splitName(fullName: string): { surname: string; initials: string; fullNames: string } {
  const t = fullName.trim()
  if (!t) return { surname: '-', initials: '-', fullNames: '-' }
  const parts = t.split(/\s+/).filter(Boolean)
  if (parts.length === 1) return { surname: parts[0], initials: '-', fullNames: t }
  const surname = parts[parts.length - 1]
  const given = parts.slice(0, -1)
  const initials =
    given
      .map((p) => (p[0] ? p[0].toUpperCase() + '.' : ''))
      .filter(Boolean)
      .join(' ') || '-'
  return { surname, initials, fullNames: t }
}

/**
 * Programmatic SAPS 520 application-data PDF (summary sheet).
 * Drop `public/saps520/SAPS-520-blank.pdf` to prepend the official blank: first pages stay untouched, data is appended on a new page.
 */
export async function buildSaps520ApplicationPdf(
  payload: SAPS520PdfPayload, options?: { origin?: string }
): Promise<Uint8Array> {
  const origin = options?.origin?.replace(/\/$/, '') ?? ''

  if (typeof fetch !== 'undefined' && origin) {
    try {
      const res = await fetch(`${origin}/saps520/SAPS-520-blank.pdf`)
      if (res.ok) {
        const buf = await res.arrayBuffer()
        const doc = await PDFDocument.load(buf)
        const font = await doc.embedFont(StandardFonts.Helvetica)
        const fontBold = await doc.embedFont(StandardFonts.HelveticaBold)
        const page = doc.addPage([595, 842])
        const { width, height } = page.getSize()
        let y = height - 48
        const line = (text: string, bold = false, sz = 9) => {
          page.drawText(text.length > 140 ? `${text.slice(0, 137)}…` : text, {
            x: 48, y, size: sz, font: bold ? fontBold : font, color: rgb(0.08, 0.07, 0.06), maxWidth: width - 96, })
          y -= sz + 5
        }
        line('MIWESU: typed data for SAPS 520 (attach to official form)', true, 11)
        line('')
        const { surname, initials, fullNames } = splitName(payload.applicant.fullName)
        line(`Applicant: ${fullNames} | Passport: ${payload.applicant.passportNumber}`)
        line(`Surname: ${surname} | Initials: ${initials}`)
        if (payload.applicant.email) line(`Email: ${payload.applicant.email}`)
        if (payload.applicant.phone) line(`Phone: ${payload.applicant.phone}`)
        line(
          `Travel: ${payload.travel.portOfEntry} → ${payload.travel.portOfExit} | ${payload.travel.arrivalDate} – ${payload.travel.departureDate}`
        )
        if (payload.travel.airline) line(`Airline: ${payload.travel.airline}`)
        if (payload.travel.flightNumber) line(`Flight: ${payload.travel.flightNumber}`)
        line(`Reason: ${payload.travel.reason || 'Sport hunting / safari'}`)
        line('')
        payload.firearms.forEach((f, i) => {
          line(
            `Firearm ${i + 1}: ${f.make}${f.model ? ` ${f.model}` : ''} | ${f.caliber} | SN ${f.serialNumber} | ${f.action || 'Bolt'}`
          )
        })
        line('')
        line(SAPS520_LEGAL_NOTICE, true, 8)
        return doc.save()
      }
    } catch {
      /* fall through */
    }
  }

  const { surname, initials, fullNames } = splitName(payload.applicant.fullName)
  const doc = await PDFDocument.create()
  const font = await doc.embedFont(StandardFonts.Helvetica)
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold)
  const page = doc.addPage([595, 842])
  const { width, height } = page.getSize()
  let y = height - 50

  const write = (label: string, value: string, indent = 0) => {
    page.drawText(label, { x: 50 + indent, y, size: 9, font: fontBold, color: rgb(0.2, 0.2, 0.2) })
    y -= 14
    page.drawText(value || '-', { x: 50 + indent, y, size: 10, font, color: rgb(0, 0, 0) })
    y -= 18
  }

  page.drawText('SAPS 520 · Application data summary (MIWESU)', {
    x: 50, y, size: 15, font: fontBold, color: rgb(0.15, 0.12, 0.08), })
  y -= 26
  page.drawText('Use with the official SAPS 520. This PDF is a typed summary only.', {
    x: 50, y, size: 8, font, color: rgb(0.35, 0.35, 0.35), })
  y -= 22

  page.drawText('Applicant details', { x: 50, y, size: 12, font: fontBold, color: rgb(0.3, 0.2, 0.05) })
  y -= 20
  write('Surname', surname)
  write('Initials', initials)
  write('Full names', fullNames)
  write('Passport number', payload.applicant.passportNumber)
  if (payload.applicant.dateOfBirth) write('Date of birth', payload.applicant.dateOfBirth)
  if (payload.applicant.nationality) write('Nationality', payload.applicant.nationality)
  if (payload.applicant.address) write('Address', payload.applicant.address)
  if (payload.applicant.email) write('Email', payload.applicant.email)
  if (payload.applicant.phone) write('Phone', payload.applicant.phone)

  y -= 10
  page.drawText('Travel & flight', { x: 50, y, size: 12, font: fontBold, color: rgb(0.3, 0.2, 0.05) })
  y -= 20
  write('Port of entry', payload.travel.portOfEntry)
  write('Port of exit', payload.travel.portOfExit)
  write('Arrival date', payload.travel.arrivalDate)
  write('Departure date', payload.travel.departureDate)
  if (payload.travel.airline) write('Airline', payload.travel.airline)
  if (payload.travel.flightNumber) write('Flight number', payload.travel.flightNumber)
  write('Reason for permit', payload.travel.reason || 'Sport hunting / safari')

  y -= 10
  page.drawText('Firearms (max 4)', { x: 50, y, size: 12, font: fontBold, color: rgb(0.3, 0.2, 0.05) })
  y -= 20
  payload.firearms.forEach((f, i) => {
    write(`Firearm ${i + 1}`, '', 0)
    write('  Make', f.make, 20)
    if (f.model) write('  Model', f.model, 20)
    write('  Caliber', f.caliber, 20)
    write('  Serial number', f.serialNumber, 20)
    write('  Action', f.action || 'Bolt', 20)
    y -= 4
  })

  y -= 16
  const drawLegal = (target: typeof page, yPos: number) => {
    target.drawText(SAPS520_LEGAL_NOTICE, {
      x: 50, y: yPos, size: 9, font: fontBold, color: rgb(0.55, 0.42, 0.12), maxWidth: width - 100, lineHeight: 12, })
  }

  if (y < 100) {
    const p2 = doc.addPage([595, 842])
    drawLegal(p2, p2.getSize().height - 80)
  } else {
    drawLegal(page, y)
  }

  return doc.save()
}

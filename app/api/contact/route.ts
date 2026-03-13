import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const CONTACT_TO = process.env.MIWESU_CONTACT_TO || 'info@miwesu.co.za'
const CONTACT_CC = process.env.MIWESU_CONTACT_CC || 'admin@miwesu.co.za,bookings@miwesu.co.za'
const FROM_EMAIL = process.env.MIWESU_BOOKING_FROM_EMAIL || 'bookings@miwesu.co.za'

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function getToAddresses(): string[] {
  const to = CONTACT_TO.trim()
  const ccList = CONTACT_CC.split(',').map((e) => e.trim()).filter(Boolean)
  const all = [to, ...ccList].filter(Boolean)
  return [...new Set(all)]
}

export interface ContactPayload {
  name: string
  email: string
  phone: string
  intent: string
  message: string
}

function validate(body: unknown): body is ContactPayload {
  if (!body || typeof body !== 'object') return false
  const b = body as Record<string, unknown>
  return (
    typeof b.name === 'string' && b.name.trim().length > 0 &&
    typeof b.email === 'string' && b.email.trim().length > 0 &&
    typeof b.phone === 'string' && b.phone.trim().length > 0 &&
    typeof b.intent === 'string' && b.intent.trim().length > 0 &&
    typeof b.message === 'string' && b.message.trim().length > 0
  )
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    if (!validate(body)) {
      return NextResponse.json(
        { success: false, error: 'Missing or invalid fields' },
        { status: 400 }
      )
    }

    const { name, email, phone, intent, message } = body as ContactPayload

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      console.log('Contact form (no RESEND_API_KEY):', { name, email, intent })
      return NextResponse.json(
        { success: false, error: 'Email is not configured. Please try again later or email us directly.' },
        { status: 503 }
      )
    }

    // From must always be our verified domain; never the user's email. Reply-To is the submitter.
    const fromAddress = FROM_EMAIL.trim() || 'bookings@miwesu.co.za'
    const resend = new Resend(resendApiKey)
    const toAddresses = getToAddresses()

    const html = [
      '<h2>New enquiry from miwesu.co.za</h2>',
      '<p><strong>Name:</strong> ' + escapeHtml(name) + '</p>',
      '<p><strong>Email:</strong> ' + escapeHtml(email) + '</p>',
      '<p><strong>Phone:</strong> ' + escapeHtml(phone) + '</p>',
      '<p><strong>Primary intent:</strong> ' + escapeHtml(intent) + '</p>',
      '<p><strong>Message:</strong></p>',
      '<p style="white-space: pre-wrap;">' + escapeHtml(message) + '</p>',
      '<p style="margin-top: 24px; color: #666;">Reply to the sender using the email above. Wayne & Melissa (MIWESU)</p>',
    ].join('')

    const { error } = await resend.emails.send({
      from: `MIWESU Concierge <${fromAddress}>`,
      to: toAddresses,
      replyTo: email,
      subject: `Enquiry: ${intent} – ${name}`,
      html,
    })

    if (error) {
      const errMsg = typeof error === 'object' && error !== null && 'message' in error ? String((error as { message?: unknown }).message) : String(error)
      const errCode = typeof error === 'object' && error !== null && 'code' in error ? (error as { code?: string }).code : undefined
      console.error('[contact] Resend API error:', errMsg, 'code:', errCode, 'full:', JSON.stringify(error))
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to send message. Please try again or email us directly.',
          resendError: errMsg || undefined,
          resendCode: errCode || undefined,
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    const err = e as Error
    console.error('[contact] Exception:', err.message, err.stack, 'raw:', e)
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

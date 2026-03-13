import { NextResponse } from 'next/server'
import { getAdminSession } from '@/lib/admin-auth'
import { Resend } from 'resend'

export async function GET() {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  const hasResendKey = !!process.env.RESEND_API_KEY
  const fromEmail = process.env.MIWESU_BOOKING_FROM_EMAIL || ''
  const adminEmail = process.env.MIWESU_ADMIN_EMAIL || ''

  return NextResponse.json({
    ok: true,
    resend: {
      apiKeySet: hasResendKey,
      apiKeyPreview: hasResendKey ? `${process.env.RESEND_API_KEY!.slice(0, 10)}...` : null,
    },
    from: fromEmail || null,
    adminEmail: adminEmail || null,
    env: process.env.NODE_ENV,
  })
}

export async function POST(request: Request) {
  const session = await getAdminSession()
  if (!session) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json().catch(() => ({}))
  const to = typeof body.to === 'string' && body.to.trim() ? body.to.trim() : (process.env.MIWESU_ADMIN_EMAIL || '').trim()
  const useSandbox = body.sandbox === true

  if (!to) {
    return NextResponse.json({ ok: false, error: 'No recipient. Set MIWESU_ADMIN_EMAIL or pass { "to": "your@email.com" }' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: 'RESEND_API_KEY is not set' }, { status: 503 })
  }

  const fromEmail = useSandbox ? 'onboarding@resend.dev' : (process.env.MIWESU_BOOKING_FROM_EMAIL || 'bookings@miwesu.co.za')
  const resend = new Resend(apiKey)

  const { data, error } = await resend.emails.send({
    from: useSandbox ? 'Resend Sandbox <onboarding@resend.dev>' : `MIWESU Test <${fromEmail}>`,
    to: [to],
    subject: useSandbox ? 'MIWESU – Sandbox test (domain bypass)' : 'MIWESU – Test email from admin',
    html: useSandbox
      ? '<p><strong>Sandbox test.</strong> If you got this, your API key and code work. The issue is domain/DNS or the receiving mailbox.</p><p>Sent at ' + new Date().toISOString() + '</p>'
      : '<p>If you received this, Resend is working from your app. Sent at ' + new Date().toISOString() + '</p>',
  })

  if (error) {
    return NextResponse.json({
      ok: false,
      error: error.message || 'Resend error',
      code: (error as { code?: string }).code,
    }, { status: 500 })
  }

  return NextResponse.json({ ok: true, id: data?.id, to })
}

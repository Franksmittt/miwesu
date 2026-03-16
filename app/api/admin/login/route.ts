import { NextRequest, NextResponse } from 'next/server'
import { signAdminToken, setAdminSessionCookie, getSecret } from '@/lib/admin-auth'

/** Password used for login form. SESSION_SECRET is only for cookie signing, not the typed password. */
function getLoginPassword(): string {
  return (
    process.env.ADMIN_PASSWORD ||
    process.env.NEXT_PUBLIC_ADMIN_BOOKING_SECRET ||
    process.env.SESSION_SECRET ||
    ''
  )
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const password = typeof body.password === 'string' ? body.password : ''
    const loginPassword = getLoginPassword()
    const signingSecret = getSecret()

    if (!loginPassword) {
      return NextResponse.json(
        { ok: false, error: 'Admin login not configured. Set ADMIN_PASSWORD in .env.' },
        { status: 503 }
      )
    }

    if (!signingSecret) {
      return NextResponse.json(
        { ok: false, error: 'Session signing not configured. Set ADMIN_PASSWORD or SESSION_SECRET.' },
        { status: 503 }
      )
    }

    if (password !== loginPassword) {
      return NextResponse.json({ ok: false, error: 'Invalid password' }, { status: 401 })
    }

    const token = signAdminToken()
    const res = NextResponse.json({ ok: true })
    res.headers.set('Set-Cookie', setAdminSessionCookie(token))
    return res
  } catch {
    return NextResponse.json({ ok: false, error: 'Login failed' }, { status: 500 })
  }
}

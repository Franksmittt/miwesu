import { NextRequest, NextResponse } from 'next/server'
import { signAdminToken, setAdminSessionCookie, getSecret } from '@/lib/admin-auth'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const password = typeof body.password === 'string' ? body.password : ''
    const secret = getSecret()

    if (!secret) {
      return NextResponse.json(
        { ok: false, error: 'Admin login not configured. Set ADMIN_PASSWORD in .env.' },
        { status: 503 }
      )
    }

    if (password !== secret) {
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

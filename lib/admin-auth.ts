import { cookies } from 'next/headers'

const ADMIN_SESSION_COOKIE = 'admin_session'
const SESSION_PAYLOAD = 'miwesu-admin'
const MAX_AGE = 60 * 60 * 24 * 7 // 7 days

export function getSecret(): string {
  const s = process.env.ADMIN_PASSWORD || process.env.NEXT_PUBLIC_ADMIN_BOOKING_SECRET
  if (!s) return ''
  return s
}

/** Produce a signed token for the admin session cookie */
export function signAdminToken(): string {
  const secret = getSecret()
  if (!secret) return ''
  const crypto = require('crypto')
  return crypto.createHmac('sha256', secret).update(SESSION_PAYLOAD).digest('base64url')
}

/** Verify the token from the cookie */
export function verifyAdminToken(token: string): boolean {
  const secret = getSecret()
  if (!secret || !token) return false
  const crypto = require('crypto')
  const expected = crypto.createHmac('sha256', secret).update(SESSION_PAYLOAD).digest('base64url')
  return token === expected
}

/** Set the admin session cookie on the response (call from API route). Path=/ so it is sent to /api/admin/* too. */
export function setAdminSessionCookie(token: string): string {
  return `${ADMIN_SESSION_COOKIE}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${MAX_AGE}${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
}

/** Clear the admin session cookie */
export function clearAdminSessionCookie(): string {
  return `${ADMIN_SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
}

/** Read and verify admin session from request cookies (e.g. in API route) */
export async function getAdminSession(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value
  return !!token && verifyAdminToken(token)
}

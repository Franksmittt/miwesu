/**
 * Client-side cookie helpers for middleware-set values (GeoIP).
 * Use only in 'use client' components; after mount.
 */

const CURRENCY_COOKIE = 'miwesu_currency'
const INTENT_COOKIE = 'miwesu_intent'

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? decodeURIComponent(match[2]) : null
}

/** Currency set by middleware: ZAR (South Africa) or USD (default). */
export function getCurrency(): 'ZAR' | 'USD' {
  const value = getCookie(CURRENCY_COOKIE)
  return value === 'ZAR' ? 'ZAR' : 'USD'
}

/** Intent set by middleware: biltong (local) or trophy (international). */
export function getIntent(): 'biltong' | 'trophy' {
  const value = getCookie(INTENT_COOKIE)
  return value === 'biltong' ? 'biltong' : 'trophy'
}

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365

/** Set currency cookie (e.g. user override). Reload to apply middleware-style experience. */
export function setCurrency(value: 'ZAR' | 'USD'): void {
  if (typeof document === 'undefined') return
  document.cookie = `${CURRENCY_COOKIE}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`
}

/** Set intent cookie. Reload to apply. */
export function setIntent(value: 'biltong' | 'trophy'): void {
  if (typeof document === 'undefined') return
  document.cookie = `${INTENT_COOKIE}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`
}

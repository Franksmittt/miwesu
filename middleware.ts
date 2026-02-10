import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const LOCALE_COOKIE = 'miwesu_locale'
const CURRENCY_COOKIE = 'miwesu_currency'
const INTENT_COOKIE = 'miwesu_intent'

/** Countries that get ZAR / biltong (local) experience; everyone else gets USD / trophy */
const LOCAL_MARKET_COUNTRIES = ['ZA']

/** Bot user agents - serve default (en-US, USD) and do not set cookies */
function isBot(userAgent: string): boolean {
  const ua = (userAgent || '').toLowerCase()
  return (
    ua.includes('googlebot') ||
    ua.includes('bingbot') ||
    ua.includes('slurp') ||
    ua.includes('duckduckbot') ||
    ua.includes('baiduspider') ||
    ua.includes('yandexbot') ||
    ua.includes('facebookexternalhit') ||
    ua.includes('twitterbot') ||
    ua.includes('rogerbot') ||
    ua.includes('linkedinbot') ||
    ua.includes('embedly') ||
    ua.includes('quora link preview') ||
    ua.includes('showyoubot') ||
    ua.includes('outbrain') ||
    ua.includes('pinterest') ||
    ua.includes('slackbot') ||
    ua.includes('vkshare') ||
    ua.includes('w3c_validator')
  )
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Skip static assets and Next internals
  const pathname = request.nextUrl.pathname
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // static files
  ) {
    return response
  }

  const userAgent = request.headers.get('user-agent') || ''
  if (isBot(userAgent)) {
    response.headers.set('Vary', 'Accept-Language')
    return response
  }

  // Vercel sets x-vercel-ip-country; fallback for local/dev
  const country = request.headers.get('x-vercel-ip-country') || 'US'
  const isLocal = LOCAL_MARKET_COUNTRIES.includes(country)

  if (isLocal) {
    response.cookies.set(CURRENCY_COOKIE, 'ZAR', { path: '/', maxAge: 60 * 60 * 24 * 365 })
    response.cookies.set(LOCALE_COOKIE, 'af-ZA', { path: '/', maxAge: 60 * 60 * 24 * 365 })
    response.cookies.set(INTENT_COOKIE, 'biltong', { path: '/', maxAge: 60 * 60 * 24 * 365 })
  } else {
    response.cookies.set(CURRENCY_COOKIE, 'USD', { path: '/', maxAge: 60 * 60 * 24 * 365 })
    response.cookies.set(LOCALE_COOKIE, 'en-US', { path: '/', maxAge: 60 * 60 * 24 * 365 })
    response.cookies.set(INTENT_COOKIE, 'trophy', { path: '/', maxAge: 60 * 60 * 24 * 365 })
  }

  response.headers.set('Vary', 'Accept-Language')
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg|woff2?)$).*)'],
}

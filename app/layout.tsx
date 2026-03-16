import type { Metadata, Viewport } from 'next'
import { Cinzel, Montserrat } from 'next/font/google'
import './globals.css'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { AmbientAudioProvider } from '@/components/AmbientAudio'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505',
}

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-cinzel',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-montserrat',
})

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'IRON EDEN | The Makoppa Sanctuary & Game Reserve',
    template: '%s | Miwesu Conservation Harvest',
  },
  description: 'A 2.5-billion-year-old private sanctuary of silence in Thabazimbi. Bespoke luxury living, ethical conservation harvesting, and malaria-free bushveld safaris. D1432 Makoppa District, Limpopo.',
  keywords: [
    'MIWESU GAME FARM',
    'Miwesu',
    'Iron Eden',
    'Makoppa',
    'Thabazimbi',
    'Limpopo',
    'conservation harvest',
    'luxury hunting lodge',
    'malaria-free safari',
    'plains game',
    'ethical hunting',
    'Sweetveld',
    'Arid Sweet Bushveld',
    'Waterberg',
    'private residence',
    'D1432',
    'South Africa',
    'safari',
    'wildlife',
  ],
  authors: [{ name: 'MIWESU GAME FARM' }],
  creator: 'MIWESU GAME FARM',
  publisher: 'MIWESU GAME FARM',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    ...generateOpenGraph(
      'IRON EDEN | The Makoppa Sanctuary & Game Reserve',
      'A 2.5-billion-year-old private sanctuary of silence in Thabazimbi. Bespoke luxury living, ethical conservation harvesting, and malaria-free bushveld safaris.',
      constructCanonicalUrl(''),
      `${baseUrl}/og-image.jpg`
    ),
    locale: 'en_ZA',
  },
  twitter: generateTwitterCard(
    'IRON EDEN | The Makoppa Sanctuary & Game Reserve',
    'A 2.5-billion-year-old private sanctuary of silence in Thabazimbi. Bespoke luxury living, ethical conservation harvesting, malaria-free safaris.',
    `${baseUrl}/og-image.jpg`
  ),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: constructCanonicalUrl(''),
    languages: {
      'en-GB': constructCanonicalUrl(''),
      'de': constructCanonicalUrl('de'),
      'es': constructCanonicalUrl('es'),
      'x-default': constructCanonicalUrl(''),
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    // Google Search Console: add your verification meta value here when you have it.
    // In GSC: Property → Settings → Verification → copy the content value from the meta tag.
    // google: 'your-verification-code-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${cinzel.variable} ${montserrat.variable} min-w-0`}>
        <AmbientAudioProvider>{children}</AmbientAudioProvider>
      </body>
    </html>
  )
}


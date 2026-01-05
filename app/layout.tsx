import type { Metadata } from 'next'
import { Cinzel, Montserrat } from 'next/font/google'
import './globals.css'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'MIWESU GAME FARM | The Royal Residence',
    template: '%s | MIWESU GAME FARM',
  },
  description: 'MIWESU GAME FARM - An exclusive private residence collection in the Makoppa district, Thabazimbi, Limpopo. Located in the Arid Sweet Bushveld, offering luxury accommodations, ethical hunting, and conservation experiences. D1432 Road, approximately 40km from Thabazimbi town.',
  keywords: [
    'MIWESU GAME FARM',
    'Miwesu',
    'game farm',
    'Thabazimbi',
    'Limpopo',
    'Makoppa district',
    'D1432',
    'luxury accommodation',
    'private residence',
    'conservation',
    'ethical hunting',
    'Sweetveld',
    'Arid Sweet Bushveld',
    'malaria-free',
    'family hunting',
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
  openGraph: generateOpenGraph(
    'MIWESU GAME FARM | The Royal Residence',
    'An exclusive private residence collection in the Makoppa district, Thabazimbi. Located in the Arid Sweet Bushveld, offering luxury accommodations and ethical hunting experiences.',
    constructCanonicalUrl(''),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'MIWESU GAME FARM | The Royal Residence',
    'An exclusive private residence collection in the Makoppa district, Thabazimbi. Located in the Arid Sweet Bushveld.',
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
    // Add Google Search Console verification when available
    // google: 'verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cinzel.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  )
}


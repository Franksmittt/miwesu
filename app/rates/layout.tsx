import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Rates & Pricing | Investment Guide',
  description: 'View transparent pricing for MIWESU GAME FARM accommodations and activities. Rates for The Homestead and The Stone Villa, plus activity pricing. Request our confidential 2025 Conservation Investment Guide. Located in Makoppa district, Thabazimbi.',
  keywords: ['Miwesu rates', 'accommodation pricing', 'game farm prices', 'luxury accommodation cost', 'South Africa safari rates', 'Thabazimbi', 'Makoppa district', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Rates & Pricing | Investment Guide',
    'View transparent pricing for MIWESU GAME FARM accommodations and activities. Request our confidential Investment Guide.',
    constructCanonicalUrl('rates'),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Rates & Pricing | Investment Guide',
    'View transparent pricing for MIWESU GAME FARM accommodations and activities.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('rates'),
  },
}

export default function RatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


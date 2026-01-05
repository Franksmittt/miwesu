import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Activities & Experiences | Miwesu Pursuits',
  description: 'Discover diverse experiences at MIWESU GAME FARM: conservation harvest, photographic safaris, celestial safaris, mobile wellness, vita-darting, and wildlife viewing. Custom experiences tailored to your interests in the Makoppa district, Thabazimbi.',
  keywords: ['conservation harvest', 'photographic safari', 'celestial safari', 'wellness', 'vita-darting', 'wildlife viewing', 'game drives', 'Makoppa district', 'Thabazimbi', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Activities & Experiences | Miwesu Pursuits',
    'Discover diverse experiences at MIWESU GAME FARM: conservation harvest, photographic safaris, celestial safaris, and more in the Makoppa district.',
    constructCanonicalUrl('activities'),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Activities & Experiences | Miwesu Pursuits',
    'Discover diverse experiences at MIWESU GAME FARM tailored to your interests in the Makoppa district.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('activities'),
  },
}

export default function ActivitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


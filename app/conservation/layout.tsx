import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Conservation | Our Legacy',
  description: 'Learn about MIWESU GAME FARM\'s conservation programs: 24/7 anti-poaching units, community support feeding 300 families monthly, habitat restoration, and ecological research in the Makoppa district, Thabazimbi. "If It Pays, It Stays."',
  keywords: ['conservation', 'anti-poaching', 'habitat restoration', 'community support', 'ecological research', 'sustainable conservation', 'Makoppa district', 'Thabazimbi', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Conservation | Our Legacy',
    'Learn about MIWESU GAME FARM\'s conservation programs: anti-poaching, community support, and habitat restoration in the Makoppa district.',
    constructCanonicalUrl('conservation'),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Conservation | Our Legacy',
    'Learn about MIWESU GAME FARM\'s conservation programs and impact in the Makoppa district.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('conservation'),
  },
}

export default function ConservationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


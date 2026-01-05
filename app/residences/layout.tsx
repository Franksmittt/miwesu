import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Private Residences | Luxury Accommodation',
  description: 'Experience exclusive luxury at MIWESU GAME FARM. Choose from The Homestead (10-sleeper) or The Stone Villa (4-sleeper). Bespoke living with industrial appliances, daily housekeeping, and absolute privacy in the Makoppa district, Thabazimbi.',
  keywords: ['luxury accommodation', 'private residence', 'Makoppa district', 'Thabazimbi', 'The Homestead', 'The Stone Villa', 'exclusive use', 'self-catering', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Private Residences | Luxury Accommodation',
    'Experience exclusive luxury at MIWESU GAME FARM. Choose from The Homestead or The Stone Villa. Bespoke living with absolute privacy in the Makoppa district.',
    constructCanonicalUrl('residences'),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Private Residences | Luxury Accommodation',
    'Experience exclusive luxury at MIWESU GAME FARM with bespoke living and absolute privacy in the Makoppa district.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('residences'),
  },
}

export default function ResidencesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


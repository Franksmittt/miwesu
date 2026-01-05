import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Wildlife & Species | Conservation Harvest',
  description: 'Explore the primary species at MIWESU GAME FARM: Greater Kudu, Blue Wildebeest, Impala, Gemsbok, and Warthog. Learn about ethical conservation harvest and ecological management in the Arid Sweet Bushveld of the Makoppa district, Thabazimbi.',
  keywords: ['Greater Kudu', 'Blue Wildebeest', 'Impala', 'Gemsbok', 'Warthog', 'conservation harvest', 'wildlife species', 'ethical hunting', 'Arid Sweet Bushveld', 'Makoppa district', 'Thabazimbi', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Wildlife & Species | Conservation Harvest',
    'Explore the primary species at MIWESU GAME FARM and learn about ethical conservation harvest in the Arid Sweet Bushveld of the Makoppa district.',
    constructCanonicalUrl('wildlife'),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Wildlife & Species | Conservation Harvest',
    'Explore the primary species at MIWESU GAME FARM in the Arid Sweet Bushveld of the Makoppa district.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('wildlife'),
  },
}

export default function WildlifeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


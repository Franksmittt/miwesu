import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Wildlife & Species', url: constructCanonicalUrl('wildlife') },
]

export const metadata: Metadata = {
  title: 'Wildlife & Species | Conservation Harvest',
  description: 'Explore all 14 species at MIWESU GAME FARM: Greater Kudu, Blue Wildebeest, Golden Wildebeest, Impala, Dapple Impala, Gemsbok, Warthog, Blesbok, Bushbuck, Cape Buffalo, Lechwe, Livingstone Eland, Red Hartebeest, Springbok. Ethical conservation harvest in the Arid Sweet Bushveld, Makoppa district, Thabazimbi.',
  keywords: ['Greater Kudu', 'Blue Wildebeest', 'Impala', 'Gemsbok', 'Warthog', 'Cape Buffalo', 'Bushbuck', 'Blesbok', 'conservation harvest', 'wildlife species', 'ethical hunting', 'Arid Sweet Bushveld', 'Makoppa district', 'Thabazimbi', 'MIWESU GAME FARM'],
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
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  )
}


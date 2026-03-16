import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Wood & Thermal', url: constructCanonicalUrl('wood') },
]

export const metadata: Metadata = {
  title: 'Wood & Thermal | Engineering Grade Fuel',
  description: 'MIWESU GAME FARM thermal wood: Sekelbos, Geelhak, Braai Mix. Engineering grade fuel from the Makoppa district. 980°C peak output, 11% moisture verified, 0% chemical additives. Gauteng delivery.',
  keywords: ['Sekelbos', 'Geelhak', 'braai wood', 'thermal wood', 'firewood', 'Miwesu wood', 'Gauteng', 'Makoppa', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Wood & Thermal | Engineering Grade Fuel',
    'MIWESU thermal wood: Sekelbos, Geelhak, Braai Mix. Engineering grade fuel from the Makoppa district. Gauteng delivery.',
    constructCanonicalUrl('wood'),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Wood & Thermal | Engineering Grade Fuel',
    'MIWESU thermal wood: Sekelbos, Geelhak, Braai Mix. Engineering grade fuel. Gauteng delivery.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('wood'),
  },
}

export default function WoodLayout({
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

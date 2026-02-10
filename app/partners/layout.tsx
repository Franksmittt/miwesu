import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Trusted Partners', url: constructCanonicalUrl('partners') },
]

export const metadata: Metadata = {
  title: 'Trusted Partners | Taxidermy, Export & Travel',
  description: 'MIWESU GAME FARM trusted partners: taxidermy, dipping and shipping, travel insurance. Complete logistics for your Limpopo trophy from Makoppa district to your home.',
  keywords: ['taxidermy', 'dipping and shipping', 'trophy export', 'travel insurance', 'hunting logistics', 'Limpopo', 'Makoppa', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Trusted Partners | Taxidermy, Export & Travel',
    'MIWESU trusted partners for taxidermy, dipping, shipping, and travel. Complete logistics for your Limpopo trophy.',
    constructCanonicalUrl('partners'),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Trusted Partners | Taxidermy, Export & Travel',
    'MIWESU trusted partners for taxidermy, dipping, shipping, and travel.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('partners'),
  },
}

export default function PartnersLayout({
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

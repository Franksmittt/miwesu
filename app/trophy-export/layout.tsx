import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Trophy Export & Travel', url: constructCanonicalUrl('trophy-export') },
]

export const metadata: Metadata = {
  title: 'Trophy Export & Travel | From Limpopo to Your Home',
  description: 'How we get your trophy from MIWESU Game Farm, Limpopo, to your door. Dipping, shipping, CITES, taxidermy logistics. Trophy export South Africa to USA, Europe. Makoppa district, Thabazimbi.',
  keywords: ['trophy export', 'trophy shipping', 'South Africa hunting export', 'CITES', 'dipping and shipping', 'taxidermy logistics', 'Limpopo trophy', 'Makoppa', 'Thabazimbi', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Trophy Export & Travel | From Limpopo to Your Home',
    'How we get your trophy from MIWESU, Limpopo, to your door. Dipping, shipping, CITES. Trophy export South Africa.',
    constructCanonicalUrl('trophy-export'),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Trophy Export & Travel | From Limpopo to Your Home',
    'How we get your trophy from MIWESU, Limpopo, to your door. Dipping, shipping, CITES.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('trophy-export'),
  },
}

export default function TrophyExportLayout({
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

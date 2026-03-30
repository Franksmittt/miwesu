import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard, generateWebPageSchema } from '@/lib/seo'
import { marketingOgAbsolute } from '@/lib/open-graph'
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const ogImage = marketingOgAbsolute(baseUrl, 'partners')
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Trusted Partners', url: constructCanonicalUrl('partners') },
]

export const metadata: Metadata = {
  title: 'Trusted Partners | Taxidermy, Export & Travel',
  description:
    'MIWESU GAME FARM trusted partners for international hunters: taxidermy studios, dipping and packing agents, freight forwarders, and travel insurance. End-to-end trophy logistics from Makoppa district, Limpopo, to the USA, EU, and beyond.',
  keywords: ['taxidermy', 'dipping and shipping', 'trophy export', 'travel insurance', 'hunting logistics', 'Limpopo', 'Makoppa', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Trusted Partners | Taxidermy, Export & Travel',
    'MIWESU trusted partners for taxidermy, dipping, shipping, and travel. Complete logistics for your Limpopo trophy.',
    constructCanonicalUrl('partners'),
    ogImage
  ),
  twitter: generateTwitterCard(
    'Trusted Partners | Taxidermy, Export & Travel',
    'MIWESU trusted partners for taxidermy, dipping, shipping, and travel.',
    ogImage
  ),
  alternates: {
    canonical: constructCanonicalUrl('partners'),
  },
}

const partnersWebPage = generateWebPageSchema({
  name: 'Trusted partners | MIWESU GAME FARM',
  description:
    'Taxidermy, dipping, shipping, and travel partners for trophy hunters visiting MIWESU in the Makoppa district, Thabazimbi, Limpopo.',
  url: constructCanonicalUrl('partners'),
})

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema schema={partnersWebPage} />
      {children}
    </>
  )
}

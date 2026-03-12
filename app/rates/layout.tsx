import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard, generateProductSchema } from '@/lib/seo'
import { ProductSchema, BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Rates & Pricing', url: constructCanonicalUrl('rates') },
]

export const metadata: Metadata = {
  title: 'Rates & Pricing Thabazimbi, Limpopo | Investment Guide',
  description: 'Transparent rates for MIWESU GAME FARM: accommodation (The Homestead, Stone Villa), conservation harvest, species, and experiences. Request our Conservation Investment Guide. Makoppa district, Thabazimbi. Pricing clarity for GSC.',
  keywords: ['Miwesu rates', 'Thabazimbi pricing', 'accommodation pricing', 'game farm prices', 'Limpopo hunting cost', 'plains game packages', 'conservation harvest rates', 'Makoppa district', 'MIWESU GAME FARM'],
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

const samplePackageSchema = generateProductSchema({
  name: '7-Day Plains Game & Golden Wildebeest Safari',
  description: 'All-inclusive hunting safari at MIWESU Game Farm in the Makoppa Sweetveld, Limpopo. Targets Golden Wildebeest, Impala, Warthog and other plains game. Luxury accommodation, professional guides.',
  sku: 'HUNT-GOLD-001',
  price: 5500,
  priceCurrency: 'USD',
  imageUrl: `${baseUrl}/images/home-species-wildebeest.jpg`,
  availability: 'InStock',
  validFrom: '2026-01-01',
})

export default function RatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ProductSchema schema={samplePackageSchema} />
      {children}
    </>
  )
}


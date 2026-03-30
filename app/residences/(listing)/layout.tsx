import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard, generateWebPageSchema } from '@/lib/seo'
import { marketingOgAbsolute } from '@/lib/open-graph'
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const ogImage = marketingOgAbsolute(baseUrl, 'residences')
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Private Residences', url: constructCanonicalUrl('residences') },
]

export const metadata: Metadata = {
  title: 'Private Residences | Luxury Accommodation',
  description:
    "Luxury hunting lodge accommodation at MIWESU GAME FARM. Hunter's House (16-sleeper main lodge) or Rooibok Kraal (6-sleeper, near the pool). Game farm stay in Thabazimbi, Makoppa district. Bespoke living, daily housekeeping, absolute privacy.",
  keywords: [
    'luxury accommodation',
    'private residence',
    'hunting lodge accommodation',
    'game farm stay Thabazimbi',
    'hunting lodge accommodation Limpopo',
    'Makoppa district',
    'Thabazimbi',
    "Hunter's House",
    'Rooibok Kraal',
    'exclusive use',
    'self-catering',
    'MIWESU GAME FARM',
  ],
  openGraph: {
    ...generateOpenGraph(
      'Private Residences | Luxury Accommodation',
      "Experience exclusive luxury at MIWESU GAME FARM. Choose from Hunter's House or Rooibok Kraal. Bespoke living with absolute privacy in the Makoppa district.",
      constructCanonicalUrl('residences'),
      ogImage,
    ),
    locale: 'en_ZA',
  },
  twitter: generateTwitterCard(
    'Private Residences | Luxury Accommodation',
    'Experience exclusive luxury at MIWESU GAME FARM with bespoke living and absolute privacy in the Makoppa district.',
    ogImage,
  ),
  alternates: {
    canonical: constructCanonicalUrl('residences'),
  },
  robots: { index: true, follow: true },
}

const residencesWebPage = generateWebPageSchema({
  name: 'Private residences | MIWESU luxury lodge accommodation',
  description:
    "Hunter's House and Rooibok Kraal: exclusive-use luxury on D1432, Makoppa district, Thabazimbi, malaria-free Waterberg.",
  url: constructCanonicalUrl('residences'),
})

export default function ResidencesListingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema schema={residencesWebPage} />
      {children}
    </>
  )
}

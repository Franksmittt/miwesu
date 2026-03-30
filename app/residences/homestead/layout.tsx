import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard, generateWebPageSchema } from '@/lib/seo'
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const path = 'residences/homestead'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Private Residences', url: constructCanonicalUrl('residences') },
  { name: "Hunter's House", url: constructCanonicalUrl(path) },
]

export const metadata: Metadata = {
  title: '16-Sleeper Luxury Lodge Thabazimbi: Exclusive Use',
  description: 'The Homestead: 16-sleeper, 4-bedroom main lodge on D1432 Makoppa District. Chef\'s kitchen, Lapa with wet bar, boma, bespoke swimming pool with multi-slide complex. Exclusive use. Malaria-free Limpopo.',
  keywords: ['16-sleeper lodge Thabazimbi', 'exclusive use', 'The Homestead', 'Makoppa', 'Limpopo', 'luxury self-catering', 'Lapa', 'boma', 'private residence', 'MIWESU'],
  alternates: { canonical: constructCanonicalUrl(path) },
  openGraph: generateOpenGraph(
    "Hunter's House | Private Residences",
    '16-sleeper main lodge. Exclusive use. Kitchen, living, boma, lapa, pool.',
    constructCanonicalUrl(path),
    `${baseUrl}/images/residences-homestead-main.jpg`
  ),
  twitter: generateTwitterCard(
    "Hunter's House | Private Residences",
    '16-sleeper main lodge. Exclusive use.',
    `${baseUrl}/images/residences-homestead-main.jpg`
  ),
}

const homesteadWebPage = generateWebPageSchema({
  name: "Hunter's House | 16-sleeper luxury lodge MIWESU",
  description:
    'Exclusive-use main lodge on D1432: chef\'s kitchen, lapa, boma, multi-slide pool. Makoppa district, Thabazimbi, malaria-free Limpopo.',
  url: constructCanonicalUrl(path),
})

export default function HomesteadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema schema={homesteadWebPage} />
      {children}
    </>
  )
}

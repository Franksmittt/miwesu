import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard, generateWebPageSchema } from '@/lib/seo'
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const path = 'residences/stone-villa'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Private Residences', url: constructCanonicalUrl('residences') },
  { name: 'Rooibok Kraal', url: constructCanonicalUrl(path) },
]

export const metadata: Metadata = {
  title: 'Bespoke Bushveld Living in Limpopo | Rooibok Kraal',
  description: 'Rooibok Kraal: exclusive 6-sleeper, 2-bedroom property. Stargazing deck, telescope, outdoor braai. Malaria-free Waterberg. Makoppa district, Thabazimbi.',
  keywords: ['Rooibok Kraal', '6-sleeper Thabazimbi', 'stargazing', 'bushveld lodge', 'Limpopo', 'Makoppa', 'exclusive use', 'MIWESU'],
  alternates: { canonical: constructCanonicalUrl(path) },
  openGraph: generateOpenGraph(
    'Rooibok Kraal | Private Residences',
    '6-sleeper near the pool. Two en-suites, kitchen, living, outdoor braai.',
    constructCanonicalUrl(path),
    `${baseUrl}/images/residences-second-house-main.jpg`
  ),
  twitter: generateTwitterCard(
    'Rooibok Kraal | Private Residences',
    '6-sleeper near the pool. Two en-suites, kitchen, living.',
    `${baseUrl}/images/residences-second-house-main.jpg`
  ),
}

const stoneVillaWebPage = generateWebPageSchema({
  name: 'Rooibok Kraal | 6-sleeper boutique lodge MIWESU',
  description:
    'Intimate Waterberg residence near the pool: two en-suites, outdoor braai, stargazing deck. Exclusive use, Makoppa, Thabazimbi, Limpopo.',
  url: constructCanonicalUrl(path),
})

export default function StoneVillaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema schema={stoneVillaWebPage} />
      {children}
    </>
  )
}

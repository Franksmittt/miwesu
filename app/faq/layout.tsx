import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard, generateWebPageSchema } from '@/lib/seo'
import { marketingOgAbsolute } from '@/lib/open-graph'
import { FAQPageSchema, BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData'
import { FAQ_ITEMS } from '@/lib/faq-data'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const ogImage = marketingOgAbsolute(baseUrl, 'faq')
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'FAQ', url: constructCanonicalUrl('faq') },
]

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions',
  description: 'Find answers to frequently asked questions about MIWESU GAME FARM: vetting process, accommodation, conservation harvest, activities, malaria-free status, location, and more. Located in Makoppa district, Thabazimbi, Limpopo.',
  keywords: ['Miwesu FAQ', 'game farm questions', 'accommodation FAQ', 'conservation harvest FAQ', 'Limpopo hunting FAQ', 'hunting safari cost', 'Makoppa district', 'Thabazimbi', 'malaria-free', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'FAQ | Frequently Asked Questions',
    'Find answers to frequently asked questions about MIWESU GAME FARM in the Makoppa district, Thabazimbi.',
    constructCanonicalUrl('faq'),
    ogImage
  ),
  twitter: generateTwitterCard(
    'FAQ | Frequently Asked Questions',
    'Find answers to frequently asked questions about MIWESU GAME FARM.',
    ogImage
  ),
  alternates: {
    canonical: constructCanonicalUrl('faq'),
  },
}

const faqWebPage = generateWebPageSchema({
  name: 'FAQ | MIWESU GAME FARM',
  description:
    'Vetting, malaria-free Waterberg, residences, conservation harvest, and travel FAQs for MIWESU in Makoppa, Thabazimbi, Limpopo.',
  url: constructCanonicalUrl('faq'),
})

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema schema={faqWebPage} />
      <FAQPageSchema faqs={FAQ_ITEMS} />
      {children}
    </>
  )
}


import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard, generateWebPageSchema } from '@/lib/seo'
import { marketingOgAbsolute } from '@/lib/open-graph'
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const ogImage = marketingOgAbsolute(baseUrl, 'book')
const path = 'book'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Book Your Stay', url: constructCanonicalUrl(path) },
]

export const metadata: Metadata = {
  title: 'Book Your Stay | Enquiry & Availability',
  description: "Submit your stay enquiry for MIWESU Game Farm, Thabazimbi. Check availability for Hunter's House and Rooibok Kraal. Conservation harvest and luxury safari bookings. Malaria-free Limpopo.",
  keywords: ['book Miwesu', 'hunting lodge booking', 'Thabazimbi accommodation', 'game farm stay enquiry', 'conservation harvest booking', 'Makoppa', 'Limpopo', 'availability'],
  openGraph: generateOpenGraph(
    'Book Your Stay | MIWESU Game Farm',
    "Submit your stay enquiry. Check availability for Hunter's House and Rooibok Kraal. Conservation harvest and luxury safari in malaria-free Limpopo.",
    constructCanonicalUrl(path),
    ogImage
  ),
  twitter: generateTwitterCard(
    'Book Your Stay | MIWESU Game Farm',
    'Submit your stay enquiry. Check availability for luxury residences in the Makoppa district.',
    ogImage
  ),
  alternates: { canonical: constructCanonicalUrl(path) },
}

const bookWebPage = generateWebPageSchema({
  name: 'Book Your Stay | MIWESU GAME FARM',
  description:
    "Enquiry form for MIWESU Game Farm: exclusive-use residences, conservation harvest, and malaria-free Waterberg safari. Thabazimbi, Makoppa district, Limpopo.",
  url: constructCanonicalUrl(path),
})

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema schema={bookWebPage} />
      {children}
    </>
  )
}

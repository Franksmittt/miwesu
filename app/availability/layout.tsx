import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard, generateWebPageSchema } from '@/lib/seo'
import { marketingOgAbsolute } from '@/lib/open-graph'
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const ogImage = marketingOgAbsolute(baseUrl, 'availability')
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Availability', url: constructCanonicalUrl('availability') },
]

export const metadata: Metadata = {
  title: 'Availability | Check Dates & Request Booking',
  description:
    "Check live-style availability for MIWESU GAME FARM: Hunter's House (16-sleeper) and Rooibok Kraal (6-sleeper), Makoppa district, Thabazimbi. Request conservation harvest dates, exclusive-use safari weeks, and vetting. Malaria-free Waterberg, Limpopo.",
  keywords: ['availability', 'booking', 'Miwesu dates', 'game farm reservation', 'Thabazimbi', 'Makoppa', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Availability | Check Dates & Request Booking',
    'Check availability for MIWESU residences and experiences. Makoppa district, Thabazimbi.',
    constructCanonicalUrl('availability'),
    ogImage
  ),
  twitter: generateTwitterCard(
    'Availability | Check Dates & Request Booking',
    'Check availability for MIWESU residences and experiences.',
    ogImage
  ),
  alternates: {
    canonical: constructCanonicalUrl('availability'),
  },
}

const availabilityWebPage = generateWebPageSchema({
  name: 'Availability | MIWESU GAME FARM',
  description:
    "Request dates for luxury lodge stays and conservation harvest at MIWESU. Hunter's House and Rooibok Kraal on D1432, Makoppa district, Thabazimbi, Limpopo.",
  url: constructCanonicalUrl('availability'),
})

export default function AvailabilityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema schema={availabilityWebPage} />
      {children}
    </>
  )
}

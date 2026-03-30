import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard, generateWebPageSchema } from '@/lib/seo'
import { marketingOgAbsolute } from '@/lib/open-graph'
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const ogImage = marketingOgAbsolute(baseUrl, 'contact')
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Contact', url: constructCanonicalUrl('contact') },
]

export const metadata: Metadata = {
  title: 'Contact Us | Concierge & Bookings',
  description: 'Contact MIWESU GAME FARM for game farm booking and hunting lodge inquiries. D1432 Road, Makoppa District, Thabazimbi, Limpopo. info@miwesu.co.za, +27 73 030 9679. 40km from Thabazimbi. Book your safari or conservation harvest.',
  keywords: ['Miwesu contact', 'game reserve booking', 'game farm booking', 'hunting lodge inquiry', 'book hunting safari', 'game farm reservation', 'Thabazimbi', 'Limpopo', 'concierge services', 'reservation'],
  openGraph: generateOpenGraph(
    'Contact Us | Concierge Services',
    'Contact MIWESU GAME FARM concierge team. Located on D1432 Road, Makoppa District, Thabazimbi, Limpopo. Approximately 40km from Thabazimbi town.',
    constructCanonicalUrl('contact'),
    ogImage
  ),
  twitter: generateTwitterCard(
    'Contact Us | Concierge Services',
    'Contact MIWESU GAME FARM concierge team for inquiries and bookings. D1432 Road, Makoppa District, Thabazimbi.',
    ogImage
  ),
  alternates: {
    canonical: constructCanonicalUrl('contact'),
  },
}

const contactWebPage = generateWebPageSchema({
  name: 'Contact MIWESU GAME FARM | Concierge & bookings',
  description:
    'Concierge: info@miwesu.co.za, +27 73 030 9679. D1432 Makoppa District, Thabazimbi, Limpopo. Hunting lodge, conservation harvest, and residence enquiries.',
  url: constructCanonicalUrl('contact'),
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema schema={contactWebPage} />
      {children}
    </>
  )
}


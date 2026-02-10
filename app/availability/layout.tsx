import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Availability', url: constructCanonicalUrl('availability') },
]

export const metadata: Metadata = {
  title: 'Availability | Check Dates & Request Booking',
  description: 'Check availability for MIWESU GAME FARM residences and conservation harvest. The Homestead and Stone Villa, Makoppa district Thabazimbi. Contact concierge for live availability and vetting.',
  keywords: ['availability', 'booking', 'Miwesu dates', 'game farm reservation', 'Thabazimbi', 'Makoppa', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Availability | Check Dates & Request Booking',
    'Check availability for MIWESU residences and experiences. Makoppa district, Thabazimbi.',
    constructCanonicalUrl('availability'),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Availability | Check Dates & Request Booking',
    'Check availability for MIWESU residences and experiences.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('availability'),
  },
}

export default function AvailabilityLayout({
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

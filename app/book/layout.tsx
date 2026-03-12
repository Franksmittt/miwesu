import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const path = 'book'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Book Your Stay', url: constructCanonicalUrl(path) },
]

export const metadata: Metadata = {
  title: 'Book Your Stay | Enquiry & Availability',
  description: 'Submit your stay enquiry for MIWESU Game Farm, Thabazimbi. Check availability for The Homestead and The Stone Villa. Conservation harvest and luxury safari bookings. Malaria-free Limpopo.',
  keywords: ['book Miwesu', 'hunting lodge booking', 'Thabazimbi accommodation', 'game farm stay enquiry', 'conservation harvest booking', 'Makoppa', 'Limpopo', 'availability'],
  openGraph: generateOpenGraph(
    'Book Your Stay | MIWESU Game Farm',
    'Submit your stay enquiry. Check availability for The Homestead and The Stone Villa. Conservation harvest and luxury safari in malaria-free Limpopo.',
    constructCanonicalUrl(path),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Book Your Stay | MIWESU Game Farm',
    'Submit your stay enquiry. Check availability for luxury residences in the Makoppa district.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: { canonical: constructCanonicalUrl(path) },
}

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  )
}

import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Contact Us | Concierge Services',
  description: 'Contact MIWESU GAME FARM concierge team. Located on D1432 Road, Makoppa District, Thabazimbi, Limpopo. Email guardians@miwesu.com or call +27 73 030 9679. Approximately 40km from Thabazimbi town. Inquiries and bookings welcome.',
  keywords: ['Miwesu contact', 'game reserve booking', 'Thabazimbi', 'Limpopo', 'concierge services', 'reservation'],
  openGraph: generateOpenGraph(
    'Contact Us | Concierge Services',
    'Contact MIWESU GAME FARM concierge team. Located on D1432 Road, Makoppa District, Thabazimbi, Limpopo. Approximately 40km from Thabazimbi town.',
    constructCanonicalUrl('contact'),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Contact Us | Concierge Services',
    'Contact MIWESU GAME FARM concierge team for inquiries and bookings. D1432 Road, Makoppa District, Thabazimbi.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('contact'),
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


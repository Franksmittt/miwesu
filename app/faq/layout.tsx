import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions',
  description: 'Find answers to frequently asked questions about MIWESU GAME FARM: vetting process, accommodation, conservation harvest, activities, malaria-free status, location, and more. Located in Makoppa district, Thabazimbi, Limpopo.',
  keywords: ['Miwesu FAQ', 'game farm questions', 'accommodation FAQ', 'conservation harvest FAQ', 'Makoppa district', 'Thabazimbi', 'malaria-free', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'FAQ | Frequently Asked Questions',
    'Find answers to frequently asked questions about MIWESU GAME FARM in the Makoppa district, Thabazimbi.',
    constructCanonicalUrl('faq'),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'FAQ | Frequently Asked Questions',
    'Find answers to frequently asked questions about MIWESU GAME FARM.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('faq'),
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'About Us | Our Story & Mission',
  description: 'Discover the story of MIWESU GAME FARM, grounded in 2.5 billion years of the Penge Formation. Learn about our mission for conservation through sustainable utilization in the heart of the Makoppa district, Thabazimbi, Limpopo. Located in the Arid Sweet Bushveld.',
  keywords: ['Miwesu story', 'game farm history', 'conservation mission', 'Makoppa district', 'Thabazimbi', 'Limpopo', 'Penge Formation', 'Arid Sweet Bushveld', 'ethical conservation', 'sustainable tourism'],
  openGraph: generateOpenGraph(
    'About Us | Our Story & Mission',
    'Discover the story of MIWESU GAME FARM, grounded in 2.5 billion years of the Penge Formation. Learn about our mission for conservation through sustainable utilization.',
    constructCanonicalUrl('about'),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'About Us | Our Story & Mission',
    'Discover the story of MIWESU GAME FARM, grounded in 2.5 billion years of the Penge Formation. Learn about our mission for conservation through sustainable utilization.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('about'),
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


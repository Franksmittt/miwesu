import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard, generateWebPageSchema } from '@/lib/seo'
import { marketingOgAbsolute } from '@/lib/open-graph'
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const ogImage = marketingOgAbsolute(baseUrl, 'about')
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'About Us', url: constructCanonicalUrl('about') },
]

export const metadata: Metadata = {
  title: 'About Us | Our Story & Mission',
  description: 'Discover the story of MIWESU GAME FARM, grounded in 2.5 billion years of the Penge Formation. Learn about our mission for conservation through sustainable utilization in the heart of the Makoppa district, Thabazimbi, Limpopo. Located in the Arid Sweet Bushveld.',
  keywords: ['Miwesu story', 'game farm history', 'conservation mission', 'Makoppa district', 'Thabazimbi', 'Limpopo', 'Waterberg game farm', 'Limpopo hunting lodge', 'Penge Formation', 'Arid Sweet Bushveld', 'ethical conservation', 'sustainable tourism', 'trophy hunting', 'plains game'],
  openGraph: generateOpenGraph(
    'About Us | Our Story & Mission',
    'Discover the story of MIWESU GAME FARM, grounded in 2.5 billion years of the Penge Formation. Learn about our mission for conservation through sustainable utilization.',
    constructCanonicalUrl('about'),
    ogImage
  ),
  twitter: generateTwitterCard(
    'About Us | Our Story & Mission',
    'Discover the story of MIWESU GAME FARM, grounded in 2.5 billion years of the Penge Formation. Learn about our mission for conservation through sustainable utilization.',
    ogImage
  ),
  alternates: {
    canonical: constructCanonicalUrl('about'),
  },
}

const aboutWebPage = generateWebPageSchema({
  name: 'About MIWESU GAME FARM | Our story & mission',
  description:
    'Iron Eden: 2.5-billion-year Penge Formation geology, Arid Sweet Bushveld, ethical conservation harvest, and luxury residences in the Makoppa district, Thabazimbi, Limpopo.',
  url: constructCanonicalUrl('about'),
})

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema schema={aboutWebPage} />
      {children}
    </>
  )
}


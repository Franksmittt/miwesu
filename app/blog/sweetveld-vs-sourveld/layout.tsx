import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: "Hunter's Journal", url: baseUrl + '/blog' },
  { name: 'Sweetveld vs Sourveld', url: constructCanonicalUrl('blog/sweetveld-vs-sourveld') },
]

export const metadata: Metadata = {
  title: 'Sweetveld vs. Sourveld: Why Our Nutrient Density Produces Bigger Horns',
  description: 'How Sweetveld grasses in the Makoppa district sustain plains game in peak condition. Nutrient density, trophy quality, and why MIWESU\'s Arid Sweet Bushveld matters for hunters.',
  keywords: ['Sweetveld', 'Sourveld', 'nutrient density', 'trophy quality', 'Makoppa', 'Limpopo', 'bushveld', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Sweetveld vs. Sourveld: Why Our Nutrient Density Produces Bigger Horns',
    'How Sweetveld in the Makoppa district sustains game in peak condition. Trophy quality and ecology.',
    constructCanonicalUrl('blog/sweetveld-vs-sourveld'),
    `${baseUrl}/og-image.jpg`
  ),
  alternates: { canonical: constructCanonicalUrl('blog/sweetveld-vs-sourveld') },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  )
}

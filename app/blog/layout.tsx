import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: "Hunter's Journal", url: constructCanonicalUrl('blog') },
]

export const metadata: Metadata = {
  title: "Hunter's Journal | MIWESU Game Farm",
  description: "Authority content for international hunters: trophy export, Sweetveld vs Sourveld, Limpopo vs Eastern Cape hunting, ethical ballistics. MIWESU GAME FARM, Makoppa district.",
  keywords: ['hunting blog', 'trophy export', 'Sweetveld', 'Limpopo hunting', 'Eastern Cape hunting', 'ethical hunting', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    "Hunter's Journal | MIWESU Game Farm",
    "Authority content for international hunters. Trophy export, Sweetveld, Limpopo hunting.",
    constructCanonicalUrl('blog'),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    "Hunter's Journal | MIWESU Game Farm",
    "Authority content for international hunters.",
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('blog'),
  },
}

export default function BlogLayout({
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

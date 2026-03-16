import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Caza en Limpopo', url: constructCanonicalUrl('es') },
]

export const metadata: Metadata = {
  title: 'Caza en Limpopo | MIWESU GAME FARM',
  description: 'Lodge de caza de lujo en Limpopo, Sudáfrica. Caza trofeo, sin malaria, Waterberg. Distrito Makoppa, Thabazimbi. Residencias privadas y caza de conservación.',
  keywords: ['caza Limpopo', 'Sudáfrica caza', 'caza trofeo', 'Waterberg', 'sin malaria', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Caza en Limpopo | MIWESU GAME FARM',
    'Lodge de caza de lujo en Limpopo. Caza trofeo, sin malaria. Makoppa, Thabazimbi.',
    constructCanonicalUrl('es'),
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('es'),
    languages: {
      'es': constructCanonicalUrl('es'),
      'en-GB': baseUrl + '/',
      'x-default': baseUrl + '/',
    },
  },
}

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  )
}

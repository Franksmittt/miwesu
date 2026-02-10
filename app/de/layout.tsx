import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Jagd in Limpopo', url: constructCanonicalUrl('de') },
]

export const metadata: Metadata = {
  title: 'Jagd in Limpopo | MIWESU GAME FARM',
  description: 'Luxus-Jagdlodge in Limpopo, Südafrika. Trophäenjagd, Malaria-frei, Waterberg. Makoppa Bezirk, Thabazimbi. Privatresidenzen und Erhaltungsjagd.',
  keywords: ['Jagd Limpopo', 'Südafrika Jagd', 'Trophäenjagd', 'Waterberg', 'Malaria-frei', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Jagd in Limpopo | MIWESU GAME FARM',
    'Luxus-Jagdlodge in Limpopo. Trophäenjagd, Malaria-frei. Makoppa, Thabazimbi.',
    constructCanonicalUrl('de'),
    `${baseUrl}/og-image.jpg`
  ),
  alternates: { canonical: constructCanonicalUrl('de') },
}

export default function Delayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  )
}

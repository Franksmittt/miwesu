import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Gallery | Visual Journey',
  description: 'Explore our gallery showcasing the beauty of MIWESU GAME FARM: landscapes, wildlife, and luxury accommodations in the Makoppa district, Thabazimbi, Limpopo. Arid Sweet Bushveld photography and game farm imagery.',
  keywords: ['Miwesu gallery', 'Makoppa district photos', 'Thabazimbi', 'wildlife photography', 'game farm images', 'luxury accommodation photos', 'Arid Sweet Bushveld', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Gallery | Visual Journey',
    'Explore our gallery showcasing the beauty of MIWESU GAME FARM: landscapes, wildlife, and luxury accommodations in the Makoppa district.',
    constructCanonicalUrl('gallery'),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Gallery | Visual Journey',
    'Explore our gallery showcasing the beauty of MIWESU GAME FARM in the Makoppa district.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('gallery'),
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


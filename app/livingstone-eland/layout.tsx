import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Livingstone Eland Hunting Guide | Taurotragus oryx livingstonei',
  description: 'Comprehensive guide to Livingstone Eland hunting at MIWESU Game Farm. Learn about the Giant Antelope - morphology, behavior, hunting strategies, and trophy evaluation.',
  keywords: ['Livingstone Eland hunting', 'Taurotragus oryx livingstonei', 'giant antelope', 'trophy hunting', 'MIWESU game farm'],
  openGraph: generateOpenGraph('Livingstone Eland Hunting Guide | Taurotragus oryx livingstonei', 'Comprehensive guide to Livingstone Eland hunting at MIWESU Game Farm.', constructCanonicalUrl('livingstone-eland'), `${baseUrl}/og-image.jpg`),
  twitter: generateTwitterCard('Livingstone Eland Hunting Guide | Taurotragus oryx livingstonei', 'Comprehensive guide to Livingstone Eland hunting at MIWESU Game Farm.', `${baseUrl}/og-image.jpg`),
  alternates: { canonical: constructCanonicalUrl('livingstone-eland') },
}

export default function LivingstoneElandLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


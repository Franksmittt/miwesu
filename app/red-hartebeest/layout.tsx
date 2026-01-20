import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Red Hartebeest Hunting Guide | Alcelaphus buselaphus caama',
  description: 'Comprehensive guide to Red Hartebeest hunting at MIWESU Game Farm. Learn about the Red Antelope - morphology, behavior, hunting strategies, and trophy evaluation.',
  keywords: ['Red Hartebeest hunting', 'Alcelaphus buselaphus caama', 'antelope hunting', 'trophy hunting', 'MIWESU game farm'],
  openGraph: generateOpenGraph('Red Hartebeest Hunting Guide | Alcelaphus buselaphus caama', 'Comprehensive guide to Red Hartebeest hunting at MIWESU Game Farm.', constructCanonicalUrl('red-hartebeest'), `${baseUrl}/og-image.jpg`),
  twitter: generateTwitterCard('Red Hartebeest Hunting Guide | Alcelaphus buselaphus caama', 'Comprehensive guide to Red Hartebeest hunting at MIWESU Game Farm.', `${baseUrl}/og-image.jpg`),
  alternates: { canonical: constructCanonicalUrl('red-hartebeest') },
}

export default function RedHartebeestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


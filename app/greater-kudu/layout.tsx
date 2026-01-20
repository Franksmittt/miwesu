import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Greater Kudu Hunting Guide | Tragelaphus strepsiceros',
  description: 'Comprehensive guide to Greater Kudu hunting at MIWESU Game Farm. Learn about the Grey Ghost - morphology, behavior, hunting strategies, and trophy evaluation.',
  keywords: ['Greater Kudu hunting', 'Tragelaphus strepsiceros', 'Grey Ghost', 'spiral horn antelope', 'trophy hunting', 'MIWESU game farm'],
  openGraph: generateOpenGraph('Greater Kudu Hunting Guide | Tragelaphus strepsiceros', 'Comprehensive guide to Greater Kudu hunting at MIWESU Game Farm.', constructCanonicalUrl('greater-kudu'), `${baseUrl}/og-image.jpg`),
  twitter: generateTwitterCard('Greater Kudu Hunting Guide | Tragelaphus strepsiceros', 'Comprehensive guide to Greater Kudu hunting at MIWESU Game Farm.', `${baseUrl}/og-image.jpg`),
  alternates: { canonical: constructCanonicalUrl('greater-kudu') },
}

export default function GreaterKuduLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


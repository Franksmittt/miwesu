import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { marketingOgAbsolute } from '@/lib/open-graph'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const ogImage = marketingOgAbsolute(baseUrl, 'wildlife')

export const metadata: Metadata = {
  title: 'Premium Hunting Safaris Thabazimbi, Limpopo | 14 Species',
  description:
    'All 14 species at MIWESU: Greater Kudu, Blue and Golden Wildebeest, Impala, Dapple Impala, Gemsbok, Warthog, Blesbok, Bushbuck, Cape Buffalo, Lechwe, Livingstone Eland, Red Hartebeest, Springbok. Conservation harvest, Makoppa Dome, Arid Sweet Bushveld. Fair Chase.',
  keywords: [
    'hunting safaris South Africa',
    'Thabazimbi',
    'Limpopo',
    'plains game',
    'Greater Kudu',
    'Cape Buffalo',
    'conservation harvest',
    'Makoppa',
    'Rowland Ward',
    'SCI',
    'MIWESU GAME FARM',
  ],
  openGraph: generateOpenGraph(
    'Premium Hunting Safaris Thabazimbi, Limpopo | 14 Species',
    'All 14 species at MIWESU. Conservation harvest, Makoppa Dome, Arid Sweet Bushveld. Fair Chase.',
    constructCanonicalUrl('wildlife'),
    ogImage
  ),
  twitter: generateTwitterCard(
    'Premium Hunting Safaris Thabazimbi, Limpopo | 14 Species',
    'All 14 species at MIWESU. Conservation harvest, Makoppa district.',
    ogImage
  ),
  alternates: {
    canonical: constructCanonicalUrl('wildlife'),
  },
}

export default function WildlifeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import { Metadata } from 'next'
import {
  constructCanonicalUrl,
  generateOpenGraph,
  generateTwitterCard,
  generateGalleryItemListSchema,
  generateWebPageSchema,
} from '@/lib/seo'
import { marketingOgAbsolute } from '@/lib/open-graph'
import { authenticGalleryItems } from '@/lib/facebook-gallery'
import { galleryAccommodationImages } from '@/lib/residences-data'
import { BreadcrumbSchema, GalleryItemListSchema, WebPageSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const ogImage = marketingOgAbsolute(baseUrl, 'gallery')
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Gallery', url: constructCanonicalUrl('gallery') },
]
const galleryPageUrl = constructCanonicalUrl('gallery')
const galleryImagePaths = [
  ...authenticGalleryItems.slice(0, 14).map((i) => i.src),
  ...galleryAccommodationImages.slice(0, 4).map((i) => i.src),
  '/images/greater-kudu_card.png',
]
const galleryItemListSchema = generateGalleryItemListSchema(galleryImagePaths, galleryPageUrl)
const galleryWebPage = generateWebPageSchema({
  name: 'Gallery | MIWESU landscapes, lodge & wildlife',
  description:
    'Curated photography from MIWESU GAME FARM: Waterberg bushveld, Hunter\'s House, Rooibok Kraal, and plains game. Makoppa district, Thabazimbi.',
  url: galleryPageUrl,
})

export const metadata: Metadata = {
  title: 'Gallery | Visual Journey',
  description: 'Explore our gallery showcasing the beauty of MIWESU GAME FARM: landscapes, wildlife, and luxury accommodations in the Makoppa district, Thabazimbi, Limpopo. Arid Sweet Bushveld photography and game farm imagery.',
  keywords: ['Miwesu gallery', 'Makoppa district photos', 'Thabazimbi', 'Limpopo game farm photos', 'Thabazimbi wildlife', 'wildlife photography', 'game farm images', 'luxury accommodation photos', 'Arid Sweet Bushveld', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Gallery | Visual Journey',
    'Explore our gallery showcasing the beauty of MIWESU GAME FARM: landscapes, wildlife, and luxury accommodations in the Makoppa district.',
    constructCanonicalUrl('gallery'),
    ogImage
  ),
  twitter: generateTwitterCard(
    'Gallery | Visual Journey',
    'Explore our gallery showcasing the beauty of MIWESU GAME FARM in the Makoppa district.',
    ogImage
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
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema schema={galleryWebPage} />
      <GalleryItemListSchema schema={galleryItemListSchema} />
      {children}
    </>
  )
}


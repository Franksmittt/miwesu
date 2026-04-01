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
import { BreadcrumbSchema, GalleryItemListSchema, WebPageSchema } from '@/components/StructuredData'
import { getFacebookFolderGalleryEntries } from '@/lib/server/facebook-folder'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const ogImage = marketingOgAbsolute(baseUrl, 'gallery')
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Gallery', url: constructCanonicalUrl('gallery') },
]
const galleryPageUrl = constructCanonicalUrl('gallery')
const galleryWebPage = generateWebPageSchema({
  name: 'Gallery | MIWESU landscapes, lodge & wildlife',
  description:
    'Photography from MIWESU GAME FARM Facebook archive: Waterberg bushveld, lodge life, and plains game. Makoppa district, Thabazimbi.',
  url: galleryPageUrl,
})

export const metadata: Metadata = {
  title: 'Gallery | Visual Journey',
  description:
    'Photos from the MIWESU Facebook archive: Waterberg bushveld, lodge life, wildlife, and Makoppa district landscapes. Thabazimbi, Limpopo.',
  keywords: [
    'Miwesu gallery',
    'MIWESU Facebook photos',
    'Makoppa district photos',
    'Thabazimbi',
    'Limpopo game farm photos',
    'wildlife photography',
    'MIWESU GAME FARM',
  ],
  openGraph: generateOpenGraph(
    'Gallery | Visual Journey',
    'Photos from the MIWESU Facebook archive — bushveld, lodge, and wildlife in the Makoppa district.',
    constructCanonicalUrl('gallery'),
    ogImage
  ),
  twitter: generateTwitterCard(
    'Gallery | Visual Journey',
    'Photos from the MIWESU Facebook archive in the Makoppa district.',
    ogImage
  ),
  alternates: {
    canonical: constructCanonicalUrl('gallery'),
  },
}

export default async function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const folderEntries = await getFacebookFolderGalleryEntries()
  const galleryImagePaths =
    folderEntries.length > 0
      ? folderEntries.map((e) => e.src)
      : authenticGalleryItems.map((i) => i.src)
  const galleryItemListSchema = generateGalleryItemListSchema(galleryImagePaths.slice(0, 40), galleryPageUrl)

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema schema={galleryWebPage} />
      <GalleryItemListSchema schema={galleryItemListSchema} />
      {children}
    </>
  )
}


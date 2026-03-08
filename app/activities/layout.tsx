import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard, generateTouristTripSchema } from '@/lib/seo'
import { TouristTripSchema, BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Activities & Experiences', url: constructCanonicalUrl('activities') },
]

export const metadata: Metadata = {
  title: 'Activities & Experiences | Miwesu Pursuits',
  description: 'Discover diverse experiences at MIWESU GAME FARM: conservation harvest, photographic safaris, celestial safaris, mobile wellness, and wildlife viewing. Custom experiences tailored to your interests in the Makoppa district, Thabazimbi.',
  keywords: ['conservation harvest', 'photographic safari', 'celestial safari', 'wellness', 'wildlife viewing', 'game drives', 'Limpopo safari', 'plains game hunting packages', 'Makoppa district', 'Thabazimbi', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Activities & Experiences | Miwesu Pursuits',
    'Discover diverse experiences at MIWESU GAME FARM: conservation harvest, photographic safaris, celestial safaris, and more in the Makoppa district.',
    constructCanonicalUrl('activities'),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Activities & Experiences | Miwesu Pursuits',
    'Discover diverse experiences at MIWESU GAME FARM tailored to your interests in the Makoppa district.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('activities'),
  },
}

const sampleSafariItinerarySchema = generateTouristTripSchema({
  name: '10-Day Conservation Harvest Safari - Makoppa',
  description: 'Full itinerary at MIWESU Game Farm: arrival, orientation, hunting plains game and optional dangerous game, departure. Malaria-free Limpopo.',
  itinerary: [
    'Day 1: Arrival at OR Tambo, transfer to MIWESU Game Farm, Makoppa district.',
    'Day 2: Rifle sighting and orientation. Reserve briefing and conservation overview.',
    'Day 3–9: Conservation harvest (plains game and optional species). Photographic safaris, wellness, and activities as desired.',
    'Day 10: Departure. Transfer to OR Tambo or onward travel.',
  ],
})

export default function ActivitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <TouristTripSchema schema={sampleSafariItinerarySchema} />
      {children}
    </>
  )
}


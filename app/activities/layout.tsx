import { Metadata } from 'next'
import {
  constructCanonicalUrl,
  generateOpenGraph,
  generateTwitterCard,
  generateTouristTripSchema,
  generateWebPageSchema,
} from '@/lib/seo'
import { marketingOgAbsolute } from '@/lib/open-graph'
import { TouristTripSchema, BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const ogImage = marketingOgAbsolute(baseUrl, 'activities')
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Activities & Experiences', url: constructCanonicalUrl('activities') },
]

export const metadata: Metadata = {
  title: 'Malaria-Free Celestial Safaris & Conservation Harvest | Waterberg',
  description: 'Conservation harvesting (rifle and bow), photographic safaris, malaria-free celestial safaris, friends-and-family exclusive-use stays, wildlife viewing. MIWESU GAME FARM, Makoppa district, Thabazimbi. Waterberg.',
  keywords: ['conservation harvest', 'photographic safari', 'celestial safari', 'malaria-free', 'Waterberg', 'friends and family', 'Limpopo safari', 'Makoppa district', 'Thabazimbi', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Malaria-Free Celestial Safaris & Conservation Harvest | Waterberg',
    'Conservation harvesting (rifle and bow), photographic safaris, malaria-free celestial safaris, wildlife viewing. MIWESU, Makoppa district, Thabazimbi.',
    constructCanonicalUrl('activities'),
    ogImage
  ),
  twitter: generateTwitterCard(
    'Malaria-Free Celestial Safaris & Conservation Harvest | Waterberg',
    'Conservation harvest, photographic and celestial safaris. MIWESU, Makoppa district.',
    ogImage
  ),
  alternates: {
    canonical: constructCanonicalUrl('activities'),
  },
}

const activitiesWebPage = generateWebPageSchema({
  name: 'Activities & experiences | MIWESU Waterberg',
  description:
    'Conservation harvest, photographic safari, celestial stargazing, and exclusive-use stays in malaria-free Makoppa, Thabazimbi, Limpopo.',
  url: constructCanonicalUrl('activities'),
})

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
      <WebPageSchema schema={activitiesWebPage} />
      <TouristTripSchema schema={sampleSafariItinerarySchema} />
      {children}
    </>
  )
}


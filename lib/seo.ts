/**
 * SEO Helper Utilities
 * Provides consistent URL construction and canonical generation
 */

import { lodgeSummary } from '@/lib/residences-data'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

/**
 * Constructs a canonical URL with consistent trailing slash handling
 * @param path - The path segment (e.g., 'about', 'residences')
 * @returns Absolute canonical URL
 */
export function constructCanonicalUrl(path: string = ''): string {
  // Clean the input path
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Policy: No trailing slash (matching Next.js default)
  const FORCE_TRAILING_SLASH = false

  if (cleanPath === '') {
    return `${baseUrl}/` // Root always has slash
  }

  if (FORCE_TRAILING_SLASH) {
    return `${baseUrl}/${cleanPath.replace(/\/$/, '')}/`
  } else {
    return `${baseUrl}/${cleanPath.replace(/\/$/, '')}`
  }
}

/**
 * Generates Open Graph metadata
 */
export function generateOpenGraph(
  title: string,
  description: string,
  url: string,
  image?: string
) {
  const ogImage = image || `${baseUrl}/og-image.jpg`
  
  return {
    title,
    description,
    url,
    siteName: 'MIWESU GAME FARM',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: 'en_US',
    type: 'website' as const,
  }
}

/**
 * Generates Twitter Card metadata
 */
export function generateTwitterCard(
  title: string,
  description: string,
  image?: string
) {
  const twitterImage = image || `${baseUrl}/og-image.jpg`
  
  return {
    card: 'summary_large_image' as const,
    title,
    description,
    images: [twitterImage],
  }
}

/**
 * Generates JSON-LD structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MIWESU GAME FARM',
    alternateName: 'Miwesu',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'Luxury game farm and hunting lodge in the Makoppa district, Thabazimbi, Limpopo. Trophy hunting, plains game, malaria-free Waterberg. Private residences and conservation harvest. Dedicated to the African bushveld through sustainable utilization.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'D1432 Road, Makoppa District',
      addressLocality: 'Thabazimbi',
      addressRegion: 'Limpopo',
      postalCode: '0380',
      addressCountry: 'ZA',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+27730309679',
      contactType: 'Customer Service',
      email: 'guardians@miwesu.com',
      availableLanguage: 'English',
    },
    sameAs: [
      // Add social media URLs when available
    ],
    areaServed: [
      { '@type': 'State', name: 'Limpopo', containedInPlace: { '@type': 'Country', name: 'South Africa' } },
      { '@type': 'City', name: 'Thabazimbi' },
      { '@type': 'Place', name: 'Waterberg' },
    ],
  }
}

/**
 * Generates JSON-LD structured data for LocalBusiness (LodgingBusiness)
 * Accommodation counts from lodgeSummary (residences-data)
 */
export function generateLocalBusinessSchema() {
  const totalRooms = lodgeSummary.mainHouse.bedrooms + lodgeSummary.secondHouse.bedrooms
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'MIWESU GAME FARM',
    image: `${baseUrl}/og-image.jpg`,
    description: `Luxury game farm and hunting lodge in the Makoppa district, Thabazimbi, Limpopo. ${totalRooms} bedrooms, ${lodgeSummary.totalSleepers} sleepers across two private residences. Plains game and trophy hunting, malaria-free Waterberg. Conservation harvest, safari. D1432 Road, approximately 40km from Thabazimbi town.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'D1432 Road, Makoppa District',
      addressLocality: 'Thabazimbi',
      addressRegion: 'Limpopo',
      postalCode: '0380',
      addressCountry: 'ZA',
    },
    areaServed: [
      { '@type': 'State', name: 'Limpopo' },
      { '@type': 'City', name: 'Thabazimbi' },
      { '@type': 'Place', name: 'Waterberg' },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -24.4523956,
      longitude: 27.0450853,
    },
    telephone: '+27730309679',
    email: 'guardians@miwesu.com',
    url: baseUrl,
    priceRange: '$$$',
    numberOfRooms: totalRooms,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Swimming Pool',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Boma / Fire Pit',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Self-Catering Kitchen',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'WiFi (Lodge Only)',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: '4x4 Tracks',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Malaria-Free',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Private Residences',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Conservation Activities',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Wildlife Viewing',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Hunting Area',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Family Friendly',
        value: true,
      },
    ],
  }
}

/** Species schema params for Taxon / about entity (E-E-A-T, Knowledge Graph) */
export type SpeciesSchemaParams = {
  name: string
  scientificName: string
  wikidataId?: string
  wikipediaUrl?: string
}

/**
 * Generates JSON-LD for species page: WebPage with mainEntity about Taxon.
 * Links to Wikidata/Wikipedia for E-E-A-T and disambiguation.
 */
export function generateSpeciesTaxonSchema(
  params: SpeciesSchemaParams,
  pageUrl: string
) {
  const { name, scientificName, wikidataId, wikipediaUrl } = params
  const sameAs: string[] = []
  if (wikidataId) sameAs.push(`https://www.wikidata.org/wiki/${wikidataId}`)
  if (wikipediaUrl) sameAs.push(wikipediaUrl)

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${name} Hunting Guide | MIWESU Game Farm`,
    description: `Comprehensive guide to ${name} (${scientificName}) hunting in the Makoppa district, Limpopo. Trophy hunting, biology, and conservation at MIWESU.`,
    url: pageUrl,
    mainEntity: {
      '@type': 'Thing',
      name,
      alternateName: scientificName,
      description: `${name} (${scientificName}) - trophy hunting and conservation at MIWESU Game Farm, Makoppa district.`,
      ...(sameAs.length > 0 && { sameAs }),
    },
  }
}

/**
 * Product schema for a hunting package (rich snippets: price, availability).
 */
export function generateProductSchema(params: {
  name: string
  description: string
  sku: string
  price: number
  priceCurrency: 'USD' | 'ZAR'
  imageUrl?: string
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder'
  validFrom?: string
}) {
  const {
    name,
    description,
    sku,
    price,
    priceCurrency,
    imageUrl,
    availability = 'InStock',
    validFrom = '2026-01-01',
  } = params
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    sku,
    brand: { '@type': 'Brand', name: 'MIWESU GAME FARM' },
    ...(imageUrl && { image: imageUrl }),
    offers: {
      '@type': 'Offer',
      priceCurrency,
      price: String(price),
      availability: `https://schema.org/${availability}`,
      validFrom,
      url: `${baseUrl}/rates`,
    },
  }
}

/**
 * TouristTrip schema for safari itineraries (Google Travel, GEO).
 */
export function generateTouristTripSchema(params: {
  name: string
  description?: string
  itinerary: string[]
}) {
  const { name, description, itinerary } = params
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name,
    ...(description && { description }),
    touristType: 'Hunter',
    itinerary: {
      '@type': 'ItemList',
      itemListElement: itinerary.map((text, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: text,
      })),
    },
  }
}

/**
 * FAQPage schema for FAQ accordions (rich results in SERPs).
 */
export function generateFAQPageSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }
}

/**
 * BreadcrumbList schema for navigation hierarchy (SERP breadcrumbs).
 * @param items - Ordered list of { name, url }; url should be absolute.
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}


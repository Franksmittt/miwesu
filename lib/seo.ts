/**
 * SEO Helper Utilities
 * Provides consistent URL construction and canonical generation
 */

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
    description: 'An exclusive private residence collection in the heart of the Makoppa district, Thabazimbi. Dedicated to the preservation of the African bushveld through sustainable utilization and uncompromising luxury.',
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
  }
}

/**
 * Generates JSON-LD structured data for LocalBusiness
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'MIWESU GAME FARM',
    image: `${baseUrl}/og-image.jpg`,
    description: 'An exclusive private residence collection in the Makoppa district, Thabazimbi, Limpopo. Located in the Arid Sweet Bushveld, offering luxury accommodations, ethical hunting, conservation experiences, and family-friendly stays. D1432 Road, approximately 40km from Thabazimbi town.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'D1432 Road, Makoppa District',
      addressLocality: 'Thabazimbi',
      addressRegion: 'Limpopo',
      postalCode: '0380',
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -24.4523956,
      longitude: 27.0450853,
    },
    telephone: '+27730309679',
    email: 'guardians@miwesu.com',
    url: baseUrl,
    priceRange: '$$$',
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


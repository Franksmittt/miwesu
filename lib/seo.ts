/**
 * SEO Helper Utilities
 * Provides consistent URL construction and canonical generation
 */

import { lodgeSummary } from '@/lib/residences-data'
import type { SpeciesComparison } from '@/lib/species-comparison-data'
import type { WoodProduct } from '@/lib/wood-products'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'

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
  title: string, description: string, url: string, image?: string
) {
  const ogImage = image || `${baseUrl}/og-image.jpg`
  
  return {
    title, description, url, siteName: 'MIWESU GAME FARM', images: [
      {
        url: ogImage, width: 1200, height: 630, alt: title, }, ], locale: 'en_ZA', type: 'website' as const, }
}

/**
 * Generates Twitter Card metadata
 */
export function generateTwitterCard(
  title: string, description: string, image?: string
) {
  const twitterImage = image || `${baseUrl}/og-image.jpg`
  
  return {
    card: 'summary_large_image' as const, title, description, images: [twitterImage], }
}

/**
 * Generates JSON-LD structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org', '@type': 'Organization', '@id': `${baseUrl}/#organization`, name: 'MIWESU GAME FARM', alternateName: 'Miwesu', url: baseUrl, logo: `${baseUrl}/logo.png`, description: 'Luxury game farm and hunting lodge in the Makoppa district, Thabazimbi, Limpopo. Trophy hunting, plains game, malaria-free Waterberg. Private residences and conservation harvest. Dedicated to the African bushveld through sustainable utilization.', address: {
      '@type': 'PostalAddress', streetAddress: 'D1432 Road, Makoppa District', addressLocality: 'Thabazimbi', addressRegion: 'Limpopo', postalCode: '0380', addressCountry: 'ZA', }, contactPoint: {
      '@type': 'ContactPoint', telephone: '+27730309679', contactType: 'Customer Service', email: 'info@miwesu.co.za', availableLanguage: 'English', }, sameAs: [
      'https://safariclub.org', 'https://phasa.co.za', ], areaServed: [
      { '@type': 'State', name: 'Limpopo', containedInPlace: { '@type': 'Country', name: 'South Africa' } }, { '@type': 'City', name: 'Thabazimbi' }, { '@type': 'Place', name: 'Waterberg' }, ], }
}

/**
 * Generates JSON-LD structured data for LocalBusiness (LodgingBusiness)
 * Accommodation counts from lodgeSummary (residences-data)
 */
export function generateLocalBusinessSchema() {
  const totalRooms = lodgeSummary.mainHouse.bedrooms + lodgeSummary.secondHouse.bedrooms
  return {
    '@context': 'https://schema.org', '@type': 'LodgingBusiness', name: 'MIWESU GAME FARM', image: [
      `${baseUrl}/images/residences-homestead-main.jpg`, `${baseUrl}/images/residences-second-house-main.jpg`, `${baseUrl}/og-image.jpg`, ], description: `Luxury game farm and hunting lodge in the Makoppa district, Thabazimbi, Limpopo. ${totalRooms} bedrooms, ${lodgeSummary.totalSleepers} sleepers across two private residences. Plains game and trophy hunting, malaria-free Waterberg. Conservation harvest, safari. D1432 Road, approximately 40km from Thabazimbi town.`, address: {
      '@type': 'PostalAddress', streetAddress: 'D1432 Road, Makoppa District', addressLocality: 'Thabazimbi', addressRegion: 'Limpopo', postalCode: '0380', addressCountry: 'ZA', }, areaServed: [
      { '@type': 'State', name: 'Limpopo' }, { '@type': 'City', name: 'Thabazimbi' }, { '@type': 'Place', name: 'Waterberg' }, ], geo: {
      '@type': 'GeoCoordinates', latitude: -24.4523956, longitude: 27.0450853, }, telephone: '+27730309679', email: 'info@miwesu.co.za', url: baseUrl, priceRange: '$$$', numberOfRooms: totalRooms, openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification', dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', ], opens: '00:00', closes: '23:59', }, amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification', name: 'Swimming Pool', value: true, }, {
        '@type': 'LocationFeatureSpecification', name: 'Boma / Fire Pit', value: true, }, {
        '@type': 'LocationFeatureSpecification', name: 'Self-Catering Kitchen', value: true, }, {
        '@type': 'LocationFeatureSpecification', name: 'WiFi (Lodge Only)', value: true, }, {
        '@type': 'LocationFeatureSpecification', name: '4x4 Tracks', value: true, }, {
        '@type': 'LocationFeatureSpecification', name: 'Malaria-Free', value: true, }, {
        '@type': 'LocationFeatureSpecification', name: 'Private Residences', value: true, }, {
        '@type': 'LocationFeatureSpecification', name: 'Conservation Activities', value: true, }, {
        '@type': 'LocationFeatureSpecification', name: 'Wildlife Viewing', value: true, }, {
        '@type': 'LocationFeatureSpecification', name: 'Hunting Area', value: true, }, {
        '@type': 'LocationFeatureSpecification', name: 'Family Friendly', value: true, }, ], }
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
  params: SpeciesSchemaParams, pageUrl: string, options?: { primaryImage?: string }
) {
  const { name, scientificName, wikidataId, wikipediaUrl } = params
  const sameAs: string[] = []
  if (wikidataId) sameAs.push(`https://www.wikidata.org/wiki/${wikidataId}`)
  if (wikipediaUrl) sameAs.push(wikipediaUrl)
  const img = options?.primaryImage

  return {
    '@context': 'https://schema.org', '@type': 'WebPage', name: `${name} Hunting Guide | MIWESU Game Farm`, description: `Comprehensive guide to ${name} (${scientificName}) hunting in the Makoppa district, Limpopo. Trophy hunting, biology, and conservation at MIWESU.`, url: pageUrl, ...(img && { image: [img] }), mainEntity: {
      '@type': 'Thing', name, alternateName: scientificName, description: `${name} (${scientificName}) - trophy hunting and conservation at MIWESU Game Farm, Makoppa district.`, ...(sameAs.length > 0 && { sameAs }), ...(img && { image: img }), }, }
}

/**
 * Species power page: WebPage + schema.org Taxon (biological entity) + Product with Offer (enquiry-led hunt).
 * Use on /wildlife/[slug] canonical URLs.
 */
export function generateSpeciesPowerPageJsonLd(input: {
  name: string
  scientificName: string
  wikidataId?: string
  wikipediaUrl?: string
  pageUrl: string
  primaryImageAbsolute: string
  recommendedCaliber: string
  rowlandWardMinimum: string
  optimalSeason: string
}) {
  const {
    name, scientificName, wikidataId, wikipediaUrl, pageUrl, primaryImageAbsolute, recommendedCaliber, rowlandWardMinimum, optimalSeason, } = input

  const sameAs: string[] = []
  if (wikidataId) sameAs.push(`https://www.wikidata.org/wiki/${wikidataId}`)
  if (wikipediaUrl) sameAs.push(wikipediaUrl)

  const taxonId = `${pageUrl}#taxon`
  const webpageId = `${pageUrl}#webpage`
  const productId = `${pageUrl}#hunting-experience`

  return {
    '@context': 'https://schema.org', '@graph': [
      {
        '@type': 'WebPage', '@id': webpageId, url: pageUrl, name: `Hunt ${name} in Limpopo | MIWESU Conservation Harvest`, description: `Conservation harvest of ${name} (${scientificName}) in Makoppa, Thabazimbi, Limpopo, ${recommendedCaliber}.`, isPartOf: { '@id': `${baseUrl}/#website` }, primaryImageOfPage: {
          '@type': 'ImageObject', url: primaryImageAbsolute, }, about: { '@id': taxonId }, mainEntity: { '@id': taxonId }, mentions: [{ '@id': productId }], }, {
        '@type': 'Taxon', '@id': taxonId, name, alternateName: scientificName, taxonRank: 'species', ...(sameAs.length > 0 && { sameAs }), }, {
        '@type': 'Product', '@id': productId, name: `${name}, conservation harvest | MIWESU`, description: `Enquiry-led hunting experience for ${name} (${scientificName}) at MIWESU Game Farm, Makoppa district. Availability follows annual ecological census; no public per-species checkout.`, category: 'Hunting safari', brand: { '@type': 'Brand', name: 'MIWESU GAME FARM' }, image: primaryImageAbsolute, about: { '@id': taxonId }, additionalProperty: [
          { '@type': 'PropertyValue', name: 'Scientific name', value: scientificName }, { '@type': 'PropertyValue', name: 'Recommended caliber', value: recommendedCaliber }, { '@type': 'PropertyValue', name: 'Trophy benchmark', value: rowlandWardMinimum }, { '@type': 'PropertyValue', name: 'Optimal season', value: optimalSeason }, ], offers: {
          '@type': 'Offer', availability: 'https://schema.org/PreOrder', url: `${baseUrl}/book`, seller: { '@id': `${baseUrl}/#organization` }, priceCurrency: 'ZAR', description: 'Pricing on application. Request the Conservation Investment Guide and availability via enquiry.', }, }, ], }
}

/** WebSite JSON-LD, pair with Organization on homepage; strengthens brand entity. */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${baseUrl}/#website`, name: 'MIWESU GAME FARM', alternateName: ['Iron Eden', 'Miwesu Game Farm'], url: baseUrl, inLanguage: ['en-ZA', 'en'], publisher: {
      '@id': `${baseUrl}/#organization`, }, }
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
    name, description, sku, price, priceCurrency, imageUrl, availability = 'InStock', validFrom = '2026-01-01', } = params
  return {
    '@context': 'https://schema.org', '@type': 'Product', name, description, sku, brand: { '@type': 'Brand', name: 'MIWESU GAME FARM' }, ...(imageUrl && { image: imageUrl }), offers: {
      '@type': 'Offer', priceCurrency, price: String(price), availability: `https://schema.org/${availability}`, validFrom, url: `${baseUrl}/rates`, }, }
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
    '@context': 'https://schema.org', '@type': 'TouristTrip', name, ...(description && { description }), touristType: 'Hunter', itinerary: {
      '@type': 'ItemList', itemListElement: itinerary.map((text, i) => ({
        '@type': 'ListItem', position: i + 1, name: text, })), }, }
}

/**
 * FAQPage schema for FAQ accordions (rich results in SERPs).
 */
export function generateFAQPageSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question', name: question, acceptedAnswer: {
        '@type': 'Answer', text: answer, }, })), }
}

const faqMainEntity = (faqs: Array<{ question: string; answer: string }>) =>
  faqs.map(({ question, answer }) => ({
    '@type': 'Question' as const, name: question, acceptedAnswer: {
      '@type': 'Answer' as const, text: answer, }, }))

/**
 * Nested JSON-LD for home FAQ: WebPage → FAQPage (isPartOf), for GEO / rich results.
 */
export function generateHomePageFaqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  const pageUrl = `${baseUrl}/`
  return {
    '@context': 'https://schema.org', '@graph': [
      {
        '@type': 'WebPage', '@id': `${pageUrl}#webpage`, url: pageUrl, name: 'MIWESU Game Farm, Iron Eden', isPartOf: { '@id': `${baseUrl}/#website` }, }, {
        '@type': 'FAQPage', '@id': `${pageUrl}#faqpage`, isPartOf: { '@id': `${pageUrl}#webpage` }, mainEntity: faqMainEntity(faqs), }, ], }
}

/**
 * BreadcrumbList schema for navigation hierarchy (SERP breadcrumbs).
 * @param items - Ordered list of { name, url }; url should be absolute.
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, i) => ({
      '@type': 'ListItem', position: i + 1, name: item.name, item: item.url, })), }
}

/**
 * Article/BlogPosting schema for blog posts (rich results, E-E-A-T).
 */
export function generateArticleSchema(params: {
  headline: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  image?: string
}) {
  const { headline, description, url, datePublished, dateModified, image } = params
  return {
    '@context': 'https://schema.org', '@type': 'Article', headline, description, url, datePublished, ...(dateModified && { dateModified }), ...(image && { image: image.startsWith('http') ? image : `${baseUrl}${image.startsWith('/') ? '' : '/'}${image}` }), author: {
      '@type': 'Organization', name: 'MIWESU GAME FARM', url: baseUrl, }, publisher: {
      '@type': 'Organization', name: 'MIWESU GAME FARM', url: baseUrl, logo: {
        '@type': 'ImageObject', url: `${baseUrl}/logo.png`, }, }, }
}

function absoluteFromPath(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${p}`
}

/** /compare, WebPage with indexed URL including ?a=&b= */
export function generateCompareWebPageSchema(params: {
  pageUrl: string
  speciesA: SpeciesComparison
  speciesB: SpeciesComparison
}) {
  const { pageUrl, speciesA, speciesB } = params
  return {
    '@context': 'https://schema.org', '@type': 'WebPage', name: `${speciesA.name} vs ${speciesB.name} | Species comparison`, description: `Compare ${speciesA.name} (${speciesA.scientific}) and ${speciesB.name} (${speciesB.scientific}) for plains game hunting: habitat, caliber, Rowland Ward minimums, and biology. MIWESU Game Farm, Makoppa district, Limpopo.`, url: pageUrl, image: [absoluteFromPath(speciesA.image), absoluteFromPath(speciesB.image)], about: [
      {
        '@type': 'Thing', name: speciesA.name, alternateName: speciesA.scientific, url: `${baseUrl}/${speciesA.slug}`, }, {
        '@type': 'Thing', name: speciesB.name, alternateName: speciesB.scientific, url: `${baseUrl}/${speciesB.slug}`, }, ], isPartOf: { '@id': `${baseUrl}/#website` }, publisher: { '@id': `${baseUrl}/#organization` }, }
}

/** Generic WebPage for utility/marketing routes (E-E-A-T graph linkage). */
export function generateWebPageSchema(params: {
  name: string
  description: string
  url: string
  inLanguage?: string
}) {
  return {
    '@context': 'https://schema.org', '@type': 'WebPage', name: params.name, description: params.description, url: params.url, ...(params.inLanguage && { inLanguage: params.inLanguage }), isPartOf: { '@id': `${baseUrl}/#website` }, publisher: { '@id': `${baseUrl}/#organization` }, }
}

/** Wood catalogue, Product entities with ZAR offers (enquiry / wood page). */
export function generateWoodProductsGraph(products: WoodProduct[]) {
  const woodUrl = `${baseUrl}/wood`
  const nodes = products.map((p) => ({
    '@type': 'Product', name: `MIWESU ${p.name}${p.subtitle ? ` (${p.subtitle})` : ''}, ${p.weight}`, description: p.description, sku: p.id, brand: { '@type': 'Brand', name: 'MIWESU GAME FARM' }, image: absoluteFromPath(p.image), offers: {
      '@type': 'Offer', priceCurrency: 'ZAR', price: String(p.price), priceValidUntil: '2027-12-31', availability: 'https://schema.org/PreOrder', url: woodUrl, eligibleRegion: { '@type': 'Country', name: 'ZA' }, seller: { '@id': `${baseUrl}/#organization` }, eligibleQuantity: {
        '@type': 'QuantitativeValue', minValue: p.moq, unitText: p.unitLabel, }, }, }))
  return {
    '@context': 'https://schema.org', '@graph': nodes, }
}

/** Gallery, ItemList of representative lodge and bushveld imagery. */
export function generateGalleryItemListSchema(imagePaths: string[], pageUrl: string) {
  return {
    '@context': 'https://schema.org', '@type': 'ItemList', name: 'MIWESU Game Farm, photo gallery', description: 'Landscapes, lodge life, and wildlife from MIWESU in the Makoppa district, Limpopo.', numberOfItems: imagePaths.length, url: pageUrl, itemListElement: imagePaths.map((path, i) => ({
      '@type': 'ListItem', position: i + 1, item: {
        '@type': 'ImageObject', url: absoluteFromPath(path), contentUrl: absoluteFromPath(path), }, })), }
}


import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateSpeciesTaxonSchema,
  generateProductSchema,
  generateTouristTripSchema,
  generateFAQPageSchema,
  generateBreadcrumbSchema,
  type SpeciesSchemaParams,
} from '@/lib/seo'

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateOrganizationSchema()),
      }}
    />
  )
}

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateLocalBusinessSchema()),
      }}
    />
  )
}

export function SpeciesTaxonSchema({
  params,
  pageUrl,
}: {
  params: SpeciesSchemaParams
  pageUrl: string
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateSpeciesTaxonSchema(params, pageUrl)),
      }}
    />
  )
}

export function ProductSchema({
  schema,
}: {
  schema: ReturnType<typeof generateProductSchema>
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function TouristTripSchema({
  schema,
}: {
  schema: ReturnType<typeof generateTouristTripSchema>
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQPageSchema({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateFAQPageSchema(faqs)),
      }}
    />
  )
}

export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateBreadcrumbSchema(items)),
      }}
    />
  )
}


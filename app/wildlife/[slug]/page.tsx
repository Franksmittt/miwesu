import type { Metadata } from 'next'
import { permanentRedirect, notFound } from 'next/navigation'
import { SPECIES_BY_SLUG, SPECIES_SLUGS } from '@/lib/species-data'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { speciesOgAbsolute } from '@/lib/open-graph'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return SPECIES_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const species = SPECIES_BY_SLUG[slug]
  if (!species) return {}
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
  const canonicalUrl = constructCanonicalUrl(slug)
  const ogImage = speciesOgAbsolute(baseUrl, slug)
  const title = `${species.name} Hunting Guide | ${species.scientificName}`
  const description = `${species.name} (${species.scientificName}) at MIWESU Game Farm — Makoppa district, Thabazimbi. This URL redirects to the species page.`
  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    robots: { index: false, follow: true },
    openGraph: {
      ...generateOpenGraph(title, description, canonicalUrl, ogImage),
      locale: 'en_ZA',
    },
    twitter: generateTwitterCard(title, description, ogImage),
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  if (!SPECIES_BY_SLUG[slug]) notFound()
  permanentRedirect(`/${slug}`)
}

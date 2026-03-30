import { permanentRedirect, notFound } from 'next/navigation'
import { SPECIES_BY_SLUG, SPECIES_SLUGS } from '@/lib/species-data'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return SPECIES_SLUGS.map((slug) => ({ slug }))
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  if (!SPECIES_BY_SLUG[slug]) notFound()
  permanentRedirect(`/${slug}`)
}

import { SPECIES_SLUGS } from '@/lib/species-data'

export type SpeciesSlug = (typeof SPECIES_SLUGS)[number]

export type SpeciesPowerDeepDive = {
  ecologyAndBehavior: string
  trackingAndSpoor: string
  ethicalShotPlacement: string
}

/** Trophy, ballistics, season, and quick-fact slots for /wildlife/[slug] power pages. */
export type SpeciesHuntingSpecs = {
  heroImage: string
  rowlandWardMinimum: string
  averageTrophy: string
  recommendedCaliber: string
  optimalSeason: string
  heroEyebrow: string
  sciMinimum: string
  bulletConstruction: string
  liveWeight: string
  diet: string
}

/**
 * Species data for the Compare tool.
 * Attributes are aligned with research and individual species pages.
 */
export interface SpeciesComparison {
  name: string
  scientific: string
  slug: string
  image: string
  /** e.g. "190 – 315 kg" or "65 – 80 kg" */
  weightMale: string
  /** e.g. "120 – 210 kg" or "55 – 70 kg" */
  weightFemale: string
  /** e.g. "130 – 160 cm" */
  shoulderHeightMale: string
  /** e.g. "120 – 125 cm" */
  shoulderHeightFemale: string
  /** Grazer, Browser, Mixed */
  diet: string
  /** Short habitat description */
  habitat: string
  /** Recommended caliber */
  caliber: string
  /** Rowland Ward minimum */
  rowlandWard: string
  /** e.g. "15–20 years" */
  lifespan: string
  /** One-line trophy note */
  trophyNote?: string
}

export const speciesComparisonData: SpeciesComparison[] = [
  {
    name: 'Greater Kudu',
    scientific: 'Tragelaphus strepsiceros',
    slug: 'greater-kudu',
    image: '/images/greater-kudu_card.png',
    weightMale: '190 – 315 kg',
    weightFemale: '120 – 210 kg',
    shoulderHeightMale: '130 – 160 cm',
    shoulderHeightFemale: '120 – 125 cm',
    diet: 'Browser',
    habitat: 'Dense bushveld, mountain thickets, acacia woodland',
    caliber: '.300 Win Mag / .30-06',
    rowlandWard: '53 7/8" (horn length)',
    lifespan: '15–20 years',
    trophyNote: 'Spiral horns, 2–2.5 twists; “Grey Ghost”',
  },
  {
    name: 'Blue Wildebeest',
    scientific: 'Connochaetes taurinus',
    slug: 'wildebeest',
    image: '/images/4wildebeest-bull-portrait-02.png',
    weightMale: '250 – 290 kg',
    weightFemale: '150 – 260 kg',
    shoulderHeightMale: '127 – 152 cm',
    shoulderHeightFemale: '115 – 135 cm',
    diet: 'Grazer',
    habitat: 'Open plains, bushveld, sweetveld',
    caliber: '.375 H&H recommended',
    rowlandWard: '28 1/2" (horn width)',
    lifespan: '15–20 years',
    trophyNote: 'Heavy boss, brindled gnu',
  },
  {
    name: 'Impala',
    scientific: 'Aepyceros melampus',
    slug: 'impala',
    image: '/images/impala-ram-portrait-01.png',
    weightMale: '40 – 76 kg',
    weightFemale: '30 – 53 kg',
    shoulderHeightMale: '75 – 92 cm',
    shoulderHeightFemale: '70 – 85 cm',
    diet: 'Mixed (grazer & browser)',
    habitat: 'Bushveld fringe, ecotones, woodland edges',
    caliber: '.243 / 6.5mm Creedmoor',
    rowlandWard: '23 5/8"',
    lifespan: '12–15 years',
    trophyNote: 'Lyre-shaped horns; classic plains game',
  },
  {
    name: 'Gemsbok',
    scientific: 'Oryx gazella',
    slug: 'gemsbok',
    image: '/images/gemsbok-portrait-01.png',
    weightMale: '180 – 240 kg',
    weightFemale: '180 – 225 kg',
    shoulderHeightMale: '115 – 125 cm',
    shoulderHeightFemale: '115 – 125 cm',
    diet: 'Grazer (arid-adapted)',
    habitat: 'Kalahari, open scrub, bushveld',
    caliber: '.30-06 / .300 Win Mag',
    rowlandWard: '40" (cows often longer)',
    lifespan: '18–20 years',
    trophyNote: 'Straight rapier horns; black-and-white face',
  },
  {
    name: 'Warthog',
    scientific: 'Phacochoerus africanus',
    slug: 'warthog',
    image: '/images/warthog_card.png',
    weightMale: '50 – 150 kg',
    weightFemale: '45 – 75 kg',
    shoulderHeightMale: '64 – 85 cm',
    shoulderHeightFemale: '64 – 85 cm',
    diet: 'Omnivore (bulk grazer)',
    habitat: 'Waterholes, mud wallows, grassland',
    caliber: '7x57 Mauser / .308',
    rowlandWard: '13" (upper tusk)',
    lifespan: '12–15 years',
    trophyNote: 'Four tusks, facial warts',
  },
  {
    name: 'Blesbok',
    scientific: 'Damaliscus pygargus phillipsi',
    slug: 'blesbok',
    image: '/images/1blesbok-ram-portrait-01.png',
    weightMale: '65 – 80 kg',
    weightFemale: '55 – 70 kg',
    shoulderHeightMale: '84 – 100 cm',
    shoulderHeightFemale: '84 – 100 cm',
    diet: 'Grazer',
    habitat: 'Highveld grasslands, open plains, bushveld',
    caliber: '.308 Win',
    rowlandWard: '16 ½"',
    lifespan: '12–15 years',
    trophyNote: 'White blaze (divided); lyre horns both sexes',
  },
  {
    name: 'Bushbuck',
    scientific: 'Tragelaphus sylvaticus',
    slug: 'bushbuck',
    image: '/images/greater-kudu_card.png',
    weightMale: '45 – 80 kg',
    weightFemale: '25 – 60 kg',
    shoulderHeightMale: '70 – 90 cm',
    shoulderHeightFemale: '65 – 85 cm',
    diet: 'Browser',
    habitat: 'Riverine thickets, forest edges',
    caliber: '.308 Win',
    rowlandWard: '15"',
    lifespan: '12–15 years',
    trophyNote: 'Spiral horns (males); shy thicket dweller',
  },
  {
    name: 'Cape Buffalo',
    scientific: 'Syncerus caffer',
    slug: 'cape-buffalo',
    image: '/images/4wildebeest-bull-portrait-02.png',
    weightMale: '500 – 900 kg',
    weightFemale: '300 – 700 kg',
    shoulderHeightMale: '130 – 150 cm',
    shoulderHeightFemale: '130 – 150 cm',
    diet: 'Grazer',
    habitat: 'Dense bushveld, water-dependent',
    caliber: '.375 H&H minimum',
    rowlandWard: '40" (spread)',
    lifespan: '15–20 years',
    trophyNote: 'Fused boss; dangerous game',
  },
  {
    name: 'Dapple Impala',
    scientific: 'Aepyceros melampus',
    slug: 'dapple-impala',
    image: '/images/impala-ram-portrait-01.png',
    weightMale: '40 – 76 kg',
    weightFemale: '30 – 53 kg',
    shoulderHeightMale: '75 – 92 cm',
    shoulderHeightFemale: '70 – 85 cm',
    diet: 'Mixed',
    habitat: 'Bushveld fringe (colour variant)',
    caliber: '.243 / 6.5mm Creedmoor',
    rowlandWard: '23 5/8"',
    lifespan: '12–15 years',
    trophyNote: 'Piebald/colour variant of impala',
  },
  {
    name: 'Golden Wildebeest',
    scientific: 'Connochaetes taurinus',
    slug: 'golden-wildebeest',
    image: '/images/4wildebeest-bull-portrait-02.png',
    weightMale: '180 – 270 kg',
    weightFemale: '180 – 260 kg',
    shoulderHeightMale: '145 – 152 cm',
    shoulderHeightFemale: '108 – 135 cm',
    diet: 'Grazer',
    habitat: 'Open plains, bushveld (colour variant)',
    caliber: '.375 H&H recommended',
    rowlandWard: '28 1/2" (width)',
    lifespan: '15–20 years',
    trophyNote: 'Recessive golden/copper colour variant',
  },
  {
    name: 'Springbok',
    scientific: 'Antidorcas marsupialis',
    slug: 'springbok',
    image: '/images/4wildebeest-bull-portrait-02.png',
    weightMale: '33 – 50 kg',
    weightFemale: '25 – 40 kg',
    shoulderHeightMale: '71 – 86 cm',
    shoulderHeightFemale: '71 – 84 cm',
    diet: 'Mixed (grazer & browser)',
    habitat: 'Open plains, arid grassland, bushveld',
    caliber: '.243 Win',
    rowlandWard: '14"',
    lifespan: '10–12 years',
    trophyNote: 'Lyre horns; pronking; dorsal fold',
  },
  {
    name: 'Red Hartebeest',
    scientific: 'Alcelaphus buselaphus caama',
    slug: 'red-hartebeest',
    image: '/images/4wildebeest-bull-portrait-02.png',
    weightMale: '150 – 160 kg (to 200)',
    weightFemale: '~120 kg',
    shoulderHeightMale: '130 – 135 cm',
    shoulderHeightFemale: '120 – 125 cm',
    diet: 'Grazer',
    habitat: 'Open plains, grassland, bushveld',
    caliber: '.30-06',
    rowlandWard: '18" (23" RW min)',
    lifespan: '15–20 years',
    trophyNote: 'Lyre horns; elongated face; “heart-beast”',
  },
  {
    name: 'Lechwe',
    scientific: 'Kobus leche',
    slug: 'lechwe',
    image: '/images/impala-ram-portrait-01.png',
    weightMale: '85 – 120 kg',
    weightFemale: '60 – 90 kg',
    shoulderHeightMale: '90 – 100 cm',
    shoulderHeightFemale: '85 – 95 cm',
    diet: 'Grazer',
    habitat: 'Wetlands, floodplains, water edges',
    caliber: '.270 Win',
    rowlandWard: '20"',
    lifespan: '10–15 years',
    trophyNote: 'Long, lyre horns; semi-aquatic',
  },
  {
    name: 'Livingstone Eland',
    scientific: 'Taurotragus oryx livingstonei',
    slug: 'livingstone-eland',
    image: '/images/greater-kudu_card.png',
    weightMale: '400 – 942 kg',
    weightFemale: '300 – 600 kg',
    shoulderHeightMale: '150 – 175 cm',
    shoulderHeightFemale: '140 – 160 cm',
    diet: 'Browser (mixed)',
    habitat: 'Open bushveld, woodland',
    caliber: '.375 H&H',
    rowlandWard: '30"',
    lifespan: '15–20 years',
    trophyNote: 'Largest antelope; spiral horns',
  },
]

export function getSpeciesComparisonBySlug(slug: string): SpeciesComparison | undefined {
  return speciesComparisonData.find((s) => s.slug === slug)
}

/** Valid slugs for ?a= & ?b= on /compare; ensures two distinct species. */
export function resolveCompareSlugs(
  rawA?: string | null,
  rawB?: string | null
): { slugA: string; slugB: string; speciesA: SpeciesComparison; speciesB: SpeciesComparison } {
  const find = (slug: string) => speciesComparisonData.find((s) => s.slug === slug)
  const defaultA = speciesComparisonData[0]
  const defaultB = speciesComparisonData[1]
  let slugA = rawA && find(rawA) ? rawA : defaultA.slug
  let slugB = rawB && find(rawB) ? rawB : defaultB.slug
  if (slugA === slugB) {
    const alt = speciesComparisonData.find((s) => s.slug !== slugA)
    slugB = alt?.slug ?? defaultB.slug
  }
  const speciesA = find(slugA)!
  const speciesB = find(slugB)!
  return { slugA, slugB, speciesA, speciesB }
}

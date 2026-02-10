/**
 * Canonical species data for SEO: metadata and Schema.org (Taxon/Knowledge Graph).
 * Used by species layouts and structured data.
 */

export type SpeciesRecord = {
  name: string
  scientificName: string
  wikidataId?: string
  wikipediaUrl?: string
}

export const SPECIES_BY_SLUG: Record<string, SpeciesRecord> = {
  'greater-kudu': {
    name: 'Greater Kudu',
    scientificName: 'Tragelaphus strepsiceros',
    wikidataId: 'Q184293',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Greater_kudu',
  },
  wildebeest: {
    name: 'Blue Wildebeest',
    scientificName: 'Connochaetes taurinus',
    wikidataId: 'Q328809',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Blue_wildebeest',
  },
  'golden-wildebeest': {
    name: 'Golden Wildebeest',
    scientificName: 'Connochaetes taurinus',
    wikidataId: 'Q328809',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Blue_wildebeest',
  },
  impala: {
    name: 'Impala',
    scientificName: 'Aepyceros melampus',
    wikidataId: 'Q132576',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Impala',
  },
  'dapple-impala': {
    name: 'Dapple Impala',
    scientificName: 'Aepyceros melampus',
    wikidataId: 'Q132576',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Impala',
  },
  gemsbok: {
    name: 'Gemsbok',
    scientificName: 'Oryx gazella',
    wikidataId: 'Q207043',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Gemsbok',
  },
  warthog: {
    name: 'Warthog',
    scientificName: 'Phacochoerus africanus',
    wikidataId: 'Q178114',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Common_warthog',
  },
  blesbok: {
    name: 'Blesbok',
    scientificName: 'Damaliscus pygargus phillipsi',
    wikidataId: 'Q83792',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Blesbok',
  },
  bushbuck: {
    name: 'Bushbuck',
    scientificName: 'Tragelaphus sylvaticus',
    wikidataId: 'Q83790',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Bushbuck',
  },
  'cape-buffalo': {
    name: 'Cape Buffalo',
    scientificName: 'Syncerus caffer',
    wikidataId: 'Q177302',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/African_buffalo',
  },
  lechwe: {
    name: 'Lechwe',
    scientificName: 'Kobus leche',
    wikidataId: 'Q180110',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Lechwe',
  },
  'livingstone-eland': {
    name: 'Livingstone Eland',
    scientificName: 'Taurotragus oryx livingstonii',
    wikidataId: 'Q184292',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Common_eland',
  },
  'red-hartebeest': {
    name: 'Red Hartebeest',
    scientificName: 'Alcelaphus buselaphus caama',
    wikidataId: 'Q83794',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Red_hartebeest',
  },
  springbok: {
    name: 'Springbok',
    scientificName: 'Antidorcas marsupialis',
    wikidataId: 'Q180112',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Springbok',
  },
}

export const SPECIES_SLUGS = Object.keys(SPECIES_BY_SLUG) as Array<keyof typeof SPECIES_BY_SLUG>

/**
 * Default rate items for Master Pricelist when DB is not connected.
 * Seed data matches prisma/seed.ts.
 */

export type RateCategory = 'ACCOMMODATION' | 'SPECIES' | 'ACTIVITY' | 'EXTRA'

export interface RateItemRecord {
  id: string
  category: RateCategory
  name: string
  description: string | null
  priceZAR: number
  priceUSD: number
  isAvailable: boolean
  sortOrder: number
}

const SPECIES = [
  'Greater Kudu', 'Impala', 'Dapple Impala', 'Blesbok', 'White Blesbok', 'Springbok',
  'Blue Wildebeest', 'Golden Wildebeest', 'Livingstone Eland', 'Nyala', 'Zebra',
  'Waterbuck', 'Warthog', 'Bush Pig', 'Red Hartebeest', 'Gemsbok', 'Sable', 'Roan',
  'Ostrich', 'Bushbuck', 'Lechwe', 'Cape Buffalo',
]

const SPECIES_PRICES_ZAR: Record<string, number> = {
  'Greater Kudu': 0,
  Impala: 6000,
  'Dapple Impala': 25000,
  Blesbok: 5500,
  'White Blesbok': 10000,
  Springbok: 0,
  'Blue Wildebeest': 7500,
  'Golden Wildebeest': 25000,
  'Livingstone Eland': 0,
  Nyala: 20000,
  Zebra: 9500,
  Waterbuck: 30000,
  Warthog: 1500,
  'Bush Pig': 5500,
  'Red Hartebeest': 16000,
  Gemsbok: 25000,
  Sable: 0,
  Roan: 0,
  Ostrich: 9500,
  Bushbuck: 0,
  Lechwe: 0,
  'Cape Buffalo': 0,
}

const SPECIES_DESCRIPTIONS: Record<string, string> = {
  'Blue Wildebeest': 'Over 27" R15,000',
  Nyala: 'Over 26" R30,000',
  Sable: 'R2,000 per inch',
}

export const DEFAULT_EXCHANGE_RATE = 18.5

export function getDefaultRateItems(): RateItemRecord[] {
  const items: RateItemRecord[] = []

  SPECIES.forEach((name, i) => {
    const priceZAR = SPECIES_PRICES_ZAR[name] ?? 0
    const desc = SPECIES_DESCRIPTIONS[name] ?? 'Trophy fee (subject to availability)'
    items.push({
      id: `species-${name.replace(/\s+/g, '-').toLowerCase()}`,
      category: 'SPECIES',
      name,
      description: desc,
      priceZAR,
      priceUSD: Math.round(priceZAR / 18.5),
      isAvailable: true,
      sortOrder: i,
    })
  })

  items.push(
    {
      id: 'acc-hunters-house',
      category: 'ACCOMMODATION',
      name: "Hunter's House",
      description: 'Per person per night. Min 4, max 16. Min 3 nights.',
      priceZAR: 850,
      priceUSD: 46,
      isAvailable: true,
      sortOrder: 0,
    },
    {
      id: 'acc-rooibok-kraal',
      category: 'ACCOMMODATION',
      name: 'Rooibok Kraal',
      description: 'Sleeps 6. Rates on request.',
      priceZAR: 0,
      priceUSD: 0,
      isAvailable: true,
      sortOrder: 1,
    },
    {
      id: 'activity-conservation',
      category: 'ACTIVITY',
      name: 'Conservation Harvest',
      description: 'Trophy fees per species. Wounded full price. Missed/dust/warning shots R250.',
      priceZAR: 0,
      priceUSD: 0,
      isAvailable: true,
      sortOrder: 0,
    },
    {
      id: 'activity-safari',
      category: 'ACTIVITY',
      name: 'Game drives & walking safaris',
      description: 'Per person when itemised; often arranged with stay',
      priceZAR: 2500,
      priceUSD: 135,
      isAvailable: true,
      sortOrder: 1,
    },
    {
      id: 'extra-vehicle-fee',
      category: 'EXTRA',
      name: 'Vehicle (bakkie) fee',
      description: 'Per booking',
      priceZAR: 750,
      priceUSD: 41,
      isAvailable: true,
      sortOrder: 0,
    },
    { id: 'extra-sekelbos-10', category: 'EXTRA', name: 'Premium Sekelbos 10kg', description: 'MOQ 50 bags', priceZAR: 25, priceUSD: 1, isAvailable: true, sortOrder: 1 },
    { id: 'extra-sekelbos-20', category: 'EXTRA', name: 'Premium Sekelbos 20kg', description: 'MOQ 40 bags', priceZAR: 50, priceUSD: 3, isAvailable: true, sortOrder: 2 },
    { id: 'extra-sekelbos-30', category: 'EXTRA', name: 'Premium Sekelbos 30kg', description: 'MOQ 20 bags', priceZAR: 70, priceUSD: 4, isAvailable: true, sortOrder: 3 },
    { id: 'extra-geelhaak-10', category: 'EXTRA', name: 'Geelhaak Hardwood 10kg', description: 'MOQ 50 bags', priceZAR: 25, priceUSD: 1, isAvailable: true, sortOrder: 4 },
    { id: 'extra-geelhaak-20', category: 'EXTRA', name: 'Geelhaak Hardwood 20kg', description: 'MOQ 40 bags', priceZAR: 50, priceUSD: 3, isAvailable: true, sortOrder: 5 },
    { id: 'extra-geelhaak-30', category: 'EXTRA', name: 'Geelhaak Hardwood 30kg', description: 'MOQ 20 bags', priceZAR: 70, priceUSD: 4, isAvailable: true, sortOrder: 6 },
    { id: 'extra-braaimix-10', category: 'EXTRA', name: 'The Ultimate Braai Mix 10kg', description: 'MOQ 50 bags', priceZAR: 25, priceUSD: 1, isAvailable: true, sortOrder: 7 },
    { id: 'extra-braaimix-20', category: 'EXTRA', name: 'The Ultimate Braai Mix 20kg', description: 'MOQ 40 bags', priceZAR: 50, priceUSD: 3, isAvailable: true, sortOrder: 8 },
    { id: 'extra-braaimix-30', category: 'EXTRA', name: 'The Ultimate Braai Mix 30kg', description: 'MOQ 20 bags', priceZAR: 70, priceUSD: 4, isAvailable: true, sortOrder: 9 },
  )

  return items.sort((a, b) => a.sortOrder - b.sortOrder)
}

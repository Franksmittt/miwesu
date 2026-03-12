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
  'Greater Kudu', 'Impala', 'Blesbok', 'Springbok', 'Blue Wildebeest', 'Red Hartebeest',
  'Bushbuck', 'Lechwe', 'Gemsbok', 'Warthog', 'Cape Buffalo', 'Dapple Impala',
  'Golden Wildebeest', 'Livingstone Eland',
]

export const DEFAULT_EXCHANGE_RATE = 18.5

export function getDefaultRateItems(): RateItemRecord[] {
  const items: RateItemRecord[] = []

  SPECIES.forEach((name, i) => {
    items.push({
      id: `species-${name.replace(/\s+/g, '-').toLowerCase()}`,
      category: 'SPECIES',
      name,
      description: 'Trophy fee',
      priceZAR: 0,
      priceUSD: 0,
      isAvailable: true,
      sortOrder: i,
    })
  })

  items.push(
    {
      id: 'acc-homestead',
      category: 'ACCOMMODATION',
      name: 'The Homestead',
      description: 'Sleeps 16, per night',
      priceZAR: 0,
      priceUSD: 0,
      isAvailable: true,
      sortOrder: 0,
    },
    {
      id: 'acc-stone-villa',
      category: 'ACCOMMODATION',
      name: 'The Stone Villa',
      description: 'Sleeps 6, per night',
      priceZAR: 0,
      priceUSD: 0,
      isAvailable: true,
      sortOrder: 1,
    },
    {
      id: 'activity-conservation',
      category: 'ACTIVITY',
      name: 'Conservation Harvest',
      description: 'Experience fee',
      priceZAR: 0,
      priceUSD: 0,
      isAvailable: true,
      sortOrder: 0,
    },
    {
      id: 'activity-safari',
      category: 'ACTIVITY',
      name: 'Photographic Safari',
      description: 'Per person',
      priceZAR: 0,
      priceUSD: 0,
      isAvailable: true,
      sortOrder: 1,
    },
    {
      id: 'extra-firewood',
      category: 'EXTRA',
      name: 'MIWESU Premium Firewood',
      description: 'Per batch',
      priceZAR: 0,
      priceUSD: 0,
      isAvailable: true,
      sortOrder: 0,
    }
  )

  return items.sort((a, b) => a.sortOrder - b.sortOrder)
}

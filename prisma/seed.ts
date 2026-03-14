import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const SPECIES = [
  'Greater Kudu', 'Impala', 'Blesbok', 'Springbok', 'Blue Wildebeest', 'Red Hartebeest',
  'Bushbuck', 'Lechwe', 'Gemsbok', 'Warthog', 'Cape Buffalo', 'Dapple Impala',
  'Golden Wildebeest', 'Livingstone Eland',
]

async function main() {
  await prisma.unit.upsert({
    where: { name: 'The Homestead' },
    update: {},
    create: {
      name: 'The Homestead',
      maxGuests: 16,
      description:
        'Main lodge. Four bedrooms (two lower sleeping 3 each, two upper sleeping 5 each), open-plan kitchen and living, first patio, boma and braai, lapa with pool table and darts, braai under the trees, trampoline, jungle gym and swimming pool with slide.',
      basePricePerNight: 0, // Not shown on public site; pricelist uses RateItem
    },
  })

  await prisma.unit.upsert({
    where: { name: 'The Stone Villa' },
    update: {},
    create: {
      name: 'The Stone Villa',
      maxGuests: 6,
      description:
        'Near the pool. Open-plan kitchen and living, master bedroom with en-suite (shower), second bedroom with two bunk beds (sleeps 4) and en-suite (bathtub). Outdoor braai.',
      basePricePerNight: 0, // Not shown on public site; pricelist uses RateItem
    },
  })

  await prisma.systemSettings.upsert({
    where: { id: 'global' },
    update: {},
    create: { id: 'global', exchangeRateZarUsd: 18.5 },
  })

  // Species: mock trophy fees (ZAR); USD ≈ ZAR/18.5. For admin pricelist only; not shown on public site.
  const SPECIES_PRICES_ZAR: Record<string, number> = {
    'Greater Kudu': 18500,
    'Impala': 3500,
    'Blesbok': 4500,
    'Springbok': 4000,
    'Blue Wildebeest': 7500,
    'Red Hartebeest': 6500,
    'Bushbuck': 7500,
    'Lechwe': 8500,
    'Gemsbok': 12000,
    'Warthog': 3500,
    'Cape Buffalo': 95000,
    'Dapple Impala': 6500,
    'Golden Wildebeest': 22000,
    'Livingstone Eland': 45000,
  }
  for (let i = 0; i < SPECIES.length; i++) {
    const name = SPECIES[i]
    const priceZAR = SPECIES_PRICES_ZAR[name] ?? 0
    await prisma.rateItem.upsert({
      where: { category_name: { category: 'SPECIES', name } },
      update: { sortOrder: i, priceZAR, priceUSD: Math.round(priceZAR / 18.5) },
      create: {
        category: 'SPECIES',
        name,
        description: 'Trophy fee',
        priceZAR,
        priceUSD: Math.round(priceZAR / 18.5),
        isAvailable: true,
        sortOrder: i,
      },
    })
  }

  await prisma.rateItem.upsert({
    where: { category_name: { category: 'ACCOMMODATION', name: 'The Homestead' } },
    update: { priceZAR: 25000, priceUSD: 1351 },
    create: {
      category: 'ACCOMMODATION',
      name: 'The Homestead',
      description: 'Sleeps 16, per night',
      priceZAR: 25000,
      priceUSD: 1351,
      isAvailable: true,
      sortOrder: 0,
    },
  })
  await prisma.rateItem.upsert({
    where: { category_name: { category: 'ACCOMMODATION', name: 'The Stone Villa' } },
    update: { priceZAR: 12000, priceUSD: 649 },
    create: {
      category: 'ACCOMMODATION',
      name: 'The Stone Villa',
      description: 'Sleeps 6, per night',
      priceZAR: 12000,
      priceUSD: 649,
      isAvailable: true,
      sortOrder: 1,
    },
  })

  await prisma.rateItem.upsert({
    where: { category_name: { category: 'ACTIVITY', name: 'Conservation Harvest' } },
    update: { priceZAR: 0, priceUSD: 0 },
    create: {
      category: 'ACTIVITY',
      name: 'Conservation Harvest',
      description: 'Trophy fees per species; see species list',
      priceZAR: 0,
      priceUSD: 0,
      isAvailable: true,
      sortOrder: 0,
    },
  })
  await prisma.rateItem.upsert({
    where: { category_name: { category: 'ACTIVITY', name: 'Photographic Safari' } },
    update: { priceZAR: 2500, priceUSD: 135 },
    create: {
      category: 'ACTIVITY',
      name: 'Photographic Safari',
      description: 'Per person',
      priceZAR: 2500,
      priceUSD: 135,
      isAvailable: true,
      sortOrder: 1,
    },
  })
  await prisma.rateItem.upsert({
    where: { category_name: { category: 'EXTRA', name: 'MIWESU Premium Firewood' } },
    update: { priceZAR: 450, priceUSD: 24 },
    create: {
      category: 'EXTRA',
      name: 'MIWESU Premium Firewood',
      description: 'Per batch',
      priceZAR: 450,
      priceUSD: 24,
      isAvailable: true,
      sortOrder: 0,
    },
  })

  console.log('Seeded units, SystemSettings, RateItems (accommodation, 14 species, activities, extra)')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

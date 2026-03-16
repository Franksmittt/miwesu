import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Display names: Hunter's House (was The Homestead), Rooibok Kraal (was The Stone Villa)
const HUNTERS_HOUSE = "Hunter's House"
const ROOIBOK_KRAAL = 'Rooibok Kraal'

async function main() {
  // Migrate existing unit names so booking unitIds remain valid
  await prisma.unit.updateMany({ where: { name: 'The Homestead' }, data: { name: HUNTERS_HOUSE } })
  await prisma.unit.updateMany({ where: { name: 'The Stone Villa' }, data: { name: ROOIBOK_KRAAL } })

  await prisma.unit.upsert({
    where: { name: HUNTERS_HOUSE },
    update: {
      maxGuests: 16,
      description:
        "Hunter's House. Main lodge. Four bedrooms (two lower sleeping 3 each, two upper sleeping 5 each), open-plan kitchen and living, first patio, boma and braai, lapa with pool table and darts, braai under the trees, trampoline, jungle gym and swimming pool with slide. Min 4, max 16. Additional sleeping space for 4. R850 per person per night. Min 3 nights.",
      basePricePerNight: 850,
    },
    create: {
      name: HUNTERS_HOUSE,
      maxGuests: 16,
      description:
        "Hunter's House. Main lodge. Four bedrooms (two lower sleeping 3 each, two upper sleeping 5 each), open-plan kitchen and living, first patio, boma and braai, lapa with pool table and darts, braai under the trees, trampoline, jungle gym and swimming pool with slide. Min 4, max 16. R850 per person per night. Min 3 nights.",
      basePricePerNight: 850,
    },
  })

  await prisma.unit.upsert({
    where: { name: ROOIBOK_KRAAL },
    update: {
      maxGuests: 6,
      description:
        'Rooibok Kraal. Near the pool. Open-plan kitchen and living, master bedroom with en-suite (shower), second bedroom with two bunk beds (sleeps 4) and en-suite (bathtub). Outdoor braai. Rates on request.',
      basePricePerNight: 0,
    },
    create: {
      name: ROOIBOK_KRAAL,
      maxGuests: 6,
      description:
        'Rooibok Kraal. Near the pool. Open-plan kitchen and living, master bedroom with en-suite (shower), second bedroom with two bunk beds (sleeps 4) and en-suite (bathtub). Outdoor braai. Rates on request.',
      basePricePerNight: 0,
    },
  })

  await prisma.systemSettings.upsert({
    where: { id: 'global' },
    update: {},
    create: { id: 'global', exchangeRateZarUsd: 18.5 },
  })

  // Species: Rooibok Kraal pricelist (ZAR). Not shown on public site; admin pricelist PDF only.
  const SPECIES = [
    'Greater Kudu',
    'Impala',
    'Dapple Impala',
    'Blesbok',
    'White Blesbok',
    'Springbok',
    'Blue Wildebeest',
    'Golden Wildebeest',
    'Livingstone Eland',
    'Nyala',
    'Zebra',
    'Waterbuck',
    'Warthog',
    'Bush Pig',
    'Red Hartebeest',
    'Gemsbok',
    'Sable',
    'Roan',
    'Ostrich',
    'Bushbuck',
    'Lechwe',
    'Cape Buffalo',
  ]
  const SPECIES_PRICES_ZAR: Record<string, number> = {
    'Greater Kudu': 0, // N/A
    Impala: 6000,
    'Dapple Impala': 25000, // Black Impala
    Blesbok: 5500,
    'White Blesbok': 10000,
    Springbok: 0,
    'Blue Wildebeest': 7500,
    'Golden Wildebeest': 25000,
    'Livingstone Eland': 0, // N/A
    Nyala: 20000,
    Zebra: 9500,
    Waterbuck: 30000,
    Warthog: 1500,
    'Bush Pig': 5500,
    'Red Hartebeest': 16000,
    Gemsbok: 25000,
    Sable: 0, // per inch
    Roan: 0, // N/A
    Ostrich: 9500,
    Bushbuck: 0,
    Lechwe: 0,
    'Cape Buffalo': 0,
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
        description: 'Trophy fee (subject to availability)',
        priceZAR,
        priceUSD: Math.round(priceZAR / 18.5),
        isAvailable: true,
        sortOrder: i,
      },
    })
  }

  // Accommodation rate items (for pricelist; booking uses calculation)
  await prisma.rateItem.upsert({
    where: { category_name: { category: 'ACCOMMODATION', name: HUNTERS_HOUSE } },
    update: { priceZAR: 850, priceUSD: 46, description: 'Per person per night. Min 4, max 16. Min 3 nights.' },
    create: {
      category: 'ACCOMMODATION',
      name: HUNTERS_HOUSE,
      description: 'Per person per night. Min 4, max 16. Min 3 nights.',
      priceZAR: 850,
      priceUSD: 46,
      isAvailable: true,
      sortOrder: 0,
    },
  })
  await prisma.rateItem.upsert({
    where: { category_name: { category: 'ACCOMMODATION', name: ROOIBOK_KRAAL } },
    update: { priceZAR: 0, priceUSD: 0, description: 'Sleeps 6. Rates on request.' },
    create: {
      category: 'ACCOMMODATION',
      name: ROOIBOK_KRAAL,
      description: 'Sleeps 6. Rates on request.',
      priceZAR: 0,
      priceUSD: 0,
      isAvailable: true,
      sortOrder: 1,
    },
  })

  // Migrate old rate item names if they exist
  await prisma.rateItem.updateMany({
    where: { category: 'ACCOMMODATION', name: 'The Homestead' },
    data: { name: HUNTERS_HOUSE },
  })
  await prisma.rateItem.updateMany({
    where: { category: 'ACCOMMODATION', name: 'The Stone Villa' },
    data: { name: ROOIBOK_KRAAL },
  })

  await prisma.rateItem.upsert({
    where: { category_name: { category: 'ACTIVITY', name: 'Conservation Harvest' } },
    update: { priceZAR: 0, priceUSD: 0 },
    create: {
      category: 'ACTIVITY',
      name: 'Conservation Harvest',
      description: 'Trophy fees per species; see species list. Wounded animals full price. Missed/dust/warning shots R250.',
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
    where: { category_name: { category: 'EXTRA', name: 'Vehicle (bakkie) fee' } },
    update: { priceZAR: 750, priceUSD: 41 },
    create: {
      category: 'EXTRA',
      name: 'Vehicle (bakkie) fee',
      description: 'Per booking',
      priceZAR: 750,
      priceUSD: 41,
      isAvailable: true,
      sortOrder: 0,
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
      sortOrder: 1,
    },
  })

  console.log('Seeded units (Hunter\'s House, Rooibok Kraal), SystemSettings, RateItems (accommodation, species, activities, extras)')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

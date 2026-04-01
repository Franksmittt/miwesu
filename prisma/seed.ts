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
    Sable: 0, // R2,000 per inch
    Roan: 0, // N/A
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
  for (let i = 0; i < SPECIES.length; i++) {
    const name = SPECIES[i]
    const priceZAR = SPECIES_PRICES_ZAR[name] ?? 0
    const desc = SPECIES_DESCRIPTIONS[name] ?? 'Trophy fee (subject to availability)'
    await prisma.rateItem.upsert({
      where: { category_name: { category: 'SPECIES', name } },
      update: { sortOrder: i, priceZAR, priceUSD: Math.round(priceZAR / 18.5), description: desc },
      create: {
        category: 'SPECIES',
        name,
        description: desc,
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
  await prisma.rateItem.updateMany({
    where: { category: 'ACTIVITY', name: 'Photographic Safari' },
    data: {
      name: 'Game drives & walking safaris',
      description: 'Per person when itemised; often arranged with stay',
    },
  })
  await prisma.rateItem.upsert({
    where: { category_name: { category: 'ACTIVITY', name: 'Game drives & walking safaris' } },
    update: { priceZAR: 2500, priceUSD: 135 },
    create: {
      category: 'ACTIVITY',
      name: 'Game drives & walking safaris',
      description: 'Per person when itemised; often arranged with stay',
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

  await prisma.rateItem.deleteMany({ where: { category: 'EXTRA', name: 'MIWESU Premium Firewood' } })

  const WOOD_PRODUCTS: Array<{ name: string; priceZAR: number; description: string }> = [
    { name: 'Premium Sekelbos 10kg', priceZAR: 25, description: 'MOQ 50 bags' },
    { name: 'Premium Sekelbos 20kg', priceZAR: 50, description: 'MOQ 40 bags' },
    { name: 'Premium Sekelbos 30kg', priceZAR: 70, description: 'MOQ 20 bags' },
    { name: 'Geelhaak Hardwood 10kg', priceZAR: 25, description: 'MOQ 50 bags' },
    { name: 'Geelhaak Hardwood 20kg', priceZAR: 50, description: 'MOQ 40 bags' },
    { name: 'Geelhaak Hardwood 30kg', priceZAR: 70, description: 'MOQ 20 bags' },
    { name: 'The Ultimate Braai Mix 10kg', priceZAR: 25, description: 'MOQ 50 bags' },
    { name: 'The Ultimate Braai Mix 20kg', priceZAR: 50, description: 'MOQ 40 bags' },
    { name: 'The Ultimate Braai Mix 30kg', priceZAR: 70, description: 'MOQ 20 bags' },
  ]
  for (let i = 0; i < WOOD_PRODUCTS.length; i++) {
    const { name, priceZAR, description } = WOOD_PRODUCTS[i]
    await prisma.rateItem.upsert({
      where: { category_name: { category: 'EXTRA', name } },
      update: { priceZAR, priceUSD: Math.round(priceZAR / 18.5), description, sortOrder: 1 + i },
      create: {
        category: 'EXTRA',
        name,
        description,
        priceZAR,
        priceUSD: Math.round(priceZAR / 18.5),
        isAvailable: true,
        sortOrder: 1 + i,
      },
    })
  }

  console.log('Seeded units, SystemSettings, RateItems (accommodation, species, activities, extras including wood)')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

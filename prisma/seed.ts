import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.unit.upsert({
    where: { name: 'The Homestead' },
    update: {},
    create: {
      name: 'The Homestead',
      maxGuests: 16,
      description:
        'Main lodge. Four bedrooms (two lower sleeping 3 each, two upper sleeping 5 each), open-plan kitchen and living, first patio, boma and braai, lapa with pool table and darts, braai under the trees, trampoline, jungle gym and swimming pool with slide.',
      basePricePerNight: 0, // Set your real rate; 0 allows config elsewhere
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
      basePricePerNight: 0, // Set your real rate
    },
  })

  console.log('Seeded units: The Homestead (max 16), The Stone Villa (max 6)')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

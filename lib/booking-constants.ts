/**
 * Booking system constants and mock data when DB is not configured.
 */

export const HOMESTEAD_NAME = 'The Homestead'
export const STONE_VILLA_NAME = 'The Stone Villa'
export const HOMESTEAD_MAX = 16
export const STONE_VILLA_MAX = 6
export const TOTAL_LODGE_MAX = 22

export const MOCK_UNITS = [
  {
    id: 'mock-homestead',
    name: HOMESTEAD_NAME,
    maxGuests: HOMESTEAD_MAX,
    description: 'Main lodge. Four bedrooms, kitchen, living, boma, lapa, pool with slide.',
    basePricePerNight: { toNumber: () => 0 },
  },
  {
    id: 'mock-stone-villa',
    name: STONE_VILLA_NAME,
    maxGuests: STONE_VILLA_MAX,
    description: 'Near the pool. Two bedrooms, kitchen, living, outdoor braai.',
    basePricePerNight: { toNumber: () => 0 },
  },
] as const

export type AvailableOption = {
  id: string
  name: string
  maxGuests: number
  description: string | null
  basePricePerNight: number
  unitIds: string[] // for "Entire Lodge" this is [homesteadId, stoneVillaId]
}

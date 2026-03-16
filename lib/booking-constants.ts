/**
 * Booking system constants. Display names: Hunter's House, Rooibok Kraal.
 */

import { HUNTERS_HOUSE_NAME, ROOIBOK_KRAAL_NAME } from './booking-pricing'

export const HOMESTEAD_NAME = HUNTERS_HOUSE_NAME
export const STONE_VILLA_NAME = ROOIBOK_KRAAL_NAME
export const HOMESTEAD_MAX = 16
export const STONE_VILLA_MAX = 6
export const TOTAL_LODGE_MAX = 22

export const MOCK_UNITS = [
  {
    id: 'mock-homestead',
    name: HUNTERS_HOUSE_NAME,
    maxGuests: HOMESTEAD_MAX,
    description: "Hunter's House. Main lodge. Four bedrooms, kitchen, living, boma, lapa, pool with slide.",
    basePricePerNight: { toNumber: () => 850 },
  },
  {
    id: 'mock-stone-villa',
    name: ROOIBOK_KRAAL_NAME,
    maxGuests: STONE_VILLA_MAX,
    description: 'Rooibok Kraal. Near the pool. Two bedrooms, kitchen, living, outdoor braai.',
    basePricePerNight: { toNumber: () => 0 },
  },
] as const

export type AvailableOption = {
  id: string
  name: string
  maxGuests: number
  description: string | null
  basePricePerNight: number
  unitIds: string[]
}

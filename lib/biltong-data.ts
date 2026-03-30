import { SPECIES_BY_SLUG, SPECIES_SLUGS } from '@/lib/species-data'

/**
 * Reference carcass ranges (kg) for hunter context, yield math uses user-entered wet weight only.
 */
const SPECIES_CARCASS: Record<string, { carcassKgMin: number; carcassKgMax: number }> = {
  impala: { carcassKgMin: 40, carcassKgMax: 76 }, 'greater-kudu': { carcassKgMin: 190, carcassKgMax: 315 }, wildebeest: { carcassKgMin: 250, carcassKgMax: 290 }, springbok: { carcassKgMin: 30, carcassKgMax: 50 }, blesbok: { carcassKgMin: 65, carcassKgMax: 80 }, gemsbok: { carcassKgMin: 180, carcassKgMax: 240 }, warthog: { carcassKgMin: 50, carcassKgMax: 150 }, bushbuck: { carcassKgMin: 45, carcassKgMax: 80 }, 'red-hartebeest': { carcassKgMin: 150, carcassKgMax: 160 }, lechwe: { carcassKgMin: 60, carcassKgMax: 120 }, 'dapple-impala': { carcassKgMin: 40, carcassKgMax: 65 }, 'golden-wildebeest': { carcassKgMin: 180, carcassKgMax: 270 }, 'livingstone-eland': { carcassKgMin: 400, carcassKgMax: 900 }, 'cape-buffalo': { carcassKgMin: 500, carcassKgMax: 900 }, }

export type BiltongSpeciesOption = {
  slug: string
  name: string
  carcassKgMin: number
  carcassKgMax: number
}

/** All 14 MIWESU species in canonical slug order (matches SPECIES_SLUGS). */
export const biltongSpecies: BiltongSpeciesOption[] = SPECIES_SLUGS.map((slug) => {
  const range = SPECIES_CARCASS[slug] ?? { carcassKgMin: 40, carcassKgMax: 80 }
  const rec = SPECIES_BY_SLUG[slug]
  return {
    slug, name: rec.name, carcassKgMin: range.carcassKgMin, carcassKgMax: range.carcassKgMax, }
})

/** South African industry-standard wet carcass → dry biltong conversion (precise 38%). */
export const SA_BILTONG_DRY_YIELD_RATE = 0.38 as const

export function estimateBiltongKg(wetCarcassKg: number): number {
  return Math.round(wetCarcassKg * SA_BILTONG_DRY_YIELD_RATE * 100) / 100
}

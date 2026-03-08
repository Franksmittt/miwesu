/**
 * Species used for Biltong Yield Calculator (SA plains game).
 * weightMale is used as typical trophy/carcass range; we take midpoint for estimate.
 */
export const biltongSpecies = [
  { slug: 'impala', name: 'Impala', carcassKgMin: 40, carcassKgMax: 76 },
  { slug: 'greater-kudu', name: 'Greater Kudu', carcassKgMin: 190, carcassKgMax: 315 },
  { slug: 'wildebeest', name: 'Blue Wildebeest', carcassKgMin: 250, carcassKgMax: 290 },
  { slug: 'springbok', name: 'Springbok', carcassKgMin: 30, carcassKgMax: 50 },
  { slug: 'blesbok', name: 'Blesbok', carcassKgMin: 65, carcassKgMax: 80 },
  { slug: 'gemsbok', name: 'Gemsbok', carcassKgMin: 180, carcassKgMax: 240 },
  { slug: 'warthog', name: 'Warthog', carcassKgMin: 50, carcassKgMax: 150 },
  { slug: 'bushbuck', name: 'Bushbuck', carcassKgMin: 45, carcassKgMax: 80 },
  { slug: 'red-hartebeest', name: 'Red Hartebeest', carcassKgMin: 150, carcassKgMax: 160 },
  { slug: 'lechwe', name: 'Lechwe', carcassKgMin: 60, carcassKgMax: 120 },
  { slug: 'dapple-impala', name: 'Dapple Impala', carcassKgMin: 40, carcassKgMax: 65 },
  { slug: 'golden-wildebeest', name: 'Golden Wildebeest', carcassKgMin: 180, carcassKgMax: 270 },
  { slug: 'livingstone-eland', name: 'Livingstone Eland', carcassKgMin: 400, carcassKgMax: 900 },
  { slug: 'cape-buffalo', name: 'Cape Buffalo', carcassKgMin: 500, carcassKgMax: 900 },
] as const

/** Typical dry biltong yield as fraction of wet carcass (SA processing: 2cm with grain, coriander/vinegar). ~35–42% */
const BILTONG_YIELD_FACTOR = 0.38

export function estimateBiltongKg(wetCarcassKg: number): number {
  return Math.round(wetCarcassKg * BILTONG_YIELD_FACTOR * 10) / 10
}

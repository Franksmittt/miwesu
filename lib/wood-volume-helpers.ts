import type { WoodProduct } from '@/lib/wood-products'

/** Parse numeric kg from product.weight e.g. "12kg" → 12 */
export function bagWeightKg(product: WoodProduct): number {
  const n = parseInt(product.weight.replace(/\D/g, ''), 10)
  return Number.isFinite(n) && n > 0 ? n : 12
}

export function totalMassKg(product: WoodProduct, bagCount: number): number {
  return bagWeightKg(product) * bagCount
}

/**
 * Spatial / logistics metaphors for bulk anxiety (Hardware Noir tone, not farm tropes).
 */
export function describeThermalVolume(product: WoodProduct, bagCount: number): string {
  const w = bagWeightKg(product)
  const total = w * bagCount

  if (w <= 12) {
    if (bagCount < 40) {
      return 'Compact thermal stack, single parking-bay footprint, easy hand-off.'
    }
    if (bagCount < 80) {
      return 'Mid-volume allocation, roughly half a standard bakkie bed by visual bulk.'
    }
    return 'Full bakkie-class payload, schedule a wide offload lane and ground clearance.'
  }

  if (bagCount < 25) {
    return 'Half-bakkie equivalent, dense 30kg lines; one crew lift cycle.'
  }
  if (bagCount < 45) {
    return 'Single-axle bakkie bed filled, standard estate gate clearance if stacked low.'
  }
  return 'Shed-bay volume, multi-pallet class; confirm roller-door height with logistics.'
}

export function sliderMaxBags(moq: number): number {
  return Math.min(Math.max(moq * 5, moq + 80), 200)
}

export function sliderStep(moq: number): number {
  return moq >= 50 ? 10 : 5
}

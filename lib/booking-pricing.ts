/**
 * Rooibok Kraal / Hunter's House pricing (50km from Thabazimbi, Dwaalboom road).
 * Used for booking total calculation and pricelist. Animal prices are for pricelist/admin only, not shown on public site.
 */

export const HUNTERS_HOUSE_NAME = "Hunter's House"
export const ROOIBOK_KRAAL_NAME = 'Rooibok Kraal'

/** Per person per night (ZAR) */
export const HUNTERS_HOUSE_PPPN_ZAR = 850
/** Min 3 nights */
export const MIN_NIGHTS = 3
/** Vehicle (bakkie) fee (ZAR) once per booking */
export const VEHICLE_FEE_ZAR = 750

/** Children 0–3: free; 4–10: 50%; 10+: full price */
export function personNightsRate(adults: number, children0to3: number, children4to10: number): number {
  return adults + children4to10 * 0.5
}

export function calcAccommodationTotal(
  adults: number,
  children0to3: number,
  children4to10: number,
  nights: number,
  includeVehicleFee: boolean
): { totalZAR: number; breakdown: { line: string; amount: number }[] } {
  const breakdown: { line: string; amount: number }[] = []
  const ratePerPerson = personNightsRate(adults, children0to3, children4to10)
  const accommodationTotal = Math.round(ratePerPerson * nights * HUNTERS_HOUSE_PPPN_ZAR)
  breakdown.push({
    line: `${adults} adult(s) × ${nights} night(s) × R${HUNTERS_HOUSE_PPPN_ZAR}`,
    amount: adults * nights * HUNTERS_HOUSE_PPPN_ZAR,
  })
  if (children4to10 > 0) {
    const halfRate = HUNTERS_HOUSE_PPPN_ZAR * 0.5
    breakdown.push({
      line: `${children4to10} child(ren) 4–10 years (50%) × ${nights} night(s) × R${halfRate}`,
      amount: children4to10 * nights * halfRate,
    })
  }
  if (children0to3 > 0) {
    breakdown.push({
      line: `${children0to3} child(ren) 0–3 years (free)`,
      amount: 0,
    })
  }
  let totalZAR = accommodationTotal
  if (includeVehicleFee) {
    breakdown.push({ line: 'Vehicle (bakkie) fee', amount: VEHICLE_FEE_ZAR })
    totalZAR += VEHICLE_FEE_ZAR
  }
  return { totalZAR, breakdown }
}

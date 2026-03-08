import { NextResponse } from 'next/server'

/**
 * Simulated live telemetry for Conservation Impact and Kiln/Firewood.
 * Replace with real IoT/DB when backend is connected.
 */
function randomInRange(min: number, max: number, seed: number): number {
  const x = Math.sin(seed) * 10000
  return min + (x - Math.floor(x)) * (max - min)
}

export async function GET() {
  const now = Date.now()
  const seed = Math.floor(now / 10000) // change every 10s

  const conservation = {
    hectaresProtected: Math.round(4200 + randomInRange(0, 50, seed)),
    antiPoachingHoursThisWeek: Math.round(168 + randomInRange(0, 24, seed + 1)),
    communityInvestmentsZAR: Math.round(124000 + randomInRange(0, 8000, seed + 2)),
    lastUpdated: new Date(now).toISOString(),
  }

  const kiln = {
    batchId: 'Sekelbos-2026-03',
    moisturePercent: Math.round((8.2 + randomInRange(0, 1.2, seed + 3)) * 10) / 10,
    tempCelsius: Math.round(52 + randomInRange(0, 4, seed + 4)),
    status: 'drying' as const,
    lastUpdated: new Date(now).toISOString(),
  }

  return NextResponse.json({ conservation, kiln })
}

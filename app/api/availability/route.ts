import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import {
  HOMESTEAD_NAME,
  STONE_VILLA_NAME,
  HOMESTEAD_MAX,
  STONE_VILLA_MAX,
  TOTAL_LODGE_MAX,
  MOCK_UNITS,
} from '@/lib/booking-constants'

export const dynamic = 'force-dynamic'

export type AvailabilityResponse =
  | { ok: true; options: Array<{ id: string; name: string; maxGuests: number; description: string | null; basePricePerNight: number; unitIds: string[] }>; demo?: boolean }
  | { ok: false; error: string }

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const checkInParam = searchParams.get('checkIn')
    const checkOutParam = searchParams.get('checkOut')
    const guestsParam = searchParams.get('guests')

    if (!checkInParam || !checkOutParam || !guestsParam) {
      return NextResponse.json(
        { ok: false, error: 'Missing checkIn, checkOut, or guests' },
        { status: 400 }
      )
    }

    const checkIn = new Date(checkInParam)
    const checkOut = new Date(checkOutParam)
    const guests = parseInt(guestsParam, 10)

    if (isNaN(checkIn.getTime()) || isNaN(checkOut.getTime())) {
      return NextResponse.json(
        { ok: false, error: 'Invalid dates' },
        { status: 400 }
      )
    }
    if (checkOut <= checkIn) {
      return NextResponse.json(
        { ok: false, error: 'Check-out must be after check-in' },
        { status: 400 }
      )
    }
    if (isNaN(guests) || guests < 1 || guests > TOTAL_LODGE_MAX) {
      return NextResponse.json(
        { ok: false, error: `Guests must be between 1 and ${TOTAL_LODGE_MAX}` },
        { status: 400 }
      )
    }

    let options: Array<{ id: string; name: string; maxGuests: number; description: string | null; basePricePerNight: number; unitIds: string[] }>
    let demo = false

    try {
      const units = await prisma.unit.findMany({ orderBy: { name: 'asc' } }) as Array<{ id: string; name: string; maxGuests: number; description: string | null; basePricePerNight: { toString?: () => string } }>
      const homestead = units.find((u) => u.name === HOMESTEAD_NAME)
      const stoneVilla = units.find((u) => u.name === STONE_VILLA_NAME)

      // Only CONFIRMED bookings block availability; PENDING = enquiry, still available for others
      const overlappingBookings = await prisma.booking.findMany({
        where: {
          status: 'CONFIRMED',
          checkIn: { lt: checkOut },
          checkOut: { gt: checkIn },
        },
        select: { unitId: true },
      }) as Array<{ unitId: string }>
      const bookedUnitIds = new Set(overlappingBookings.map((b) => b.unitId))

      const homesteadAvailable = homestead && !bookedUnitIds.has(homestead.id) && guests <= HOMESTEAD_MAX
      const villaAvailable = stoneVilla && !bookedUnitIds.has(stoneVilla.id) && guests <= STONE_VILLA_MAX
      const bothAvailable = homesteadAvailable && villaAvailable && guests > STONE_VILLA_MAX && guests <= TOTAL_LODGE_MAX

      options = []

      if (guests > HOMESTEAD_MAX) {
        if (bothAvailable && homestead && stoneVilla) {
          options.push({
            id: 'entire-lodge',
            name: 'Entire Lodge (Homestead + Stone Villa)',
            maxGuests: TOTAL_LODGE_MAX,
            description: 'Exclusive use of both residences for 17–22 guests.',
            basePricePerNight: Number(homestead.basePricePerNight) + Number(stoneVilla.basePricePerNight),
            unitIds: [homestead.id, stoneVilla.id],
          })
        }
      } else {
        if (homesteadAvailable && homestead) {
          options.push({
            id: homestead.id,
            name: homestead.name,
            maxGuests: homestead.maxGuests,
            description: homestead.description,
            basePricePerNight: Number(homestead.basePricePerNight),
            unitIds: [homestead.id],
          })
        }
        if (villaAvailable && stoneVilla) {
          options.push({
            id: stoneVilla.id,
            name: stoneVilla.name,
            maxGuests: stoneVilla.maxGuests,
            description: stoneVilla.description,
            basePricePerNight: Number(stoneVilla.basePricePerNight),
            unitIds: [stoneVilla.id],
          })
        }
        if (bothAvailable && guests > STONE_VILLA_MAX && homestead && stoneVilla) {
          options.push({
            id: 'entire-lodge',
            name: 'Entire Lodge (Homestead + Stone Villa)',
            maxGuests: TOTAL_LODGE_MAX,
            description: 'Exclusive use of both residences.',
            basePricePerNight: Number(homestead.basePricePerNight) + Number(stoneVilla.basePricePerNight),
            unitIds: [homestead.id, stoneVilla.id],
          })
        }
      }
    } catch {
      demo = true
      if (guests > HOMESTEAD_MAX) {
        options = [
          {
            id: 'entire-lodge',
            name: 'Entire Lodge (Homestead + Stone Villa)',
            maxGuests: TOTAL_LODGE_MAX,
            description: 'Exclusive use of both residences for 17–22 guests.',
            basePricePerNight: 0,
            unitIds: ['mock-homestead', 'mock-stone-villa'],
          },
        ]
      } else {
        options = MOCK_UNITS.map((u) => ({
          id: u.id,
          name: u.name,
          maxGuests: u.maxGuests,
          description: u.description,
          basePricePerNight: u.basePricePerNight.toNumber(),
          unitIds: [u.id],
        }))
        if (guests > STONE_VILLA_MAX) {
          options.push({
            id: 'entire-lodge',
            name: 'Entire Lodge (Homestead + Stone Villa)',
            maxGuests: TOTAL_LODGE_MAX,
            description: 'Exclusive use of both residences.',
            basePricePerNight: 0,
            unitIds: ['mock-homestead', 'mock-stone-villa'],
          })
        }
      }
    }

    return NextResponse.json({ ok: true, options, demo } as AvailabilityResponse)
  } catch (e) {
    console.error('[availability]', e)
    return NextResponse.json(
      { ok: false, error: 'Failed to check availability' },
      { status: 500 }
    )
  }
}

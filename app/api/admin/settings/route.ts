import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/admin-auth'
import { DEFAULT_EXCHANGE_RATE } from '@/lib/rates-data'

export async function GET() {
  if (!(await getAdminSession())) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const settings = await prisma.systemSettings.findUnique({ where: { id: 'global' } }) as { exchangeRateZarUsd: number } | null
    return NextResponse.json({
      ok: true,
      exchangeRate: settings?.exchangeRateZarUsd ?? DEFAULT_EXCHANGE_RATE,
    })
  } catch {
    return NextResponse.json({ ok: true, exchangeRate: DEFAULT_EXCHANGE_RATE, demo: true })
  }
}

export async function PATCH(request: NextRequest) {
  if (!(await getAdminSession())) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const rate = typeof body.exchangeRate === 'number' ? body.exchangeRate : parseFloat(body.exchangeRate)
    if (Number.isNaN(rate) || rate <= 0) {
      return NextResponse.json({ ok: false, error: 'Invalid exchange rate' }, { status: 400 })
    }
    await prisma.systemSettings.upsert({
      where: { id: 'global' },
      update: { exchangeRateZarUsd: rate },
      create: { id: 'global', exchangeRateZarUsd: rate },
    })
    return NextResponse.json({ ok: true, exchangeRate: rate })
  } catch {
    return NextResponse.json({ ok: true, demo: true })
  }
}

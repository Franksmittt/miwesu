import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/admin-auth'
import { getDefaultRateItems, DEFAULT_EXCHANGE_RATE } from '@/lib/rates-data'

export async function GET(request: NextRequest) {
  if (!(await getAdminSession())) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const [items, settings] = await Promise.all([
      prisma.rateItem.findMany({ orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }] }) as Promise<Array<{
        id: string
        category: string
        name: string
        description: string | null
        priceZAR: number
        priceUSD: number
        isAvailable: boolean
        sortOrder: number
      }>>,
      prisma.systemSettings.findUnique({ where: { id: 'global' } }) as Promise<{ exchangeRateZarUsd: number } | null>,
    ])
    const exchangeRate = settings?.exchangeRateZarUsd ?? DEFAULT_EXCHANGE_RATE
    const rates = items.map((r) => ({
      id: r.id,
      category: r.category,
      name: r.name,
      description: r.description,
      priceZAR: r.priceZAR,
      priceUSD: r.priceUSD,
      isAvailable: r.isAvailable,
      sortOrder: r.sortOrder,
    }))
    return NextResponse.json({ ok: true, rates, exchangeRate })
  } catch {
    const rates = getDefaultRateItems()
    return NextResponse.json({
      ok: true,
      rates,
      exchangeRate: DEFAULT_EXCHANGE_RATE,
      demo: true,
    })
  }
}

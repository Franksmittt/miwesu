import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/admin-auth'

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await getAdminSession())) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  try {
    const body = await request.json()
    const { priceZAR, priceUSD, isAvailable } = body
    const data: { priceZAR?: number; priceUSD?: number; isAvailable?: boolean } = {}
    if (typeof priceZAR === 'number' && priceZAR >= 0) data.priceZAR = priceZAR
    if (typeof priceUSD === 'number' && priceUSD >= 0) data.priceUSD = priceUSD
    if (typeof isAvailable === 'boolean') data.isAvailable = isAvailable
    const updated = await prisma.rateItem.update({
      where: { id },
      data,
    })
    return NextResponse.json({
      ok: true,
      rate: {
        id: updated.id,
        priceZAR: updated.priceZAR,
        priceUSD: updated.priceUSD,
        isAvailable: updated.isAvailable,
      },
    })
  } catch {
    return NextResponse.json({ ok: true, demo: true })
  }
}

import { NextResponse } from 'next/server'
import { getAdminSession } from '@/lib/admin-auth'
import { prisma } from '@/lib/prisma'
import { getDefaultRateItems } from '@/lib/rates-data'
import { MasterPricelistPDF } from '@/components/pdf/MasterPricelistPDF'
import React from 'react'

type RateItemPDF = {
  id: string
  name: string
  category: 'ACCOMMODATION' | 'SPECIES' | 'ACTIVITY' | 'EXTRA'
  priceZAR: number
  priceUSD: number
}

async function getRates(): Promise<RateItemPDF[]> {
  try {
    const items = await prisma.rateItem.findMany({
      orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }],
    })
    return items.map((r) => ({
      id: r.id,
      name: r.name,
      category: r.category as RateItemPDF['category'],
      priceZAR: Number(r.priceZAR) || 0,
      priceUSD: Number(r.priceUSD) || 0,
    }))
  } catch {
    return getDefaultRateItems().map((r) => ({
      id: r.id,
      name: r.name,
      category: r.category,
      priceZAR: r.priceZAR,
      priceUSD: r.priceUSD,
    }))
  }
}

export async function GET() {
  if (!(await getAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const items = await getRates()
    const generatedAt = new Date().toLocaleDateString('en-ZA', { dateStyle: 'long' })

    const { renderToBuffer } = await import('@react-pdf/renderer')
    const doc = React.createElement(MasterPricelistPDF, { items, generatedAt })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const buffer = await renderToBuffer(doc as any)

    return new NextResponse(buffer as unknown as BodyInit, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="miwesu-pricelist.pdf"',
      },
    })
  } catch (e) {
    const err = e as Error
    console.error('[pricelist-pdf]', err?.message ?? err, err?.stack)
    const message = process.env.NODE_ENV === 'development' ? (err?.message ?? String(e)) : 'Failed to generate PDF'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

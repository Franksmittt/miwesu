import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/admin-auth'

export async function GET() {
  if (!(await getAdminSession())) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const units = await prisma.unit.findMany({
      orderBy: { name: 'asc' },
      select: { id: true, name: true, maxGuests: true },
    })
    return NextResponse.json({ ok: true, units })
  } catch {
    return NextResponse.json({
      ok: true,
      units: [
        { id: 'mock-1', name: 'The Homestead', maxGuests: 16 },
        { id: 'mock-2', name: 'The Stone Villa', maxGuests: 8 },
      ],
    })
  }
}

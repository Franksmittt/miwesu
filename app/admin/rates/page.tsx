'use client'

import { useCallback, useEffect, useState } from 'react'
import { FileDown } from 'lucide-react'
import { hapticConfirm } from '@/lib/haptic'

type RateItem = {
  id: string
  category: string
  name: string
  description: string | null
  priceZAR: number
  priceUSD: number
  isAvailable: boolean
  sortOrder: number
}

const CATEGORY_LABELS: Record<string, string> = {
  ACCOMMODATION: 'Residences',
  SPECIES: 'Species',
  ACTIVITY: 'Experiences',
  EXTRA: 'Extras',
}

export default function AdminRatesPage() {
  const [rates, setRates] = useState<RateItem[]>([])
  const [exchangeRate, setExchangeRate] = useState(18.5)
  const [currency, setCurrency] = useState<'ZAR' | 'USD'>('ZAR')
  const [loading, setLoading] = useState(true)
  const [demo, setDemo] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValue, setEditValue] = useState('')
  const [saving, setSaving] = useState(false)

  const loadRates = useCallback(() => {
    setLoading(true)
    fetch('/api/admin/rates', { credentials: 'include' })
      .then((r) => r.json())
      .then((data) => {
        if (data.ok) {
          setRates(data.rates ?? [])
          setExchangeRate(data.exchangeRate ?? 18.5)
          setDemo(!!data.demo)
        }
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    loadRates()
  }, [loadRates])

  const displayPrice = (r: RateItem) =>
    currency === 'ZAR' ? r.priceZAR : r.priceUSD

  const startEdit = (r: RateItem) => {
    setEditingId(r.id)
    setEditValue(String(displayPrice(r)))
  }

  const saveEdit = async () => {
    if (!editingId) return
    const r = rates.find((x) => x.id === editingId)
    if (!r) return
    setSaving(true)
    const num = parseFloat(editValue)
    const payload =
      currency === 'ZAR'
        ? { priceZAR: Number.isNaN(num) ? 0 : num }
        : { priceUSD: Number.isNaN(num) ? 0 : num }
    try {
      const res = await fetch(`/api/admin/rates/${editingId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (data.ok && data.rate) {
        setRates((prev) =>
          prev.map((x) =>
            x.id === editingId
              ? {
                  ...x,
                  priceZAR: data.rate.priceZAR ?? x.priceZAR,
                  priceUSD: data.rate.priceUSD ?? x.priceUSD,
                }
              : x
          )
        )
      }
    } finally {
      setEditingId(null)
      setSaving(false)
    }
  }

  const byCategory = rates.reduce((acc, r) => {
    const c = r.category
    if (!acc[c]) acc[c] = []
    acc[c].push(r)
    return acc
  }, {} as Record<string, RateItem[]>)

  const formatPrice = (v: number) =>
    currency === 'ZAR' ? `R ${v.toLocaleString()}` : `$ ${v.toLocaleString()}`

  return (
    <main id="main-content" className="flex-1">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl text-white tracking-tight">Rates Manager</h1>
            <p className="mt-1 text-sm text-gray-400">Master pricelist for accommodation, species, and experiences.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex rounded-xl border border-white/10 bg-onyx-light/50 p-1">
              <button
                type="button"
                onClick={() => { setCurrency('ZAR'); hapticConfirm() }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currency === 'ZAR' ? 'bg-gold-500 text-onyx' : 'text-gray-400 hover:text-white'}`}
              >
                ZAR (R)
              </button>
              <button
                type="button"
                onClick={() => { setCurrency('USD'); hapticConfirm() }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currency === 'USD' ? 'bg-gold-500 text-onyx' : 'text-gray-400 hover:text-white'}`}
              >
                USD ($)
              </button>
            </div>
            <a
              href="/api/admin/pricelist-pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => hapticConfirm()}
              className="inline-flex items-center gap-2 py-3 px-5 bg-gold-500 text-onyx font-semibold rounded-xl text-sm hover:bg-gold-400 transition-colors"
            >
              <FileDown className="w-4 h-4" /> Export Pricelist (PDF)
            </a>
          </div>
        </div>

        {demo && (
          <div className="mb-6 rounded-xl bg-gold-500/10 border border-gold-500/30 px-4 py-3 text-gold-300 text-sm">
            Demo mode: database not connected. Edits are not saved. Connect DATABASE_URL and run db:push + db:seed to persist rates.
          </div>
        )}

        {loading ? (
          <p className="text-gray-500">Loading…</p>
        ) : (
          <div className="space-y-10">
            {['ACCOMMODATION', 'SPECIES', 'ACTIVITY', 'EXTRA'].map((cat) => {
              const items = byCategory[cat]
              if (!items?.length) return null
              return (
                <section key={cat} className="rounded-2xl border border-white/10 bg-onyx-light/30 overflow-hidden">
                  <h2 className="font-serif text-lg text-gold-400 px-6 py-4 border-b border-white/10">
                    {CATEGORY_LABELS[cat] ?? cat}
                  </h2>
                  <div className="p-4 sm:p-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((r) => (
                      <div
                        key={r.id}
                        className="rounded-xl border border-white/5 bg-black/20 p-4 flex flex-col justify-between"
                      >
                        <div>
                          <p className="font-medium text-white">{r.name}</p>
                          {r.description && (
                            <p className="text-gray-500 text-xs mt-0.5">{r.description}</p>
                          )}
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          {editingId === r.id ? (
                            <>
                              <input
                                type="number"
                                min={0}
                                step={currency === 'ZAR' ? 100 : 10}
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                onBlur={saveEdit}
                                onKeyDown={(e) => e.key === 'Enter' && saveEdit()}
                                className="w-28 rounded-lg border border-gold-500/30 bg-onyx px-3 py-2 text-white text-sm"
                                autoFocus
                              />
                              <button
                                type="button"
                                onClick={saveEdit}
                                disabled={saving}
                                className="text-gold-400 text-sm font-medium hover:text-white disabled:opacity-50"
                              >
                                {saving ? '…' : 'Save'}
                              </button>
                            </>
                          ) : (
                            <>
                              <span className="text-gold-400 font-semibold">
                                {formatPrice(displayPrice(r))}
                              </span>
                              <button
                                type="button"
                                onClick={() => startEdit(r)}
                                className="text-gray-500 hover:text-white text-xs"
                              >
                                Edit
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        )}

        <p className="mt-8 text-gray-500 text-xs">
          Exchange rate (ZAR/USD): {exchangeRate}. Update in System Settings when needed.
        </p>
      </div>
    </main>
  )
}

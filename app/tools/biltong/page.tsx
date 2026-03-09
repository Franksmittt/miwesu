'use client'

import { useState } from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { Scale, ArrowLeft } from 'lucide-react'
import { biltongSpecies, estimateBiltongKg } from '@/lib/biltong-data'

export default function BiltongPage() {
  const [speciesSlug, setSpeciesSlug] = useState<string>(biltongSpecies[0].slug)
  const [carcassKg, setCarcassKg] = useState<string>('')

  const species = biltongSpecies.find((s) => s.slug === speciesSlug)
  const minKg = species?.carcassKgMin ?? 0
  const maxKg = species?.carcassKgMax ?? 0
  const suggestedMid = Math.round((minKg + maxKg) / 2)
  const inputKg = carcassKg === '' ? suggestedMid : parseFloat(carcassKg)
  const validKg = !Number.isNaN(inputKg) && inputKg > 0 && inputKg <= 2000
  const biltongKg = validKg ? estimateBiltongKg(inputKg) : null

  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-marble">
        <section className="bg-onyx text-white py-12 md:py-16 border-b border-white/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gold-500 text-sm font-sans uppercase tracking-wider mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Tools
            </Link>
            <div className="flex items-center gap-3">
              <Scale className="w-10 h-10 text-gold-500" />
              <div>
                <h1 className="font-serif text-3xl md:text-4xl text-white">Biltong Yield Calculator</h1>
                <p className="text-gray-400 text-sm mt-1">
                  Estimate dry biltong yield from wet carcass, SA processing (2cm with grain, coriander/vinegar cure)
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="liquid-glass rounded-xl border border-white/10 p-6 md:p-8 bg-onyx/5">
              <label className="block mb-2">
                <span className="text-xs uppercase tracking-wider text-gray-500">Species</span>
                <select
                  value={speciesSlug}
                  onChange={(e) => {
                    setSpeciesSlug(e.target.value)
                    const s = biltongSpecies.find((x) => x.slug === e.target.value)
                    if (s) setCarcassKg('')
                  }}
                  className="mt-1 w-full px-4 py-3 border border-gray-200 rounded focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 font-sans"
                >
                  {biltongSpecies.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.name} ({s.carcassKgMin}–{s.carcassKgMax} kg typical)
                    </option>
                  ))}
                </select>
              </label>

              <label className="block mt-6 mb-6">
                <span className="text-xs uppercase tracking-wider text-gray-500">Wet carcass weight (kg)</span>
                <input
                  type="number"
                  min={1}
                  max={2000}
                  step={0.5}
                  placeholder={String(suggestedMid)}
                  value={carcassKg}
                  onChange={(e) => setCarcassKg(e.target.value)}
                  className="mt-1 w-full px-4 py-3 border border-gray-200 rounded focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 font-sans text-lg"
                />
                <p className="mt-1 text-gray-500 text-sm">
                  Typical range for {species?.name}: {minKg}–{maxKg} kg. Enter your field-dressed or cold-room weight.
                </p>
              </label>

              <div className="liquid-glass-dark rounded-lg p-6 border border-white/10">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Estimated dry biltong yield</p>
                {biltongKg != null ? (
                  <p className="font-serif text-3xl text-gold-500">{biltongKg} kg</p>
                ) : (
                  <p className="font-sans text-gray-500">Enter a valid carcass weight above.</p>
                )}
                <p className="text-gray-500 text-sm mt-2">
                  Based on standard SA processing (cut with grain ~2 cm, traditional cure). Actual yield depends on fat content and drying conditions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

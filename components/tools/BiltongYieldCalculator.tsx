'use client'

import { useMemo, useState } from 'react'
import { Scale } from 'lucide-react'
import { biltongSpecies, estimateBiltongKg, SA_BILTONG_DRY_YIELD_RATE } from '@/lib/biltong-data'

export function BiltongYieldCalculator() {
  const [speciesSlug, setSpeciesSlug] = useState(biltongSpecies[0].slug)
  const [carcassInput, setCarcassInput] = useState('')

  const species = useMemo(
    () => biltongSpecies.find((s) => s.slug === speciesSlug) ?? biltongSpecies[0], [speciesSlug]
  )

  const parsed = parseFloat(carcassInput.replace(',', '.'))
  const hasInput = carcassInput.trim() !== ''
  const valid = hasInput && Number.isFinite(parsed) && parsed > 0 && parsed <= 2000
  const dryKg = valid ? estimateBiltongKg(parsed) : null
  const pct = Math.round(SA_BILTONG_DRY_YIELD_RATE * 100)

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
      <div className="liquid-glass-dark rounded-2xl border border-white/12 p-6 shadow-noir-md sm:p-8 lg:col-span-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/10">
            <Scale className="h-6 w-6 text-gold-400" aria-hidden />
          </div>
          <div>
            <p className="type-eyebrow-dark text-gold-400">Input</p>
            <h2 className="type-h3-dark mt-1">Carcass spec</h2>
          </div>
        </div>

        <label className="mt-8 block" htmlFor="biltong-species">
          <span className="type-overline text-gray-500">Species (14 MIWESU plains-game)</span>
          <select
            id="biltong-species"
            value={speciesSlug}
            onChange={(e) => setSpeciesSlug(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-sans text-sm text-white focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/25"
          >
            {biltongSpecies.map((s) => (
              <option key={s.slug} value={s.slug} className="bg-onyx text-white">
                {s.name} · ref. {s.carcassKgMin}–{s.carcassKgMax} kg
              </option>
            ))}
          </select>
        </label>

        <label className="mt-6 block" htmlFor="biltong-wet-kg">
          <span className="type-overline text-gray-500">Wet carcass weight (kg)</span>
          <input
            id="biltong-wet-kg"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            placeholder={`e.g. ${Math.round((species.carcassKgMin + species.carcassKgMax) / 2)}`}
            value={carcassInput}
            onChange={(e) => setCarcassInput(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-4 font-sans text-lg tabular-nums text-white placeholder:text-gray-600 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/25"
          />
        </label>
        <p className="type-lead-dark mt-3 text-sm">
          Reference band for <span className="text-gray-300">{species.name}</span>: {species.carcassKgMin}–
          {species.carcassKgMax} kg (field-dressed / cold-room).
        </p>
      </div>

      <div className="liquid-glass-dark rounded-2xl border border-gold-500/20 p-6 shadow-noir-lg sm:p-8 lg:col-span-7">
        <p className="type-eyebrow-dark text-gold-400">Output · live</p>
        <h2 className="type-h3-dark mt-2">Dry biltong yield</h2>
        <p className="type-lead-dark mt-4 text-sm">
          Standard South African processing model: <span className="text-gold-400/90">{pct}%</span> of wet carcass mass
          to finished dry biltong (nominal).
        </p>

        <div
          className="mt-8 rounded-2xl border border-white/10 bg-onyx/60 px-6 py-8 text-center sm:px-8"
          aria-live="polite"
        >
          {valid && dryKg != null ? (
            <>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-gray-500">Estimated dry yield</p>
              <p
                className="mt-4 font-serif tabular-nums text-white"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.05, textShadow: '0 0 40px rgba(197, 160, 89, 0.25)', }}
              >
                {dryKg.toFixed(2)}
                <span className="ml-2 text-2xl text-gold-400 md:text-3xl">kg</span>
              </p>
              <p className="type-lead-dark mt-4 text-sm">
                {parsed.toFixed(2)} kg wet × {SA_BILTONG_DRY_YIELD_RATE} ={' '}
                <span className="text-white">{dryKg.toFixed(2)} kg</span> dry (nominal)
              </p>
            </>
          ) : hasInput && !valid ? (
            <p className="font-sans text-sm text-red-400">Enter a positive weight up to 2000 kg.</p>
          ) : (
            <>
              <p className="font-serif tabular-nums text-gray-600" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>···</p>
              <p className="type-lead-dark mt-4 text-sm">Type a wet weight to see instant yield.</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

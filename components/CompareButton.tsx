'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Scale, X, ChevronDown } from 'lucide-react'
import { speciesComparisonData, type SpeciesComparison } from '@/lib/species-comparison-data'

interface CompareButtonProps {
  currentSpeciesSlug: string
  currentSpeciesName: string
  /** Optional: place inside hero (light button) or in banner (default dark) */
  variant?: 'hero' | 'banner'
}

function getSpeciesBySlug(slug: string): SpeciesComparison | undefined {
  return speciesComparisonData.find((s) => s.slug === slug)
}

export default function CompareButton({ currentSpeciesSlug, currentSpeciesName, variant = 'banner' }: CompareButtonProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null)

  const currentInData = getSpeciesBySlug(currentSpeciesSlug)
  const otherSpecies = speciesComparisonData.filter((s) => s.slug !== currentSpeciesSlug)

  const handleCompare = () => {
    if (!selectedSlug) return
    setOpen(false)
    setSelectedSlug(null)
    router.push(`/compare?a=${currentSpeciesSlug}&b=${selectedSlug}`)
  }

  const handleOpen = () => {
    setSelectedSlug(null)
    setOpen(true)
  }

  // If this species isn't in comparison data, don't render (or we could still allow and let compare page handle it)
  if (!currentInData) return null

  const isHero = variant === 'hero'

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className={
          isHero
            ? 'inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded border border-gold-500/60 text-gold-400 hover:bg-gold-500/10 hover:border-gold-400 font-sans text-sm uppercase tracking-widest transition-colors'
            : 'inline-flex items-center gap-2 px-5 py-2.5 rounded border border-gold-500/60 text-gold-400 hover:bg-gold-500/10 hover:border-gold-400 font-sans text-sm uppercase tracking-widest transition-colors'
        }
        aria-label="Compare this species with another"
      >
        <Scale className="w-4 h-4" />
        Compare
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="compare-modal-title"
        >
          <div
            className="relative w-full max-w-md bg-onyx border border-white/10 shadow-2xl rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 id="compare-modal-title" className="font-serif text-xl text-white">
                Compare with another species
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-1.5 text-gray-400 hover:text-white rounded transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-gray-400 text-sm">
                Compare <span className="text-gold-400 font-medium">{currentSpeciesName}</span> with:
              </p>

              <div className="relative">
                <select
                  value={selectedSlug ?? ''}
                  onChange={(e) => setSelectedSlug(e.target.value || null)}
                  className="w-full appearance-none bg-onyx-light border border-white/20 text-white font-sans py-3 pl-4 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50"
                  aria-label="Select species to compare"
                >
                  <option value="">Select a species…</option>
                  {otherSpecies.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              <button
                type="button"
                onClick={handleCompare}
                disabled={!selectedSlug}
                className="w-full flex items-center justify-center gap-2 py-3 rounded bg-gold-600 hover:bg-gold-500 disabled:opacity-50 disabled:cursor-not-allowed text-onyx font-sans font-semibold uppercase tracking-wider transition-colors"
              >
                <Scale className="w-4 h-4" />
                Compare
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

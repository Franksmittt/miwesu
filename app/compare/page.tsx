'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { speciesComparisonData, type SpeciesComparison } from '@/lib/species-comparison-data'
import { ArrowRight, Scale, ChevronDown } from 'lucide-react'

const ATTRIBUTES: { key: keyof SpeciesComparison; label: string }[] = [
  { key: 'weightMale', label: 'Weight (male)' },
  { key: 'weightFemale', label: 'Weight (female)' },
  { key: 'shoulderHeightMale', label: 'Shoulder height (male)' },
  { key: 'shoulderHeightFemale', label: 'Shoulder height (female)' },
  { key: 'diet', label: 'Diet' },
  { key: 'habitat', label: 'Habitat' },
  { key: 'caliber', label: 'Recommended caliber' },
  { key: 'rowlandWard', label: 'Rowland Ward minimum' },
  { key: 'lifespan', label: 'Lifespan' },
  { key: 'trophyNote', label: 'Trophy note' },
]

function getSpeciesBySlug(slug: string): SpeciesComparison | undefined {
  return speciesComparisonData.find((s) => s.slug === slug)
}

export default function ComparePage() {
  const [slugA, setSlugA] = useState<string>(speciesComparisonData[0].slug)
  const [slugB, setSlugB] = useState<string>(speciesComparisonData[1].slug)
  const [openSelect, setOpenSelect] = useState<'a' | 'b' | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const a = params.get('a')
    const b = params.get('b')
    if (a && getSpeciesBySlug(a)) setSlugA(a)
    if (b && getSpeciesBySlug(b)) setSlugB(b)
  }, [])

  const speciesA = useMemo(() => getSpeciesBySlug(slugA), [slugA])
  const speciesB = useMemo(() => getSpeciesBySlug(slugB), [slugB])

  const updateUrl = useCallback((a: string, b: string) => {
    if (typeof window === 'undefined') return
    const url = new URL(window.location.href)
    url.searchParams.set('a', a)
    url.searchParams.set('b', b)
    window.history.replaceState({}, '', url.toString())
  }, [])

  useEffect(() => {
    if (slugA && slugB) updateUrl(slugA, slugB)
  }, [slugA, slugB, updateUrl])

  const handleSelectA = (slug: string) => {
    setSlugA(slug)
    if (slug === slugB) setSlugB(slugA)
    setOpenSelect(null)
  }
  const handleSelectB = (slug: string) => {
    setSlugB(slug)
    if (slug === slugA) setSlugA(slugB)
    setOpenSelect(null)
  }

  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-marble">
        {/* Hero */}
        <section className="bg-onyx text-white py-16 md:py-24 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold mb-4 block">
              Wildlife
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-4 flex items-center justify-center gap-4 flex-wrap">
              <Scale className="w-10 h-10 md:w-12 md:h-12 text-gold-500" />
              Species Comparison
            </h1>
            <p className="font-sans text-gray-400 text-lg max-w-2xl mx-auto">
              Compare two species side by side—weight, size, habitat, trophy criteria, and more.
            </p>
          </div>
        </section>

        {/* Selectors */}
        <section className="py-12 md:py-16 bg-marble border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-2">
                  First species
                </label>
                <button
                  type="button"
                  onClick={() => setOpenSelect(openSelect === 'a' ? null : 'a')}
                  className="w-full flex items-center justify-between gap-4 p-4 bg-white border border-gray-200 hover:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/30 transition-all text-left"
                  aria-expanded={openSelect === 'a'}
                  aria-haspopup="listbox"
                  aria-label="Choose first species"
                >
                  {speciesA ? (
                    <>
                      <span className="font-serif text-onyx text-lg">{speciesA.name}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openSelect === 'a' ? 'rotate-180' : ''}`} />
                    </>
                  ) : (
                    <span className="text-gray-500">Select…</span>
                  )}
                </button>
                {openSelect === 'a' && (
                  <ul
                    className="absolute z-20 top-full left-0 right-0 mt-1 max-h-72 overflow-y-auto bg-white border border-gray-200 shadow-lg"
                    role="listbox"
                  >
                    {speciesComparisonData.map((s) => (
                      <li key={s.slug} role="option" aria-selected={s.slug === slugA}>
                        <button
                          type="button"
                          onClick={() => handleSelectA(s.slug)}
                          className={`w-full px-4 py-3 text-left font-sans text-onyx hover:bg-gold-500/10 focus:bg-gold-500/10 focus:outline-none ${s.slug === slugA ? 'bg-gold-500/15 font-medium' : ''}`}
                        >
                          {s.name}
                          <span className="block text-xs text-gray-500 italic">{s.scientific}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="relative">
                <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-2">
                  Second species
                </label>
                <button
                  type="button"
                  onClick={() => setOpenSelect(openSelect === 'b' ? null : 'b')}
                  className="w-full flex items-center justify-between gap-4 p-4 bg-white border border-gray-200 hover:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/30 transition-all text-left"
                  aria-expanded={openSelect === 'b'}
                  aria-haspopup="listbox"
                  aria-label="Choose second species"
                >
                  {speciesB ? (
                    <>
                      <span className="font-serif text-onyx text-lg">{speciesB.name}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openSelect === 'b' ? 'rotate-180' : ''}`} />
                    </>
                  ) : (
                    <span className="text-gray-500">Select…</span>
                  )}
                </button>
                {openSelect === 'b' && (
                  <ul
                    className="absolute z-20 top-full left-0 right-0 mt-1 max-h-72 overflow-y-auto bg-white border border-gray-200 shadow-lg"
                    role="listbox"
                  >
                    {speciesComparisonData.map((s) => (
                      <li key={s.slug} role="option" aria-selected={s.slug === slugB}>
                        <button
                          type="button"
                          onClick={() => handleSelectB(s.slug)}
                          className={`w-full px-4 py-3 text-left font-sans text-onyx hover:bg-gold-500/10 focus:bg-gold-500/10 focus:outline-none ${s.slug === slugB ? 'bg-gold-500/15 font-medium' : ''}`}
                        >
                          {s.name}
                          <span className="block text-xs text-gray-500 italic">{s.scientific}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Side-by-side cards + table */}
        {speciesA && speciesB && (
          <section className="py-12 md:py-20 bg-marble">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white border border-gray-200 overflow-hidden">
                  <div className="relative h-56 md:h-64 bg-onyx">
                    <Image
                      src={speciesA.image}
                      alt={speciesA.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className="font-serif text-2xl md:text-3xl text-white">{speciesA.name}</h2>
                      <p className="text-gold-400 text-sm italic font-serif">{speciesA.scientific}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <Link
                      href={`/${speciesA.slug}`}
                      className="inline-flex items-center gap-2 font-sans text-sm font-medium text-gold-600 hover:text-gold-700 uppercase tracking-wider"
                    >
                      Full species profile <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 overflow-hidden">
                  <div className="relative h-56 md:h-64 bg-onyx">
                    <Image
                      src={speciesB.image}
                      alt={speciesB.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className="font-serif text-2xl md:text-3xl text-white">{speciesB.name}</h2>
                      <p className="text-gold-400 text-sm italic font-serif">{speciesB.scientific}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <Link
                      href={`/${speciesB.slug}`}
                      className="inline-flex items-center gap-2 font-sans text-sm font-medium text-gold-600 hover:text-gold-700 uppercase tracking-wider"
                    >
                      Full species profile <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 overflow-hidden">
                <div className="border-b border-gray-200 px-6 py-4 bg-onyx text-white">
                  <h3 className="font-serif text-xl md:text-2xl">Comparison at a glance</h3>
                </div>
                <table className="w-full font-sans text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-500 w-1/4">
                        Attribute
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-onyx w-[38%]">
                        {speciesA.name}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-onyx w-[38%]">
                        {speciesB.name}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {ATTRIBUTES.map(({ key, label }) => {
                      const valA = speciesA[key]
                      const valB = speciesB[key]
                      if (key === 'trophyNote' && !valA && !valB) return null
                      const displayA = typeof valA === 'string' ? valA : '—'
                      const displayB = typeof valB === 'string' ? valB : '—'
                      return (
                        <tr key={key} className="hover:bg-marble/50 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-600 align-top">
                            {label}
                          </td>
                          <td className="px-6 py-4 text-onyx align-top">
                            {displayA}
                          </td>
                          <td className="px-6 py-4 text-onyx align-top">
                            {displayB}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              <p className="mt-8 text-center text-gray-500 text-sm font-sans">
                Data is indicative and aligned with species profiles. For full detail and hunting notes, use the links above to each species page.
              </p>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 md:py-24 bg-onyx text-white border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl md:text-4xl text-white mb-4">
              Explore all species
            </h2>
            <p className="text-gray-400 font-sans mb-8 max-w-xl mx-auto">
              View the full wildlife portfolio and availability for conservation harvest at MIWESU.
            </p>
            <Link
              href="/wildlife"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-onyx font-sans font-semibold uppercase tracking-wider hover:bg-gold-400 transition-colors"
            >
              Wildlife portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}

import Link from 'next/link'
import { SPECIES_BY_SLUG, SPECIES_SLUGS } from '@/lib/species-data'

export function HomeConservationHarvest() {
  const speciesEntries = SPECIES_SLUGS.map((slug) => ({
    slug, name: SPECIES_BY_SLUG[slug].name, }))

  return (
    <section
      className="bg-onyx px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="conservation-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div>
            <p className="type-eyebrow-dark">Hunting &amp; conservation</p>
            <h2 id="conservation-heading" className="type-h2-section-dark mt-4">
              The conservation harvest
            </h2>
            <p className="type-lead-dark mt-6">
              14+ plains-game species are available for ethical rifle and bow hunting, trophy and biltong. The
              experience is governed by our Guardian&apos;s Pledge: fair chase, silence, and respect for the land and
              the animal.
            </p>
            <p className="type-lead-dark mt-4">
              A professional cold room and slaughter room on the farm support proper handling from field to table.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/wildlife"
                className="inline-flex min-h-11 items-center justify-center border border-gold-500/60 px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] text-gold-400 transition-colors hover:bg-gold-500/10"
              >
                14+ species, profiles
              </Link>
              <Link
                href="/conservation"
                className="inline-flex min-h-11 items-center font-sans text-xs uppercase tracking-[0.2em] text-white/60 underline-offset-4 hover:text-gold-400 hover:underline"
              >
                Guardian&apos;s Pledge &amp; ethics
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-onyx-light/80 p-6 shadow-noir-lg sm:p-8">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.25em]">
              <Link
                href="/wildlife"
                className="text-gold-400 transition-colors duration-200 hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-onyx-light rounded-sm"
              >
                Plains game on quota
              </Link>
            </h3>
            <ul className="mt-6 grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-x-8">
              {speciesEntries.map(({ slug, name }) => (
                <li key={slug} className="border-b border-white/10 last:border-b-0">
                  <Link
                    href={`/${slug}`}
                    className="flex min-h-11 items-center py-2 font-sans text-sm text-gray-300 transition-colors duration-200 hover:text-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-onyx-light rounded-sm sm:py-3"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

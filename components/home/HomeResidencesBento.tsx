import Link from 'next/link'
import { ResidenceFlagshipCard } from '@/components/residences/ResidenceFlagshipCard'
import { lodgeSummary, mainLodgeHouse, secondHouse } from '@/lib/residences-data'

export function HomeResidencesBento() {
  return (
    <section
      className="bg-marble px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="residences-heading"
    >
      <div className="mx-auto max-w-7xl">
        <p className="type-eyebrow text-center">Exclusive use</p>
        <h2 id="residences-heading" className="type-h2-section mt-4 text-center">
          The residences
        </h2>
        <p className="type-lead mx-auto mt-6 max-w-2xl text-center">
          Two private sanctuaries, scale for groups or an intimate bushveld escape, both on the farm.
        </p>

        {/* Same flagship treatment as /residences, stacks on mobile, two columns on lg */}
        <div className="mt-12 grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          <ResidenceFlagshipCard
            priority
            imageSrc="/images/residences-homestead-main.jpg"
            imageAlt="Hunter's House at MIWESU"
            eyebrow="Monumental Scale"
            title="THE HOMESTEAD"
            description="Designed for absolute immersion in the Sweetveld. Featuring expansive entertainment areas, a traditional boma, and seamless integration with the surrounding wildlife."
            exploreHref="/residences/homestead"
            stats={[
              { value: mainLodgeHouse.sleepers, label: 'Sleepers' }, { value: lodgeSummary.mainHouse.bedrooms, label: 'Bedrooms' }, { value: 'Boma', label: 'Fire Pit' }, ]}
          />
          <ResidenceFlagshipCard
            imageSrc="/images/residences-second-house-main.jpg"
            imageAlt="Rooibok Kraal at MIWESU"
            eyebrow="Intimate Seclusion"
            title="THE STONE VILLA"
            description="Carved from the earth. Elevated to provide sweeping views of the ancient canopy, with an outdoor deck and immediate access to the wild."
            exploreHref="/residences/stone-villa"
            stats={[
              { value: secondHouse.sleepers, label: 'Sleepers' }, { value: 2, label: 'En-Suites' }, { value: 'Deck', label: 'Outdoor deck' }, ]}
          />
        </div>

        <div className="mt-6 rounded-2xl border border-onyx/10 bg-marble-dark p-6 shadow-noir-sm sm:p-8 lg:mt-8">
          <p className="type-eyebrow">Enquiry-first</p>
          <p className="type-body mt-4">
            There is no public checkout for lodge stays. Request availability and the Conservation Investment Guide
            through our enquiry flow or contact the team directly.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex min-h-11 items-center justify-center border border-onyx/20 px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] text-onyx transition-colors hover:border-gold-600 hover:text-gold-700"
            >
              Start an enquiry
            </Link>
            <Link
              href="/residences"
              className="inline-flex min-h-11 items-center justify-center px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] text-onyx/70 underline-offset-4 hover:text-onyx hover:underline"
            >
              Compare residences
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

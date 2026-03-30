import Image from 'next/image'
import type { SpeciesPowerDeepDive as DeepDiveModel } from '@/lib/species-power-page-data'
import type { SpeciesDeepDiveSectionImages } from '@/lib/species-power-galleries'

function ProseParagraphs({ text, className }: { text: string; className: string }) {
  const trimmed = text.trim()
  if (!trimmed) return null
  const blocks = trimmed.split(/\n\n+/)
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => (
        <p key={i} className={className}>
          {block}
        </p>
      ))}
    </div>
  )
}

function SectionPlaceholder() {
  return (
    <p className="type-body border-l-2 border-gold-500/30 pl-4 text-gray-500 italic">
      Research block pending editorial QA, contact concierge for the latest species dossier.
    </p>
  )
}

function RowFigure({ img }: { img: SpeciesDeepDiveSectionImages['ecology'] }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-onyx/10 bg-marble-dark shadow-noir-sm">
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  )
}

type RowLayout = 'image-first' | 'text-first'

function DeepDiveRow({
  id, headingId, title, text, image, layout, bodyClass,
}: {
  id: string
  headingId: string
  title: string
  text: string
  image: SpeciesDeepDiveSectionImages['ecology']
  layout: RowLayout
  bodyClass: string
}) {
  const hasBody = text.trim().length > 0

  const copy = (
    <div className="min-w-0 flex flex-col">
      <h2 id={headingId} className="type-h2-section">
        {title}
      </h2>
      <div className="mt-4">
        {hasBody ? (
          <ProseParagraphs text={text} className={bodyClass} />
        ) : (
          <SectionPlaceholder />
        )}
      </div>
    </div>
  )

  const figure = <RowFigure img={image} />

  const imageFirstMobile = layout === 'image-first'

  return (
    <section id={id} className="scroll-mt-24" aria-labelledby={headingId}>
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-10">
        <div
          className={
            imageFirstMobile
              ? 'order-1 lg:order-1'
              : 'order-2 lg:order-2'
          }
        >
          {figure}
        </div>
        <div
          className={
            imageFirstMobile
              ? 'order-2 lg:order-2'
              : 'order-1 lg:order-1'
          }
        >
          {copy}
        </div>
      </div>
    </section>
  )
}

type Props = {
  speciesName: string
  deep: DeepDiveModel
  sectionImages: SpeciesDeepDiveSectionImages
}

/**
 * Alternating two-column sections: image | text, then text | image, then image | text (from lg breakpoint).
 */
export function SpeciesPowerDeepDive({ speciesName, deep, sectionImages }: Props) {
  const bodyClass = 'type-body text-gray-700 leading-relaxed'

  return (
    <section
      className="border-t border-onyx/10 bg-marble px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-label={`Biological and ballistic deep dive, ${speciesName}`}
    >
      <div className="mx-auto max-w-7xl font-sans">
        <p className="type-eyebrow text-center">Biological &amp; ballistic deep dive</p>
        <p className="type-lead mx-auto mt-4 max-w-3xl text-center">
          Habitat, sign, and shot discipline, distilled from MIWESU biological briefs for hunters, PHs, and search
          clarity. Always confirm trophy minima, calibre rules, and export paperwork with your professional hunter.
        </p>

        <div className="mt-12 space-y-16 lg:space-y-20">
          <DeepDiveRow
            id="ecology-behavior"
            headingId="ecology-behavior-heading"
            title={'Ecology & behaviour'}
            text={deep.ecologyAndBehavior}
            image={sectionImages.ecology}
            layout="image-first"
            bodyClass={bodyClass}
          />
          <DeepDiveRow
            id="tracking-spoor"
            headingId="tracking-spoor-heading"
            title={'Tracking & spoor'}
            text={deep.trackingAndSpoor}
            image={sectionImages.tracking}
            layout="text-first"
            bodyClass={bodyClass}
          />
          <DeepDiveRow
            id="ethical-shot-placement"
            headingId="ethical-shot-placement-heading"
            title="Ethical shot placement"
            text={deep.ethicalShotPlacement}
            image={sectionImages.shot}
            layout="image-first"
            bodyClass={bodyClass}
          />
        </div>
      </div>
    </section>
  )
}

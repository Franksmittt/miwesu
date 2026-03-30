import Image from 'next/image'
import type { SpeciesGalleryImage } from '@/lib/species-power-galleries'

type Props = {
  speciesName: string
  images: SpeciesGalleryImage[]
}

/**
 * Masonry-style editorial grid, Hardware Noir frame on marble.
 */
export function SpeciesPowerGallery({ speciesName, images }: Props) {
  if (images.length === 0) return null

  return (
    <section
      className="border-t border-onyx/10 bg-marble-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      aria-label={`${speciesName}, field and portrait imagery`}
    >
      <div className="mx-auto max-w-7xl">
        <p className="type-eyebrow">In the field</p>
        <h2 className="type-h2-section mt-4">MIWESU reference imagery, {speciesName}</h2>
        <p className="type-lead mt-4 max-w-3xl">
          A curated set from our lodge library: habitat, behaviour, shot-discipline references, and meat stewardship.
          All photography supports ethical storytelling, not sensationalism.
        </p>
        <ul className="mt-10 grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, idx) => (
            <li
              key={`${img.src}-${idx}`}
              className="liquid-glass relative aspect-[4/3] overflow-hidden rounded-xl border border-onyx/10 shadow-noir-sm"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

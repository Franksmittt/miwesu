import type { CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const VIGNETTE_STYLE: CSSProperties = {
  background:
    'linear-gradient(180deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.88) 16%, rgba(0,0,0,0.2) 38%, rgba(0,0,0,0.12) 62%, rgba(0,0,0,0.88) 84%, rgba(0,0,0,0.94) 100%)',
}

export type ResidenceFlagshipStat = {
  value: string | number
  label: string
}

export type ResidenceFlagshipCardProps = {
  imageSrc: string
  imageAlt: string
  eyebrow: string
  title: string
  description: string
  stats: ResidenceFlagshipStat[]
  exploreHref: string
  priority?: boolean
  /** h2 on /residences; h3 on home under “The residences” */
  titleHeading?: 'h2' | 'h3'
}

/**
 * Full-bleed flagship residence card, same pattern as /residences (vignette, stats rail, Explore).
 */
export function ResidenceFlagshipCard({
  imageSrc, imageAlt, eyebrow, title, description, stats, exploreHref, priority = false, titleHeading = 'h3',
}: ResidenceFlagshipCardProps) {
  const TitleTag = titleHeading
  return (
    <section className="group relative h-[min(72vh,36rem)] overflow-hidden rounded-[32px] border border-white/[0.08] sm:h-[70vh] sm:rounded-[40px] lg:min-h-[75vh]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition-transform duration-[0.8s] ease-out group-hover:scale-[1.03]"
        priority={priority}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={VIGNETTE_STYLE}
        aria-hidden
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 sm:p-5 md:p-6 lg:p-8">
        <div className="[text-shadow:0_1px_3px_rgba(0,0,0,0.8),0_2px_12px_rgba(0,0,0,0.5)]">
          <span className="mb-1 block font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-400 lg:mb-2 lg:text-sm">
            {eyebrow}
          </span>
          <TitleTag className="mb-2 font-serif text-[clamp(1.75rem,6vw,2.75rem)] font-normal leading-[0.95] tracking-tight text-white lg:text-[2.75rem] xl:text-[3.25rem]">
            {title}
          </TitleTag>
          <p className="max-w-full font-sans text-sm font-light leading-relaxed text-white/95 lg:text-base xl:text-lg">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 border-t border-white/20 pt-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.8)] sm:gap-6 lg:gap-8">
          {stats.map((s) => (
            <div key={`${s.label}-${s.value}`} className="flex flex-col">
              <span className="mb-0.5 font-serif text-lg font-normal text-white lg:text-xl">{s.value}</span>
              <span className="font-sans text-[9px] font-medium uppercase tracking-widest text-white/80 lg:text-[10px]">
                {s.label}
              </span>
            </div>
          ))}
          <Link
            href={exploreHref}
            className="ml-auto mt-2 inline-flex items-center rounded-full bg-marble px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-widest text-onyx no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 lg:mt-0 lg:px-6"
          >
            Explore <ArrowRight className="ml-1 inline h-3.5 w-3.5 -translate-y-px lg:h-4 lg:w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}

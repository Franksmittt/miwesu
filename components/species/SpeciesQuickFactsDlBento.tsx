import type { ReactNode } from 'react'

const glass =
  'liquid-glass-dark rounded-xl border border-white/10 p-4 shadow-noir-sm sm:p-6 backdrop-blur-md'

const dtClass = 'font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400 sm:text-xs'
const ddClass = 'mt-2 font-sans text-sm leading-relaxed text-gray-200 sm:text-base sm:leading-relaxed'

type Props = {
  scientificName: string
  rowlandWardMinimum: string
  averageTrophy: string
  sciMinimum: string
  recommendedCaliber: string
  bulletConstruction: string
  liveWeight: string
  diet: string
  footer?: ReactNode
}

/**
 * Semantic quick-facts bento: each fact is a dt/dd pair inside a shared <dl> (HTML5).
 */
export function SpeciesQuickFactsDlBento({
  scientificName,
  rowlandWardMinimum,
  averageTrophy,
  sciMinimum,
  recommendedCaliber,
  bulletConstruction,
  liveWeight,
  diet,
  footer,
}: Props) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <dl
        className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4"
        aria-label="Species quick facts"
      >
        <div className={`${glass} col-span-2 md:col-span-1`}>
          <dt className={dtClass}>Scientific name</dt>
          <dd className={`${ddClass} font-serif italic text-white`}>{scientificName}</dd>
        </div>

        <div className={`${glass} col-span-2 md:col-span-3`}>
          <dt className={dtClass}>Trophy benchmark · Rowland Ward &amp; SCI</dt>
          <dd className={ddClass}>
            <span className="block font-serif text-lg text-gold-400 md:text-xl">{averageTrophy}</span>
            <span className="mt-2 block text-sm text-gray-300 sm:text-base">
              <span className="font-semibold text-gray-400">Rowland Ward: </span>
              {rowlandWardMinimum}
            </span>
            <span className="mt-2 block text-sm text-gray-300 sm:text-base">
              <span className="font-semibold text-gray-400">SCI: </span>
              {sciMinimum}
            </span>
          </dd>
        </div>

        <div className={`${glass} col-span-2 md:col-span-2`}>
          <dt className={dtClass}>Recommended calibre &amp; bullet construction</dt>
          <dd className={ddClass}>
            <span className="block font-serif text-lg text-gold-400 md:text-xl">{recommendedCaliber}</span>
            <span className="mt-3 block text-sm text-gray-300 sm:text-base">{bulletConstruction}</span>
          </dd>
        </div>

        <div className={`${glass} col-span-2 md:col-span-2`}>
          <dt className={dtClass}>Live weight &amp; diet</dt>
          <dd className={ddClass}>
            <p>
              <span className="font-semibold text-gray-400">Live weight: </span>
              {liveWeight}
            </p>
            <p className="mt-3">
              <span className="font-semibold text-gray-400">Diet: </span>
              {diet}
            </p>
          </dd>
        </div>
      </dl>
      {footer ? <div className="mt-8 flex justify-center">{footer}</div> : null}
    </div>
  )
}

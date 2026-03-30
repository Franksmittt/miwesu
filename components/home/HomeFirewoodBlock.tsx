import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const LINES = ['Geelhak', 'Sekelbos', 'Braai mix'] as const

/**
 * Home firewood teaser, split editorial + single credential panel (illustrative readout, not live telemetry).
 */
export function HomeFirewoodBlock() {
  return (
    <section
      className="border-t border-white/10 bg-gradient-to-b from-[#070708] via-onyx to-onyx px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      aria-labelledby="firewood-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16 lg:items-stretch">
          <div className="flex min-w-0 flex-col">
            <p className="type-eyebrow-dark text-gold-500">Miwesu premium firewood</p>
            <h2
              id="firewood-heading"
              className="mt-4 font-serif text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.35rem]"
            >
              Geelhak, Sekelbos<span className="text-white/35"> · </span>braai mix
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-gray-400">
              Kiln-ready hardwood for high-duty braais, the same discipline we apply at the lodge, brought to what
              burns under the grid.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 shadow-noir-sm">
              {LINES.map((name) => (
                <div
                  key={name}
                  className="bg-onyx/90 px-2 py-5 text-center sm:px-4 sm:py-6"
                >
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-500/90 sm:text-[11px] sm:tracking-[0.25em]">
                    {name}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/wood"
              className="group mt-10 inline-flex min-h-12 w-fit items-center gap-2 border border-gold-500/45 bg-gold-500/[0.08] px-8 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 transition-all duration-200 hover:border-gold-400 hover:bg-gold-500/15 hover:text-gold-200"
            >
              Wood &amp; thermal
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>

          {/* Kiln credential, one surface, no nested stat cards */}
          <aside className="flex flex-col justify-center">
            <div className="liquid-glass-dark relative overflow-hidden rounded-2xl border border-white/[0.09] p-8 shadow-noir-lg sm:p-10">
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold-500/[0.06] blur-2xl"
                aria-hidden
              />
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-gold-500/85">
                Engineered heat
              </p>
              <p className="mt-2 font-sans text-xs leading-relaxed text-white/45">
                Illustrative batch readout, positioning only, not a live feed.
              </p>

              <div className="mt-8 flex flex-col gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/40">Moisture target</p>
                  <p className="mt-3 font-serif text-4xl font-normal tracking-tight text-white sm:text-5xl">
                    &lt;12<span className="text-2xl text-gold-400 sm:text-3xl">%</span>
                  </p>
                </div>
                <div className="sm:pb-1 sm:text-right">
                  <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/40">Status</p>
                  <p className="mt-3 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-gold-400">
                    Kiln verified
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

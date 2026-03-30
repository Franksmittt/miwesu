import { Activity } from 'lucide-react'

/**
 * Illustrative batch card (staged values), not a live feed; describes kiln discipline narrative.
 */
export async function WoodKilnTelemetry() {
  await new Promise((resolve) => setTimeout(resolve, 400))

  return (
    <div className="liquid-glass-dark shadow-noir-md rounded-2xl border border-white/12 px-4 py-6 sm:px-6 sm:py-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/10">
            <Activity className="h-6 w-6 text-gold-400" aria-hidden />
          </div>
          <div>
            <p className="type-eyebrow-dark text-gold-400">Kiln batch readout</p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-gray-300">
              Kiln discipline · target moisture gate before release (illustrative)
            </p>
          </div>
        </div>
        <dl className="grid gap-4 sm:grid-cols-2 lg:flex lg:gap-8">
          <div className="liquid-glass-dark rounded-xl border border-white/10 px-4 py-3">
            <dt className="font-sans text-[10px] uppercase tracking-[0.25em] text-gray-500">Current batch moisture</dt>
            <dd className="mt-2 font-serif text-2xl text-white">
              &lt; 12<span className="text-lg text-gold-400">%</span>
            </dd>
          </div>
          <div className="liquid-glass-dark rounded-xl border border-emerald-500/20 px-4 py-3">
            <dt className="font-sans text-[10px] uppercase tracking-[0.25em] text-gray-500">Status</dt>
            <dd className="mt-2 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Kiln verified
            </dd>
          </div>
        </dl>
      </div>
      <div
        className="mt-6 h-2 overflow-hidden rounded-full bg-white/10"
        role="presentation"
        aria-hidden
      >
        <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-gold-600/80 to-gold-400" />
      </div>
      <p className="mt-3 font-sans text-xs text-gray-500">
        Spec: target equilibrium moisture band for clean combustion in closed systems, minimal smoke, maximum duty cycle.
      </p>
    </div>
  )
}

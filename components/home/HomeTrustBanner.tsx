import Link from 'next/link'

const PILLARS = [
  {
    title: 'Private Waterberg land', body: 'D1432, Makoppa district, Thabazimbi, malaria-free bushveld held in one family’s care.', }, {
    title: 'Enquiry-first stays', body: 'No public checkout. You speak with the team; dates, rates, and logistics are confirmed properly.', }, {
    title: 'Ethical conservation harvest', body: 'Fair chase, silence, and respect, the Guardian\'s Pledge guides rifle, bow, trophy, and biltong.', },
] as const

/**
 * Bridge between the hero and marble content: readable editorial + pillars (replaces affiliation strip).
 */
export function HomeTrustBanner() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-onyx via-[#080809] to-[#0c0c0e] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="home-bridge-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(197,160,89,0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/35 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-7xl">
        <div className="mt-6 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16 lg:items-stretch">
          <div className="flex min-h-0 flex-col lg:h-full">
            <p className="type-eyebrow-dark text-gold-400/95">Below the skyline</p>
            <h2
              id="home-bridge-heading"
              className="mt-6 font-serif text-3xl font-normal leading-[1.18] tracking-tight text-balance text-white sm:text-4xl lg:text-[2.4rem] lg:leading-[1.15]"
            >
              A working farm, not a stage set, bushveld you can hear when you stop talking.
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-relaxed">
              MIWESU is built for guests who want depth over noise: exclusive-use residences, fourteen plains-game
              species under quota, and the same discipline we bring to cold rooms, firewood, and the land itself.
            </p>

            <div className="mt-auto grid grid-cols-1 gap-3 pt-10 lg:grid-cols-3 lg:items-stretch lg:gap-5">
              <Link
                href="/book"
                className="flex min-h-12 w-full items-center justify-center border border-gold-500/55 bg-gold-500/15 px-6 py-3.5 text-center font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-200 transition-colors hover:border-gold-400 hover:bg-gold-500/25 hover:text-white lg:px-8"
              >
                Plan your stay
              </Link>
              <Link
                href="/conservation"
                className="flex min-h-12 w-full items-center justify-center px-4 py-3 text-center font-sans text-sm font-medium text-gray-300 underline decoration-gold-500/40 underline-offset-[6px] transition-colors hover:text-white hover:decoration-gold-400"
              >
                Guardian&apos;s Pledge &amp; ethics
              </Link>
              <Link
                href="/wildlife"
                className="flex min-h-12 w-full items-center justify-center px-4 py-3 text-center font-sans text-sm font-medium text-gray-300 underline decoration-gold-500/40 underline-offset-[6px] transition-colors hover:text-white hover:decoration-gold-400"
              >
                Fourteen species, profiles
              </Link>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 sm:items-stretch lg:h-full lg:grid-cols-1 lg:grid-rows-3 lg:gap-5 lg:items-stretch">
            {PILLARS.map((item) => (
              <li
                key={item.title}
                className="flex min-h-0 flex-col rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-6 lg:h-full lg:min-h-0"
              >
                <p className="font-serif text-lg font-normal tracking-tight text-white sm:text-xl">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-400 sm:text-[0.9375rem] sm:leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

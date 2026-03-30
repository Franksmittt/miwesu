import Link from 'next/link'

type Props = {
  speciesName: string
  speciesSlug: string
}

/**
 * Mock async slot: simulates availability / investment data resolving after first paint.
 * Wrapped in Suspense on the species power page.
 */
export async function ConservationEnquiryPanel({ speciesName, speciesSlug }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 480))

  return (
    <section
      className="border-y border-white/10 bg-gradient-to-b from-onyx-light/80 to-onyx px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      aria-labelledby="enquiry-panel-heading"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="type-eyebrow-dark">Conservation investment · Enquire availability</p>
        <h2 id="enquiry-panel-heading" className="type-h2-section-dark mt-4">
          {speciesName}, request dates &amp; the guide
        </h2>
        <p className="type-lead-dark mx-auto mt-6 max-w-2xl">
          Quotas follow our annual ecological census. Request the Conservation Investment Guide, proposed dates, and
          rifle or bow preferences, concierge reply by email or WhatsApp.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <Link
            href={`/book?species=${encodeURIComponent(speciesSlug)}`}
            className="inline-flex min-h-12 items-center justify-center border border-gold-500 bg-gold-500/15 px-8 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 transition-colors hover:bg-gold-500/25"
          >
            Check availability
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center border border-white/20 px-8 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/90 transition-colors hover:border-gold-500/40 hover:text-gold-400"
          >
            Request the guide
          </Link>
        </div>
      </div>
    </section>
  )
}

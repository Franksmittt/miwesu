import Link from 'next/link'

/** Verified on-farm leisure only, no fabricated safari products. */
const items = [
  {
    title: 'Quiet wildlife viewing', body: 'Wildlife viewing and birding across sweetveld and bushveld, binoculars and patience rewarded, without packaged “safari theatre.”', }, {
    title: '4×4 trails', body: 'Trail exploration by 4×4 on the farm’s tracks when arranged as part of your stay.', }, {
    title: 'Photographic safaris', body: 'Unhurried photographic outings when the rifle stays in the safe, same landscape, slower pace.', }, {
    title: 'Stargazing at the Stone Villa', body: 'Clear Waterberg skies; the Stone Villa stargazing deck includes a telescope for night-sky sessions.', }, {
    title: 'Family gatherings at the Homestead', body: 'Swimming pool with multi-slide, trampoline, and jungle gym; boma, lapa, and space for multi-generational groups.', },
] as const

export function HomeBushveldLeisure() {
  return (
    <section
      className="bg-marble-dark px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="leisure-heading"
    >
      <div className="mx-auto max-w-7xl">
        <p className="type-eyebrow text-center">Beyond the hunt</p>
        <h2 id="leisure-heading" className="type-h2-section mt-4 text-center">
          Bushveld leisure
        </h2>
        <p className="type-lead mx-auto mt-6 max-w-2xl text-center">
          Not every hour is spent in the field. Miwesu is built for families, photographers, and guests who want the
          bushveld without rushing the clock.
        </p>
        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-onyx/10 bg-marble p-6 shadow-noir-sm"
            >
              <h3 className="type-h3">{item.title}</h3>
              <p className="type-body mt-4">{item.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center">
          <Link
            href="/activities"
            className="inline-flex min-h-11 items-center font-sans text-xs uppercase tracking-[0.2em] text-onyx underline-offset-4 hover:text-gold-700 hover:underline"
          >
            Full activities overview
          </Link>
        </p>
      </div>
    </section>
  )
}

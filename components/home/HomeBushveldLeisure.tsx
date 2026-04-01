import Image from 'next/image'
import Link from 'next/link'
import { activityImages } from '@/lib/activity-images'

/** Six on-farm leisure lines — 2×3 on large screens; images match activities page assets. */
const items = [
  {
    title: 'Quiet wildlife viewing',
    body: 'Wildlife viewing and birding across sweetveld and bushveld, binoculars and patience rewarded, without packaged “safari theatre.”',
    image: activityImages.wildlifeViewingCard,
    imageAlt: 'Wildlife viewing across sweetveld and bushveld at MIWESU',
  },
  {
    title: 'Guided game drives',
    body: 'Game viewing from safari vehicles on the farm’s roads and sweetveld, with your professional team—quiet approaches, waterholes, and the rhythm of the bush without selling a separate “safari package.”',
    image: activityImages.gameDriveCard,
    imageAlt: 'Safari vehicles and game viewing at MIWESU Homestead',
  },
  {
    title: 'Walking safaris',
    body: 'Guided walks on foot when arranged with your hosts—tracks, trees, and the small detail you miss from the vehicle. Suited to families who want a slower, educational pace.',
    image: activityImages.walkingSafariCard,
    imageAlt: 'Walking safari and bushveld on MIWESU',
  },
  {
    title: 'Boma, lapa & braai evenings',
    body: 'The social heart of the stay: outdoor braai, boma fire, and lapa space at the Homestead—where the day’s stories land and generations share the same table.',
    image: activityImages.bomaLapaEveningCard,
    imageAlt: 'Outdoor braai, pool and boma area at MIWESU Homestead',
  },
  {
    title: 'Family gatherings at the Homestead',
    body: 'Swimming pool with multi-slide, trampoline, and jungle gym; boma, lapa, and space for multi-generational groups.',
    image: activityImages.gatheringsFamilyCard,
    imageAlt: 'Boma, braai and family space at the Homestead',
  },
  {
    title: 'Birding & habitat',
    body: 'Between moist Bushveld and arid Kalahari edges—raptors, bee-eaters, hornbills, and regional specials. Quiet hours, real habitat.',
    image: activityImages.birdingCard,
    imageAlt: 'Birding and bushveld habitat at MIWESU',
  },
] as const

export function HomeBushveldLeisure() {
  return (
    <section
      className="bg-marble-dark px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="leisure-heading"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="type-eyebrow">Beyond the hunt</p>
          <h2 id="leisure-heading" className="type-h2-section mt-4">
            Bushveld leisure
          </h2>
          <p className="type-lead mt-6 text-onyx/85">
            Not every hour is spent in the field. Miwesu is built for families, observers, and guests who want the
            bushveld without rushing the clock.
          </p>
        </header>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {items.map((item) => (
            <li key={item.title} className="group h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-onyx/10 bg-marble shadow-noir-sm transition-shadow duration-300 hover:border-onyx/15 hover:shadow-noir-md">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-onyx/20">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx/50 via-transparent to-transparent opacity-80"
                    aria-hidden
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="type-h3 text-balance">{item.title}</h3>
                  <p className="type-body mt-4 flex-1 text-onyx/80">{item.body}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center sm:mt-14">
          <Link
            href="/activities"
            className="inline-flex min-h-11 items-center rounded-full border border-onyx/15 bg-marble px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-onyx transition-colors hover:border-gold-500/40 hover:bg-onyx/[0.03] hover:text-gold-800"
          >
            Full activities overview
          </Link>
        </p>
      </div>
    </section>
  )
}

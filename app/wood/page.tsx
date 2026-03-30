import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { WoodKilnTelemetry } from '@/components/wood/WoodKilnTelemetry'
import { WoodKilnTelemetrySkeleton } from '@/components/wood/WoodKilnTelemetrySkeleton'
import { WoodThermalCommerceIsland } from '@/components/wood/WoodThermalCommerceIsland'
import { WOOD_PRODUCTS } from '@/lib/wood-products'
import { bagWeightKg } from '@/lib/wood-volume-helpers'

export default function WoodPage() {
  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-onyx text-white">
        <section className="relative flex min-h-[min(52vh,28rem)] items-center justify-center overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="absolute inset-0 z-0">
            <div className="relative h-full min-h-[min(52vh,28rem)] w-full">
              <Image
                src="/images/_filename_wood-macro-grainjpg__Nano_Banana_Pro_31490.jpg"
                alt="Engineered thermal wood, kiln-dried hardwood grain structure, MIWESU"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center opacity-60"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-onyx via-onyx/80 to-onyx/40" aria-hidden />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="type-hero-eyebrow-fluid text-gold-400">Miwesu thermal hardware</p>
            <h1 className="type-display-fluid mt-6 text-balance text-white">
              Engineered heat
            </h1>
            <p className="type-lead-fluid mx-auto mt-6 max-w-2xl text-pretty text-gray-300">
              High-performance thermal fuel for closed-combustion fireplaces, commercial pizza decks, and high-duty
              grills. Kiln-verified moisture band, not ambient-seasoned stock.
            </p>
          </div>
        </section>

        <section className="border-y border-white/10 bg-onyx px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Suspense fallback={<WoodKilnTelemetrySkeleton />}>
              <WoodKilnTelemetry />
            </Suspense>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center lg:text-left">
              <p className="type-eyebrow-dark text-gold-400">SKU matrix</p>
              <h2 className="type-h2-section-dark mt-4">Thermal catalogue</h2>
              <p className="type-lead-dark mx-auto mt-4 max-w-2xl lg:mx-0">
                ZAR pricing per bag. MOQs enforce load efficiency, align with the visualizer below before you message
                logistics.
              </p>
            </div>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {WOOD_PRODUCTS.map((product) => (
                <li key={product.id}>
                  <article className="liquid-glass-dark flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 shadow-noir-sm">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                      <div className="absolute left-3 top-3 rounded-lg border border-white/15 bg-onyx/80 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.2em] text-gold-400 backdrop-blur-sm">
                        {product.weight}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h3 className="font-serif text-xl text-white">
                        {product.name}
                        {product.subtitle ? (
                          <span className="mt-1 block font-sans text-xs font-normal uppercase tracking-widest text-gray-500">
                            {product.subtitle}
                          </span>
                        ) : null}
                      </h3>
                      <p className="type-lead-dark mt-3 flex-1 text-sm leading-relaxed">{product.description}</p>
                      <div className="mt-6 border-t border-white/10 pt-4">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="font-serif text-2xl text-gold-400 tabular-nums">R{product.price}</span>
                          <span className="font-sans text-xs uppercase tracking-wider text-gray-500">
                            per {product.unitLabel}
                          </span>
                        </div>
                        <p className="mt-2 font-sans text-xs text-gray-400">
                          MOQ <span className="text-white">{product.moq}</span> bags ·{' '}
                          <span className="tabular-nums">{bagWeightKg(product) * product.moq} kg</span> minimum thermal
                          mass
                        </p>
                      </div>
                      <a
                        href="#thermal-commerce"
                        className="mt-6 inline-flex min-h-11 items-center justify-center border border-gold-500/40 px-4 py-3 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-400 transition-colors hover:border-gold-400 hover:bg-gold-500/10"
                      >
                        Configure load
                      </a>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="thermal-commerce" className="border-t border-white/10 bg-onyx py-16 sm:py-24">
          <WoodThermalCommerceIsland />
        </section>

        <section className="border-t border-white/10 bg-onyx-light/30 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="type-lead-dark text-sm">
              Gauteng delivery corridor · COD on inspection where agreed · Bulk or other regions:{' '}
              <Link href="mailto:info@miwesu.co.za" className="text-gold-400 underline-offset-4 hover:underline">
                info@miwesu.co.za
              </Link>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  )
}

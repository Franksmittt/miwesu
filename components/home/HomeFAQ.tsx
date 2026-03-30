import type { HomeFaqItem } from '@/lib/home-faq-data'

const COL_COUNT = 6

function FaqColumn({ items }: { items: HomeFaqItem[] }) {
  return (
    <div className="min-w-0 space-y-0 border-t border-onyx/10">
      {items.map((item) => (
        <details
          key={item.question}
          className="group border-b border-onyx/10 open:bg-marble-dark/40"
        >
          <summary className="cursor-pointer list-none py-5 font-sans text-sm font-semibold leading-snug text-onyx outline-none transition-colors marker:content-none hover:text-gold-700 [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-4 pr-2">
              {item.question}
              <span
                className="shrink-0 font-sans text-lg font-light leading-none text-gold-600 transition-transform duration-200 group-open:rotate-45"
                aria-hidden
              >
                +
              </span>
            </span>
          </summary>
          <div className="pb-6 pl-0 pr-4 sm:pr-6">
            <p className="type-body text-onyx/85">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  )
}

export function HomeFAQ({ items }: { items: HomeFaqItem[] }) {
  const left = items.slice(0, COL_COUNT)
  const right = items.slice(COL_COUNT, COL_COUNT * 2)

  return (
    <section
      className="border-t border-onyx/10 bg-marble px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="home-faq-heading"
    >
      <div className="mx-auto max-w-7xl">
        <p className="type-eyebrow text-center">Planning your visit</p>
        <h2 id="home-faq-heading" className="type-h2-section mt-4 text-center">
          Common questions
        </h2>
        <p className="type-lead mx-auto mt-6 max-w-3xl text-center">
          Straight answers on ethics, logistics, and how we work. No invented dashboards or vanity metrics.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <FaqColumn items={left} />
          <div className="min-w-0 lg:border-l lg:border-onyx/10 lg:pl-12 xl:pl-16">
            <FaqColumn items={right} />
          </div>
        </div>
      </div>
    </section>
  )
}

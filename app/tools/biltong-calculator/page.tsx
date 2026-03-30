import Layout from '@/components/Layout'
import { BiltongYieldCalculator } from '@/components/tools/BiltongYieldCalculator'

export default function BiltongCalculatorPage() {
  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-onyx text-white">
        <section className="border-b border-white/10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="type-hero-eyebrow-fluid text-gold-400">Radical trust · meat maths</p>
            <h1
              className="mt-6 font-serif font-normal tracking-tight text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1 }}
            >
              Biltong yield calculator
            </h1>
            <p className="type-lead-fluid mt-6 max-w-2xl text-pretty text-gray-400">
              Select your quarry, enter wet carcass mass, output updates live using the{' '}
              <span className="text-gold-400/90">38%</span> dry-yield standard used across South African processing.
            </p>
          </div>
        </section>
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <BiltongYieldCalculator />
          </div>
        </section>
      </main>
    </Layout>
  )
}

import Layout from '@/components/Layout'
import { Saps520GeneratorForm } from '@/components/tools/Saps520GeneratorForm'

export default function Saps520Page() {
  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-onyx text-white">
        <section className="py-12 sm:py-16">
          <Saps520GeneratorForm />
        </section>
      </main>
    </Layout>
  )
}

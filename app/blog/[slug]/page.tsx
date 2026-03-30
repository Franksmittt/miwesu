import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { getBlogPostBySlug } from '@/lib/blog-posts'
import { getBlogContent } from '@/lib/blog-content'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const { getBlogSlugs } = await import('@/lib/blog-posts')
  const { getBlogContent } = await import('@/lib/blog-content')
  return getBlogSlugs()
    .filter((slug) => getBlogContent(slug))
    .map((slug) => ({ slug }))
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  const sections = getBlogContent(slug)
  if (!post || !sections) notFound()

  const heroSrc = post.heroImage?.startsWith('/') ? post.heroImage : `/og-image.jpg`
  const ctaLink = slug.includes('saps-520')
    ? '/tools/saps-520'
    : slug.includes('biltong')
      ? '/tools/biltong-calculator'
      : slug.includes('telemetry')
        ? '/wood'
        : slug.includes('golden-vs-blue')
          ? '/compare'
          : slug.includes('16-sleeper') || slug.includes('stone-villa')
            ? '/book'
            : slug.includes('conservation-harvest')
              ? '/conservation'
              : slug.includes('limpopo-hunting-season')
                ? '/availability'
                : '/contact'
  const ctaLabel = slug.includes('saps-520')
    ? 'Generate SAPS 520 PDF'
    : slug.includes('biltong')
      ? 'Biltong Yield Calculator'
      : slug.includes('telemetry')
        ? 'Engineered heat & firewood'
        : slug.includes('golden-vs-blue')
          ? 'Compare Species'
          : slug.includes('16-sleeper') || slug.includes('stone-villa')
            ? 'Check availability'
            : slug.includes('conservation-harvest')
              ? 'Conservation impact'
              : slug.includes('limpopo-hunting-season')
                ? 'View availability'
                : 'Contact concierge'

  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-marble">
        <section className="bg-marble">
          <div className="relative w-full aspect-video sm:aspect-[21/9] max-h-[50vh] overflow-hidden">
            <Image
              src={heroSrc}
              alt={`${post.title} - MIWESU Game Farm Makoppa district Thabazimbi`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </section>
        <section className="py-16 md:py-24 bg-marble">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center text-gold-600 font-sans text-sm mb-8 hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" /> Hunter&apos;s Journal
            </Link>
            <p className="text-gold-600 text-xs uppercase tracking-wider font-sans mb-2">{post.category}</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-onyx mb-6">{post.title}</h1>
            <p className="text-gray-500 text-sm mb-12">MIWESU GAME FARM · Makoppa district, Thabazimbi, Limpopo</p>

            <div className="prose prose-lg max-w-none font-sans text-gray-600 space-y-8">
              {sections.map((sec, i) => (
                <div key={i}>
                  <h2 className="font-serif text-2xl text-onyx mt-10 mb-4">{sec.h2}</h2>
                  {sec.paragraphs.map((p, j) => (
                    <p key={j} className="leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-14 pt-10 border-t border-gray-200">
              <p className="text-gray-500 text-sm font-sans mb-2">Author</p>
              <p className="text-onyx font-sans text-sm">
                MIWESU team. Experience in the Waterberg and Makoppa district; conservation harvest and PHASA-aligned practice. Guardian&apos;s Pledge.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={ctaLink}
                className="inline-flex items-center px-6 py-3 bg-onyx text-white font-sans font-medium hover:bg-gold-500 transition-colors"
              >
                {ctaLabel} <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/blog" className="inline-flex items-center text-gold-600 font-sans font-medium hover:underline">
                All Journal posts
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { BookOpen, ArrowRight } from 'lucide-react'

const POSTS = [
  {
    slug: 'sweetveld-vs-sourveld',
    title: 'Sweetveld vs. Sourveld: Why Our Nutrient Density Produces Bigger Horns',
    excerpt: 'The ecological advantage behind MIWESU\'s trophy quality. How Sweetveld grasses in the Makoppa district sustain game in peak condition year-round.',
    href: '/blog/sweetveld-vs-sourveld',
  },
  {
    slug: 'limpopo-vs-eastern-cape',
    title: 'Limpopo vs. Eastern Cape Hunting: Where to Hunt Plains Game in South Africa',
    excerpt: 'A clear comparison for international hunters: bushveld, species mix, climate, and why the Waterberg and Makoppa district rank among the best.',
    href: '/blog/limpopo-vs-eastern-cape',
  },
  {
    slug: 'trophy-export-guide',
    title: 'The Logistics of Export: How We Get Your Trophy from Limpopo to Your Home',
    excerpt: 'From field prep to CITES and shipping—what to expect when bringing your trophy home from South Africa.',
    href: '/trophy-export',
  },
]

export default function BlogPage() {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal')
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = reveals[i].getBoundingClientRect().top
        const elementVisible = 100
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active')
        }
      }
    }
    window.addEventListener('scroll', reveal)
    reveal()
    return () => window.removeEventListener('scroll', reveal)
  }, [])

  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-marble">
        <section className="relative h-[45vh] sm:h-[50vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about-hero.jpg"
              alt="Hunter's Journal - MIWESU Game Farm Makoppa district Thabazimbi"
              fill
              sizes="100vw"
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent" />
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase font-bold mb-4 block">
              Authority & Insight
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-none">
              Hunter&apos;s <span className="text-gradient-gold">Journal</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto">
              Power pages for international hunters: logistics, ecology, and where to hunt.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-marble">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-10">
              {POSTS.map((post, i) => (
                <article key={post.slug} className="reveal border-b border-gray-200 pb-10 last:border-0 last:pb-0">
                  <h2 className="font-serif text-2xl md:text-3xl text-onyx mb-3">
                    <Link href={post.href} className="hover:text-gold-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={post.href}
                    className="inline-flex items-center text-gold-600 font-sans font-medium hover:underline"
                  >
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { BookOpen, ArrowRight } from 'lucide-react'
import { BLOG_POSTS, BLOG_CATEGORIES, type BlogCategory } from '@/lib/blog-posts'

export default function BlogPage() {
  const [filter, setFilter] = useState<BlogCategory | 'All'>('All')
  const filtered = useMemo(() => {
    if (filter === 'All') return BLOG_POSTS
    return BLOG_POSTS.filter((p) => p.category === filter)
  }, [filter])

  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-marble">
        <section className="relative h-[45vh] sm:h-[50vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg"
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
              Conservation, ballistics, luxury living, and logistics. Power pages for international hunters and syndicates.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-marble">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span className="text-gray-500 text-sm font-sans">Filter:</span>
              <button
                onClick={() => setFilter('All')}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  filter === 'All' ? 'bg-onyx text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All
              </button>
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    filter === cat ? 'bg-onyx text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`group block rounded-2xl border border-gray-200/80 bg-white overflow-hidden hover:border-gold-500/40 hover:shadow-lg transition-all ${
                    i === 0 && filter === 'All' ? 'sm:col-span-2 sm:row-span-2' : ''
                  }`}
                >
                  <div className={`relative bg-onyx ${i === 0 && filter === 'All' ? 'aspect-[21/9] sm:aspect-auto sm:h-full min-h-[200px]' : 'aspect-[16/10]'}`}>
                    <Image
                      src={post.heroImage || '/og-image.jpg'}
                      alt=""
                      fill
                      className="object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                      sizes={i === 0 && filter === 'All' ? '(max-width: 640px) 100vw, 66vw' : '(max-width: 640px) 100vw, 33vw'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <span className="text-gold-400 text-[10px] uppercase tracking-wider font-sans">{post.category}</span>
                      <h2 className="font-serif text-lg sm:text-xl text-white mt-1 line-clamp-2 group-hover:text-gold-300 transition-colors">
                        {post.title}
                      </h2>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="text-gray-600 text-sm font-sans leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <span className="inline-flex items-center mt-3 text-gold-600 font-sans text-sm font-medium group-hover:underline">
                      Read more <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

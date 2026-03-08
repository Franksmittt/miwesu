'use client'

import Layout from '@/components/Layout'
import Link from 'next/link'
import { FileText, Scale, Activity, ArrowRight } from 'lucide-react'

const tools = [
  {
    title: 'SAPS 520 Generator',
    description: 'Prepare your temporary firearm import application for South Africa. Enter your details and firearms to generate a formatted PDF ready for submission.',
    href: '/tools/saps520',
    icon: FileText,
    label: 'Firearm logistics',
  },
  {
    title: 'Biltong Yield Calculator',
    description: 'Estimate wet carcass weight and dry biltong yield by species. Built for the local SA market with standard processing variables.',
    href: '/tools/biltong',
    icon: Scale,
    label: 'Meat yield',
  },
  {
    title: 'Live Telemetry Dashboard',
    description: 'Conservation impact metrics and kiln moisture data—live-style dashboards for the Iron Eden and Engineered Heat.',
    href: '/tools/telemetry',
    icon: Activity,
    label: 'Impact & moisture',
  },
]

export default function ToolsPage() {
  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-marble">
        <section className="bg-onyx text-white py-16 md:py-24 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold mb-4 block">
              Logistics & trust
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">
              Tools
            </h1>
            <p className="font-sans text-gray-400 text-lg max-w-2xl mx-auto">
              SAPS 520 preparation, biltong yield estimates, and live telemetry—everything you need to plan and verify.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {tools.map((tool) => {
                const Icon = tool.icon
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="group block liquid-glass-dark rounded-xl p-6 sm:p-8 border border-white/10 hover:border-gold-500/30 transition-all duration-300"
                  >
                    <span className="text-gold-500/80 text-[10px] uppercase tracking-widest font-sans">
                      {tool.label}
                    </span>
                    <div className="flex items-center gap-3 mt-3 mb-4">
                      <Icon className="w-8 h-8 text-gold-500" />
                      <h2 className="font-serif text-2xl text-white group-hover:text-gold-400 transition-colors">
                        {tool.title}
                      </h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {tool.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-gold-500 text-sm font-sans uppercase tracking-wider group-hover:gap-3 transition-all">
                      Open <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

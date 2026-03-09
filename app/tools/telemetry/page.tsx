'use client'

import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { Activity, ArrowLeft, Leaf, Flame } from 'lucide-react'

type Telemetry = {
  conservation: {
    hectaresProtected: number
    antiPoachingHoursThisWeek: number
    communityInvestmentsZAR: number
    lastUpdated: string
  }
  kiln: {
    batchId: string
    moisturePercent: number
    tempCelsius: number
    status: string
    lastUpdated: string
  }
}

export default function TelemetryPage() {
  const [data, setData] = useState<Telemetry | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/telemetry')
        if (res.ok) setData(await res.json())
      } catch (_) {
        // fallback mock
        setData({
          conservation: {
            hectaresProtected: 4240,
            antiPoachingHoursThisWeek: 180,
            communityInvestmentsZAR: 128000,
            lastUpdated: new Date().toISOString(),
          },
          kiln: {
            batchId: 'Sekelbos-2026-03',
            moisturePercent: 8.4,
            tempCelsius: 54,
            status: 'drying',
            lastUpdated: new Date().toISOString(),
          },
        })
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    const interval = setInterval(fetchData, 15000)
    return () => clearInterval(interval)
  }, [])

  const c = data?.conservation
  const k = data?.kiln

  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-marble">
        <section className="bg-onyx text-white py-12 md:py-16 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gold-500 text-sm font-sans uppercase tracking-wider mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Tools
            </Link>
            <div className="flex items-center gap-3">
              <Activity className="w-10 h-10 text-gold-500" />
              <div>
                <h1 className="font-serif text-3xl md:text-4xl text-white">Live Telemetry</h1>
                <p className="text-gray-400 text-sm mt-1">
                  Conservation impact and kiln moisture: simulated live data
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Conservation Impact */}
            <div className="liquid-glass-dark rounded-xl border border-white/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-white/10 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-gold-500" />
                <h2 className="font-serif text-xl text-white">Conservation Impact Monitor</h2>
              </div>
              {loading ? (
                <div className="p-8 text-gray-400 text-center">Loading…</div>
              ) : c ? (
                <div className="grid sm:grid-cols-3 gap-6 p-6">
                  <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Hectares protected</p>
                    <p className="font-serif text-3xl text-gold-500">{c.hectaresProtected.toLocaleString()}</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Anti-poaching hours (this week)</p>
                    <p className="font-serif text-3xl text-gold-500">{c.antiPoachingHoursThisWeek}</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Community investments (ZAR)</p>
                    <p className="font-serif text-3xl text-gold-500">R {c.communityInvestmentsZAR.toLocaleString()}</p>
                  </div>
                </div>
              ) : null}
              {c && (
                <p className="px-6 pb-4 text-gray-500 text-xs">
                  Last updated: {new Date(c.lastUpdated).toLocaleString()}
                </p>
              )}
            </div>

            {/* Kiln / Firewood */}
            <div className="liquid-glass-dark rounded-xl border border-white/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-white/10 flex items-center gap-2">
                <Flame className="w-5 h-5 text-gold-500" />
                <h2 className="font-serif text-xl text-white">Kiln Telemetry: Engineered Heat</h2>
              </div>
              {loading ? (
                <div className="p-8 text-gray-400 text-center">Loading…</div>
              ) : k ? (
                <div className="grid sm:grid-cols-3 gap-6 p-6">
                  <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Moisture content</p>
                    <p className="font-serif text-3xl text-gold-500">{k.moisturePercent}%</p>
                    <p className="text-gray-500 text-xs mt-1">Target &lt;12%</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Kiln temperature</p>
                    <p className="font-serif text-3xl text-gold-500">{k.tempCelsius} °C</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Batch</p>
                    <p className="font-serif text-lg text-gold-500">{k.batchId}</p>
                    <p className="text-gray-500 text-xs mt-1 capitalize">{k.status}</p>
                  </div>
                </div>
              ) : null}
              {k && (
                <p className="px-6 pb-4 text-gray-500 text-xs">
                  Last updated: {new Date(k.lastUpdated).toLocaleString()}
                </p>
              )}
            </div>

            <p className="text-gray-500 text-sm">
              Data is simulated for demonstration. Connect real IoT or database for production.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  )
}

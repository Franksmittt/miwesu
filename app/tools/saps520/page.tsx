'use client'

import { useState } from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { FileText, ArrowLeft, Plus, Trash2, AlertTriangle } from 'lucide-react'
import { hapticConfirm } from '@/lib/haptic'

const MAX_FIREARMS = 4
const DEFAULT_FIREARM = { make: '', model: '', caliber: '', serialNumber: '', action: 'Bolt' }

export default function SAPS520Page() {
  const [applicant, setApplicant] = useState({
    surname: '',
    initials: '',
    fullNames: '',
    passportNumber: '',
    dateOfBirth: '',
    nationality: '',
    address: '',
    email: '',
    phone: '',
  })
  const [travel, setTravel] = useState({
    portOfEntry: 'OR Tambo International',
    portOfExit: 'OR Tambo International',
    arrivalDate: '',
    departureDate: '',
    reason: 'Sport hunting / safari',
  })
  const [firearms, setFirearms] = useState<Array<typeof DEFAULT_FIREARM>>([{ ...DEFAULT_FIREARM }])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const addFirearm = () => {
    if (firearms.length >= MAX_FIREARMS) return
    setFirearms((prev) => [...prev, { ...DEFAULT_FIREARM }])
  }
  const removeFirearm = (i: number) => {
    if (firearms.length <= 1) return
    setFirearms((prev) => prev.filter((_, idx) => idx !== i))
  }
  const updateFirearm = (i: number, field: keyof typeof DEFAULT_FIREARM, value: string) => {
    setFirearms((prev) => prev.map((f, idx) => (idx === i ? { ...f, [field]: value } : f)))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    hapticConfirm()
    try {
      const res = await fetch('/api/saps520/pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          applicant,
          travel,
          firearms: firearms.map((f) => ({ ...f, action: f.action || 'Bolt' })),
        }),
      })
      if (!res.ok) throw new Error('Failed to generate PDF')
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'SAPS520-MIWESU-application-data.pdf'
      a.click()
      URL.revokeObjectURL(url)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-marble">
        <section className="bg-onyx text-white py-12 md:py-16 border-b border-white/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gold-500 text-sm font-sans uppercase tracking-wider mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Tools
            </Link>
            <div className="flex items-center gap-3">
              <FileText className="w-10 h-10 text-gold-500" />
              <div>
                <h1 className="font-serif text-3xl md:text-4xl text-white">SAPS 520 Generator</h1>
                <p className="text-gray-400 text-sm mt-1">
                  Temporary firearm import — application data for South Africa
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="liquid-glass rounded-xl border border-white/10 p-6 md:p-8 bg-onyx/5">
              <p className="text-gray-600 text-sm mb-6">
                Enter your details and firearm information. We will generate a formatted PDF that you can use with the official SAPS 520 process. Maximum 4 firearms; do not sign the document until instructed by SAPS on arrival.
              </p>

              {error && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 mb-6">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="font-serif text-xl text-onyx mb-4">Applicant details</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-xs uppercase tracking-wider text-gray-500">Surname</span>
                      <input
                        type="text"
                        required
                        value={applicant.surname}
                        onChange={(e) => setApplicant((a) => ({ ...a, surname: e.target.value }))}
                        className="mt-1 w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs uppercase tracking-wider text-gray-500">Initials</span>
                      <input
                        type="text"
                        required
                        value={applicant.initials}
                        onChange={(e) => setApplicant((a) => ({ ...a, initials: e.target.value }))}
                        className="mt-1 w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500"
                      />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-xs uppercase tracking-wider text-gray-500">Full names</span>
                      <input
                        type="text"
                        required
                        value={applicant.fullNames}
                        onChange={(e) => setApplicant((a) => ({ ...a, fullNames: e.target.value }))}
                        className="mt-1 w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs uppercase tracking-wider text-gray-500">Passport number</span>
                      <input
                        type="text"
                        required
                        value={applicant.passportNumber}
                        onChange={(e) => setApplicant((a) => ({ ...a, passportNumber: e.target.value }))}
                        className="mt-1 w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs uppercase tracking-wider text-gray-500">Date of birth</span>
                      <input
                        type="text"
                        placeholder="DD/MM/YYYY"
                        required
                        value={applicant.dateOfBirth}
                        onChange={(e) => setApplicant((a) => ({ ...a, dateOfBirth: e.target.value }))}
                        className="mt-1 w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs uppercase tracking-wider text-gray-500">Nationality</span>
                      <input
                        type="text"
                        required
                        value={applicant.nationality}
                        onChange={(e) => setApplicant((a) => ({ ...a, nationality: e.target.value }))}
                        className="mt-1 w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500"
                      />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-xs uppercase tracking-wider text-gray-500">Address</span>
                      <textarea
                        required
                        rows={2}
                        value={applicant.address}
                        onChange={(e) => setApplicant((a) => ({ ...a, address: e.target.value }))}
                        className="mt-1 w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs uppercase tracking-wider text-gray-500">Email</span>
                      <input
                        type="email"
                        required
                        value={applicant.email}
                        onChange={(e) => setApplicant((a) => ({ ...a, email: e.target.value }))}
                        className="mt-1 w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs uppercase tracking-wider text-gray-500">Phone</span>
                      <input
                        type="tel"
                        value={applicant.phone}
                        onChange={(e) => setApplicant((a) => ({ ...a, phone: e.target.value }))}
                        className="mt-1 w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500"
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-xl text-onyx mb-4">Travel details</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-xs uppercase tracking-wider text-gray-500">Port of entry</span>
                      <input
                        type="text"
                        required
                        value={travel.portOfEntry}
                        onChange={(e) => setTravel((t) => ({ ...t, portOfEntry: e.target.value }))}
                        className="mt-1 w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs uppercase tracking-wider text-gray-500">Port of exit</span>
                      <input
                        type="text"
                        required
                        value={travel.portOfExit}
                        onChange={(e) => setTravel((t) => ({ ...t, portOfExit: e.target.value }))}
                        className="mt-1 w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs uppercase tracking-wider text-gray-500">Arrival date</span>
                      <input
                        type="text"
                        placeholder="DD/MM/YYYY"
                        required
                        value={travel.arrivalDate}
                        onChange={(e) => setTravel((t) => ({ ...t, arrivalDate: e.target.value }))}
                        className="mt-1 w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs uppercase tracking-wider text-gray-500">Departure date</span>
                      <input
                        type="text"
                        placeholder="DD/MM/YYYY"
                        required
                        value={travel.departureDate}
                        onChange={(e) => setTravel((t) => ({ ...t, departureDate: e.target.value }))}
                        className="mt-1 w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500"
                      />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-xs uppercase tracking-wider text-gray-500">Reason for permit</span>
                      <input
                        type="text"
                        value={travel.reason}
                        onChange={(e) => setTravel((t) => ({ ...t, reason: e.target.value }))}
                        className="mt-1 w-full px-4 py-2.5 border border-gray-200 rounded focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500"
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-serif text-xl text-onyx">Firearms (max {MAX_FIREARMS})</h2>
                    <button
                      type="button"
                      onClick={addFirearm}
                      disabled={firearms.length >= MAX_FIREARMS}
                      className="inline-flex items-center gap-1.5 text-gold-600 hover:text-gold-700 disabled:opacity-50 text-sm font-sans uppercase tracking-wider"
                    >
                      <Plus className="w-4 h-4" /> Add
                    </button>
                  </div>
                  <div className="space-y-6">
                    {firearms.map((f, i) => (
                      <div key={i} className="p-4 border border-gray-200 rounded-lg space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs uppercase tracking-wider text-gray-500">Firearm {i + 1}</span>
                          {firearms.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeFirearm(i)}
                              className="text-gray-400 hover:text-red-600 p-1"
                              aria-label="Remove firearm"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                          <input
                            placeholder="Make"
                            value={f.make}
                            onChange={(e) => updateFirearm(i, 'make', e.target.value)}
                            className="px-3 py-2 border border-gray-200 rounded text-sm"
                          />
                          <input
                            placeholder="Model"
                            value={f.model}
                            onChange={(e) => updateFirearm(i, 'model', e.target.value)}
                            className="px-3 py-2 border border-gray-200 rounded text-sm"
                          />
                          <input
                            placeholder="Caliber"
                            value={f.caliber}
                            onChange={(e) => updateFirearm(i, 'caliber', e.target.value)}
                            className="px-3 py-2 border border-gray-200 rounded text-sm"
                          />
                          <input
                            placeholder="Serial number"
                            value={f.serialNumber}
                            onChange={(e) => updateFirearm(i, 'serialNumber', e.target.value)}
                            className="px-3 py-2 border border-gray-200 rounded text-sm"
                          />
                          <label className="sm:col-span-2">
                            <span className="text-xs text-gray-500 mr-2">Action</span>
                            <select
                              value={f.action}
                              onChange={(e) => updateFirearm(i, 'action', e.target.value)}
                              className="px-3 py-2 border border-gray-200 rounded text-sm"
                            >
                              <option>Bolt</option>
                              <option>Lever</option>
                              <option>Single shot</option>
                              <option>Other</option>
                            </select>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm">
                  <strong>Legal imperative:</strong> Do not sign the generated document until instructed to do so by a SAPS officer upon arrival in South Africa. Premature signatures will void the permit.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded bg-gold-600 hover:bg-gold-500 disabled:opacity-60 text-white font-sans font-semibold uppercase tracking-wider transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  {loading ? 'Generating…' : 'Generate PDF'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

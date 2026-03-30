'use client'

import { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { FileText, ArrowLeft, ChevronRight, ChevronLeft, Plus, Trash2 } from 'lucide-react'
import { hapticConfirm } from '@/lib/haptic'
import { buildSaps520ApplicationPdf, SAPS520_LEGAL_NOTICE } from '@/lib/saps520-pdf-build'

const MAX_FIREARMS = 4

const firearmSchema = z.object({
  make: z.string().min(1, 'Make required'),
  model: z.string().optional(),
  caliber: z.string().min(1, 'Caliber required'),
  serialNumber: z.string().min(1, 'Serial required'),
  action: z.string().optional(),
})

const schema = z.object({
  fullName: z.string().min(2, 'Full name required'),
  passportNumber: z.string().min(3, 'Passport required'),
  email: z.union([z.literal(''), z.string().email('Valid email required')]),
  phone: z.string().optional(),
  nationality: z.string().optional(),
  address: z.string().optional(),
  dateOfBirth: z.string().optional(),
  portOfEntry: z.string().min(1, 'Required'),
  portOfExit: z.string().min(1, 'Required'),
  arrivalDate: z.string().min(1, 'Required'),
  departureDate: z.string().min(1, 'Required'),
  airline: z.string().optional(),
  flightNumber: z.string().optional(),
  reason: z.string().min(1),
  firearms: z.array(firearmSchema).min(1).max(MAX_FIREARMS),
})

type FormValues = z.infer<typeof schema>

const STEPS = ['Applicant', 'Travel & flight', 'Firearms', 'Generate'] as const

const inputClass =
  'mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-sans text-sm text-white placeholder:text-gray-600 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/25'

const labelClass = 'type-overline text-gray-500'

export function Saps520GeneratorForm() {
  const [step, setStep] = useState(0)
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      passportNumber: '',
      email: '',
      phone: '',
      nationality: '',
      address: '',
      dateOfBirth: '',
      portOfEntry: 'OR Tambo International',
      portOfExit: 'OR Tambo International',
      arrivalDate: '',
      departureDate: '',
      airline: '',
      flightNumber: '',
      reason: 'Sport hunting / safari',
      firearms: [{ make: '', caliber: '', serialNumber: '', model: '', action: 'Bolt' }],
    },
  })

  const { fields, append, remove } = useFieldArray({ control: form.control, name: 'firearms' })

  const next = async () => {
    setErr(null)
    const ok =
      step === 0
        ? await form.trigger(['fullName', 'passportNumber', 'email'])
        : step === 1
          ? await form.trigger([
              'portOfEntry',
              'portOfExit',
              'arrivalDate',
              'departureDate',
              'reason',
            ])
          : step === 2
            ? await form.trigger('firearms')
            : true
    if (ok) setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }

  const back = () => {
    setErr(null)
    setStep((s) => Math.max(s - 1, 0))
  }

  const onGenerate = form.handleSubmit(async (data) => {
    setBusy(true)
    setErr(null)
    hapticConfirm()
    try {
      const bytes = await buildSaps520ApplicationPdf(
        {
          applicant: {
            fullName: data.fullName,
            passportNumber: data.passportNumber,
            email: data.email || undefined,
            phone: data.phone,
            nationality: data.nationality,
            address: data.address,
            dateOfBirth: data.dateOfBirth,
          },
          travel: {
            portOfEntry: data.portOfEntry,
            portOfExit: data.portOfExit,
            arrivalDate: data.arrivalDate,
            departureDate: data.departureDate,
            airline: data.airline,
            flightNumber: data.flightNumber,
            reason: data.reason,
          },
          firearms: data.firearms.map((f) => ({
            make: f.make,
            model: f.model,
            caliber: f.caliber,
            serialNumber: f.serialNumber,
            action: f.action || 'Bolt',
          })),
        },
        { origin: typeof window !== 'undefined' ? window.location.origin : undefined }
      )
      const blob = new Blob([new Uint8Array(bytes)], { type: 'application/pdf' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'SAPS520-MIWESU-application-data.pdf'
      a.click()
      URL.revokeObjectURL(url)
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Failed to generate PDF')
    } finally {
      setBusy(false)
    }
  })

  const { errors } = form.formState

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <Link
        href="/tools"
        className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-gray-500 transition-colors hover:text-gold-400"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Tools hub
      </Link>

      <div className="mt-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/10">
          <FileText className="h-6 w-6 text-gold-400" aria-hidden />
        </div>
        <div>
          <h1 className="type-display-fluid text-white" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            SAPS 520 generator
          </h1>
          <p className="type-lead-dark mt-1 text-sm">Temporary import · structured PDF hand-off</p>
        </div>
      </div>

      <div className="mt-8 flex gap-2 border-b border-white/10 pb-4">
        {STEPS.map((label, i) => (
          <div
            key={label}
            className={`flex-1 text-center font-sans text-[10px] uppercase tracking-[0.2em] sm:text-xs ${
              i === step ? 'text-gold-400' : i < step ? 'text-gray-500' : 'text-gray-600'
            }`}
          >
            <span className="block tabular-nums">{i + 1}</span>
            <span className="mt-1 block">{label}</span>
          </div>
        ))}
      </div>

      <div className="liquid-glass-dark mt-8 rounded-2xl border border-white/12 p-6 shadow-noir-md sm:p-8">
        {err ? (
          <p className="mb-6 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 font-sans text-sm text-red-300">
            {err}
          </p>
        ) : null}

        {step === 0 && (
          <div className="space-y-6">
            <h2 className="type-h3-dark">Personal applicant</h2>
            <label className="block">
              <span className={labelClass}>Full name (as in passport)</span>
              <input {...form.register('fullName')} className={inputClass} autoComplete="name" />
              {errors.fullName ? (
                <p className="mt-1 font-sans text-xs text-red-400">{errors.fullName.message}</p>
              ) : null}
            </label>
            <label className="block">
              <span className={labelClass}>Passport number</span>
              <input {...form.register('passportNumber')} className={inputClass} autoComplete="off" />
              {errors.passportNumber ? (
                <p className="mt-1 font-sans text-xs text-red-400">{errors.passportNumber.message}</p>
              ) : null}
            </label>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className={labelClass}>Email (optional)</span>
                <input {...form.register('email')} type="email" className={inputClass} />
                {errors.email ? (
                  <p className="mt-1 font-sans text-xs text-red-400">{errors.email.message}</p>
                ) : null}
              </label>
              <label className="block">
                <span className={labelClass}>Phone (optional)</span>
                <input {...form.register('phone')} type="tel" className={inputClass} />
              </label>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className={labelClass}>Nationality (optional)</span>
                <input {...form.register('nationality')} className={inputClass} />
              </label>
              <label className="block">
                <span className={labelClass}>Date of birth (optional)</span>
                <input {...form.register('dateOfBirth')} placeholder="DD/MM/YYYY" className={inputClass} />
              </label>
            </div>
            <label className="block">
              <span className={labelClass}>Home address (optional)</span>
              <textarea {...form.register('address')} rows={2} className={inputClass} />
            </label>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-6">
            <h2 className="type-h3-dark">Travel dates &amp; flight</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className={labelClass}>Port of entry</span>
                <input {...form.register('portOfEntry')} className={inputClass} />
              </label>
              <label className="block">
                <span className={labelClass}>Port of exit</span>
                <input {...form.register('portOfExit')} className={inputClass} />
              </label>
              <label className="block">
                <span className={labelClass}>Arrival date</span>
                <input {...form.register('arrivalDate')} placeholder="DD/MM/YYYY" className={inputClass} />
              </label>
              <label className="block">
                <span className={labelClass}>Departure date</span>
                <input {...form.register('departureDate')} placeholder="DD/MM/YYYY" className={inputClass} />
              </label>
              <label className="block">
                <span className={labelClass}>Airline (optional)</span>
                <input {...form.register('airline')} className={inputClass} />
              </label>
              <label className="block">
                <span className={labelClass}>Flight number (optional)</span>
                <input {...form.register('flightNumber')} className={inputClass} />
              </label>
            </div>
            <label className="block">
              <span className={labelClass}>Reason for permit</span>
              <input {...form.register('reason')} className={inputClass} />
            </label>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="type-h3-dark">Firearms (max {MAX_FIREARMS})</h2>
              <button
                type="button"
                onClick={() =>
                  append({ make: '', caliber: '', serialNumber: '', model: '', action: 'Bolt' })
                }
                disabled={fields.length >= MAX_FIREARMS}
                className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-gold-400 disabled:opacity-40"
              >
                <Plus className="h-4 w-4" aria-hidden />
                Add
              </button>
            </div>
            {fields.map((field, i) => (
              <div key={field.id} className="rounded-xl border border-white/10 p-4 sm:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="type-overline text-gray-500">Unit {i + 1}</span>
                  {fields.length > 1 ? (
                    <button
                      type="button"
                      onClick={() => remove(i)}
                      className="text-gray-500 hover:text-red-400"
                      aria-label={`Remove firearm ${i + 1}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  ) : null}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block sm:col-span-2">
                    <span className={labelClass}>Make</span>
                    <input {...form.register(`firearms.${i}.make`)} className={inputClass} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className={labelClass}>Model (optional)</span>
                    <input {...form.register(`firearms.${i}.model`)} className={inputClass} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Caliber</span>
                    <input {...form.register(`firearms.${i}.caliber`)} className={inputClass} />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Serial number</span>
                    <input {...form.register(`firearms.${i}.serialNumber`)} className={inputClass} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className={labelClass}>Action</span>
                    <select {...form.register(`firearms.${i}.action`)} className={inputClass}>
                      <option className="bg-onyx">Bolt</option>
                      <option className="bg-onyx">Lever</option>
                      <option className="bg-onyx">Single shot</option>
                      <option className="bg-onyx">Semi-auto</option>
                      <option className="bg-onyx">Other</option>
                    </select>
                  </label>
                </div>
              </div>
            ))}
            {errors.firearms && typeof errors.firearms.message === 'string' ? (
              <p className="font-sans text-xs text-red-400">{errors.firearms.message}</p>
            ) : null}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8">
            <h2 className="type-h3-dark">Generate document</h2>
            <p className="type-lead-dark text-sm">
              Review your entries, then download a PDF summary. Cross-check every field against your passport and
              firearm proof before travel.
            </p>
            <div
              className="rounded-2xl border border-gold-500/50 bg-gold-500/10 px-4 py-6 sm:px-6"
              style={{
                boxShadow: '0 0 32px rgba(197, 160, 89, 0.35), inset 0 1px 0 rgba(229, 198, 135, 0.15)',
              }}
            >
              <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-300">Legal imperative</p>
              <p className="mt-4 font-sans text-sm font-medium leading-relaxed text-gold-100 sm:text-base">
                {SAPS520_LEGAL_NOTICE}
              </p>
            </div>
            <button
              type="button"
              disabled={busy}
              onClick={() => onGenerate()}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-gold-500/60 bg-gold-500/20 px-6 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 transition-colors hover:bg-gold-500/30 disabled:opacity-50 sm:w-auto"
            >
              <FileText className="h-4 w-4 shrink-0" aria-hidden />
              {busy ? 'Generating…' : 'Generate document'}
            </button>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-4 border-t border-white/10 pt-8">
          {step > 0 ? (
            <button
              type="button"
              onClick={back}
              className="inline-flex min-h-11 items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
              Back
            </button>
          ) : (
            <span />
          )}
          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="ml-auto inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-sans text-xs uppercase tracking-[0.2em] text-white hover:border-gold-500/40"
            >
              Next
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

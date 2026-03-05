'use client'

import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Users,
  Home,
  CreditCard,
  Check,
  ChevronDown,
  ChevronUp,
  Sparkles,
  AlertCircle,
} from 'lucide-react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const guestSchema = z.object({
  firstName: z.string().min(1, 'First name required'),
  lastName: z.string().min(1, 'Last name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  specialRequests: z.string().optional(),
})

type GuestFormData = z.infer<typeof guestSchema>

type AvailableOption = {
  id: string
  name: string
  maxGuests: number
  description: string | null
  basePricePerNight: number
  unitIds: string[]
}

const STEPS = [
  { num: 1, label: 'When', short: 'Dates' },
  { num: 2, label: 'Where', short: 'Accommodation' },
  { num: 3, label: 'Your details', short: 'Details' },
  { num: 4, label: 'Confirm', short: 'Confirm' },
] as const

export default function BookPage() {
  const [step, setStep] = useState(1)
  const [checkIn, setCheckIn] = useState<Date | undefined>()
  const [checkOut, setCheckOut] = useState<Date | undefined>()
  const [guests, setGuests] = useState(2)
  const [range, setRange] = useState<{ from?: Date; to?: Date }>({})
  const [availabilityLoading, setAvailabilityLoading] = useState(false)
  const [availabilityError, setAvailabilityError] = useState<string | null>(null)
  const [options, setOptions] = useState<AvailableOption[]>([])
  const [selectedOption, setSelectedOption] = useState<AvailableOption | null>(null)
  const [isDemo, setIsDemo] = useState(false)
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [checkoutDemo, setCheckoutDemo] = useState<{ bookingId?: string; message?: string } | null>(null)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GuestFormData>({
    resolver: zodResolver(guestSchema),
  })

  // Reveal animation for step content
  useEffect(() => {
    const el = document.querySelector('.booking-step-content')
    if (el) {
      el.classList.remove('booking-step-enter')
      requestAnimationFrame(() => el.classList.add('booking-step-enter'))
    }
  }, [step])

  const checkAvailability = async () => {
    const from = range.from ?? checkIn
    const to = range.to ?? checkOut
    if (!from || !to || to <= from) {
      setAvailabilityError('Please select check-in and check-out dates.')
      return
    }
    setAvailabilityError(null)
    setAvailabilityLoading(true)
    try {
      const params = new URLSearchParams({
        checkIn: from.toISOString().slice(0, 10),
        checkOut: to.toISOString().slice(0, 10),
        guests: String(guests),
      })
      const res = await fetch(`/api/availability?${params}`)
      const data = await res.json()
      if (!data.ok) {
        setAvailabilityError(data.error || 'Failed to check availability')
        setOptions([])
        return
      }
      setOptions(data.options || [])
      setIsDemo(!!data.demo)
      setCheckIn(from)
      setCheckOut(to)
      if (data.options?.length) setStep(2)
      else setAvailabilityError('No availability for these dates. Try different dates or guest count.')
    } catch {
      setAvailabilityError('Could not check availability. Please try again.')
      setOptions([])
    } finally {
      setAvailabilityLoading(false)
    }
  }

  const nights = checkIn && checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 0
  const totalPrice = selectedOption ? selectedOption.basePricePerNight * nights : 0

  const onGuestSubmit = (formData: GuestFormData) => {
    if (!selectedOption || !checkIn || !checkOut) return
    const payload = {
      unitId: selectedOption.unitIds[0],
      unitIds: selectedOption.unitIds,
      optionName: selectedOption.name,
      guestName: `${formData.firstName} ${formData.lastName}`,
      guestEmail: formData.email,
      guestPhone: formData.phone || '',
      checkIn: checkIn.toISOString(),
      checkOut: checkOut.toISOString(),
      totalGuests: guests,
      totalPrice,
      specialRequests: formData.specialRequests || '',
    }
    setCheckoutError(null)
    setCheckoutDemo(null)
    setCheckoutLoading(true)
    fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((r) => r.json())
      .then((data) => {
        setStep(4)
        if (data.url) window.location.href = data.url
        else if (data.demo) setCheckoutDemo(data)
        else setCheckoutError(data.error || 'Checkout failed')
      })
      .catch(() => {
        setStep(4)
        setCheckoutError('Checkout failed')
      })
      .finally(() => setCheckoutLoading(false))
  }

  const dateSummary =
    checkIn && checkOut
      ? `${checkIn.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} – ${checkOut.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}`
      : null

  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-onyx text-white">
        {/* Hero strip */}
        <section className="relative border-b border-white/10">
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src="/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-onyx/60 to-onyx" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 sm:py-16">
            <Link
              href="/residences"
              className="inline-flex items-center text-gold-400/90 hover:text-white text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Residences
            </Link>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-3 tracking-tight">
              Book your stay
            </h1>
            <p className="text-gray-400 font-sans text-base sm:text-lg max-w-xl">
              Exclusive use. The Homestead (16) or The Stone Villa (6). Entire lodge for 17–22 guests.
            </p>
          </div>
        </section>

        {/* Step progress */}
        <div className="sticky top-[72px] sm:top-[88px] z-20 border-b border-white/10 bg-onyx/95 backdrop-blur-md">
          <div className="max-w-4xl mx-auto px-6">
            <nav className="flex items-center justify-between gap-2 py-4" aria-label="Booking progress">
              {STEPS.map((s, i) => {
                const isActive = step === s.num
                const isPast = step > s.num
                const isLast = i === STEPS.length - 1
                return (
                  <div key={s.num} className="flex items-center flex-1 min-w-0">
                    <button
                      type="button"
                      onClick={() => step > s.num && setStep(s.num)}
                      className={`
                        flex items-center gap-2 py-2 px-2 rounded-lg transition-colors min-w-0
                        ${isActive ? 'text-gold-400' : isPast ? 'text-white/80 hover:text-white' : 'text-white/40'}
                        ${step > s.num ? 'cursor-pointer' : 'cursor-default'}
                      `}
                    >
                      <span
                        className={`
                          flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold
                          ${isActive ? 'bg-gold-500 text-onyx' : isPast ? 'bg-gold-500/20 text-gold-400' : 'bg-white/10 text-white/60'}
                        `}
                      >
                        {isPast ? <Check className="w-4 h-4" /> : s.num}
                      </span>
                      <span className="hidden sm:inline truncate font-medium">{s.label}</span>
                    </button>
                    {!isLast && (
                      <div className="h-px flex-1 mx-1 bg-white/10 min-w-[8px]" aria-hidden />
                    )}
                  </div>
                )
              })}
            </nav>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-10 sm:py-14">
          {/* Trip summary bar (steps 2 & 3) */}
          {(step === 2 || step === 3) && dateSummary && (
            <div className="mb-8 flex flex-wrap items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm">
              <Calendar className="w-4 h-4 text-gold-500 shrink-0" />
              <span className="text-white/90">{dateSummary}</span>
              <span className="text-white/40">·</span>
              <span className="text-white/90">{nights} night{nights !== 1 ? 's' : ''}</span>
              <span className="text-white/40">·</span>
              <Users className="w-4 h-4 text-gold-500 shrink-0 inline" />
              <span className="text-white/90">{guests} guest{guests !== 1 ? 's' : ''}</span>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="ml-auto text-gold-400 hover:text-white text-xs uppercase tracking-wider font-medium transition-colors"
              >
                Change dates
              </button>
            </div>
          )}

          <div className="booking-step-content">
            {/* ——— Step 1: Dates & guests ——— */}
            {step === 1 && (
              <section className="grid lg:grid-cols-[1fr,320px] gap-8 lg:gap-12">
                <div className="rounded-2xl border border-white/10 bg-onyx-light/50 p-6 sm:p-8">
                  <h2 className="font-serif text-2xl text-white mb-1 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-gold-500" />
                    Select your dates
                  </h2>
                  <p className="text-gray-400 text-sm mb-6">Choose check-in and check-out. Minimum one night.</p>
                  <DayPicker
                    mode="range"
                    selected={{ from: range.from, to: range.to }}
                    onSelect={(v) => setRange(v ?? {})}
                    disabled={{ before: new Date() }}
                    className="react-day-picker-onyx border-0 p-0 mx-auto"
                  />
                </div>
                <div className="lg:pt-0">
                  <div className="rounded-2xl border border-white/10 bg-onyx-light/50 p-6 sm:p-8 sticky top-[180px]">
                    <h2 className="font-serif text-2xl text-white mb-1 flex items-center gap-2">
                      <Users className="w-6 h-6 text-gold-500" />
                      Guests
                    </h2>
                    <p className="text-gray-400 text-sm mb-6">How many will be staying?</p>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setGuests((g) => Math.max(1, g - 1))}
                        className="h-12 w-12 rounded-xl border border-white/20 bg-white/5 hover:bg-gold-500/20 hover:border-gold-500/50 flex items-center justify-center text-white transition-colors disabled:opacity-40 disabled:pointer-events-none"
                        disabled={guests <= 1}
                        aria-label="Fewer guests"
                      >
                        <ChevronDown className="w-5 h-5 rotate-180" />
                      </button>
                      <span className="font-serif text-3xl text-white w-16 text-center">{guests}</span>
                      <button
                        type="button"
                        onClick={() => setGuests((g) => Math.min(22, g + 1))}
                        className="h-12 w-12 rounded-xl border border-white/20 bg-white/5 hover:bg-gold-500/20 hover:border-gold-500/50 flex items-center justify-center text-white transition-colors disabled:opacity-40 disabled:pointer-events-none"
                        disabled={guests >= 22}
                        aria-label="More guests"
                      >
                        <ChevronUp className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-white/50 text-xs mt-3">Up to 22 for entire lodge</p>
                    {availabilityError && (
                      <div className="mt-4 flex items-start gap-2 rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-3 text-red-300 text-sm">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        {availabilityError}
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={checkAvailability}
                      disabled={availabilityLoading}
                      className="mt-6 w-full py-4 px-6 bg-gold-500 text-onyx font-bold uppercase tracking-widest text-sm hover:bg-gold-400 transition-all rounded-xl disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {availabilityLoading ? (
                        <>Checking availability…</>
                      ) : (
                        <>Check availability <ArrowRight className="w-4 h-4" /></>
                      )}
                    </button>
                  </div>
                </div>
              </section>
            )}

            {/* ——— Step 2: Choose accommodation ——— */}
            {step === 2 && (
              <section>
                {isDemo && (
                  <div className="mb-6 flex items-center gap-3 rounded-xl bg-gold-500/10 border border-gold-500/30 px-4 py-3 text-gold-300 text-sm">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    Demo mode: database not connected. All options shown as available.
                  </div>
                )}
                <h2 className="font-serif text-2xl sm:text-3xl text-white mb-2">Choose your accommodation</h2>
                <p className="text-gray-400 mb-8">Select one option for your dates.</p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {options.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setSelectedOption(opt)
                        setStep(3)
                      }}
                      className="group text-left rounded-2xl border-2 border-white/10 bg-onyx-light/50 hover:border-gold-500/50 hover:bg-onyx-light/80 p-6 sm:p-8 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <Home className="w-8 h-8 text-gold-500/80 group-hover:text-gold-400 transition-colors" />
                        <span className="text-xs uppercase tracking-widest text-gold-400 font-medium">
                          Up to {opt.maxGuests} guests
                        </span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl text-white mb-2 group-hover:text-gold-100 transition-colors">
                        {opt.name}
                      </h3>
                      {opt.description && (
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{opt.description}</p>
                      )}
                      <p className="font-serif text-gold-400 text-lg">
                        {opt.basePricePerNight > 0 ? (
                          <>From ZAR {opt.basePricePerNight.toLocaleString()}/night</>
                        ) : (
                          'Price on request'
                        )}
                      </p>
                      <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-gold-400 group-hover:text-gold-300">
                        Select <ArrowRight className="w-4 h-4" />
                      </span>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="mt-8 inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Change dates
                </button>
              </section>
            )}

            {/* ——— Step 3: Guest details + summary ——— */}
            {step === 3 && selectedOption && (
              <section className="grid lg:grid-cols-[1fr,340px] gap-8 lg:gap-12">
                <form onSubmit={handleSubmit(onGuestSubmit)} className="space-y-6">
                  <h2 className="font-serif text-2xl sm:text-3xl text-white mb-2">Your details</h2>
                  <p className="text-gray-400 mb-6">We’ll use this for confirmation and contact.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">First name</label>
                      <input
                        {...register('firstName')}
                        className="input-booking w-full"
                        placeholder="e.g. James"
                      />
                      {errors.firstName && (
                        <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Last name</label>
                      <input
                        {...register('lastName')}
                        className="input-booking w-full"
                        placeholder="e.g. Smith"
                      />
                      {errors.lastName && (
                        <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      {...register('email')}
                      className="input-booking w-full"
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone <span className="text-white/40 font-normal">(optional)</span></label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="input-booking w-full"
                      placeholder="+27 …"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Special requests <span className="text-white/40 font-normal">(optional)</span></label>
                    <textarea
                      {...register('specialRequests')}
                      rows={3}
                      className="input-booking w-full resize-none"
                      placeholder="Dietary needs, accessibility, late arrival…"
                    />
                  </div>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-medium transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      type="submit"
                      disabled={checkoutLoading}
                      className="inline-flex items-center gap-2 py-3 px-8 bg-gold-500 text-onyx font-bold uppercase tracking-widest text-sm hover:bg-gold-400 rounded-xl transition-colors disabled:opacity-50"
                    >
                      {checkoutLoading ? 'Processing…' : <>Proceed to payment <CreditCard className="w-4 h-4" /></>}
                    </button>
                  </div>
                </form>
                {/* Sticky summary card */}
                <div className="lg:pt-0">
                  <div className="rounded-2xl border border-white/10 bg-onyx-light/50 p-6 sticky top-[180px]">
                    <h3 className="font-serif text-lg text-white mb-4">Booking summary</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Accommodation</span>
                        <span className="text-white">{selectedOption.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Dates</span>
                        <span className="text-white">{dateSummary}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Nights</span>
                        <span className="text-white">{nights}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Guests</span>
                        <span className="text-white">{guests}</span>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-baseline">
                      <span className="text-gray-400 font-medium">Total</span>
                      <span className="font-serif text-xl text-gold-400">
                        {totalPrice > 0 ? `ZAR ${totalPrice.toLocaleString()}` : 'Price on request'}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* ——— Step 4: Success or error ——— */}
            {step === 4 && (checkoutDemo || checkoutError) && (
              <section className="max-w-lg mx-auto">
                <div
                  className={`rounded-2xl border p-8 text-center ${
                    checkoutError
                      ? 'bg-red-500/5 border-red-500/30'
                      : 'bg-gold-500/5 border-gold-500/30'
                  }`}
                >
                  {checkoutError ? (
                    <>
                      <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                      <h2 className="font-serif text-2xl text-white mb-2">Something went wrong</h2>
                      <p className="text-gray-300 mb-6">{checkoutError}</p>
                    </>
                  ) : (
                    <>
                      <div className="w-14 h-14 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-4">
                        <Check className="w-7 h-7 text-gold-400" />
                      </div>
                      <h2 className="font-serif text-2xl text-white mb-2">Request received</h2>
                      <p className="text-gray-300 mb-4">
                        {checkoutDemo?.message ||
                          'Booking system is in demo mode. Configure DATABASE_URL and Stripe to enable real bookings.'}
                      </p>
                      {checkoutDemo?.bookingId && (
                        <p className="text-sm text-gray-500 mb-4">Reference: {checkoutDemo.bookingId}</p>
                      )}
                    </>
                  )}
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 py-3 px-6 bg-gold-500 text-onyx font-bold uppercase tracking-widest text-sm hover:bg-gold-400 rounded-xl transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> Start over
                  </Link>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </Layout>
  )
}

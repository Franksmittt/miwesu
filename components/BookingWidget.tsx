'use client'

import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

type Variant = 'dark' | 'light' | 'gold'

const variants = {
  dark: 'bg-onyx-light border-white/10 text-white hover:border-gold-500/50',
  light: 'bg-white border-gray-200 text-onyx hover:border-gold-500/50',
  gold: 'bg-gold-500 border-gold-500 text-onyx hover:bg-gold-400',
}

export default function BookingWidget({
  variant = 'dark',
  compact = false,
  className = '',
}: {
  variant?: Variant
  compact?: boolean
  className?: string
}) {
  return (
    <Link
      href="/book"
      className={`
        inline-flex items-center gap-3 rounded-lg border transition-all duration-300
        ${variants[variant]}
        ${compact ? 'px-5 py-3 text-sm' : 'px-6 py-4 text-base'}
        ${className}
      `}
    >
      <Calendar className={compact ? 'w-4 h-4' : 'w-5 h-5'} aria-hidden />
      <span className="font-serif font-medium">
        {compact ? 'Book your stay' : 'Check availability & book your stay'}
      </span>
      <ArrowRight className={compact ? 'w-4 h-4' : 'w-5 h-5'} aria-hidden />
    </Link>
  )
}

'use client'

import { useCallback } from 'react'
import { setCurrency } from '@/lib/cookies'

type Props = { current: 'ZAR' | 'USD'; className?: string }

export default function CurrencySwitcher({ current, className = '' }: Props) {
  const handleSwitch = useCallback((value: 'ZAR' | 'USD') => {
    setCurrency(value)
    window.location.reload()
  }, [])

  return (
    <div
      className={`flex items-center gap-2 text-sm ${className}`}
      role="group"
      aria-label="Display currency"
    >
      <span className="text-gray-400 uppercase tracking-widest">Show in</span>
      <button
        type="button"
        onClick={() => handleSwitch('ZAR')}
        className={`px-3 py-1 rounded border text-xs font-bold uppercase tracking-wider transition-colors ${
          current === 'ZAR'
            ? 'border-gold-500 text-gold-500 bg-gold-500/10'
            : 'border-white/30 text-white/70 hover:border-white/50 hover:text-white'
        }`}
      >
        ZAR
      </button>
      <button
        type="button"
        onClick={() => handleSwitch('USD')}
        className={`px-3 py-1 rounded border text-xs font-bold uppercase tracking-wider transition-colors ${
          current === 'USD'
            ? 'border-gold-500 text-gold-500 bg-gold-500/10'
            : 'border-white/30 text-white/70 hover:border-white/50 hover:text-white'
        }`}
      >
        USD
      </button>
    </div>
  )
}

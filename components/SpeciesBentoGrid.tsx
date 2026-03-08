'use client'

import { ReactNode } from 'react'

export type BentoCell = {
  label: string
  value: string | ReactNode
  /** Grid span: sm=1, md=2, lg=2 (default sm) */
  span?: 'sm' | 'md' | 'lg'
}

type SpeciesBentoGridProps = {
  cells: BentoCell[]
  /** Optional class for the grid container */
  className?: string
  /** Optional wrapper for the Compare button or CTA below the grid */
  footer?: ReactNode
  /** Use liquid-glass-dark for onyx sections, liquid-glass for light */
  variant?: 'dark' | 'light'
}

const spanClass = {
  sm: 'col-span-1',
  md: 'col-span-1 md:col-span-2',
  lg: 'col-span-2 md:col-span-2',
}

export default function SpeciesBentoGrid({
  cells,
  className = '',
  footer,
  variant = 'dark',
}: SpeciesBentoGridProps) {
  const glassClass = variant === 'dark' ? 'liquid-glass-dark' : 'liquid-glass'
  const textValue = 'text-gold-500 font-serif text-xl md:text-2xl lg:text-3xl'
  const textLabel = variant === 'dark'
    ? 'text-gray-400 text-xs uppercase tracking-widest'
    : 'text-gray-500 text-xs uppercase tracking-widest'

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <div
        className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 ${variant === 'dark' ? 'bg-onyx' : 'bg-marble'}`}
        role="region"
        aria-label="Species quick facts"
      >
        {cells.map((cell, i) => (
          <div
            key={i}
            className={`${spanClass[cell.span ?? 'sm']} ${glassClass} rounded-lg p-4 sm:p-5 md:p-6 border border-white/10 reveal`}
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className={textValue}>
              {typeof cell.value === 'string' ? cell.value : cell.value}
            </div>
            <div className={`${textLabel} mt-1 sm:mt-2`}>{cell.label}</div>
          </div>
        ))}
      </div>
      {footer && <div className="flex justify-center mt-8">{footer}</div>}
    </div>
  )
}

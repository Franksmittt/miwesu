'use client'

import type { WoodProduct } from '@/lib/wood-products'
import {
  bagWeightKg,
  describeThermalVolume,
  sliderMaxBags,
  sliderStep,
  totalMassKg,
} from '@/lib/wood-volume-helpers'

type Props = {
  products: WoodProduct[]
  productId: string
  quantity: number
  onProductIdChange: (id: string) => void
  onQuantityChange: (q: number) => void
}

export function WoodVolumeVisualizer({
  products,
  productId,
  quantity,
  onProductIdChange,
  onQuantityChange,
}: Props) {
  const product = products.find((p) => p.id === productId) ?? products[0]
  const moq = product.moq
  const maxBags = sliderMaxBags(moq)
  const step = sliderStep(moq)
  const kg = bagWeightKg(product)
  const totalKg = totalMassKg(product, quantity)
  const narrative = describeThermalVolume(product, quantity)

  return (
    <section
      className="liquid-glass-dark rounded-2xl border border-white/12 p-6 sm:p-8"
      aria-labelledby="volume-viz-heading"
    >
      <h2 id="volume-viz-heading" className="type-h3-dark">
        Volume visualizer
      </h2>
      <p className="type-lead-dark mt-4">
        Calibrate allocation before logistics. Slide quantity to map bulk against real-world offload constraints.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <label htmlFor="wood-product-select" className="type-overline text-gray-500">
            Thermal SKU
          </label>
          <select
            id="wood-product-select"
            value={product.id}
            onChange={(e) => onProductIdChange(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-sans text-sm text-white focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/25"
          >
            {products.map((p) => (
              <option key={p.id} value={p.id} className="bg-onyx text-white">
                {p.name} · {p.weight} · R{p.price} · MOQ {p.moq}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <label htmlFor="wood-qty-range" className="type-overline text-gray-500">
              Bags (MOQ {moq})
            </label>
            <span className="font-serif text-3xl text-gold-400 tabular-nums">{quantity}</span>
          </div>
          <input
            id="wood-qty-range"
            type="range"
            min={moq}
            max={maxBags}
            step={step}
            value={quantity}
            onChange={(e) => onQuantityChange(Number(e.target.value))}
            className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-gold-500"
          />
          <div className="mt-2 flex justify-between font-sans text-xs text-gray-500">
            <span>{moq}</span>
            <span>{maxBags}</span>
          </div>
        </div>

        <div className="rounded-xl border border-gold-500/20 bg-gold-500/5 px-4 py-6 sm:px-6">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-500/90">Spatial readout</p>
          <p className="type-lead-dark mt-3 text-base text-gray-200">{narrative}</p>
          <p className="mt-4 font-sans text-sm tabular-nums text-gray-400">
            {quantity} × {kg} kg unit ≈ <span className="text-white">{totalKg.toLocaleString('en-ZA')} kg</span> thermal
            mass (nominal)
          </p>
        </div>
      </div>
    </section>
  )
}

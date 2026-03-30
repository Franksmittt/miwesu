'use client'

import { useState } from 'react'
import { WOOD_PRODUCTS } from '@/lib/wood-products'
import { WoodVolumeVisualizer } from '@/components/wood/WoodVolumeVisualizer'
import { WoodWhatsAppConciergeForm } from '@/components/wood/WoodWhatsAppConciergeForm'

function moqFor(id: string): number {
  return WOOD_PRODUCTS.find((p) => p.id === id)?.moq ?? 1
}

export function WoodThermalCommerceIsland() {
  const [productId, setProductId] = useState(WOOD_PRODUCTS[0].id)
  const [quantity, setQuantity] = useState(WOOD_PRODUCTS[0].moq)

  const setProductIdSafe = (id: string) => {
    setProductId(id)
    const m = moqFor(id)
    setQuantity((q) => Math.max(q, m))
  }

  const setQuantityClamped = (q: number) => {
    const m = moqFor(productId)
    const n = Number.isFinite(q) ? q : m
    setQuantity(Math.max(m, n))
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 text-center lg:text-left">
        <p className="type-eyebrow-dark text-gold-400">Configure allocation</p>
        <h2 className="type-h2-section-dark mt-4">Engineered heat · volume &amp; hand-off</h2>
        <p className="type-lead-dark mx-auto mt-4 max-w-2xl lg:mx-0">
          Model your order mass, then push the specification to WhatsApp. ZAR pricing and MOQs are fixed, no cart, no Stripe.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-8">
        <WoodVolumeVisualizer
          products={WOOD_PRODUCTS}
          productId={productId}
          quantity={quantity}
          onProductIdChange={setProductIdSafe}
          onQuantityChange={setQuantityClamped}
        />
        <WoodWhatsAppConciergeForm
          products={WOOD_PRODUCTS}
          productId={productId}
          quantity={quantity}
          onProductIdChange={setProductIdSafe}
          onQuantityChange={setQuantityClamped}
        />
      </div>
    </div>
  )
}

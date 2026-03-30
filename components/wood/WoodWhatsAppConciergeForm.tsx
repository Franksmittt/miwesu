'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import type { WoodProduct } from '@/lib/wood-products'

const WA_NUMBER = '27730309679'

type Props = {
  products: WoodProduct[]
  productId: string
  quantity: number
  onProductIdChange: (id: string) => void
  onQuantityChange: (q: number) => void
}

function productLabel(p: WoodProduct): string {
  return `${p.name}${p.subtitle ? ` (${p.subtitle})` : ''} · ${p.weight} · R${p.price}/bag`
}

export function WoodWhatsAppConciergeForm({
  products, productId, quantity, onProductIdChange, onQuantityChange,
}: Props) {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')
  const [estate, setEstate] = useState('')
  const [gateCode, setGateCode] = useState('')
  const [error, setError] = useState('')

  const selected = products.find((p) => p.id === productId) ?? products[0]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!name.trim() || !contact.trim() || !address.trim() || !estate.trim() || !gateCode.trim()) {
      setError('Name, contact, delivery address, estate name, and gate code are required.')
      return
    }
    if (quantity < selected.moq) {
      setError(`Minimum order is ${selected.moq} bags for this SKU.`)
      return
    }

    const lines = [
      '*MIWESU · Thermal hardware order*', '', `Name: ${name.trim()}`, `Contact: ${contact.trim()}`, `Delivery address: ${address.trim()}`, `Estate / complex: ${estate.trim()}`, `Security gate code: ${gateCode.trim()}`, '', `Product: ${productLabel(selected)}`, `Quantity: ${quantity} bags`, '', '_Sent from miwesu.co.za/wood_', ]
    const text = encodeURIComponent(lines.join('\n'))
    window.location.href = `https://wa.me/${WA_NUMBER}?text=${text}`
  }

  return (
    <section
      className="liquid-glass-dark rounded-2xl border border-white/12 p-6 sm:p-8"
      aria-labelledby="concierge-heading"
    >
      <div className="flex items-center gap-3">
        <MessageCircle className="h-8 w-8 text-gold-400" aria-hidden />
        <div>
          <h2 id="concierge-heading" className="type-h3-dark">
            WhatsApp concierge
          </h2>
          <p className="type-lead-dark mt-1 text-sm">
            No card checkout. Dispatch your spec to logistics; finalize on WhatsApp.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="wood-name" className="type-overline text-gray-500">
              Full name
            </label>
            <input
              id="wood-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-sans text-sm text-white placeholder:text-gray-500 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/25"
              placeholder="As registered for access control"
            />
          </div>
          <div>
            <label htmlFor="wood-contact" className="type-overline text-gray-500">
              Contact (mobile or email)
            </label>
            <input
              id="wood-contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              autoComplete="tel"
              required
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-sans text-sm text-white placeholder:text-gray-500 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/25"
              placeholder="+27 … or email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="wood-address" className="type-overline text-gray-500">
            Delivery address
          </label>
          <textarea
            id="wood-address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            rows={3}
            className="mt-2 w-full resize-y rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-sans text-sm text-white placeholder:text-gray-500 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/25"
            placeholder="Street, suburb, city, Gauteng delivery corridor"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="wood-estate" className="type-overline text-gray-500">
              Estate / complex name
            </label>
            <input
              id="wood-estate"
              value={estate}
              onChange={(e) => setEstate(e.target.value)}
              required
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-sans text-sm text-white placeholder:text-gray-500 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/25"
              placeholder="Mandatory for gated estates"
            />
          </div>
          <div>
            <label htmlFor="wood-gate" className="type-overline text-gray-500">
              Security gate code / access note
            </label>
            <input
              id="wood-gate"
              value={gateCode}
              onChange={(e) => setGateCode(e.target.value)}
              required
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-sans text-sm text-white placeholder:text-gray-500 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/25"
              placeholder="Code or guard-house instruction"
            />
          </div>
        </div>

        <div className="grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-2">
          <div>
            <label htmlFor="wood-form-product" className="type-overline text-gray-500">
              Product
            </label>
            <select
              id="wood-form-product"
              value={productId}
              onChange={(e) => onProductIdChange(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-sans text-sm text-white focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/25"
            >
              {products.map((p) => (
                <option key={p.id} value={p.id} className="bg-onyx text-white">
                  {productLabel(p)} · MOQ {p.moq}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="wood-form-qty" className="type-overline text-gray-500">
              Quantity (bags)
            </label>
            <input
              id="wood-form-qty"
              type="number"
              min={selected.moq}
              step={selected.moq >= 50 ? 10 : 5}
              value={quantity}
              onChange={(e) => {
                const v = parseInt(e.target.value, 10)
                if (!Number.isFinite(v)) return
                onQuantityChange(v)
              }}
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-sans text-sm text-white tabular-nums focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/25"
            />
            <p className="mt-2 font-sans text-xs text-gray-500">MOQ {selected.moq} bags · R{selected.price} per bag</p>
          </div>
        </div>

        {error ? (
          <p className="font-sans text-sm text-red-400" role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-gold-500/60 bg-gold-500/15 px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 transition-colors hover:bg-gold-500/25 sm:w-auto"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          Open WhatsApp with order
        </button>
      </form>
    </section>
  )
}

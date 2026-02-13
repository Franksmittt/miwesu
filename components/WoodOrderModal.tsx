'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { WOOD_PRODUCTS, type WoodProduct } from '@/lib/wood-products'

type WoodOrderModalProps = {
  isOpen: boolean
  onClose: () => void
  preselectedProduct?: WoodProduct | null
}

export default function WoodOrderModal({ isOpen, onClose, preselectedProduct }: WoodOrderModalProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    productId: WOOD_PRODUCTS[0].id,
    quantity: '',
    notes: '',
  })

  useEffect(() => {
    if (isOpen && preselectedProduct) {
      setForm((prev) => ({
        ...prev,
        productId: preselectedProduct.id,
        quantity: String(preselectedProduct.moq),
      }))
    }
  }, [isOpen, preselectedProduct])

  const selectedProduct = WOOD_PRODUCTS.find((p) => p.id === form.productId) ?? WOOD_PRODUCTS[0]

  const update = (field: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const qty = parseInt(String(form.quantity), 10)
    if (!qty || qty < 1) {
      setStatus('error')
      setErrorMessage('Please enter a valid quantity.')
      return
    }
    if (selectedProduct.moq && qty < selectedProduct.moq) {
      setStatus('error')
      setErrorMessage(`Minimum order for this product is ${selectedProduct.moq} bags.`)
      return
    }
    setStatus('submitting')
    setErrorMessage('')
    try {
      const res = await fetch('/api/wood-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          address: form.address.trim(),
          productId: selectedProduct.id,
          productName: `${selectedProduct.name}${selectedProduct.subtitle ? ' ' + selectedProduct.subtitle : ''} (${selectedProduct.weight})`,
          quantity: qty,
          notes: form.notes.trim() || undefined,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setStatus('error')
        setErrorMessage(data?.error || 'Something went wrong. Please try again or email us.')
        return
      }
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please try again or email guardians@miwesu.com.')
    }
  }

  const resetAndClose = () => {
    setStatus('idle')
    setErrorMessage('')
    setForm({
      name: '',
      email: '',
      phone: '',
      address: '',
      productId: WOOD_PRODUCTS[0].id,
      quantity: '',
      notes: '',
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={resetAndClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="wood-order-title"
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white shadow-xl border-t-4 border-gold-500"
      >
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
          <h2 id="wood-order-title" className="font-serif text-xl text-onyx">
            Request order
          </h2>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close order form"
            className="p-2 text-gray-400 hover:text-onyx focus:outline-none focus:ring-2 focus:ring-gold-500 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {status === 'success' ? (
            <div className="text-center py-6">
              <p className="font-serif text-2xl text-onyx mb-2">Order request received</p>
              <p className="text-gray-600 text-sm mb-6">
                MIWESU will contact you to confirm and arrange delivery. Gauteng, COD on inspection.
              </p>
              <button
                type="button"
                onClick={resetAndClose}
                className="px-6 py-3 bg-onyx text-white font-sans text-sm font-semibold uppercase tracking-wider hover:bg-onyx/90"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="wood-name" className="block text-[10px] uppercase text-gold-600 tracking-widest font-bold mb-2">
                  Name *
                </label>
                <input
                  id="wood-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="w-full border border-gray-200 text-onyx px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="wood-email" className="block text-[10px] uppercase text-gold-600 tracking-widest font-bold mb-2">
                  Email *
                </label>
                <input
                  id="wood-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="w-full border border-gray-200 text-onyx px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="wood-phone" className="block text-[10px] uppercase text-gold-600 tracking-widest font-bold mb-2">
                  Phone *
                </label>
                <input
                  id="wood-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className="w-full border border-gray-200 text-onyx px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="wood-address" className="block text-[10px] uppercase text-gold-600 tracking-widest font-bold mb-2">
                  Delivery address (Gauteng) *
                </label>
                <textarea
                  id="wood-address"
                  required
                  rows={3}
                  value={form.address}
                  onChange={(e) => update('address', e.target.value)}
                  className="w-full border border-gray-200 text-onyx px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none resize-none"
                  placeholder="Full address for delivery"
                />
              </div>
              <div>
                <label htmlFor="wood-product" className="block text-[10px] uppercase text-gold-600 tracking-widest font-bold mb-2">
                  Product *
                </label>
                <select
                  id="wood-product"
                  value={form.productId}
                  onChange={(e) => update('productId', e.target.value)}
                  className="w-full border border-gray-200 text-onyx px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none"
                >
                  {WOOD_PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}{p.subtitle ? ' ' + p.subtitle : ''} — {p.weight} — R{p.price} per bag (MOQ {p.moq})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="wood-quantity" className="block text-[10px] uppercase text-gold-600 tracking-widest font-bold mb-2">
                  Quantity (bags) * — MOQ {selectedProduct.moq}
                </label>
                <input
                  id="wood-quantity"
                  type="number"
                  min={selectedProduct.moq}
                  required
                  value={form.quantity}
                  onChange={(e) => update('quantity', e.target.value)}
                  className="w-full border border-gray-200 text-onyx px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="wood-notes" className="block text-[10px] uppercase text-gold-600 tracking-widest font-bold mb-2">
                  Notes
                </label>
                <textarea
                  id="wood-notes"
                  rows={2}
                  value={form.notes}
                  onChange={(e) => update('notes', e.target.value)}
                  className="w-full border border-gray-200 text-onyx px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none resize-none"
                  placeholder="Preferred delivery date, special requests…"
                />
              </div>
              {status === 'error' && errorMessage && (
                <p className="text-red-600 text-sm">{errorMessage}</p>
              )}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="flex-1 py-3 border border-gray-300 text-onyx font-sans text-sm font-semibold uppercase tracking-wider hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex-1 py-3 bg-gold-500 text-onyx font-sans text-sm font-semibold uppercase tracking-wider hover:bg-gold-400 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending…' : 'Submit order request'}
                </button>
              </div>
              <p className="text-gray-500 text-xs">
                We’ll contact you to confirm. Payment on delivery (COD). Gauteng only.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

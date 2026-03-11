'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
        credentials: 'include',
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Login failed')
        return
      }
      router.push('/admin')
      router.refresh()
    } catch {
      setError('Could not connect')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-onyx text-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl border border-white/10 bg-onyx-light/50 p-8">
          <h1 className="font-serif text-2xl text-white mb-1">Admin portal</h1>
          <p className="text-gray-400 text-sm mb-6">Sign in to view enquiries and manage bookings.</p>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50"
                placeholder="Admin password"
                autoComplete="current-password"
                required
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-gold-500 text-onyx font-bold uppercase tracking-widest text-sm hover:bg-gold-400 rounded-xl transition-colors disabled:opacity-50"
            >
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
        </div>
        <p className="text-center mt-6">
          <Link href="/" className="text-gray-400 hover:text-white text-sm">
            Back to site
          </Link>
        </p>
      </div>
    </main>
  )
}

'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { Mail, ArrowLeft, Send, CheckCircle, XCircle } from 'lucide-react'

export default function AdminEmailStatusPage() {
  const [status, setStatus] = useState<{
    resend: { apiKeySet: boolean; apiKeyPreview: string | null }
    from: string | null
    adminEmail: string | null
    env: string
  } | null>(null)
  const [loading, setLoading] = useState(true)
  const [testSending, setTestSending] = useState(false)
  const [testResult, setTestResult] = useState<{ ok: boolean; message: string } | null>(null)
  const [testTo, setTestTo] = useState('')

  const load = useCallback(() => {
    setLoading(true)
    setTestResult(null)
    fetch('/api/admin/email-status', { credentials: 'include' })
      .then((r) => r.json())
      .then((data) => {
        if (data.ok) {
          setStatus(data)
          setTestTo(data.adminEmail || '')
        }
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const sendTest = () => {
    setTestSending(true)
    setTestResult(null)
    fetch('/api/admin/email-status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ to: testTo || undefined }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.ok) {
          setTestResult({ ok: true, message: `Test email sent to ${data.to}. Check your inbox (and spam).` })
        } else {
          setTestResult({ ok: false, message: data.error || 'Failed to send' })
        }
      })
      .catch(() => setTestResult({ ok: false, message: 'Request failed' }))
      .finally(() => setTestSending(false))
  }

  if (loading && !status) {
    return (
      <main className="flex-1 flex items-center justify-center">
        <p className="text-gray-400">Loading…</p>
      </main>
    )
  }

  return (
    <main id="main-content" className="flex-1">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-6">
          <Link href="/admin" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back to Dashboard
          </Link>
        </div>

        <h1 className="font-serif text-2xl text-white mb-2 flex items-center gap-2">
          <Mail className="h-7 w-7 text-gold-500" /> Email status
        </h1>
        <p className="text-gray-400 text-sm mb-8">
          Check that Resend is configured and send a test email. No secrets are shown.
        </p>

        <div className="space-y-6 rounded-2xl border border-white/10 bg-onyx-light/50 p-6">
          <div>
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Environment</h2>
            <p className="text-white">
              <strong>RESEND_API_KEY:</strong>{' '}
              {status?.resend.apiKeySet ? (
                <span className="text-green-400">Set ({status.resend.apiKeyPreview})</span>
              ) : (
                <span className="text-red-400">Not set</span>
              )}
            </p>
            <p className="text-white mt-1">
              <strong>MIWESU_BOOKING_FROM_EMAIL:</strong>{' '}
              {status?.from ? (
                <span className="text-green-400">{status.from}</span>
              ) : (
                <span className="text-red-400">Not set</span>
              )}
            </p>
            <p className="text-white mt-1">
              <strong>MIWESU_ADMIN_EMAIL:</strong>{' '}
              {status?.adminEmail ? (
                <span className="text-green-400">{status.adminEmail}</span>
              ) : (
                <span className="text-amber-400">Not set (used as test recipient)</span>
              )}
            </p>
            <p className="text-gray-500 text-xs mt-2">NODE_ENV: {status?.env || 'unknown'}</p>
          </div>

          <div className="pt-4 border-t border-white/10">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Send test email</h2>
            <p className="text-gray-400 text-sm mb-3">
              Sends one email from this app via Resend. If it fails, the error will tell you what’s wrong (e.g. domain not verified, invalid from).
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <input
                type="email"
                value={testTo}
                onChange={(e) => setTestTo(e.target.value)}
                placeholder="your@email.com"
                className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-white placeholder-gray-500 w-64"
              />
              <button
                type="button"
                onClick={sendTest}
                disabled={testSending || !status?.resend.apiKeySet}
                className="inline-flex items-center gap-2 py-2 px-4 bg-gold-500 text-onyx font-medium rounded-lg hover:bg-gold-400 disabled:opacity-50 disabled:pointer-events-none"
              >
                {testSending ? 'Sending…' : <><Send className="h-4 w-4" /> Send test</>}
              </button>
            </div>
            {testResult && (
              <div className={`mt-3 flex items-center gap-2 text-sm ${testResult.ok ? 'text-green-400' : 'text-red-400'}`}>
                {testResult.ok ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                {testResult.message}
              </div>
            )}
          </div>

          {!status?.resend.apiKeySet && (
            <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-4 text-sm text-red-300">
              Add <code className="bg-black/30 px-1">RESEND_API_KEY</code> in Vercel → Project → Settings → Environment Variables (Production), then redeploy.
            </div>
          )}
          {status?.resend.apiKeySet && !status?.from && (
            <div className="rounded-lg bg-amber-500/10 border border-amber-500/30 p-4 text-sm text-amber-300">
              Set <code className="bg-black/30 px-1">MIWESU_BOOKING_FROM_EMAIL</code> to an address on your verified Resend domain (e.g. bookings@miwesu.co.za).
            </div>
          )}
        </div>

        <p className="mt-6 text-gray-500 text-xs">
          See <code className="bg-white/5 px-1">docs/RESEND_SETUP_CHECKLIST.md</code> for full Resend and DNS setup.
        </p>
      </div>
    </main>
  )
}

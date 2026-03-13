'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, ListTodo, DollarSign, Mail, ExternalLink, LogOut } from 'lucide-react'

const nav = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/bookings', label: 'Bookings', icon: ListTodo },
  { href: '/admin/rates', label: 'Rates', icon: DollarSign },
  { href: '/admin/email-status', label: 'Email', icon: Mail },
] as const

export default function AdminShell() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST', credentials: 'include' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-onyx/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/admin"
          className="font-serif text-lg font-semibold text-white tracking-tight hover:text-gold-400 transition-colors"
        >
          MIWESU Admin
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Admin">
          {nav.map(({ href, label, icon: Icon }) => {
            const isActive = href === '/admin' ? pathname === '/admin' : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            )
          })}
          <span className="mx-1 h-4 w-px bg-white/10" aria-hidden />
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
          >
            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
            <span className="hidden sm:inline">Site</span>
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
          >
            <LogOut className="h-4 w-4 shrink-0" aria-hidden />
            <span className="hidden sm:inline">Log out</span>
          </button>
        </nav>
      </div>
    </header>
  )
}

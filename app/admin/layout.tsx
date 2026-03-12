'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import AdminShell from '@/components/admin/AdminShell'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [checked, setChecked] = useState(false)

  const isLoginPage = pathname === '/admin/login'

  useEffect(() => {
    if (isLoginPage) {
      setChecked(true)
      return
    }
    fetch('/api/admin/me', { credentials: 'include' })
      .then((res) => {
        if (res.status === 401) router.replace('/admin/login')
        setChecked(true)
      })
      .catch(() => {
        router.replace('/admin/login')
        setChecked(true)
      })
  }, [isLoginPage, router])

  if (!checked && !isLoginPage) {
    return (
      <div className="min-h-screen bg-onyx text-white flex items-center justify-center">
        <p className="text-gray-400">Checking access…</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-onyx text-white flex flex-col">
      {!isLoginPage && <AdminShell />}
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  )
}

// src/components/BottomNav.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export const BottomNav = () => {
  const pathname = usePathname()

  const navItems = [
    { href: '/', icon: '🏠', label: 'トップ' },
    { href: '/new', icon: '✨', label: '新台' },
    { href: '/search', icon: '🔍', label: '探す' },
    { href: '/forum', icon: '💬', label: 'フォーラム' },
    { href: '/timeline', icon: '🕒', label: 'タイム' },
  ]

  return (
    // md:hidden: md以上の画面サイズでは非表示(モバイルのみ表示)
    <nav className="fixed bottom-0 left-0 z-50 flex w-full justify-around border-t bg-white py-2 md:hidden">
      {navItems.map(({ href, icon }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            'flex flex-col items-center text-xs',
            pathname === href ? 'text-blue-600 font-bold' : 'text-gray-500'
          )}
        >
          <span>{icon}</span>
        </Link>
      ))}
    </nav>
  )
}

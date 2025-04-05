// src/components/Sidebar.tsx
'use client'

import Link from 'next/link'

export const Sidebar = () => {
  const navItems = [
    { href: '/', label: 'トップ', icon: '🏠' },
    { href: '/new', label: '新台・注目', icon: '✨' },
    { href: '/search', label: '台を探す', icon: '🔍' },
    { href: '/forum', label: 'フォーラム', icon: '💬' },
    { href: '/timeline', label: 'タイムライン', icon: '🕒' },
  ]

  return (
    // md:flex: md以上の画面サイズでは表示(PCのみ表示)
    <aside className="hidden h-screen w-56 flex-col border-r bg-white p-4 md:flex">
      <div className="mb-10 text-2xl font-bold">
        🎰 <span className="align-middle">ジョイスロ</span>
      </div>
      <nav className="flex flex-col gap-4 text-sm">
        {navItems.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <span>{icon}</span>
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

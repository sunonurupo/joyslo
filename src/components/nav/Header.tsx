// src/components/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/UserContext'
import { supabase } from '@/lib/supabaseClient'
import { MobileMenuButton } from '@/components/nav/MobileMenuButton'
import { MobileDrawer } from '@/components/nav/MobileDrawer'
import { logout } from '@/lib/auth'

export const Header = () => {
  const { user, setUser, loading } = useUser()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  // ログアウト処理(UIや画面遷移は呼び出し元で処理する)
  const handleLogout = async () => {
    try {
      await logout()
      alert('ログアウトしました')
      setUser(null)
      router.push('/')
    } catch (e: any) {
      //alert(e.message || 'ログアウトに失敗しました')
      alert('ログアウトに失敗しました')
    }
  }

  return (
    <>
      <header className="flex w-full items-center justify-between border-b border-gray-200 px-4 py-2">
        {/* モバイル左側：≡ + ロゴ */}
        <div className="flex items-center gap-2 md:hidden">
          <MobileMenuButton onClick={() => setIsOpen(true)} />
          <div className="text-xl font-bold">🎰ジョイスロ</div>
        </div>

        {/* モバイル右側：ログインUIのみ */}
        <nav className="ml-auto flex gap-4 text-sm md:hidden">
          {user ? (
            <button onClick={handleLogout} className="text-red-600">
              ログアウト
            </button>
          ) : (
            <>
              <Link href="/login" className="text-blue-600">
                ログイン
              </Link>
              <Link href="/register" className="text-blue-600">
                新規登録
              </Link>
            </>
          )}
        </nav>
      </header>

      {/* モバイル用ドロワーメニュー */}
      <MobileDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

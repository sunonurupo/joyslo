// src/components/RightSidebar.tsx
'use client'

import Link from 'next/link'
import { useUser } from '@/context/UserContext'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import { logout } from '@/lib/auth'

export const RightSidebar = () => {
  const { user, setUser, loading } = useUser()
  const router = useRouter()

  // ログアウト処理(Header.tsxにも記載あり。UIや画面遷移は呼び出し元で処理する)
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

  // 右側サイドバーはPC版のみ表示
  return (
    <aside className="hidden w-64 flex-col border-l bg-white p-4 md:flex">
      <div className="mb-2 text-sm font-bold">アカウント</div>
      {user ? (
        <button onClick={handleLogout} className="text-sm text-red-600">
          ログアウト
        </button>
      ) : (
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/login" className="text-blue-600">
            ログイン
          </Link>
          <Link href="/register" className="text-blue-600">
            新規登録
          </Link>
        </div>
      )}

      <div className="mb-4 mt-10 text-sm font-bold">その他メニュー</div>
      <nav className="mb-6 flex flex-col gap-2 text-sm">
        <Link href="/terms">📄 利用規約</Link>
        <Link href="/privacy">🔐 プライバシーポリシー</Link>
        <Link href="/setting">⚙️ 設定</Link>
        <Link href="/contact">📩 お問い合わせ</Link>
      </nav>
    </aside>
  )
}

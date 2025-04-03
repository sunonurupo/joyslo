'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      alert('ログアウト失敗: ' + error.message)
    } else {
      alert('ログアウトしました')
      setUser(null)
      router.push('/')
    }
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">ようこそ！</h1>

      <div className="flex gap-4 mb-4">
        {!user ? (
          <>
            <Link href="/login" className="text-blue-500 underline">ログイン</Link>
            <Link href="/register" className="text-blue-500 underline">新規登録</Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            ログアウト
          </button>
        )}
      </div>

      {user && (
        <p className="text-gray-600">{user.email} でログイン中</p>
      )}
    </main>
  )
}
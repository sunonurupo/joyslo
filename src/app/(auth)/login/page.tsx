// src/app/login/page.tsx
'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/UserContext'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const { setUser } = useUser()

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      alert('ログイン失敗: ' + error.message)
    } else {
      alert('ログイン成功！')
      setUser(data.user)
      router.push('/') // トップにリダイレクト
    }
  }

  return (
    <main className="mx-auto max-w-md p-4">
      <h1 className="mb-4 text-2xl font-bold">ログイン</h1>
      <input
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 w-full rounded border p-2"
      />
      <input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 w-full rounded border p-2"
      />
      <button onClick={handleLogin} className="w-full rounded bg-blue-500 py-2 text-white">
        ログイン
      </button>
    </main>
  )
}

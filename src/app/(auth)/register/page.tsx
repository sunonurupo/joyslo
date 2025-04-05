// src/app/register/page.tsx
'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      alert('サインアップ失敗: ' + error.message)
    } else {
      alert('確認メールを送信しました！')
      // サインアップ成功後、ログインページにリダイレクト
      router.push('/login')
    }
  }

  return (
    <main className="mx-auto max-w-md p-4">
      <h1 className="mb-4 text-2xl font-bold">新規登録</h1>
      <input
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 w-full rounded border p-2"
      />
      <input
        type="password"
        placeholder="パスワード（6文字以上）"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 w-full rounded border p-2"
      />
      <button onClick={handleSignUp} className="w-full rounded bg-green-500 py-2 text-white">
        新規登録
      </button>
    </main>
  )
}

// src/context/UserContext.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

type User = {
  id: string
  email?: string
} | null

// Context作成
const UserContext = createContext<{
  user: User
  setUser: (user: User) => void
}>({
  user: null,
  setUser: () => {},
})

// Contextを提供するProviderコンポーネント
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()

    // セッション変化を監視(ログイン or ログアウトしたとき、自動で user を更新)
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    // クリーンアップ
    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

// Contextを使うためのカスタムフック
export const useUser = () => useContext(UserContext)

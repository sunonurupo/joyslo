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
  user: User | undefined
  setUser: (user: User) => void
  loading: boolean
}>({
  user: undefined,
  setUser: () => {},
  loading: true,
})

// Contextを提供するProviderコンポーネント
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
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

  return <UserContext.Provider value={{ user, setUser, loading }}>{children}</UserContext.Provider>
}

// Contextを使うためのカスタムフック
export const useUser = () => useContext(UserContext)

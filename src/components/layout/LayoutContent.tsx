// src/components/layout/LayoutContent.tsx
'use client'

import { useUser } from '@/context/UserContext'
import { Sidebar } from '@/components/nav/Sidebar'
import { BottomNav } from '@/components/nav/BottomNav'
import { Header } from '@/components/nav/Header'
import { RightSidebar } from '@/components/nav/RightSidebar'

// コンテンツのレイアウト
export default function LayoutContent({ children }: { children: React.ReactNode }) {
  // チラ見え防止（ユーザー情報のローディング完了までは何も表示しない）
  const { loading } = useUser()
  if (loading) return null

  return (
    <div className="flex min-h-screen">
      {/* 左サイドバー（PC） */}
      <Sidebar />

      {/* 中央エリア（Header + Main） */}
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 px-4 pb-16 md:pb-0">{children}</main>
      </div>

      {/* 右サイドバー（PC） */}
      <RightSidebar />

      {/* モバイル下部ナビ */}
      <BottomNav />
    </div>
  )
}

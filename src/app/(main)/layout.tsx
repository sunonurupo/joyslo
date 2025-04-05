// src/app/(main)/layout.tsx
'use client'

import { UserProvider } from '@/context/UserContext'
import LayoutContent from '@/components/layout/LayoutContent'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <LayoutContent>{children}</LayoutContent>
    </UserProvider>
  )
}

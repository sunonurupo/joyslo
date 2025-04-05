// src/components/MobileDrawer.tsx
'use client'

import { Dialog } from '@headlessui/react'
import Link from 'next/link'

type MobileDrawerProps = {
  isOpen: boolean
  onClose: () => void
}

export const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50 md:hidden">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-y-0 right-0 w-64 bg-white p-4 shadow-xl">
        <button onClick={onClose} className="mb-4 w-full text-right text-sm text-gray-600">
          ✕ 閉じる
        </button>
        <nav className="flex flex-col gap-4 text-sm">
          <Link href="/terms" onClick={onClose}>
            📄 利用規約
          </Link>
          <Link href="/privacy" onClick={onClose}>
            🔐 プライバシーポリシー
          </Link>
          <Link href="/setting" onClick={onClose}>
            ⚙️ 設定
          </Link>
          <Link href="/contact" onClick={onClose}>
            📩 お問い合わせ
          </Link>
        </nav>
      </div>
    </Dialog>
  )
}

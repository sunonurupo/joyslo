// src/app/layout.tsx
import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata = {
  title: 'ジョイスロ',
  description: 'スロット機種レビュー & コミュニティ',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white`}>
        {children}
      </body>
    </html>
  )
}

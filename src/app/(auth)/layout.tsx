// app/(auth)/layout.tsx

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        {/* ロゴ部分 */}
        <h1 className="text-3xl font-bold text-gray-900">ジョイスロ</h1>

        {/* 各ページ（login, register など）の中身 */}
        {children}
      </div>
    </main>
  )
}

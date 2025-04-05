// src/components/MobileMenuButton.tsx
'use client'

type MobileMenuButtonProps = {
  onClick: () => void
}

export const MobileMenuButton = ({ onClick }: MobileMenuButtonProps) => {
  return (
    <button onClick={onClick} className="p-1 text-2xl md:hidden" aria-label="メニューを開く">
      ≡
    </button>
  )
}

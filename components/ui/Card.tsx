import { ReactNode } from 'react'
import clsx from 'clsx'

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        'rounded-2xl p-6 transition-all',
        // matte panel look
        'bg-[linear-gradient(to_bottom_right,var(--panel-grad-a),var(--panel-grad-b))]',
        'border border-[rgba(87,138,53,0.18)]',
        'hover:shadow-lg hover:ring-2 hover:ring-[rgba(87,138,53,0.28)]',
        className
      )}
    >
      {children}
    </div>
  )
}

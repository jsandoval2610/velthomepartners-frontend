'use client'
import { motion, type HTMLMotionProps } from 'framer-motion'
import clsx from 'clsx'
import type { ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'ghost'

export const buttonStyles = (variant: ButtonVariant = 'primary') =>
  clsx(
    'group relative inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium',
    'transition-all duration-200 overflow-hidden select-none',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)]/50',
    variant === 'primary'
      ? 'bg-[var(--brand)] text-white shadow hover:shadow-lg'
      : 'border border-black/10 text-[color:var(--ink)] bg-[var(--card)]/70 hover:bg-[var(--panel)]'
  )

// ✅ Narrow children to ReactNode to satisfy the <span> below
type Props = Omit<HTMLMotionProps<'button'>, 'children'> & {
  variant?: ButtonVariant
  children?: ReactNode
}

export function Button({ className, variant = 'primary', children, ...props }: Props) {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(buttonStyles(variant), className)}
      {...props}
    >
      {/* sheen */}
      <span className="pointer-events-none absolute -inset-y-1 -inset-x-2 translate-x-[-150%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.38),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-[150%]" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

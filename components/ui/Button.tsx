'use client'
import * as React from 'react'
import { buttonStyles, type ButtonVariant } from '@/lib/buttonStyles'

export { buttonStyles } from '@/lib/buttonStyles'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  className?: string
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button className={[buttonStyles(variant), className].filter(Boolean).join(' ')} {...props}>
      {children}
    </button>
  )
}

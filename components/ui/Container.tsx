import { ReactNode } from 'react'
import clsx from 'clsx'


export function Container({ className, children }: { className?: string; children: ReactNode }) {
return (
<div className={clsx('mx-auto max-w-6xl px-4', className)}>{children}</div>
)
}
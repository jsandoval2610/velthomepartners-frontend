import { ReactNode } from 'react'
import clsx from 'clsx'


export function Card({ children, className }: { children: ReactNode; className?: string }) {
return (
<div className={clsx('rounded-2xl bg-card shadow-card p-6 border border-black/5 hover:shadow-lg transition-shadow', className)}>
{children}
</div>
)
}
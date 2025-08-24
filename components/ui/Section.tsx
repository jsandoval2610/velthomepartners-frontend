import { ReactNode } from 'react'
import clsx from 'clsx'

export function Section({
  title,
  subtitle,
  className,
  children,
}: {
  title?: string
  subtitle?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section className={clsx('py-16', className)}>
      {(title || subtitle) && (
        <div className="mb-8">
          {title && (
            <h2 className="text-3xl md:text-4xl font-semibold inline-block relative text-[color:var(--brand)]">
              {title}
              <span className="block h-[3px] w-12 mt-3 bg-[var(--brand)] rounded-full" />
            </h2>
          )}
          {subtitle && <p className="mt-4 text-[color:var(--muted)] max-w-2xl">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  )
}

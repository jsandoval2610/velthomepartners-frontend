'use client'

import { PropsWithChildren } from 'react'

export function PageBand({ children }: PropsWithChildren) {
  return (
    <section
      className={[
        'bleed-x relative w-screen',
        'overflow-hidden',
        'bg-transparent',
        'pt-16 md:pt-24 pb-20 md:pb-32',
        'min-h-[60vh]',
        'text-white'
      ].join(' ')}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div
        className={[
          'w-full px-6 sm:px-10',
          '[&>*:last-child]:mb-0',
          '[&>*:last-child]:pb-0',
        ].join(' ')}
      >
        {children}
      </div>
    </section>
  )
}

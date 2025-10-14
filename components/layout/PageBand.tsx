'use client'

import { PropsWithChildren } from 'react'

export function PageBand({ children }: PropsWithChildren) {
  return (
    <section
      className={[
        'bleed-x relative w-screen',
        'bg-[color:var(--bg-washed)]',
        'pt-6 md:pt-10 pb-12 md:pb-16'
      ].join(' ')}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[rgba(9,77,88,0.12)]" />
      {/* <div className="absolute inset-x-0 bottom-0 h-px bg-red-800" /> */}
       <div
        className={[
          'mx-auto max-w-6xl px-4',
          '[&>*:last-child]:mb-0',
          '[&>*:last-child]:pb-0',
        ].join(' ')}
      >
      {/* <div className="mx-auto max-w-6xl px-4"> */}
        {children}
      </div>
    </section>
  )
}

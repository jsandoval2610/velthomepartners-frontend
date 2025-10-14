'use client'

import { PropsWithChildren } from 'react'

export function CtaSection({ children }: PropsWithChildren) {
  return (
    <section
      className={[
        // make it full width regardless of container
        'bleed-x relative w-screen py-12 md:py-16',
        // base background (very light brand blue/teal wash)
        "bg-[radial-gradient(120%_70%_at_50%_0%,rgba(14,116,144,0.10)_0%,rgba(9,77,88,0.06)_45%,rgba(2,6,9,0.02)_100%)]"
      ].join(' ')}
    >
      {/* ultra-subtle grid pattern */}
        <div className="rounded-[calc(theme(borderRadius.2xl)-1px)] bg-white
  ring-1 ring-black/5 border border-black/10
  shadow-[0_10px_30px_rgba(9,77,88,0.06)]   /* brand-tinted soft shadow */
  p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"/>

        

      {/* soft top & bottom hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#094D58]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0E7490]/25 to-transparent" />

      {/* content container */}
      <div className="mx-auto max-w-6xl px-4">{children}</div>

      {/* faint blurred accent blobs (tasteful, not flashy) */}
      <div className="pointer-events-none absolute -top-8 right-10 h-40 w-40 rounded-full bg-[#0E7490]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-8 h-28 w-28 rounded-full bg-[#094D58]/25 blur-2xl" />
    </section>
  )
}

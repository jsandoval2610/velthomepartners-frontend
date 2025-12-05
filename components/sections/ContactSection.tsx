'use client'

import { useEffect, useRef, useState } from 'react'
import { buttonStyles } from '@/lib/buttonStyles'

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Replace these with your real details
  const addressLine1 = '525 William Penn Place 28th Floor'
  const addressLine2 = 'Pittsburgh, PA 15219'
  const email = 'contact@velthomepartners.com'

  return (
    <section
      aria-labelledby="contact-heading"
      className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 -mt-12 md:-mt-16"
    >
      <div className="pointer-events-none absolute -inset-x-4 inset-y-8 -z-10 rounded-[40px] bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-3xl opacity-80" />
      {/* Brand-styled outer wrapper (no non-theme colors) */}
      <div
        ref={ref}
        className={[
          'rounded-2xl border-2 border-[color:var(--brand)]',
          'will-change-transform transition-all duration-700 ease-out',
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          'motion-reduce:transition-none'
        ].join(' ')}
      >
        {/* Brand card */}
        <div
          className={[
            'rounded-[calc(theme(borderRadius.2xl)-2px)]',
            'bg-[color:var(--brand)]',
            'ring-1 ring-[color:var(--brand-tint-3)]',
            'border border-[color:var(--brand-tint-2)]',
            'shadow-[0_10px_30px_var(--brand-tint-1)]',
            'p-8 md:p-10'
          ].join(' ')}
        >
          <div className="flex flex-col gap-8 md:grid md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div className="space-y-4">
              <div className="space-y-3">
                <h3
                  id="contact-heading"
                  className="text-2xl md:text-3xl font-semibold text-[color:var(--card)]"
                >
                  Contact VeltHome Partners
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className={[
                      'relative overflow-hidden inline-flex items-center justify-center rounded-lg px-5 py-2 text-sm font-semibold',
                    'bg-[var(--bg-washed)] text-[color:var(--brand)] shadow-[0_10px_25px_var(--brand-tint-1)]',
                    'transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/40',
                    "before:content-[''] before:pointer-events-none before:absolute before:-inset-y-2 before:-inset-x-3",
                    "before:translate-x-[-140%] before:bg-[linear-gradient(120deg,transparent,rgba(11,101,86,0.35),transparent)] before:opacity-0",
                    'before:transition-transform before:duration-700 before:ease-out hover:before:translate-x-[140%] hover:before:opacity-100',
                    'hover:bg-[var(--bg-washed)]'
                  ].join(' ')}
                >
                  Email Us
                </a>
              </div>
            </div>

            <div className="grid w-full gap-4 sm:grid-cols-2">
              {/* Office */}
              <div className="rounded-xl border border-[color:var(--card)]/20 bg-[color:var(--card)]/10 p-5 shadow-[0_8px_18px_var(--brand-tint-1)]">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--card)]/75">
                  Office
                </div>
                <div className="mt-3 text-[color:var(--card)]">
                  <div className="font-semibold">{addressLine1}</div>
                  <div>{addressLine2}</div>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-xl border border-[color:var(--card)]/20 bg-[color:var(--card)]/10 p-5 shadow-[0_8px_18px_var(--brand-tint-1)]">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--card)]/75">
                  Email
                </div>
                <div className="mt-3 text-[color:var(--card)]">
                  <a
                    href={`mailto:${email}`}
                    className="font-semibold underline decoration-[color:var(--card)] underline-offset-4 break-words"
                  >
                    {email}
                  </a>
                  <div className="mt-2 text-sm text-[color:var(--card)]/80">
                    Best for investor relations and new opportunities.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

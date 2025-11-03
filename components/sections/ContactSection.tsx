'use client'

import { useEffect, useRef, useState } from 'react'

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
  const email = 'info@velthomepartners.com'

  return (
    <section aria-labelledby="contact-heading" className="mt-8 md:mt-10">
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
          <h3
            id="contact-heading"
            className="text-2xl font-semibold text-[color:var(--card)]"
          >
            Contact Velthome Partners
          </h3>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {/* Office */}
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--card)] opacity-80">
                Office
              </div>
              <div className="mt-2 text-[color:var(--card)]">
                <div>{addressLine1}</div>
                <div>{addressLine2}</div>
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--card)] opacity-80">
                Email
              </div>
              <div className="mt-2">
                <a
                  href={`mailto:${email}`}
                  className="text-[color:var(--card)] underline decoration-[color:var(--card)] underline-offset-4 opacity-95 hover:opacity-100"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>

          {/* Divider + note (all theme vars) */}
          <div className="mt-8 h-px bg-[color:var(--card)]/25" />
          <p className="mt-4 text-sm text-[color:var(--card)] opacity-85">
            For general inquiries, please email{' '}
            <a
              href={`mailto:${email}`}
              className="underline decoration-[color:var(--card)] underline-offset-4"
            >
              {email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

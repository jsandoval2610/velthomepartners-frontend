'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { buttonStyles } from '@/lib/buttonStyles'

export function CTABand() {
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

  return (
    <div
      ref={ref}
      className={[
        // gradient "1px" border wrapper
        'rounded-2xl p-[1px]',
        'bg-[linear-gradient(135deg,rgba(9,77,88,0.55),rgba(255,255,255,0.15))]',
        // reveal animation (gentle fade-up; motion-safe)
        'will-change-transform motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        // reduced-motion: no animation
        'motion-reduce:transition-none'
      ].join(' ')}
    >
      {/* Inner card */}
      <div className="rounded-[calc(theme(borderRadius.2xl)-1px)] bg-[rgb(231,227,218)] ring-1 ring-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-black/10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="md:pl-4 border-l-4 border-[#094D58]">
          <h3 className="text-2xl font-semibold text-neutral-900">Invest alongside Velthome Partners</h3>
          <p className="mt-2 text-[color:var(--muted)]">
            Institutional, community-focused real estate investing.
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/contact" className={buttonStyles('primary')}>Contact Us</Link>
          <Link href="/team" className={buttonStyles('ghost')}>Meet the Team</Link>
        </div>
      </div>
    </div>
  )
}

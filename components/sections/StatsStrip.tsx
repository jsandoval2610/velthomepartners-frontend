'use client'
import { useEffect, useRef, useState } from 'react'

export function StatsStrip() {
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
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="relative -mt-16 md:-mt-24 z-[1]">
      <div className="mx-auto max-w-6xl px-4">
        {/* Gradient-border shell */}
        <div
          ref={ref}
          className={[
            'rounded-2xl p-[1px]',
            // brand-tinted border (subtle)
            'bg-[linear-gradient(135deg,rgba(9,77,88,0.55),rgba(255,255,255,0.15))]',
            // reveal animation (fade-up)
            'transition-all duration-700 ease-out will-change-transform',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          ].join(' ')}
        >
          {/* Glassy inner card */}
          <div className="rounded-[calc(theme(borderRadius.2xl)-1px)] border border-white/10 bg-white/10 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-white/10">
            <dl className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 p-6 md:p-8">
              <div className="text-center md:text-left">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-white/70">Footprint</dt>
                <dd className="mt-1 text-xl font-semibold text-white">5 states</dd>
              </div>
              <div className="text-center md:text-left">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-white/70">Communities</dt>
                <dd className="mt-1 text-xl font-semibold text-white">28 communities</dd>
              </div>
              <div className="text-center md:text-left">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-white/70">Pads</dt>
                <dd className="mt-1 text-xl font-semibold text-white">2,200+ pads</dd>
              </div>
              <div className="text-center md:text-left">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-white/70">AUM</dt>
                <dd className="mt-1 text-xl font-semibold text-white">Over $100MM</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

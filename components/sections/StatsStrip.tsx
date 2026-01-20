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
    <section className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 pb-20 md:pb-24">
      {/* Gradient-border shell (no unintended inner padding beyond 1px border) */}
      <div
        ref={ref}
        className={[
          'rounded-2xl p-[1px]', // just the 1px border
          'bg-white/15',
          'ring-1 ring-[color:var(--brand)]',
          'transition-all duration-700 ease-out will-change-transform',
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        ].join(' ')}
      >
        {/* Glassy inner card */}
        <div className="rounded-[calc(theme(borderRadius.2xl)-1px)] border border-white/10 bg-[color-mix(in_srgb,var(--brand)_12%)] backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-white/10">
          {/* Top formatting line (kept) */}
          <div className="pt-4">
            <div className="mx-auto h-[2px] w-48 rounded-full bg-[linear-gradient(to_right,transparent,var(--accent),transparent)]" />
          </div>

          {/* Equal-width 3-up grid; full height items */}
          <dl
            className={[
              'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
              'divide-y sm:divide-y-0 sm:divide-x divide-white/10',
              'p-6 md:p-8',
              'auto-rows-fr'
            ].join(' ')}
          >
            {/* Item 1 */}
            <div className="h-full px-2 flex flex-col items-center text-center">
              {/* Fixed-height title box so underlines line up across columns */}
              <div className="relative flex items-end justify-center h-[80px] sm:h-[90px] lg:h-[100px]">
                <dt className="text-[32px] sm:text-[36px] lg:text-[40px] uppercase tracking-[0.18em] text-[color:var(--brand)] leading-tight">
                  Footprint
                </dt>
                {/* identical underline position/width for all */}
                <span
                  className={[
                    'pointer-events-none absolute -bottom-2 h-[2px] w-40 bg-[var(--accent)]',
                    'origin-left transition-transform duration-2500 ease-out',
                    visible ? 'scale-x-100' : 'scale-x-0'
                  ].join(' ')}
                />
              </div>
              <dd className="mt-3 text-lg sm:text-xl font-semibold text-black">4 States</dd>
            </div>

            {/* Item 2 (two-line title supported by the fixed-height box) */}
            <div className="h-full px-2 flex flex-col items-center text-center">
              <div className="relative flex items-end justify-center h-[80px] sm:h-[90px] lg:h-[100px]">
                <dt className="text-[32px] sm:text-[36px] lg:text-[40px] uppercase tracking-[0.18em] text-[color:var(--brand)] leading-tight">
                  Asset Classes
                </dt>
                <span
                  className={[
                    'pointer-events-none absolute -bottom-2 h-[2px] w-40 bg-[var(--accent)]',
                    'origin-center transition-transform duration-2500 ease-out',
                    visible ? 'scale-x-100' : 'scale-x-0'
                  ].join(' ')}
                />
              </div>
              <dd className="mt-3 text-lg sm:text-xl font-semibold text-black text-pretty">
                MHCs, Apartments, Storage Units, Multifamily
              </dd>
            </div>

            {/* Item 3 */}
            <div className="h-full px-2 flex flex-col items-center text-center">
              <div className="relative flex items-end justify-center h-[80px] sm:h-[90px] lg:h-[100px]">
                <dt className="text-[32px] sm:text-[36px] lg:text-[40px] uppercase tracking-[0.18em] text-[color:var(--brand)] leading-tight">
                  AUM
                </dt>
                <span
                  className={[
                    'pointer-events-none absolute -bottom-2 h-[2px] w-40 bg-[var(--accent)]',
                    'origin-right transition-transform duration-2500 ease-out',
                    visible ? 'scale-x-100' : 'scale-x-0'
                  ].join(' ')}
                />
              </div>
              <dd className="mt-3 text-lg sm:text-xl font-semibold text-black">Over $100MM</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

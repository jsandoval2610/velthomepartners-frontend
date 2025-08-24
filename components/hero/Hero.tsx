'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -40])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85])

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border"
      style={{
        background: [
          'linear-gradient(to bottom right, var(--panel-grad-a), var(--panel-grad-b))',
          'radial-gradient(80rem 40rem at -10% -10%, rgba(87,138,53,0.07), transparent 60%)',
        ].join(', ')
      }}
    >
      <motion.div style={{ y, opacity }} className="relative z-10 p-10 md:p-16">
        <h1 className="text-5xl md:text-6xl leading-tight max-w-3xl text-[color:var(--ink)]">
          Long-term, community-focused real estate investing
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[color:var(--muted)]">
          Discipline in underwriting. Flexibility in structuring. Aligned with investors.
        </p>
        <div className="mt-8">
          <Button onClick={() => (window.location.href = '/team')}>Meet the Team</Button>
        </div>
      </motion.div>

      {/* soft vignette */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-50"
        style={{ background: 'radial-gradient(60% 60% at 50% 10%, rgba(0,0,0,.06), transparent 60%)' }}
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-[rgba(87,138,53,0.18)]" />
    </div>
  )
}

'use client'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -28])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  // 3D tilt for the icon tile
  const tileRef = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useTransform(my, [-0.5, 0.5], [8, -8])
  const ry = useTransform(mx, [-0.5, 0.5], [-8, 8])
  const springRx = useSpring(rx, { stiffness: 120, damping: 12 })
  const springRy = useSpring(ry, { stiffness: 120, damping: 12 })

  function handleMove(e: React.MouseEvent) {
    const el = tileRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mx.set(x)
    my.set(y)
  }
  function handleLeave() {
    mx.set(0); my.set(0)
  }

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden rounded-2xl border"
      style={{
        background: [
          'linear-gradient(to bottom right, var(--panel-grad-a), var(--panel-grad-b))',
          'radial-gradient(70rem 35rem at -10% -10%, rgba(87,138,53,0.06), transparent 60%)',
        ].join(', ')
      }}
    >
      <motion.div style={{ y, opacity }} className="relative z-10 p-10 md:p-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT: copy */}
          <div>
            <h1 className="text-5xl md:text-6xl leading-tight max-w-3xl text-[color:var(--ink)]">
              Long-term, community-focused real estate investing
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[color:var(--muted)]">
              Discipline in underwriting. Flexibility in structuring. Aligned with investors.
            </p>
            <div className="mt-8">
              <Button onClick={() => (window.location.href = '/team')}>Meet the Team</Button>
            </div>
          </div>

          <div className="md:justify-self-end" style={{ perspective: 1200 }}>
            <motion.div
              ref={tileRef}
              className="relative w-86 h-86 md:w-102 md:h-102"
              style={{ rotateX: springRx, rotateY: springRy }}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              initial={{ scale: 0.985 }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            >
              {/* base (slightly darker than hero) */}
              <div className="absolute inset-0 rounded-[1.6rem] border border-black/10 ring-1 ring-black/10
                              bg-pink" />
              {/* subtle anchor halo */}
              <div className="absolute -inset-4 rounded-[2rem] opacity-50
                              bg-red" />
              {/* rotating rectangle outline (brand tint) */}
              <motion.div
                className="absolute inset-3 rounded-[1.2rem] pointer-events-none"
                style={{ border: '2px solid rgba(87,138,53,0.28)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
              />
              {/* counter-rotating inner rectangle for depth */}
              <motion.div
                className="absolute inset-6 rounded-[1rem] pointer-events-none"
                style={{ border: '1px dashed rgba(17,20,24,0.35)' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 26, ease: 'linear', repeat: Infinity }}
              />
              {/* icon */}
              <div className="relative h-full w-full rounded-[1.6rem] flex items-center justify-center p-8 md:p-10">
                <Image
                  src="/images/icon.png"
                  alt="Velthome Icon"
                  fill
                  className="object-contain [filter:saturate(96%) contrast(104%)]"
                  sizes="(min-width: 768px) 18rem, 14rem"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* soft vignette + thin green outline */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-35"
        style={{ background: 'radial-gradient(60% 60% at 50% 10%, rgba(0,0,0,.05), transparent 60%)' }}
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-[rgba(87,138,53,0.18)]" />
    </div>
  )
}

'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/Button'


export function Hero() {
const ref = useRef<HTMLDivElement>(null)
const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
const y = useTransform(scrollYProgress, [0, 1], [0, -40])
const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])


return (
<div ref={ref} className="relative overflow-hidden rounded-2xl border border-black/5">
<motion.div style={{ y, opacity }} className="relative z-10 p-10 md:p-16 bg-gradient-to-br from-card to-bg">
<h1 className="text-5xl md:text-6xl leading-tight max-w-3xl">
Long‑term, community‑focused real estate investing
</h1>
<p className="mt-6 max-w-2xl text-lg text-muted">
Discipline in underwriting. Flexibility in structuring. Aligned with investors.
</p>
<div className="mt-8 flex gap-4">
<Button onClick={() => (window.location.href = '/investors')}>Investor Login</Button>
<Button variant="ghost" onClick={() => (window.location.href = '/contact')}>Submit a Deal</Button>
</div>
</motion.div>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,_rgba(183,72,61,.10),transparent_40%),_radial-gradient(800px_circle_at_100%_100%,_rgba(31,93,80,.12),transparent_45%)]" />
</div>
)
}
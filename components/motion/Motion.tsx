'use client'
import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'


export const fadeUp: Variants = {
initial: { opacity: 0, y: 12 },
animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}


export function MotionSection({ children, className }: { children: ReactNode; className?: string }) {
return (
<motion.section
initial="initial"
whileInView="animate"
viewport={{ once: true, amount: 0.2 }}
variants={fadeUp}
className={className}
>
{children}
</motion.section>
)
}
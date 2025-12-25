'use client'

import Image from 'next/image'
import Link from 'next/link'
import { buttonStyles } from '@/lib/buttonStyles'

export function HeroBridge() {
  return (
    <section className="bleed-x relative w-screen">
      {/* Full-bleed image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Bridge.jpg"
          alt="Bridge skyline"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Darken + bottom fade for seamless transition */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-x-0 bottom-0 h-48 md:h-56 bg-gradient-to-b from-transparent to-[rgb(5_7_9_/0.85)]" />
      </div>

      {/* Taller hero: bump top/bottom padding */}
      <div className="relative mx-auto max-w-6xl px-4 pt-36 pb-[22vh] md:pt-40 md:pb-[28vh]">
        <div className="max-w-3xl">
          <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-white/70">
            Vertically Integrated
          </p>
          <h1 className="mt-3 text-4xl md:text-[44px] leading-[1.15] font-semibold text-white">
            Opportunistic value-driven real estate firm
          </h1>
          <p className="mt-3 text-base md:text-lg text-white/85">
            Fundamentals-first underwriting, flexible structuring, aligned incentives.
          </p>
          <div className="mt-7 flex gap-3">
            <Link
              href="/team"
              className={`${buttonStyles('primary')} px-6 md:px-7`}>
              Our Team
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}

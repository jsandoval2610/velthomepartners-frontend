'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import { buttonStyles } from '@/lib/buttonStyles'

/** Assets in /public — update paths as needed */
const CAROUSEL_IMAGES = [
  '/images/carousel/01.jpg',
  '/images/carousel/02.jpg',
  '/images/carousel/03.jpg',
  '/images/carousel/04.jpg',
]
const VIDEO_SRC = '/videos/home-video.mp4'
const BRIDGE_IMG = '/images/Bridge.jpg'
const MEDIA_GLOW_STYLE: CSSProperties = {
  background: [
    'radial-gradient(circle at 30% 20%, rgba(71, 195, 205, 0.18), transparent 50%)',
    'radial-gradient(circle at 70% -10%, rgba(255, 255, 255, 0.22), transparent 45%)',
    'radial-gradient(circle at 50% 90%, rgba(13, 36, 66, 0.5), transparent 60%)',
  ].join(', '),
}

type HeroMediaPanelProps = {
  children: ReactNode
  className?: string
}

function HeroMediaPanel({ children, className }: HeroMediaPanelProps) {
  const panelWrapperClass = ['relative isolate', className].filter(Boolean).join(' ')
  return (
    <div className={panelWrapperClass}>
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 -z-10 opacity-70 blur-[100px]"
        style={MEDIA_GLOW_STYLE}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-16 -bottom-14 -z-10 h-24 rounded-full bg-[color:var(--brand)]/20 blur-[100px]"
      />
      <div className="relative h-full overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#0b161c] via-[#091014] to-[#05090d] shadow-[0_30px_70px_rgba(0,0,0,0.45)] ring-1 ring-white/5">
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white/15 via-transparent to-transparent opacity-70" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.22),transparent_55%)] opacity-70 mix-blend-screen" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.12),transparent_55%)] opacity-60" />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  )
}

export function NewHero() {
  const [index, setIndex] = useState(0)

  // Simple auto-advance every 5s
  useEffect(() => {
    if (CAROUSEL_IMAGES.length <= 1) return
    const id = setInterval(() => {
      setIndex(i => (i + 1) % CAROUSEL_IMAGES.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bleed-x relative w-screen">
      {/* Background canvas for subtle depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: [
            // Match the global gradient (no coral tint up top)
            'linear-gradient(135deg, var(--bg-washed,#F9F7F1), rgba(11,101,86,0.18))',
            'radial-gradient(60% 32% at 50% 4%, rgba(11,101,86,0.20), transparent 62%)',
            'radial-gradient(60rem 30rem at 120% -8%, rgba(199,167,108,0.14), transparent 58%)',
            'radial-gradient(72rem 36rem at -18% 108%, rgba(9,77,88,0.16), transparent 60%)',
          ].join(', ')
        }}
      />

      <div className="relative mx-auto max-w-6xl lg:max-w-[1180px] xl:max-w-[1280px] px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
        {/* === Row 1: Copy (left) + Bridge (right) === */}
        <div className="grid grid-cols-1 items-center gap-6 md:gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          {/* Copy block */}
          <div className="flex h-full items-center py-4">
            <div className="max-w-xl">
              {/* <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-[color:var(--brand)]/85">
                Vertically Integrated
              </p> */}
              {/* Text color set to button/brand color so it pops */}
              <h1 className="mt-3 text-4xl md:text-[44px] leading-[1.15] font-semibold text-[color:var(--brand)]">
                Manufactured housing–focused, vertically integrated real estate firm
              </h1>
              <p className="mt-3 text-base md:text-lg text-[color:var(--brand)]/90">
                Disciplined underwriting, operational execution, long-term value creation
              </p>
              <div className="mt-7 flex gap-3">
                <Link href="/team" className={`${buttonStyles('primary')} px-6 md:px-7`}>
                  Our Team
                </Link>
              </div>
            </div>
          </div>

          {/* Bridge image now uses the same media styling + scale */}
          <HeroMediaPanel className="w-full max-w-lg lg:max-w-xl self-start md:self-center md:ml-auto">
            <Image
              src={BRIDGE_IMG}
              alt="Bridge skyline"
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="invisible block aspect-[2/1] sm:aspect-[11/5] lg:aspect-[7/3]" />
          </HeroMediaPanel>
        </div>

        {/* === Row 2+3: Carousel + video capsule === */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_55%),radial-gradient(circle_at_75%_0%,rgba(13,80,78,0.45),transparent_55%)] opacity-40 blur-3xl" />
            <div className="grid grid-cols-1 gap-8 items-stretch lg:gap-10 xl:gap-12 lg:grid-cols-2">
              <div className="relative">
                <div className="absolute -left-6 top-10 hidden h-12 w-12 rounded-full border border-white/30 lg:flex items-center justify-center text-[10px] uppercase tracking-[0.2em] text-white/70">
                  Live
                </div>
                <HeroMediaPanel className="w-full">
                  {/* Stack + crossfade */}
                  {CAROUSEL_IMAGES.map((src, i) => (
                    <div
                      key={src + i}
                      className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
                        i === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Image
                        src={src}
                        alt="Portfolio scene"
                        fill
                        priority={i === 0}
                        sizes="100vw"
                        className="object-cover"
                        />
                      </div>
                    ))}
                  <div className="invisible block aspect-[4/3]" />
                  {/* dots */}
                  {CAROUSEL_IMAGES.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {CAROUSEL_IMAGES.map((_, i) => (
                        <span
                          key={i}
                          className={`h-1.5 w-7 rounded-full transition-all ${
                            i === index ? 'bg-white' : 'bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </HeroMediaPanel>
              </div>

              <div className="relative lg:pl-2 xl:pl-6">
                <div className="absolute -top-6 -bottom-6 -left-8 -right-4 hidden rounded-[3rem] border border-white/10 bg-white/5 blur-3xl lg:block" />
                <HeroMediaPanel className="w-full">
                  <video
                    key={VIDEO_SRC}
                    src={VIDEO_SRC}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="invisible block aspect-[4/3]" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/45 via-black/20 to-transparent" />
                </HeroMediaPanel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

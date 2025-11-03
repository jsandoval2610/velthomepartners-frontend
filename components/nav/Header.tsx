'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { buttonStyles } from '@/components/ui/Button'

const nav = [
  { href: '/team',        label: 'Team' },
  { href: '/investments', label: 'Investments' },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 transition-all border-b',
        'backdrop-blur supports-[backdrop-filter]:bg-[var(--bg-washed)]/70',
        scrolled ? 'shadow-sm border-black/10' : 'border-transparent'
      )}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between py-4 px-4">
        {/* HOME / LOGO */}
        <Link href="/" aria-label="Home" className="group inline-block">
          {/* Wrapper controls size; image keeps ratio */}
          <span className="relative block h-12 w-36 md:h-16 md:w-48 rounded-2xl">
            <Image
              src="/images/VeltHome.png"
              fill
              alt="Velthome Partners"
              className="object-contain rounded-[inherit]"
              priority
            />

            {/* hover darken to convey clickability */}
            <span className="pointer-events-none absolute inset-0  rounded-[inherit] bg-black/0 transition-colors duration-200 group-hover:bg-black/5" />

            {/* thin static hairline so it reads as a tile even without hover */}
            <span className="pointer-events-none absolute inset-0 rounded-[inherit]  ring-black/10" />


            {/* underline: baseline hairline + brand bar grows on hover */}
            <span className="pointer-events-none absolute left-0 -bottom-1 h-px w-full bg-black/10" />
            <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-[var(--brand)] transition-all duration-200 ease-out group-hover:w-full" />
          </span>
        </Link>

        {/* NAV + INVESTOR LOGIN */}
        <ul className="hidden md:flex items-center gap-8 text-[15px]">
          {nav.map((i) => (
            <li key={i.href}>
              <Link
                href={i.href}
                className={clsx(
                  'relative py-2 text-[color:var(--ink)]/90 hover:text-[color:var(--ink)]',
                  'after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[var(--brand)] after:transition-all hover:after:w-full',
                  pathname.startsWith(i.href) && 'after:w-full'
                )}
              >
                {i.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/investors" className={buttonStyles('primary')}>
              <span className="relative z-10">Investor Login</span>
              <span className="pointer-events-none absolute -inset-y-1 -inset-x-2 translate-x-[-150%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.38),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-[150%]" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

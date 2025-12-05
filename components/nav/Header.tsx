'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { buttonStyles } from '@/components/ui/Button'

const nav = [
  { href: '/team',        label: 'Team' },
  { href: '/investments', label: 'Investments' },
  { href: '/learn',       label: 'Learn' },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // tiny shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close mobile menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 transition-all border-b',
        'backdrop-blur supports-[backdrop-filter]:bg-[var(--bg-washed)]/70',
        scrolled ? 'shadow-sm border-black/10' : 'border-transparent'
      )}
    >
      {/* Top bar */}
      <div className="mx-auto max-w-screen-xl flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" aria-label="Home" className="group inline-block">
          <span className="relative block h-[86px] w-[210px] md:h-[102px] md:w-[250px] rounded-2xl">
            <Image
              src="/images/VeltHome.png"
              fill
              alt="Velthome Partners"
              className="object-contain rounded-[inherit]"
              priority
            />
            <span className="pointer-events-none absolute inset-0 rounded-[inherit]" />
            <span className="pointer-events-none absolute left-0 -bottom-1 h-px w-full bg-black/10" />
            <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-[var(--brand)] transition-all duration-200 ease-out group-hover:w-full" />
          </span>
        </Link>

        {/* Desktop nav */}
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
              Investor Login
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="md:hidden -mr-2 p-2 rounded-lg hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
        >
          {!open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu (simple block under the bar) */}
      {open && (
        <nav className="md:hidden border-t border-black/10 bg-[var(--bg-washed)]">
          <ul className="px-4 py-2">
            {nav.map((i) => (
              <li key={i.href}>
                <Link
                  href={i.href}
                  className={clsx(
                    'block rounded-lg px-3 py-3 text-[15px]',
                    'hover:bg-black/5',
                    pathname.startsWith(i.href)
                      ? 'text-[color:var(--ink)]'
                      : 'text-[color:var(--ink)]/90'
                  )}
                >
                  {i.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="/investors"
                className={clsx(buttonStyles('primary'), 'w-full justify-center rounded-xl')}
              >
                Investor Login
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

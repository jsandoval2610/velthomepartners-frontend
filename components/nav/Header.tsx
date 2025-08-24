'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { buttonStyles } from '@/components/ui/Button'

/* requested order: Team, Strategy, Investments, Contact */
const nav = [
  { href: '/team', label: 'Team' },
  { href: '/strategy', label: 'Strategy' },
  { href: '/investments', label: 'Investments' },
  { href: '/contact', label: 'Contact' },
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
        'backdrop-blur supports-[backdrop-filter]:bg-[var(--bg)]/70',
        scrolled ? 'shadow-sm border-black/10' : 'border-transparent'
      )}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between py-4 px-4">
        <Link href="/" className="flex items-center gap-4 group">
          <Image
            src="/images/Logo.jpg"  // served from public/images/Logo.jpg
            alt="Velthome Partners"
            width={88}
            height={88}
            className="rounded"
            priority
          />
          <span
            className={clsx(
              'text-2xl font-semibold tracking-wide relative',
              'after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0',
              'after:bg-[var(--brand)] after:transition-all group-hover:after:w-full'
            )}
          >
            Velthome Partners
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-6 text-[15px]">
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
            {/* Link styled like the animated primary button */}
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

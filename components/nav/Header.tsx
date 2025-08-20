'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import clsx from 'clsx'


const nav = [
{ href: '/firm', label: 'Firm' },
{ href: '/strategy', label: 'Strategy' },
{ href: '/investments', label: 'Investments' },
{ href: '/team', label: 'Team' },
{ href: '/insights', label: 'Insights' },
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
<header className={clsx(
'sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-bg/75 border-b transition-all',
scrolled ? 'shadow-sm' : 'border-transparent'
)}>
<nav className="mx-auto max-w-6xl flex items-center justify-between py-3 px-4">
<Link href="/" className="flex items-center gap-3 group">
<Image src="/branding/logo.png" alt="Velthome Partners" width={36} height={36} className="rounded" />
<span className="text-lg tracking-wide font-semibold group-hover:opacity-90 transition-opacity">Velthome Partners</span>
</Link>
<ul className="hidden md:flex items-center gap-6 text-[15px]">
{nav.map(i => (
<li key={i.href}>
<Link
href={i.href}
className={clsx(
'relative py-2',
'after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-brand after:transition-all hover:after:w-full',
pathname.startsWith(i.href) && 'text-ink after:w-full'
)}
>
{i.label}
</Link>
</li>
))}
<li>
<Link href="/investors" className="px-3 py-1.5 rounded-lg bg-brand text-white shadow hover:shadow-md transition-shadow">
Investor Login
</Link>
</li>
</ul>
</nav>
</header>
)
}
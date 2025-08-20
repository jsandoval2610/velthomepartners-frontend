import './globals.css'
import '../styles/theme.css'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/nav/Header'
import { Footer } from '@/components/nav/Footer'


export const metadata = {
title: 'Velthome Partners',
description: 'Institutional, community‑focused real estate investing',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en" className="scroll-smooth">
<body className="bg-bg text-ink antialiased">
<Header />
<main className="mx-auto max-w-6xl px-4 py-10">
{children}
</main>
<Footer />
</body>
</html>
)
}
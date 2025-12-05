import './globals.css'
import '../styles/theme.css'
import { Header } from '@/components/nav/Header'
import { Footer } from '@/components/nav/Footer'

export const metadata = {
  title: 'Velthome Partners',
  description: 'Institutional, community-focused real estate investing',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Ensure Tailwind breakpoints behave on phones */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="antialiased text-[color:var(--ink)]">
        <div className="relative min-h-dvh flex flex-col">
          {/* global background canvas */}
          <div
            className="pointer-events-none fixed inset-0 -z-10"
            style={{
              background: [
                'linear-gradient(135deg, var(--bg-washed,#F9F7F1), rgba(11,101,86,0.18))',
                'radial-gradient(60% 32% at 50% 4%, rgba(11,101,86,0.20), transparent 62%)',
                'radial-gradient(60rem 30rem at 120% -8%, rgba(199,167,108,0.14), transparent 58%)',
                'radial-gradient(72rem 36rem at -18% 108%, rgba(9,77,88,0.16), transparent 60%)',
              ].join(', ')
            }}
          />

          <Header />

          <main className="flex-1 mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
            {children}
          </main>

          <Footer />
          <div className="h-[env(safe-area-inset-bottom)]" />
        </div>
      </body>
    </html>
  )
}

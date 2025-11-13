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
        <div className="relative min-h-dvh flex flex-col bg-[color:var(--bg)]">
          {/* background canvas */}
          <div
            className="pointer-events-none fixed inset-0 -z-10"
            style={{
              background: [
                'radial-gradient(60% 30% at 50% 0%, rgba(17,20,24,0.04), transparent 60%)',
                'radial-gradient(70rem 35rem at -10% -10%, rgba(87,138,53,0.06), transparent 60%)',
                'radial-gradient(80rem 40rem at 110% 110%, rgba(17,20,24,0.10), transparent 55%)',
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

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
      <body className="antialiased text-[color:var(--ink)]">
        <div className="relative min-h-dvh bg-[var(--bg)]">
          {/* light canvas with soft charcoal corners */}
          <div
            className="pointer-events-none fixed inset-0 -z-10"
            style={{
              background: [
                // ultra-light charcoal film so it’s not harsh white
                'radial-gradient(60% 30% at 50% 0%, rgba(17,20,24,0.04), transparent 60%)',
                // top-left green whisper
                'radial-gradient(70rem 35rem at -10% -10%, rgba(87,138,53,0.06), transparent 60%)',
                // bottom-right charcoal corner (visible but gentle)
                'radial-gradient(80rem 40rem at 110% 110%, rgba(17,20,24,0.10), transparent 55%)',
              ].join(', ')
            }}
          />
          <Header />
          <main className="mx-auto max-w-6xl">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

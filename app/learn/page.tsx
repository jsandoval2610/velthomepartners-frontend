import Link from 'next/link'
import { buttonStyles } from '@/lib/buttonStyles'

const resources = [
  {
    title: 'Corporate Deck',
    description: 'Our latest overview of strategy, portfolio, and team, built for institutional partners.',
    file: '/documents/VeltHome%20Overview.pdf',
    meta: 'Presentation • Q4 2025',
  },
  {
    title: 'Manufactured Housing White Paper',
    description: 'Deep dive on the MHC opportunity set, including fundamentals, risk mitigants, and case studies.',
    file: '/documents/MHC%20White%20Paper.pdf',
    meta: 'Research • Manufactured housing focus',
  },
]

export default function Page() {
  return (
    <div
      className="bleed-x relative w-screen overflow-hidden"
      style={{
        background: [
          'linear-gradient(135deg, var(--bg-washed,#F9F7F1), rgba(11,101,86,0.18))',
          'radial-gradient(60% 32% at 50% 4%, rgba(11,101,86,0.20), transparent 62%)',
          'radial-gradient(60rem 30rem at 120% -8%, rgba(199,167,108,0.14), transparent 58%)',
          'radial-gradient(72rem 36rem at -18% 108%, rgba(9,77,88,0.16), transparent 60%)',
        ].join(', ')
      }}
    >
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="mb-12 max-w-3xl space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-semibold inline-block relative text-[color:var(--brand)]">
            Learn about VeltHome
            <span className="block h-[3px] w-12 mt-3 bg-[var(--brand)] rounded-full" />
          </h1>
          <p className="text-lg text-[color:var(--muted)] max-w-2xl">
            Access our corporate deck and latest white paper.
          </p>
        </div>

        <div className="rounded-3xl border border-[color:var(--brand-tint-2)] bg-[color:var(--card)]/85 ring-1 ring-[color:var(--brand-tint-3)] shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur-sm p-6 sm:p-8 md:p-10">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-semibold text-[color:var(--brand)]">
                Download the latest materials
              </h2>
              <p className="text-base md:text-lg text-[color:var(--muted)]">
                Updated as of Q4 2025
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources.map((doc) => (
                <div
                  key={doc.title}
                  className="group relative overflow-hidden rounded-2xl border border-[color:var(--brand-tint-2)] bg-[color:var(--card)] shadow-[0_14px_30px_rgba(0,0,0,0.06)] ring-1 ring-[color:var(--brand-tint-3)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(11,101,86,0.10),transparent_55%)] opacity-80" />
                  <div className="relative p-5 sm:p-6 space-y-3">
                    <h3 className="text-xl font-semibold text-[color:var(--ink)]">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-[color:var(--muted)]">{doc.meta}</p>
                    <p className="text-[15px] text-[color:var(--ink)]/85">
                      {doc.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Link
                        href={doc.file}
                        download
                        className={`${buttonStyles('primary')} rounded-full px-5 py-2 text-sm font-semibold shadow-[0_10px_22px_var(--brand-tint-1)] hover:-translate-y-0.5`}
                      >
                        Download PDF
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

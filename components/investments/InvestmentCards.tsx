import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { deals } from '@/data/deals'

export function InvestmentCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {deals.map((d) => (
        <Card
          key={d.title}
          className={[
            'group overflow-hidden p-0 h-full',
            'border border-[rgba(17,20,24,0.12)] ring-1 ring-[rgba(17,20,24,0.08)]',
            'bg-[color:var(--card)]'
          ].join(' ')}
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src={d.imgSrc}
              alt={d.imgAlt ?? d.title}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[color:var(--brand)]/15" />
          </div>

          <div className="p-4 md:p-5">
            <h3 className="text-lg md:text-xl font-semibold text-[color:var(--ink)]">
              {d.title}
            </h3>
            <div className="mt-3 h-[2px] w-16 rounded-full bg-[linear-gradient(to_right,transparent,color:var(--accent),transparent)]" />
          </div>

          <div className="px-4 pb-4 md:px-5 md:pb-5">
            <div className="rounded-lg border border-black/10 ring-1 ring-black/5 bg-[linear-gradient(to_bottom_right,var(--panel-grad-a),var(--panel-grad-b))] p-3">
              <dl className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="text-center sm:text-left">
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-[color:var(--muted)]">Location</dt>
                  <dd className="mt-0.5 text-sm font-medium text-[color:var(--ink)]">{d.location}</dd>
                </div>
                <div className="text-center sm:text-left">
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-[color:var(--muted)]">Asset</dt>
                  <dd className="mt-0.5 text-sm font-medium text-[color:var(--ink)]">{d.assetType}</dd>
                </div>
                <div className="text-center sm:text-left">
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-[color:var(--muted)]">Year</dt>
                  <dd className="mt-0.5 text-sm font-medium text-[color:var(--ink)]">{d.year}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="pointer-events-none h-px w-full bg-black/5 transition-[opacity,transform] duration-300 ease-out opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0" />
        </Card>
      ))}
    </div>
  )
}

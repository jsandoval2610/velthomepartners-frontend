import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import clsx from 'clsx'

type Person = {
  name: string
  title?: string
  imgSrc?: string
  intro?: string
  highlights?: string[]
  previous?: string[]
  education?: string[]
  className?: string
}

export function PersonCard({
  name,
  title,
  imgSrc,
  intro,
  highlights = [],
  previous = [],
  education = [],
  className,
}: Person) {
  // Minimal modern bullet: small green dash; text column fixed using CSS grid
  const Bullet = ({ children }: { children: React.ReactNode }) => (
    <li className="grid grid-cols-[16px,1fr] gap-3 items-start">
      <span className="mt-2 block h-[2px] w-3 rounded-full bg-[var(--brand)]" />
      <span className="text-[color:var(--muted)] leading-relaxed">{children}</span>
    </li>
  )

  return (
    <Card className={clsx('p-6 h-full', className)}>
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="h-16 w-16 overflow-hidden rounded-xl bg-[radial-gradient(30rem_20rem_at_20%_0%,rgba(87,138,53,.10),transparent_60%),linear-gradient(to_bottom_right,var(--panel-grad-a),var(--panel-grad-b))] border border-[rgba(17,20,24,0.12)]">
            {imgSrc && (
              <Image
                src={imgSrc}
                alt={name}
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            {title && <p className="text-sm text-[color:var(--muted)]">{title}</p>}
          </div>
        </div>

        {/* Optional intro line */}
        {intro && <p className="mt-4 text-[color:var(--muted)]">{intro}</p>}

        {/* Two-column details */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {highlights.length > 0 && (
            <div>
              <div className="text-sm font-semibold text-[color:var(--brand)] mb-2">Focus</div>
              <ul className="space-y-2">
                {highlights.map((h) => (
                  <Bullet key={h}>{h}</Bullet>
                ))}
              </ul>
            </div>
          )}

          {previous.length > 0 && (
            <div>
              <div className="text-sm font-semibold text-[color:var(--brand)] mb-2">Experience</div>
              <ul className="space-y-2">
                {previous.map((p) => (
                  <Bullet key={p}>{p}</Bullet>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Education pinned at very bottom */}
        {education.length > 0 && (
          <div className="mt-auto pt-4 border-t border-[rgba(17,20,24,0.08)]">
            <div className="flex items-center gap-2 whitespace-nowrap overflow-x-auto pr-1">
              {education.map((e) => (
                <span
                  key={e}
                  className="inline-flex items-center rounded-full border border-[rgba(87,138,53,.35)] px-2.5 py-1 text-xs text-[color:var(--ink)] bg-[linear-gradient(to_bottom_right,var(--panel-grad-a),var(--panel-grad-b))]"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

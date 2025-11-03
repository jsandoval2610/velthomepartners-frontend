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
  // Clean blanks to avoid empty rows
  const cleanHighlights = (highlights || []).filter(Boolean)
  const cleanPrevious  = (previous || []).filter(Boolean)
  const cleanEducation = (education || []).filter(Boolean)

  // Combine Experience + Education into one list (Experience first, then Education)
  const combinedExperienceEducation = [...cleanPrevious, ...cleanEducation]

  // Section label (consistent size and spacing; no decorative glyphs)
  const Label = ({ children }: { children: React.ReactNode }) => (
    <div className="text-base font-semibold text-[color:var(--ink)] leading-tight mb-2">
      {children}
    </div>
  )

  // Accent-line bullet aligned with the first text baseline
  const Bullet = ({ children }: { children: React.ReactNode }) => (
    <li className="grid grid-cols-[16px,1fr] gap-3">
      <span className="relative top-[0.55em] block h-[2px] w-3 rounded-full bg-[var(--accent)]" />
      <span className="text-[color:var(--muted)] leading-[1.55]">{children}</span>
    </li>
  )

  return (
    <Card className={clsx('p-5 sm:p-6 h-full', className)}>
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-[rgba(17,20,24,0.12)] bg-[linear-gradient(to_bottom_right,var(--panel-grad-a),var(--panel-grad-b))] aspect-square">
            {imgSrc && (
              <Image
                src={imgSrc}
                alt={name}
                width={128}
                height={128}
                sizes="64px"
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div className="min-w-0">
            <h3 className="text-xl font-semibold leading-snug break-words">{name}</h3>
            {title && (
              <p className="text-sm text-[color:var(--muted)] leading-normal truncate">
                {title}
              </p>
            )}
          </div>
        </div>

        {/* Optional intro */}
        {intro && <p className="mt-4 text-[color:var(--muted)]">{intro}</p>}

        {/* Details grid */}
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {/* Focus (left) */}
          <div className="md:min-h-[7.25rem]">
            <Label>Focus</Label>
            {cleanHighlights.length > 0 ? (
              <ul className="space-y-2">
                {cleanHighlights.map((h) => (
                  <Bullet key={h}>{h}</Bullet>
                ))}
              </ul>
            ) : (
              <div className="h-4" aria-hidden />
            )}
          </div>

          {/* Experience & Education (right) */}
          <div className="md:min-h-[7.25rem]">
            <Label>Experience &amp; Education</Label>
            {combinedExperienceEducation.length > 0 ? (
              <ul className="space-y-2">
                {combinedExperienceEducation.map((item, idx) => (
                  <Bullet key={`${item}-${idx}`}>{item}</Bullet>
                ))}
              </ul>
            ) : (
              <div className="h-4" aria-hidden />
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

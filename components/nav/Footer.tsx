import Link from 'next/link'

type FxLinkProps = {
  href: string
  children: React.ReactNode
  external?: boolean
}

function FxLink({ href, children, external = false }: FxLinkProps) {
  const classes = `
    group relative inline-flex items-center gap-1 px-0.5 py-0.5
    text-[color:var(--muted)] hover:text-[color:var(--ink)]
    transition-colors
  `
  const inner = (
    <>
      <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-[1px]">
        {children}
      </span>
      {/* baseline hairline */}
      <span className="pointer-events-none absolute left-0 -bottom-0.5 h-[1px] w-full bg-black/10" />
      {/* brand underline grows on hover */}
      <span className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[var(--brand)] transition-all duration-300 ease-out group-hover:w-full" />
      {/* tiny arrow */}
      <svg
        className="h-3.5 w-3.5 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
        viewBox="0 0 20 20" fill="none" aria-hidden
      >
        <path d="M5 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 5l4.5 5L10 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      {/* faint hover glow */}
      <span className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100
                       bg-[radial-gradient(14rem_6rem_at_50%_120%,rgba(87,138,53,.08),transparent_60%)]" />
    </>
  )

  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={classes}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="border-t bg-[var(--bg-washed)]">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex flex-wrap items-center justify-between gap-4">
        <span className="text-[color:var(--muted)]">© {new Date().getFullYear()} Velthome Partners</span>
      </div>
    </footer>
  )
}

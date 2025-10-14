export type ButtonVariant = 'primary' | 'ghost' | 'secondary'

export function buttonStyles(variant: ButtonVariant = 'primary') {
  const base =
    'relative overflow-hidden group inline-flex items-center justify-center rounded-lg px-4 py-2 ' +
    'transition select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/40'

  const primary =
    'bg-[var(--brand)] text-white shadow hover:brightness-105 ' +
    'disabled:opacity-60 disabled:cursor-not-allowed'

  const ghost =
    'border border-black/10 text-[color:var(--ink)] hover:bg-black/[.03] ' +
    'disabled:opacity-60 disabled:cursor-not-allowed'

  const secondary =
    'bg-white text-[color:var(--ink)] border border-black/10 hover:bg-black/[.03] ' +
    'disabled:opacity-60 disabled:cursor-not-allowed'

  const variantClasses =
    variant === 'primary' ? primary : variant === 'ghost' ? ghost : secondary

  return `${base} ${variantClasses}`
}

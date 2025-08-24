import Link from 'next/link'


export function Footer() {
return (
<footer className="mt-16 border-t">
<div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted flex flex-wrap items-center justify-between gap-4">
<span>© {new Date().getFullYear()} Velthome Partners</span>
<div className="flex gap-4">
<Link href="/privacy">Privacy</Link>
<Link href="/terms">Terms</Link>
<a href="https://evergreenparke.net/" target="_blank" rel="noreferrer">Evergreen Park Communitites </a>
</div>
</div>
</footer>
)
}
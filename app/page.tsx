import { Hero } from '@/components/hero/Hero'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'


export default function HomePage() {
return (
<>
<Hero />
<Section title="At a Glance" subtitle="Since 20XX • X states • Y transactions • Z communities">
<div className="grid md:grid-cols-3 gap-6">
<Card><h3 className="text-xl font-semibold">Strategy</h3><p className="mt-2 text-muted">Special situations and community‑focused assets with durable cash flows.</p></Card>
<Card><h3 className="text-xl font-semibold">Discipline</h3><p className="mt-2 text-muted">Underwriting grounded in fundamentals; flexible capital structure.</p></Card>
<Card><h3 className="text-xl font-semibold">Alignment</h3><p className="mt-2 text-muted">Co‑investment and transparent reporting for long‑term partners.</p></Card>
</div>
</Section>
</>
)
}
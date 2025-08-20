import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'


export default function Page() {
return (
<>
<Section title="Strategy" subtitle="Target asset classes, underwriting pillars, and value creation playbook.">
<div className="grid md:grid-cols-3 gap-6">
<Card>
<h3 className="text-xl font-semibold">Target Assets</h3>
<p className="mt-2 text-muted">e.g., Manufactured Housing Communities (primary), plus opportunistic special situations.</p>
</Card>
<Card>
<h3 className="text-xl font-semibold">Pillars</h3>
<ul className="mt-2 list-disc pl-6 text-muted space-y-1">
<li>Cash flow durability</li>
<li>Margin of safety</li>
<li>Operational leverage</li>
</ul>
</Card>
<Card>
<h3 className="text-xl font-semibold">Value Creation</h3>
<p className="mt-2 text-muted">Capex programs, infill, professional management, resident experience.</p>
</Card>
</div>
</Section>
<Section title="Acquisition Criteria">
<ul className="list-disc pl-6 space-y-2 text-muted max-w-3xl">
<li>Deal size: $X–$Y; Geography: A/B/C markets</li>
<li>Cap structures: all‑equity or moderate leverage</li>
<li>Closing: as fast as N days with clean diligence</li>
</ul>
</Section>
</>
)
}
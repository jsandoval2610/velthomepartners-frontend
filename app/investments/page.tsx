import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'


const deals = [
{ title: 'Community A', meta: 'State • Year • Type', summary: 'Brief 2–3 line case: problem → action → outcome.' },
{ title: 'Community B', meta: 'State • Year • Type', summary: 'Brief 2–3 line case: problem → action → outcome.' },
{ title: 'Community C', meta: 'State • Year • Type', summary: 'Brief 2–3 line case: problem → action → outcome.' },
]


export default function Page() {
return (
<Section title="Representative Investments" subtitle="Filterable grid coming later—seed with 3–6 cases at launch.">
<div className="grid md:grid-cols-3 gap-6">
{deals.map(d => (
<Card key={d.title}>
<h3 className="text-xl font-semibold">{d.title}</h3>
<p className="text-xs text-muted mt-1">{d.meta}</p>
<p className="mt-3 text-muted">{d.summary}</p>
</Card>
))}
</div>
</Section>
)
}
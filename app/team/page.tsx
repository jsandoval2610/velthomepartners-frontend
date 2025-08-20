import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'


const team = [
{ name: 'Your Name', title: 'Managing Partner', bio: 'Short bio focusing on track record and focus areas.' },
]


export default function Page() {
return (
<Section title="Team" subtitle="Experienced investors and operators.">
<div className="grid md:grid-cols-3 gap-6">
{team.map(m => (
<Card key={m.name}>
<div className="h-40 w-full rounded-xl bg-gradient-to-br from-muted/10 to-brand/10" />
<h3 className="mt-4 text-xl font-semibold">{m.name}</h3>
<p className="text-sm text-muted">{m.title}</p>
<p className="mt-3 text-muted">{m.bio}</p>
</Card>
))}
</div>
</Section>
)
}
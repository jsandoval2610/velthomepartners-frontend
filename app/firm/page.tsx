import { Section } from '@/components/ui/Section'


export default function Page() {
return (
<>
<Section title="Firm" subtitle="Who we are, history, investment philosophy, and our edge."/>
<Section title="Philosophy">
<p className="text-muted max-w-3xl">Write your philosophy here…</p>
</Section>
<Section title="Why Velthome">
<ul className="list-disc pl-6 space-y-2 text-muted max-w-3xl">
<li>Speed + certainty of close</li>
<li>Structuring creativity</li>
<li>Operational know‑how</li>
</ul>
</Section>
</>
)
}
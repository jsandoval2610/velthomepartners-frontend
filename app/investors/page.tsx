import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'


export default function Page() {
return (
<Section title="Investor Portal" subtitle="Login or request access. (Portal integration coming later)">
<div className="flex gap-4">
<Button onClick={() => alert('Hook to your provider or internal auth later')}>Login</Button>
<Button variant="ghost" onClick={() => (window.location.href = '/contact')}>Request Access</Button>
</div>
<p className="text-sm text-muted mt-6">Disclosures and disclaimers will live here.</p>
</Section>
)
}
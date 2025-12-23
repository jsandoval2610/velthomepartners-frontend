'use client'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'


export default function Page() {
return (
    <Section title="Investor Portal" subtitle="Login or request access. (Portal integration coming later)">
            <div className="flex flex-wrap items-center gap-3">
                <Button className="w-full sm:w-auto" onClick={() => alert('Hook to your provider or internal auth later')}>Login</Button>
                <Button className="w-full sm:w-auto" variant="ghost" onClick={() => (window.location.href = '/contact')}>Request Access</Button>
            </div>
    </Section>
)
}

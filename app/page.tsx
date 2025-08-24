import { Hero } from '@/components/hero/Hero'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mt-10 rounded-2xl border">
        <div className="rounded-2xl border border-[rgba(87,138,53,0.18)] bg-[linear-gradient(to_bottom_right,var(--panel-grad-a),var(--panel-grad-b))] px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-semibold">2016</div>
              <div className="mt-1 text-sm text-[color:var(--muted)]">Founded</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">5</div>
              <div className="mt-1 text-sm text-[color:var(--muted)]">States</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-[color:var(--brand)]">7</div>
              <div className="mt-1 text-sm text-[color:var(--muted)]">Realized investments</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">28</div>
              <div className="mt-1 text-sm text-[color:var(--muted)]">Communities</div>
            </div>
          </div>
        </div>
      </section>
      <Section
        title="At a Glance"
        subtitle="Since 2016 • 5 states • 7 realized investments • 28 communities"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-xl font-semibold">Strategy</h3>
            <p className="mt-2 text-[color:var(--muted)]">
              Special situations and community-focused assets with durable cash flows.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Discipline</h3>
            <p className="mt-2 text-[color:var(--muted)]">
              Underwriting grounded in fundamentals; flexible capital structure.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Alignment</h3>
            <p className="mt-2 text-[color:var(--muted)]">
              Co-investment and transparent reporting for long-term partners.
            </p>
          </Card>
        </div>
      </Section>
    </>
  )
}

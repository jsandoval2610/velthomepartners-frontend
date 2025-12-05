import { Section } from '@/components/ui/Section'
import { InvestmentCards } from '@/components/investments/InvestmentCards'
import { InvestmentsMap } from '@/components/investments/InvestmentsMap'
import { deals } from '@/data/deals'

export default function Page() {
  return (
    <>
      <Section title="About Velthome" subtitle="Institutional-grade discipline with community-first execution.">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-4 text-[color:var(--muted)] leading-relaxed">
            <p>
              We are a vertically integrated real estate firm focused on value-oriented opportunities in manufactured housing communities and adjacent residential assets. Our team blends capital markets experience with on-the-ground operations to deliver durable cash flow and risk-managed growth.
            </p>
            <p>
              We underwrite fundamentals first, structure flexibly, and align incentives with operating partners and investors alike. Our footprint spans multiple states, with a repeatable playbook tailored to local markets.
            </p>
          </div>
          <div className="rounded-2xl border border-[color:var(--brand-tint-2)] ring-1 ring-[color:var(--brand-tint-3)] bg-[color:var(--card)]/90 shadow-[0_18px_40px_rgba(0,0,0,0.08)] p-6 space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--brand)]/80">At a glance</div>
            <ul className="space-y-2 text-[color:var(--ink)]/85">
              <li>Focus: Manufactured Housing Communities</li>
              <li>Geography: Michigan, Ohio, Illinois</li>
              <li>Approach: Value-add with operational upgrades</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Representative Investments" subtitle="Same set showcased on our Investments page, mapped below.">
        <InvestmentCards />
        <InvestmentsMap properties={deals} />
      </Section>
    </>
  )
}

import { Section } from '@/components/ui/Section'
import { InvestmentCards } from '@/components/investments/InvestmentCards'
import { InvestmentsMap } from '@/components/investments/InvestmentsMap'
import { deals, mapProperties } from '@/data/deals'

export default function Page() {
  return (
    <Section title="Representative Investments">
      <InvestmentCards />
      <InvestmentsMap properties={mapProperties} />
    </Section>
  )
}

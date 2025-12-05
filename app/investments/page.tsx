import { Section } from '@/components/ui/Section'
import { InvestmentCards } from '@/components/investments/InvestmentCards'
import { InvestmentsMap } from '@/components/investments/InvestmentsMap'
import { deals } from '@/data/deals'

export default function Page() {
  return (
    <Section title="Representative Investments">
      <InvestmentCards />
      <InvestmentsMap properties={deals} />
    </Section>
  )
}

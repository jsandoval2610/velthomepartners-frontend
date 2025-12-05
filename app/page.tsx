import { NewHero } from '@/components/hero/NewHero'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { PageBand } from '@/components/layout/PageBand'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <NewHero />

      <PageBand>
        <StatsStrip />
        <ContactSection />
      </PageBand>
    </>
  )
}

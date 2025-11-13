import { HeroBridge } from '@/components/hero/HeroBridge'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { PageBand } from '@/components/layout/PageBand'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroBridge />

      <PageBand>
        <div className="section-pad pad-x">
          <StatsStrip />
        </div>

        <div className="pad-x mt-8 md:mt-10">
          <ContactSection />
        </div>
      </PageBand>
    </>
  )
}

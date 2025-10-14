import { HeroBridge } from '@/components/hero/HeroBridge'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { PageBand } from '@/components/layout/PageBand'
import { ContactSection } from '@/components/sections/ContactSection'
import Link from 'next/link'
import Page from './firm/page'

export default function HomePage() {
  return (
    <>
      <HeroBridge />
      <PageBand>
        <StatsStrip />
        <div className="mt-8 md:mt-10">
          <ContactSection />
        </div>
      </PageBand>
    </>
  )
}

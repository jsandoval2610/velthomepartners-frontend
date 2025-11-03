import { Section } from '@/components/ui/Section'
import { PersonCard } from '@/components/team/PersonCard'

const management = [
  {
    name: 'Sam Banerjee',
    title: 'Managing Partner',
    imgSrc: '/images/team/sam.jpg',
    highlights: [
      'Directs investment management across corporate and real estate',
      '25+ years with multi-asset, special-situations expertise',
    ],
    previous: [
      'CIO, $1.5B corporate/real-estate distressed strategy — Common Fund',
      'JPMorgan • Paribas • Evercore',
    ],
  },
  {
    name: 'Teah Gandhi',
    title: 'Managing Partner',
    imgSrc: '/images/team/TeahGandhi.jpg',
    highlights: [
      'Leads underwriting and ongoing property management',
      '20+ years across equity research, investment banking, and risk',
    ],
    previous: [
      'Roles spanning research and investment banking',
      'PNC • Salomon Smith Barney • UBS • PaineWebber',
    ],
  },
  {
    name: 'Arvind Krishnamurthy',
    title: 'Managing Partner',
    imgSrc: '/images/team/arvind.jpg',
    highlights: [
      'Leads asset management with focus on manufactured housing',
      'Real-estate private equity and credit investor since 2018',
    ],
    previous: [
      'Head, Investment Team — Metropolitan Partners Group',
      'Veritas Capital • Greenbriar Equity • Bain Capital',
    ],
  },
  {
    name: 'David Prinzivalli',
    title: 'Partner',
    imgSrc: '/images/team/david.jpg',
    highlights: [
      'Directs property-level finance, reporting, and controls',
      '25+ years building scalable reporting and FP&A functions',
    ],
    previous: [
      'Managing Director — PineBridge Investments',
      'PineBridge • Blackstone • Nomura • Morgan Stanley',
    ],
  },
  {
    name: 'Michael Calin',
    title: 'Partner',
    imgSrc: '/images/team/michael.jpg',
    highlights: [
      'Sources acquisitions and oversees regional/local property management',
      'Manufactured-housing operator and broker since 2007',
    ],
    previous: [
      'Broker, investor, and operator across multiple real-estate asset classes',
      'US Marine Corps service — Afghanistan & Iraq',
    ],
  },
  {
    name: 'Julian Sandoval',
    title: 'Analyst',
    imgSrc: '/images/team/js.jpg',
    highlights: [
      'Models new acquisitions and prepares corresponding deal decks',
      'Supports asset-management initiatives',
    ],
    previous: [
      'Financial analyst and software engineer internships',
    ],
  },
]

const legalAdvisory = [
  {
    name: 'Steve Cherin',
    title: 'General Counsel',
    imgSrc: '/images/team/steve.jpg',
    highlights: [
      'Counsel to operating and investment entities',
      'Focus on early-stage and growth company matters',
    ],
    previous: [
      'Founder, Cherin Law Offices, PC (2013–present)',
      'Former Partner, Strassburger McKenna Gutnick & Gefsky',
    ],
  },
  {
    name: 'Harry Dublinsky',
    title: 'Senior Advisor',
    imgSrc: '/images/team/harry.jpg',
    highlights: [
      'Leads investor relations and communications',
      '30+ years in real estate and accounting',
    ],
    previous: [
      'Founder, Wilson Park Group (financial advisory)',
      'Advisor to national accounting firms; AICPA member',
    ],
  },
]

// Keeping operations data as-is but not rendering a section for it.
const operations = [
  {
    name: 'Michael Calin',
    title: 'Property Management Lead',
    imgSrc: '/images/team/michael.jpg',
    highlights: [
      'Sources acquisitions and oversees regional/local property management',
      'Manufactured-housing operator and broker since 2007',
    ],
    previous: [
      'Broker, investor, and operator across multiple real-estate asset classes',
      'US Marine Corps service — Afghanistan & Iraq',
    ],
    education: [],
  },
]

export default function TeamPage() {
  return (
    <>
      <Section title="Team" subtitle="Experienced investors, operators, and advisors.">
        <div className="rounded-2xl border border-[rgba(17,20,24,0.12)] ring-1 ring-[rgba(17,20,24,0.08)] bg-[linear-gradient(to_bottom_right,var(--panel-grad-a),var(--panel-grad-b))] p-6">
          <div className="grid auto-rows-[1fr] gap-6 md:grid-cols-2 items-stretch">
            {management.map((p) => (
              <div key={p.name} className="h-full">
                <PersonCard {...p} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Legal & Advisory">
        <div className="rounded-2xl border border-[rgba(17,20,24,0.12)] ring-1 ring-[rgba(17,20,24,0.08)] bg-[linear-gradient(to_bottom_right,var(--panel-grad-a),var(--panel-grad-b))] p-6">
          <div className="grid auto-rows-[1fr] gap-6 md:grid-cols-2 items-stretch">
            {legalAdvisory.map((p) => (
              <div key={p.name} className="h-full">
                <PersonCard {...p} />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}

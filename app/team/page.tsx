import { Section } from '@/components/ui/Section'
import { PersonCard } from '@/components/team/PersonCard'

const management = [
  {
    name: 'Sam Banerjee',
    title: 'Founder',
    imgSrc: '/images/team/sam.jpg',
    highlights: [
      'Directs investment management across corporate and real estate',
      '25+ years with multi-asset, special-situations expertise',
    ],
    previous: [
      'JPMorgan • Evercore • Commonfund',
      'Columbia Business School',
    ],
  },
  {
    name: 'Teah Gandhi',
    title: 'Founder & Co-Managing Partner',
    imgSrc: '/images/team/TeahGandhi.jpg',
    highlights: [
      'Leads underwriting and ongoing property management',
      '20+ years across equity research, investment banking, and risk',
    ],
    previous: [
      'PNC • Salomon Smith Barney • UBS PaineWebber',
      'NYU Stern School of Business'
    ],
  },
  {
    name: 'Steve Cherin',
    title: 'Founder & General Counsel',
    imgSrc: '/images/team/steve.jpg',
    highlights: [
      'Counsel to operating and investment entities',
      'Focus on early-stage and growth company matters',
    ],
    previous: [
      'Cherin Law Offices • PC Strassburger, McKenna, Gutnick & Gefsky',
      'Cornell Law School'
    ],
  },
  {
    name: 'Arvind Krishnamurthy',
    title: 'Co-Managing Partner',
    imgSrc: '/images/team/arvind.jpg',
    highlights: [
      'Leads asset management',
      'Real-estate investor since 2012',
    ],
    previous: [
      'Metropolitan Partners Group • Caxton Alternative Management • Veritas Capital • Goldman Sachs',
      'Harvard Business School',
    ],
  },
  {
    name: 'David Prinzivalli',
    title: 'CFO',
    imgSrc: '/images/team/david.jpg',
    highlights: [
      'Directs property-level finance, reporting, and controls',
      '25+ years building scalable reporting and FP&A functions',
    ],
    previous: [
      'PineBridge • Blackstone • Nomura • Morgan Stanley',
      'Columbia Business School',
    ],
  },
]

export default function TeamPage() {
  return (
    <>
      <Section title="Executive Management Team" subtitle="Experienced investors, operators, and advisors.">
        <div className="rounded-2xl border border-[rgba(17,20,24,0.12)] ring-1 ring-[rgba(17,20,24,0.08)] bg-[linear-gradient(to_bottom_right,var(--panel-grad-a),var(--panel-grad-b))] p-6">
          <div className="grid grid-cols-1 auto-rows-[1fr] gap-6 md:grid-cols-2 items-stretch max-w-2xl md:max-w-none mx-auto">
            {management.map((p) => (
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

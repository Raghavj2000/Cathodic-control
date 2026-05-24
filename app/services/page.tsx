import Link from 'next/link'
import Image from 'next/image'
import { HeroItem, Stagger, StaggerItem, FadeUp } from '@/components/motion'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cathodic Protection Services',
  description:
    'End-to-end cathodic protection services: pre-design soil surveys, CP system engineering design, supply of materials, installation, testing & commissioning, periodic monitoring, CIPS/DCVG integrity surveys, and troubleshooting. ISO 9001 certified.',
  keywords: [
    'cathodic protection services',
    'CP system design',
    'ICCP installation',
    'cathodic protection commissioning',
    'pipeline integrity survey',
    'CIPS survey',
    'DCVG survey',
    'close interval potential survey',
    'cathodic protection monitoring',
    'soil resistivity survey',
    'CP troubleshooting',
    'anode ground bed installation',
  ],
  alternates: {
    canonical: 'https://www.cathodiccontrol.com/services',
  },
  openGraph: {
    title: 'Cathodic Protection Services | Cathodic Control Company',
    description:
      'End-to-end CP services: pre-design surveys, engineering design, supply, installation, commissioning, monitoring and integrity management. ISO 9001 certified.',
    url: 'https://www.cathodiccontrol.com/services',
  },
}

const services = [
  {
    number: '01',
    title: 'Pre-Design Surveys',
    intro:
      'Before any CP system is designed, we undertake thorough on-site investigations to gather all data necessary for an accurate, optimised design. Every design decision is grounded in measured field data.',
    items: [
      'Soil Resistivity Survey & Soil Analysis',
      'Current Drainage Survey',
      'Identification of optimum Ground Bed location',
      'Collection of site data for sizing up an optimum design',
    ],
  },
  {
    number: '02',
    title: 'Engineering Design of CP Systems',
    intro:
      'Our engineering team develops a complete design package from outline concept through to detailed construction documents — ensuring every system is correctly sized and fully compliant with NACE and ISO standards.',
    items: [
      'Scheme an optimum solution tailored to the asset',
      'Sizing up Design Methodology per NACE / ISO standards',
      'Drawing out Detailed Specification documents',
      'Preparation of Bill of Material',
      'Generation of all Relevant Drawings',
      'Detailing the Quality Assurance Plan',
      'Installation and Commissioning procedures',
    ],
  },
  {
    number: '03',
    title: 'Supply of CP Materials',
    intro:
      'We are a single-point source for all cathodic protection hardware and consumables — manufactured and sourced to international quality standards.',
    items: [
      'Transformer Rectifier Units (manual & automatic)',
      'High Silicon Iron Anodes',
      'Mixed Metal Oxide (MMO) Anodes',
      'Reference Electrodes — all types',
      'Sacrificial Anodes — Aluminium, Zinc, Magnesium',
      'CP Cables (HMWPE & specialist grades)',
      'Polarisation Cells',
      'Zinc Grounding Cells',
      'Flange Insulation Kits',
      'Junction Boxes & Test Stations',
      'Miscellaneous CP accessories',
    ],
  },
  {
    number: '04',
    title: 'Installation of CP Systems',
    intro:
      'Our engineers are trained and experienced in the installation of all types of cathodic protection systems — from T/R units to deep-well anode ground beds and all associated civil works.',
    items: [
      'Installation of T/R Units and control panels',
      'Horizontal Anode Ground Bed installation',
      'Shallow Vertical Anode Ground Bed installation',
      'Deep Well Anode Ground Bed installation',
      'Associated civil and trenching works',
      'Cable laying, terminations & test point installation',
    ],
  },
  {
    number: '05',
    title: 'Testing & Commissioning',
    intro:
      'Rigorous pre-energisation checks followed by a systematic commissioning programme ensure the CP system protects the structure to required criteria. Interference effects on adjacent structures are fully assessed and resolved.',
    items: [
      'Cold checks and continuity testing before energisation',
      'CP System energised and potential measurements recorded',
      'Tests to confirm the structure meets protection criteria',
      'Fine tuning of output for uniform current distribution',
      'Interference effect study on system and adjacent structures',
      'Implementation of remedial measures where required',
    ],
  },
  {
    number: '06',
    title: 'Monitoring of Existing CP Systems',
    intro:
      'A CP system is only effective if it is actively monitored and maintained. We carry out structured, periodic monitoring programmes and make proactive adjustments to maintain optimal protection levels throughout the asset life.',
    items: [
      'Monitoring carried out as per pre-determined procedure',
      'Analysis of potential readings and current output trends',
      'On-course corrections to achieve consistently optimal results',
      'Reporting and documentation of system performance',
    ],
  },
  {
    number: '07',
    title: 'Post-Installation Surveys',
    intro:
      'Following commissioning, we conduct a suite of advanced field surveys to verify protection levels along the full pipeline or structure length and assess the condition of the external coating.',
    items: [
      'Continuous Potential Logging — close interval PSP readings',
      'DCVG Survey to assess coating condition and locate holidays',
      "Pearson's Survey to ascertain coating condition",
      'CAT Survey (Current Attenuation Test)',
    ],
  },
  {
    number: '08',
    title: 'Trouble Shooting & Remedial Measures',
    intro:
      'When an existing CP system underperforms or interference from external sources is suspected, our diagnostic team investigates systematically and implements targeted remedial measures to restore full protection.',
    items: [
      'Identification of Stray Current Source and origin',
      'Ascertaining the nature and magnitude of Interference',
      'Locating Current Drainage to secondary structures',
      'Recommendation & Implementation of remedial measures',
    ],
  },
  {
    number: '09',
    title: 'Integrity Management Surveys',
    intro:
      'To determine the overall health of both the CP system and the pipeline coating, we conduct a comprehensive suite of integrity surveys — providing data-driven insight for asset management decisions and re-coating programmes.',
    items: [
      'Closed Interval Potential Survey (CIPS)',
      'Direct Current Voltage Gradient Survey (DCVG)',
      'Current Attenuation Survey (CAT) & Alternate Current Voltage Gradient (ACVG)',
      'Interference & Stray Current Survey',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section className="relative flex items-center" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=85"
            alt="Field engineering"
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(105deg,rgba(0,15,40,0.95) 0%,rgba(0,38,84,0.85) 60%,rgba(0,51,102,0.6) 100%)' }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full text-center">
          <HeroItem delay={0.1}><span className="text-[#E6EEF5] text-xs font-bold tracking-widest uppercase">What We Offer</span></HeroItem>
          <HeroItem delay={0.2}><h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5 leading-tight">Our Services</h1></HeroItem>
          <HeroItem delay={0.3}><p className="text-[#E6EEF5]/80 text-lg leading-relaxed max-w-2xl mx-auto">
            End-to-end cathodic protection — from initial site survey and engineering design through
            supply, installation, commissioning, and long-term integrity management.
          </p></HeroItem>
          <HeroItem delay={0.4}><nav className="flex items-center justify-center gap-2 mt-10 text-xs text-[#E6EEF5]/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </nav></HeroItem>
        </div>
      </section>

      {/* ─── ALL SERVICES ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeUp className="text-center mb-16">
            <span className="text-[#003366] text-xs font-bold tracking-widest uppercase">Complete Solutions</span>
            <h2 className="text-3xl font-bold text-[#003366] mt-3">From Survey to Integrity Management</h2>
            <p className="text-[#64748B] mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              Nine interconnected services covering the full lifecycle of a cathodic protection system —
              each delivered by our specialist engineering team.
            </p>
          </FadeUp>

          <Stagger className="space-y-5">
            {services.map((service) => (
              <StaggerItem key={service.number}>
              <div
                className="group grid lg:grid-cols-12 gap-0 rounded-2xl border border-[#E6EEF5] overflow-hidden hover:border-[#003366]/20 hover:shadow-lg transition-all duration-200"
              >
                {/* Number + title band */}
                <div className="lg:col-span-4 bg-[#F8FAFC] border-b lg:border-b-0 lg:border-r border-[#E6EEF5] p-7 flex flex-col justify-between">
                  <div>
                    <span className="text-[#003366]/30 text-4xl font-black leading-none select-none block mb-4">
                      {service.number}
                    </span>
                    <h3 className="text-xl font-bold text-[#003366] leading-snug mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">
                      {service.intro}
                    </p>
                  </div>
                </div>

                {/* Bullet points */}
                <div className="lg:col-span-8 bg-white p-7">
                  <div className={`grid gap-2.5 ${service.items.length > 5 ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
                    {service.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#EEF4FB] flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#334155] text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── PROPRIETARY TECH ────────────────────────────────────────── */}
      <section className="py-20 bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#E6EEF5]/60 text-xs font-bold tracking-widest uppercase">In-House R&amp;D</span>
              <h2 className="text-3xl font-bold text-white mt-3 mb-3">Proprietary Equipment</h2>
              <p className="text-[#E6EEF5]/65 text-sm leading-relaxed mb-8">
                Beyond our services, we design and manufacture our own CP equipment — giving us complete
                control over quality, performance, and delivery timelines.
              </p>
              <div className="space-y-5">
                {[
                  {
                    title: 'Fully Automatic TR Units',
                    desc: 'Self-regulating Transformer Rectifier units with remote monitoring capability for unattended, continuous protection.',
                    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                  },
                  {
                    title: 'Remote Data Acquisition Systems',
                    desc: 'Advanced RMU systems enabling real-time remote monitoring of CP potentials across pipeline networks.',
                    icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0',
                  },
                  {
                    title: 'High-Performance Anodes',
                    desc: 'Proprietary anode manufacturing — High Silicon Iron, MMO-coated titanium, and sacrificial alloy anodes to exact project specification.',
                    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
                  },
                ].map((tech) => (
                  <div key={tech.title} className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#E6EEF5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tech.icon} />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-1">{tech.title}</div>
                      <div className="text-[#E6EEF5]/60 text-sm leading-relaxed">{tech.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
                alt="CP field equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#E6EEF5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#003366] mb-4">Need a custom CP solution?</h2>
          <p className="text-[#64748B] mb-8 text-sm leading-relaxed">
            Our engineers will assess your specific infrastructure and design the most effective
            cathodic protection system for your assets.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#003366] hover:bg-[#002244] text-white font-semibold px-8 py-3.5 rounded-lg text-sm transition-colors"
            >
              Request a Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/applications"
              className="inline-flex items-center gap-2 border border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white font-semibold px-8 py-3.5 rounded-lg text-sm transition-colors"
            >
              View Applications
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

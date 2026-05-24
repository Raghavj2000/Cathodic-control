import Link from 'next/link'
import { HeroItem, SlideLeft, SlideRight, Stagger, StaggerItem, FadeUp } from '@/components/motion'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quality Policy — ISO 9001 Certified',
  description:
    'Cathodic Control Company holds ISO 9001 certification and upholds rigorous quality standards across all cathodic protection engineering, supply, installation, and integrity management activities. Our quality policy ensures compliance with NACE, ISO and DNV standards.',
  keywords: [
    'ISO 9001 cathodic protection',
    'CP quality management',
    'cathodic protection quality policy',
    'NACE certified',
    'corrosion engineering quality',
    'cathodic protection standards',
  ],
  alternates: {
    canonical: 'https://www.cathodiccontrol.com/quality-policy',
  },
  openGraph: {
    title: 'Quality Policy — ISO 9001 Certified | Cathodic Control Company',
    description:
      'ISO 9001 certified. Rigorous quality standards across all CP engineering, supply, installation and integrity management activities.',
    url: 'https://www.cathodiccontrol.com/quality-policy',
  },
}

const objectives = [
  {
    title: 'Technical Expertise',
    detail: 'Utilising our technical expertise to provide the most appropriate and effective cathodic protection systems.',
    iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    title: 'Continuous Upgradation',
    detail: "Continuously upgrading our skills and systems to meet the customers' dynamic requirement.",
    iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
  {
    title: 'Customer Satisfaction',
    detail: 'Enhancing our self esteem by achieving total customer satisfaction evidenced by improved market share.',
    iconPath: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Regulatory Compliance',
    detail: 'Complying with regulatory requirements across all our projects and operations.',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
]

export default function QualityPolicyPage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 bg-[#003366]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <HeroItem delay={0.1}><span className="text-[#E6EEF5] text-xs font-bold tracking-widest uppercase">
              Standards &amp; Commitment
            </span></HeroItem>
            <HeroItem delay={0.2}><h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">Quality Policy</h1></HeroItem>
            <HeroItem delay={0.3}><p className="text-[#E6EEF5]/90 text-lg leading-relaxed">
              Our unwavering commitment to engineering excellence is backed by internationally recognized
              certification and rigorous quality management systems.
            </p></HeroItem>
          </div>
          <HeroItem delay={0.4}><nav className="flex items-center gap-2 mt-8 text-xs text-[#E6EEF5]/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Quality Policy</span>
          </nav></HeroItem>
        </div>
      </section>

      {/* ─── ISO CERTIFICATION ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideLeft>
              <span className="text-[#003366] text-xs font-bold tracking-widest uppercase">Certification</span>
              <h2 className="text-3xl font-bold text-[#003366] mt-3 mb-6">ISO 9001 Certified</h2>
              <p className="text-[#64748B] leading-relaxed mb-6">
                Our commitment to quality is backed by our ISO 9001 certification. We maintain the highest
                standards in our quality management systems to ensure consistent, reliable, and technically
                sound solutions for every client engagement.
              </p>
              <p className="text-[#64748B] leading-relaxed mb-8">
                This certification reflects our systematic approach to quality assurance — from initial site
                investigation and design through installation, testing, and long-term maintenance of cathodic
                protection systems.
              </p>
              <div className="flex flex-wrap gap-4">
                {['ISO 9001:2015', 'NACE Certified Engineers', 'International Standards'].map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 bg-[#E6EEF5] rounded-full px-4 py-2 text-sm font-medium text-[#003366]"
                  >
                    <svg className="w-4 h-4 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {cert}
                  </div>
                ))}
              </div>
            </SlideLeft>

            {/* ISO badge */}
            <SlideRight><div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-full border-4 border-[#003366]/20 flex items-center justify-center">
                  <div className="w-60 h-60 rounded-full border-2 border-[#003366]/10 flex items-center justify-center">
                    <div className="w-52 h-52 rounded-full bg-[#003366] flex flex-col items-center justify-center shadow-2xl">
                      <svg className="w-12 h-12 text-[#E6EEF5] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <div className="text-[#E6EEF5] text-3xl font-bold leading-none">ISO</div>
                      <div className="text-white text-xl font-bold mt-1">9001</div>
                      <div className="text-[#E6EEF5]/70 text-xs mt-1 tracking-widest">CERTIFIED</div>
                      <div className="w-16 h-px bg-white/20 mt-2" />
                      <div className="text-[#E6EEF5]/60 text-xs mt-2">Quality Management</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#003366]" />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#003366]" />
              </div>
            </div></SlideRight>
          </div>
        </div>
      </section>

      {/* ─── CORE OBJECTIVES ─────────────────────────────────────────── */}
      <section className="py-20 bg-[#E6EEF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <span className="text-[#003366] text-xs font-bold tracking-widest uppercase">Our Commitments</span>
            <h2 className="text-3xl font-bold text-[#003366] mt-3">Core Objectives</h2>
            <p className="text-[#64748B] mt-4 max-w-2xl mx-auto">
              Our quality policy is defined by four fundamental objectives that guide every decision and action
              we take.
            </p>
          </FadeUp>
          <Stagger className="grid sm:grid-cols-2 gap-6">
            {objectives.map((obj) => (
              <StaggerItem key={obj.title}><div
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-[#003366] flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={obj.iconPath} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003366] text-lg mb-3">{obj.title}</h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">{obj.detail}</p>
                  </div>
                </div>
              </div></StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── STANDARDS ───────────────────────────────────────────────── */}
      <section className="py-20 bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <span className="text-[#E6EEF5] text-xs font-bold tracking-widest uppercase">Compliance</span>
            <h2 className="text-3xl font-bold text-white mt-3">International Standards We Follow</h2>
          </FadeUp>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { code: 'NACE SP0169', desc: 'Control of External Corrosion on Underground or Submerged Metallic Piping Systems' },
              { code: 'NACE SP0176', desc: 'Corrosion Control of Steel Fixed Offshore Structures Associated with Petroleum Production' },
              { code: 'ISO 15589', desc: 'Petroleum, Petrochemical and Natural Gas Industries — Cathodic Protection of Pipeline Systems' },
              { code: 'DNV-RP-B401', desc: 'Cathodic Protection Design for Offshore Structures' },
              { code: 'BS EN 13636', desc: 'Cathodic Protection of Buried Metallic Tanks and Related Piping' },
              { code: 'ISO 9001:2015', desc: 'Quality Management Systems — Requirements' },
            ].map((std) => (
              <StaggerItem key={std.code}><div className="bg-white/5 border border-white/10 hover:border-white/30 rounded-xl p-6 transition-colors">
                <div className="text-[#E6EEF5] font-bold text-sm mb-2">{std.code}</div>
                <p className="text-[#E6EEF5]/70 text-xs leading-relaxed">{std.desc}</p>
              </div></StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#E6EEF5]">
        <FadeUp className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#003366] mb-4">Quality you can rely on</h2>
          <p className="text-[#64748B] mb-8">
            Every project we undertake is delivered to the highest engineering and quality standards. Get in
            touch to discuss your requirements.
          </p>
          <Link
            href="/contact"
            className="bg-[#003366] hover:bg-[#002244] text-white font-semibold px-8 py-3.5 rounded text-sm transition-colors"
          >
            Get in Touch
          </Link>
        </FadeUp>
      </section>
    </>
  )
}

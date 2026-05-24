import Link from 'next/link'
import TeamCard from '@/components/TeamCard'
import { HeroItem, SlideLeft, SlideRight, Stagger, StaggerItem, FadeUp } from '@/components/motion'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Established in 1980 and led by internationally renowned metallurgist V. Babu Sathian, Cathodic Control Company delivers end-to-end cathodic protection engineering for onshore and offshore assets across Oman, India, Qatar, UAE and the UK.',
  keywords: [
    'cathodic protection company history',
    'V Babu Sathian metallurgist',
    'corrosion engineering firm',
    'CP company Oman',
    'cathodic protection experts',
    'corrosion control specialists',
  ],
  alternates: {
    canonical: 'https://www.cathodiccontrol.com/about',
  },
  openGraph: {
    title: 'About Us | Cathodic Control Company',
    description:
      'Established in 1980 and led by internationally renowned metallurgist V. Babu Sathian. End-to-end cathodic protection engineering since 1980.',
    url: 'https://www.cathodiccontrol.com/about',
  },
}

const operations = [
  'Design of cathodic protection system from outline to detailed design',
  'Supply of equipment and accessories — transformer rectifier units, anodes, reference electrodes, junction boxes and cables',
  'Supervision of installation and commissioning activities',
  'Integrity management and mitigation survey',
]

const strengths = [
  {
    title: 'Highly Qualified Team',
    desc: 'Team of highly qualified and experienced professionals in material science, corrosion engineering, electronics & electrical, mechanical engineering and chemistry.',
    iconPath:
      'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'End-to-End Solutions',
    desc: 'Complete solution for design, manufacture, supply, installation and commissioning of cathodic protection systems for offshore and onshore assets.',
    iconPath:
      'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
  },
  {
    title: 'Maintenance & Troubleshooting',
    desc: 'Expert maintenance and troubleshooting of existing cathodic protection systems — ensuring continuous, reliable protection of your critical assets.',
    iconPath:
      'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
]

const team = [
  {
    name: 'V. Babu Sathian',
    role: 'Managing Director & Founder',
    desc: 'Internationally renowned metallurgist and corrosion expert. Spearheads the company\'s technical vision and leads a team of highly qualified professionals across all operations.',
    photo: '/assets/team/v-babu-sathian.jpg',
    initials: 'VBS',
  },
  {
    name: 'TL Ravindra Kumar',
    role: 'Senior Engineer',
    desc: 'Experienced engineering professional contributing deep domain expertise in cathodic protection system design, installation and commissioning.',
    photo: '/assets/team/tl-ravindra-kumar.jpg',
    initials: 'TRK',
  },
  {
    name: 'Srinivas Sathian',
    role: 'Engineer',
    desc: 'Key technical team member bringing specialized knowledge in corrosion control engineering and project execution across onshore and offshore environments.',
    photo: '/assets/team/srinivas-sathian.jpg',
    initials: 'SS',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center"
        style={{
          minHeight: '420px',
          backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=85')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0,25,60,0.88)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-3xl">
            <HeroItem delay={0.1}><span className="text-[#E6EEF5] text-xs font-bold tracking-widest uppercase">Who We Are</span></HeroItem>
            <HeroItem delay={0.2}><h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">About Us</h1></HeroItem>
            <HeroItem delay={0.3}><p className="text-[#E6EEF5]/85 text-lg leading-relaxed">
              Protecting the integrity of your assets and extending the life of operations
              through advanced cathodic protection engineering since 1980.
            </p></HeroItem>
          </div>
          <HeroItem delay={0.4}><nav className="flex items-center gap-2 mt-8 text-xs text-[#E6EEF5]/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </nav></HeroItem>
        </div>
      </section>

      {/* ─── ABOUT ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — content */}
            <SlideLeft>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-[#003366]" />
                <span className="text-[#003366] text-xs font-bold tracking-widest uppercase">Our Story</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] leading-tight mb-6">
                Engineering Corrosion Control
              </h2>
              <div className="space-y-4 text-[#64748B] leading-relaxed">
                <p>
                  Corrosion is a natural process of an element tending to its most stable state. A realisation
                  that corrosion can never be stifled — but the rate of corrosion can be reduced and retarded.
                </p>
                <p>
                  We, Cathodic Control Company Pvt. Ltd., work towards the integrity of your assets and
                  extending the life of operation by the method of cathodic protection. Cathodic protection is
                  applied for onshore and offshore structures.
                </p>
                <p>
                  Manned by a team of highly qualified professionals, spearheaded by internationally renowned
                  metallurgist and corrosion expert — <span className="font-semibold text-[#003366]">Mr. V Babu Sathian</span>.
                </p>
              </div>
            </SlideLeft>

            {/* Right — image */}
            <SlideRight>
              <div className="relative h-100 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
                  alt="Pipeline infrastructure"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,25,60,0.6) 0%, transparent 60%)' }}
                />
                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-[#003366]" />
                  <span className="text-[#003366] text-xs font-bold tracking-widest uppercase">Est. 1980</span>
                </div>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ─── OPERATIONS PROFILE ──────────────────────────────────────── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <span className="text-[#003366] text-xs font-bold tracking-widest uppercase">What We Do</span>
            <h2 className="text-3xl font-bold text-[#003366] mt-3">Profile of Operations</h2>
            <p className="text-[#64748B] mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              A single-point source for all aspects of cathodic protection — from initial design through
              supply, installation, and long-term integrity management.
            </p>
          </FadeUp>

          <Stagger className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {operations.map((op, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-4 bg-white border border-[#E6EEF5] rounded-xl p-6 hover:border-[#003366]/20 hover:shadow-md transition-all duration-200">
                  <div className="w-8 h-8 rounded-lg bg-[#003366] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">0{i + 1}</span>
                  </div>
                  <p className="text-[#64748B] text-sm leading-relaxed">{op}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── UNIQUENESS & STRENGTH ───────────────────────────────────── */}
      <section className="py-20 bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <span className="text-[#E6EEF5] text-xs font-bold tracking-widest uppercase">What Sets Us Apart</span>
            <h2 className="text-3xl font-bold text-white mt-3">Uniqueness &amp; Strength</h2>
          </FadeUp>

          <Stagger className="grid sm:grid-cols-3 gap-6">
            {strengths.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-white/5 border border-white/10 hover:border-white/30 rounded-2xl p-8 transition-all duration-200 hover:bg-white/8">
                  <div className="w-14 h-14 rounded-full bg-[#E6EEF5] flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-base mb-3">{item.title}</h3>
                  <p className="text-[#E6EEF5]/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── OUR TEAM ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <span className="text-[#003366] text-xs font-bold tracking-widest uppercase">The People</span>
            <h2 className="text-3xl font-bold text-[#003366] mt-3">Our Team</h2>
            <p className="text-[#64748B] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Our strength lies in our people — a close-knit team of seasoned professionals dedicated
              to engineering excellence in corrosion control.
            </p>
          </FadeUp>

          <Stagger className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <TeamCard member={member} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#E6EEF5]">
        <FadeUp className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#003366] mb-4">Ready to protect your infrastructure?</h2>
          <p className="text-[#64748B] mb-8 text-sm leading-relaxed">
            Get in touch with our expert team for a comprehensive corrosion protection assessment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#003366] hover:bg-[#002244] text-white font-semibold px-8 py-3.5 rounded-lg text-sm transition-colors"
          >
            Contact Us Today
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </FadeUp>
      </section>
    </>
  )
}

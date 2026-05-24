import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ClientLogosMarquee from '@/components/ClientLogosMarquee'
import JsonLd from '@/components/JsonLd'
import { HeroItem, SlideLeft, SlideRight, Stagger, StaggerItem, FadeUp, CountUp } from '@/components/motion'

export const metadata: Metadata = {
  title: 'Cathodic Control Company | Cathodic Protection Engineering Since 1980',
  description:
    'Leading cathodic protection engineering company since 1980. Expert ICCP and sacrificial anode systems for onshore pipelines, offshore platforms, marine vessels and process equipment. Offices in Oman, India, Qatar, UAE and UK.',
  keywords: [
    'cathodic protection company',
    'ICCP systems',
    'sacrificial anode systems',
    'corrosion control engineering',
    'offshore cathodic protection',
    'onshore pipeline protection',
    'cathodic protection Oman',
    'marine corrosion protection',
    'transformer rectifier units',
    'CP engineering services',
  ],
  alternates: {
    canonical: 'https://www.cathodiccontrol.com',
  },
  openGraph: {
    title: 'Cathodic Control Company | Cathodic Protection Engineering Since 1980',
    description:
      'Leading cathodic protection engineering company since 1980. Expert ICCP and sacrificial anode systems for pipelines, offshore platforms and marine vessels.',
    url: 'https://www.cathodiccontrol.com',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Cathodic Control Company Pvt. Ltd.',
  url: 'https://www.cathodiccontrol.com',
  description:
    'Cathodic protection engineering company providing end-to-end ICCP and sacrificial anode systems for pipelines, offshore platforms, marine vessels and industrial equipment since 1980.',
  foundingDate: '1980',
  telephone: '+96824546411',
  email: 'info@cathodiccontrol.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot No. 86, Phase 3, Peenya',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560058',
    addressCountry: 'IN',
  },
  areaServed: ['Oman', 'India', 'Qatar', 'United Arab Emirates', 'United Kingdom'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cathodic Protection Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pre-Design Surveys' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CP System Engineering Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Supply of CP Materials' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CP System Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Testing & Commissioning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Integrity Management Surveys' } },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      {/* ─── 1. HERO — cinematic enterprise authority ───────────────── */}
      <section className="relative flex flex-col" style={{ minHeight: '760px' }}>

        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=85"
            alt="Industrial cathodic protection infrastructure"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Multi-layer gradient — deep navy left, transparent right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(0,19,51,0.97) 0%, rgba(0,38,84,0.92) 45%, rgba(0,51,102,0.70) 70%, rgba(0,30,60,0.45) 100%)',
            }}
          />
          {/* Subtle dot-grid texture */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
            <div className="max-w-2xl">

              {/* Trust badge */}
              <HeroItem delay={0.1}>
                <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-[#E6EEF5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">
                    ISO 9001 Certified · NACE Engineers · Since 1980
                  </span>
                </div>
              </HeroItem>

              {/* Headline */}
              <HeroItem delay={0.2}>
                <h1 className="text-5xl sm:text-6xl lg:text-[4.25rem] font-bold text-white leading-[1.06] tracking-tight mb-6">
                  Protecting<br />
                  <span className="text-[#E6EEF5]">Critical Infrastructure</span><br />
                  from Corrosion
                </h1>
              </HeroItem>

              {/* Description */}
              <HeroItem delay={0.3}>
                <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl">
                  Comprehensive cathodic protection engineering for offshore platforms, pipelines, marine
                  vessels, and onshore structures — delivered across Oman, Qatar, UAE, India, and the UK.
                </p>
              </HeroItem>

              {/* CTAs */}
              <HeroItem delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 bg-white hover:bg-[#E6EEF5] text-[#003366] font-bold px-8 py-4 rounded-lg text-sm transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Explore Our Services
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border-2 border-white/35 hover:border-white/70 text-white font-semibold px-8 py-4 rounded-lg text-sm transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
                  >
                    Contact Our Experts
                  </Link>
                </div>
              </HeroItem>

              {/* Credential row */}
              <HeroItem delay={0.5}>
                <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10">
                  {[
                    { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'ISO 9001:2015' },
                    { icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z', label: 'NACE Certified' },
                    { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064', label: '5 Countries' },
                  ].map((cred) => (
                    <div key={cred.label} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#E6EEF5]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cred.icon} />
                      </svg>
                      <span className="text-white/60 text-xs font-medium tracking-wide">{cred.label}</span>
                    </div>
                  ))}
                </div>
              </HeroItem>
            </div>
          </div>
        </div>

        {/* Stats bar — anchored at bottom */}
        <div className="relative z-10 border-t border-white/10 backdrop-blur-sm bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
              {[
                { to: 500, suffix: '+', label: 'Projects Completed' },
                { to: 40,  suffix: '+', label: 'Years of Experience' },
                { to: 5,   suffix: '+', label: 'Countries Served' },
                { to: 100, suffix: '%', label: 'Quality Assured' },
              ].map((stat) => (
                <div key={stat.label} className="py-5 px-6 lg:px-8 text-center lg:text-left">
                  <div className="text-2xl font-bold text-white">
                    <CountUp to={stat.to} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/45 text-xs mt-0.5 tracking-wide uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. OUR EXPERTISE ───────────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── LEFT: content ── */}
            <SlideLeft className="order-2 lg:order-1">

              {/* Label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-[#003366]" />
                <span className="text-[#003366] text-xs font-bold tracking-widest uppercase">Our Expertise</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] leading-tight mb-5">
                Manned by Highly<br />Qualified Professionals
              </h2>

              <p className="text-[#64748B] leading-relaxed mb-10 max-w-lg">
                Headed by an internationally renowned metallurgist, we are backed by expert engineers
                in Corrosion Control, Project Management, Design, Procurement, and Construction —
                with close ties to premier research institutions worldwide.
              </p>

              {/* Capability cards — 2×2 grid */}
              <div className="grid grid-cols-2 gap-3 mb-10">
                {[
                  {
                    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
                    title: 'Corrosion Engineering',
                    desc: 'Specialized CP design & analysis',
                  },
                  {
                    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
                    title: 'Project Management',
                    desc: 'End-to-end delivery excellence',
                  },
                  {
                    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
                    title: 'R&D Innovation',
                    desc: 'In-house TR & monitoring systems',
                  },
                  {
                    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                    title: 'ISO 9001 Quality',
                    desc: 'Certified quality management',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-[#E6EEF5] hover:border-[#003366]/25 hover:bg-[#EEF4FB] transition-all duration-200 group/card"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#003366] flex items-center justify-center shrink-0 mt-0.5 group-hover/card:bg-[#002244] transition-colors duration-200">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#003366]">{item.title}</div>
                      <div className="text-xs text-[#64748B] mt-0.5 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#003366] font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Discover Our Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </SlideLeft>

            {/* ── RIGHT: image stack ── */}
            <SlideRight className="order-1 lg:order-2 relative h-[480px] lg:h-[580px]">

              {/* Soft glow behind image */}
              <div className="absolute -right-12 -top-12 w-80 h-80 rounded-full bg-[#E6EEF5] opacity-70 blur-3xl pointer-events-none" />

              {/* Main image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&q=80"
                  alt="Offshore oil platform"
                  className="w-full h-full object-cover"
                />
                {/* Bottom gradient for card legibility */}
                <div
                  className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(0,25,60,0.55) 0%, transparent 100%)' }}
                />
              </div>

              {/* Est. 1980 badge — top-left */}
              <div className="absolute top-5 left-5 z-10 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-[#003366]" />
                <span className="text-[#003366] text-xs font-bold tracking-widest uppercase">Est. 1980</span>
              </div>

              {/* Floating stat card — bottom-right */}
              <div className="absolute bottom-6 right-5 z-10 bg-[#003366] rounded-2xl px-6 py-5 shadow-2xl">
                <div className="text-4xl font-bold text-white leading-none">40+</div>
                <div className="text-[#E6EEF5]/75 text-xs mt-1.5 font-medium tracking-wide uppercase">Years of Excellence</div>
                <div className="flex items-center gap-1.5 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-1 rounded-full bg-white/30" />
                  ))}
                </div>
              </div>

            </SlideRight>

          </div>
        </div>
      </section>

      {/* ─── 3. WHY CHOOSE US ────────────────────────────────────────── */}
      <section className="py-20 bg-[#E6EEF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <span className="text-[#003366] text-xs font-bold tracking-widest uppercase">Our Advantages</span>
            <h2 className="text-3xl font-bold text-[#003366] mt-3">Why Choose Us</h2>
            <p className="text-[#64748B] mt-4 max-w-xl mx-auto text-sm">
              Providing reliable and technically sound corrosion control solutions backed by decades of expertise.
            </p>
          </FadeUp>

          {/* 4 equal cards */}
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '40+ Years Experience',
                desc: 'Since 1980, at the forefront of providing reliable and cost-effective corrosion control solutions worldwide.',
                iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                title: 'Technical Innovation',
                desc: 'Backed by continuous R&D and close association with premier research institutions for cutting-edge technology.',
                iconPath:
                  'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
              },
              {
                title: 'Global Compliance',
                desc: 'Adhering to the highest level of international engineering standards and quality assurance protocols.',
                iconPath:
                  'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
              },
              {
                title: 'End-to-End Solutions',
                desc: 'A single-point source for CP materials, data acquisition systems, and comprehensive engineering services.',
                iconPath:
                  'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
              },
            ].map((card) => (
              <StaggerItem key={card.title}>
                <div
                  className="bg-white rounded-xl border border-[#E6EEF5] shadow-sm hover:shadow-md transition-shadow p-8"
                  style={{ minHeight: '342px' }}
                >
                  <div className="w-14 h-14 rounded-full bg-[#003366] flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={card.iconPath} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#003366] text-base mb-3">{card.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{card.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── 4. FIELD OF APPLICATION — BENTO GRID ───────────────────── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header — editorial split */}
          <FadeUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#003366]" />
                <span className="text-[#003366] text-xs font-bold tracking-widest uppercase">Where We Work</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#003366]">Field of Application</h2>
            </div>
            <div className="lg:max-w-sm">
              <p className="text-[#64748B] text-sm leading-relaxed">
                Our engineered CP solutions protect critical infrastructure across every environment — from seabed to shore, offshore to onshore.
              </p>
              <Link
                href="/applications"
                className="inline-flex items-center gap-2 text-[#003366] font-semibold text-sm mt-4 hover:gap-3 transition-all duration-200"
              >
                View All Applications
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeUp>

          {/* ── Bento Grid ── */}
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

            {/* 1 — On-Shore: tall image card, spans 2 rows on lg */}
            <StaggerItem className="lg:row-span-2"><div
              className="relative rounded-2xl overflow-hidden h-full min-h-[300px]"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,15,40,0.96) 0%, rgba(0,40,90,0.45) 55%, transparent 100%)' }} />
              <span className="absolute top-5 left-5 bg-white/12 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-white text-xs font-bold">01</span>
              <div className="absolute bottom-8 left-7 right-7">
                <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">On-Shore Structures</h3>
                <p className="text-white/65 text-sm leading-relaxed">Underground pipelines, tank bottoms, well casings, and cross-country pipeline networks.</p>
              </div>
            </div></StaggerItem>

            {/* 2 — Off-Shore: dark gradient card */}
            <StaggerItem><div
              className="relative rounded-2xl overflow-hidden p-6 min-h-[230px] flex flex-col justify-between"
              style={{ background: 'linear-gradient(135deg, #002244 0%, #003d7a 100%)' }}
            >
              <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full opacity-10 blur-2xl" style={{ background: '#E6EEF5' }} />
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-xl bg-white/12 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M5 21V7l7-4 7 4v14M9 21V11h6v10" />
                  </svg>
                </div>
                <span className="text-white/30 text-xs font-bold">02</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-base font-bold text-white mb-1.5">Off-Shore Structures</h3>
                <p className="text-white/60 text-sm leading-relaxed">Platforms, submarine pipelines, jetties, rigs, and seawater intake systems.</p>
              </div>
            </div></StaggerItem>

            {/* 3 — Plant Piping: light card */}
            <StaggerItem><div className="rounded-2xl p-6 bg-white border border-[#E6EEF5] hover:border-[#003366]/20 hover:shadow-md transition-all duration-200 min-h-[230px] flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-xl bg-[#EEF4FB] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <span className="text-[#003366]/25 text-xs font-bold">03</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#003366] mb-1.5">Plant Piping</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">Storage tanks and complex industrial piping in refineries and process plants.</p>
              </div>
            </div></StaggerItem>

            {/* 4 — Floating Structures: wide image card, spans 2 cols on lg */}
            <StaggerItem className="sm:col-span-2"><div
              className="relative rounded-2xl overflow-hidden h-full min-h-[200px]"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1568171407816-7e0e5e79b1e7?w=1200&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
              }}
            >
              <div className="absolute inset-0" style={{ background: 'linear-gradient(100deg, rgba(0,20,55,0.93) 0%, rgba(0,45,100,0.7) 50%, rgba(0,30,70,0.45) 100%)' }} />
              <span className="absolute top-5 left-5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1 text-white text-xs font-bold">04</span>
              <div className="relative z-10 p-7 h-full flex items-end">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">Floating Structures</h3>
                    <p className="text-white/65 text-sm">Ships&apos; External Hull, Ballast Tanks, Pontoons, Floating Barges and sea-going vessels.</p>
                  </div>
                </div>
              </div>
            </div></StaggerItem>

            {/* 5 — Water Treatment: light card */}
            <StaggerItem><div className="rounded-2xl p-6 bg-white border border-[#E6EEF5] hover:border-[#003366]/20 hover:shadow-md transition-all duration-200 min-h-[200px] flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-xl bg-[#EEF4FB] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <span className="text-[#003366]/25 text-xs font-bold">05</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#003366] mb-1.5">Water Treatment</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">Clarifiers, desalination plants, pumping stations and distribution networks.</p>
              </div>
            </div></StaggerItem>

            {/* 6 — Shipyards: dark deep card, spans 2 cols on sm+lg */}
            <StaggerItem className="sm:col-span-2 lg:col-span-2"><div
              className="relative rounded-2xl p-6 overflow-hidden h-full min-h-[200px] flex flex-col justify-between"
              style={{ background: '#001933' }}
            >
              <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full opacity-10 blur-3xl" style={{ background: '#E6EEF5' }} />
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <span className="text-white/20 text-xs font-bold">06</span>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">Shipyards</h3>
                  <p className="text-white/55 text-sm leading-relaxed max-w-sm">Naval vessels, dry dock structures, and major shipyard infrastructure including GRSE, MDL, and Cochin Shipyard.</p>
                </div>
                <Link
                  href="/applications"
                  className="shrink-0 inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white/70 hover:text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200"
                >
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div></StaggerItem>

          </Stagger>
        </div>
      </section>

      {/* ─── 5. GLOBAL REACH ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <FadeUp className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
            <div>
              <span className="text-[#003366] text-xs font-bold tracking-widest uppercase">Our Presence</span>
              <h2 className="text-3xl font-bold text-[#003366] mt-3">Global Reach, Local Expertise</h2>
            </div>
            <p className="text-[#64748B] text-sm leading-relaxed lg:max-w-xs">
              Delivering corrosion control engineering across key industrial hubs in the Middle East, South Asia, and Europe since 1980.
            </p>
          </FadeUp>

          {/* Grid — India HQ featured left, 4 offices 2×2 right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

            {/* India HQ — tall featured card */}
            <div className="lg:row-span-2 rounded-2xl bg-[#003366] p-7 flex flex-col justify-between min-h-[300px] lg:min-h-0">
              <div>
                <div className="flex items-start justify-between mb-8">
                  <span className="text-3xl leading-none">🇮🇳</span>
                  <span className="bg-white/15 text-white text-[11px] font-bold px-3 py-1 rounded-full tracking-wide">
                    Headquarters
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">India</h3>
                <p className="text-[#E6EEF5]/55 text-sm mb-6">Mumbai</p>
                <div className="space-y-2 mb-8">
                  <a href="tel:+912266916681" className="flex items-center gap-2 text-[#E6EEF5]/70 text-sm hover:text-white transition-colors">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 22 6691 6681
                  </a>
                  <a href="tel:+912266916682" className="flex items-center gap-2 text-[#E6EEF5]/70 text-sm hover:text-white transition-colors">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 22 6691 6682
                  </a>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#E6EEF5] text-[#003366] font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200 w-fit"
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* 4 regional offices — 2×2 */}
            {[
              { flag: '🇴🇲', country: 'Oman', city: 'Al Khoudh, Muscat', phone: '+968 24546411' },
              { flag: '🇶🇦', country: 'Qatar', city: 'Doha', phone: '+974 44582851' },
              { flag: '🇦🇪', country: 'UAE', city: 'Abu Dhabi', phone: '+971 2 645 6138' },
              { flag: '🇬🇧', country: 'United Kingdom', city: 'London', phone: '+44 (0) 7970 293231' },
            ].map((office) => (
              <div
                key={office.country}
                className="rounded-2xl border border-[#E6EEF5] bg-[#F8FAFC] hover:bg-white hover:border-[#003366]/20 hover:shadow-sm transition-all duration-200 p-6 flex flex-col justify-between min-h-[180px]"
              >
                <span className="text-2xl leading-none">{office.flag}</span>
                <div>
                  <h3 className="font-semibold text-[#003366] text-sm mb-0.5">{office.country}</h3>
                  <p className="text-[#64748B] text-xs mb-3">{office.city}</p>
                  <a
                    href={`tel:${office.phone.replace(/[\s()]/g, '')}`}
                    className="text-[#64748B] text-xs hover:text-[#003366] transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>
              </div>
            ))}

          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-10 mt-8 pt-8 border-t border-[#E6EEF5]">
            {[
              { to: 5,   suffix: '+', label: 'Countries' },
              { to: 500, suffix: '+', label: 'Projects Completed' },
              { to: 40,  suffix: '+', label: 'Years of Experience' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-[#003366]">
                  <CountUp to={stat.to} suffix={stat.suffix} />
                </div>
                <div className="text-[#64748B] text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 6. TECHNICAL EXCELLENCE ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideLeft className="order-1 h-80 lg:h-96 rounded-2xl overflow-hidden">
              <div className="h-80 lg:h-96 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                  alt="Field survey equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </SlideLeft>

            <SlideRight className="order-2">
              <span className="text-[#003366] text-xs font-bold tracking-widest uppercase">R&amp;D Driven</span>
              <h2 className="text-3xl font-bold text-[#003366] mt-3 mb-6">Technical Excellence</h2>
              <p className="text-[#64748B] leading-relaxed mb-5">
                Our commitment to continuous research and development drives our technological edge. We proudly
                develop fully automatic Transformer Rectifier (TR) units and advanced Remote Data Acquisition
                systems.
              </p>
              <p className="text-[#64748B] leading-relaxed mb-8">
                These state-of-the-art innovations ensure continuous protection monitoring and reliable performance
                in the most demanding industrial environments, keeping your assets safe 24/7.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[#003366] font-semibold text-sm hover:gap-3 transition-all"
              >
                Explore Our Technology
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ─── 7. PARTNERS & CLIENTS — MARQUEE ────────────────────────── */}
      <section className="py-20 bg-[#E6EEF5] overflow-hidden">

        {/* Header */}
        <FadeUp className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <span className="text-[#003366] text-xs font-bold tracking-widest uppercase">Trusted By</span>
          <h2 className="text-3xl font-bold text-[#003366] mt-3">Our Partners &amp; Clients</h2>
          <p className="text-[#64748B] mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
            Trusted by national oil companies, defence organisations, and major industrial enterprises
            across the Middle East, South Asia, and Europe.
          </p>
        </FadeUp>

        {/* Scrolling logo rows */}
        <ClientLogosMarquee />

      </section>

      {/* ─── 8. PRODUCTS & SERVICES — BENTO GRID ────────────────────── */}
      <section className="py-20 bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <span className="text-[#E6EEF5] text-xs font-bold tracking-widest uppercase">What We Offer</span>
            <h2 className="text-3xl font-bold text-white mt-3">Products &amp; Services</h2>
          </FadeUp>

          {/* Desktop bento */}
          <div className="hidden lg:block space-y-6">
            {/* Row 1 */}
            <div className="grid gap-6" style={{ gridTemplateColumns: '2fr 1fr' }}>
              {/* Featured service — split card */}
              <div className="rounded-xl overflow-hidden flex" style={{ height: '358px' }}>
                <div
                  className="w-1/2 relative shrink-0"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-[#003366]/40" />
                </div>
                <div className="w-1/2 bg-white p-8 flex flex-col justify-center">
                  <span className="inline-block bg-[#E6EEF5] text-[#003366] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 w-fit">
                    Services
                  </span>
                  <h3 className="text-xl font-bold text-[#003366] mb-3">Survey &amp; Installation</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-4">
                    Undertaking Pre &amp; Post installation surveys, CIPL &amp; DCVG Surveys, Installation &amp;
                    Commissioning.
                  </p>
                  <ul className="space-y-2">
                    {['CIPL & DCVG Surveys', 'Pipeline Integrity Management'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#64748B]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#003366] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Quality Policy card */}
              <div
                className="rounded-xl p-8 flex flex-col justify-between"
                style={{ height: '358px', background: '#003d7a' }}
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-[#E6EEF5] flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Quality Policy</h3>
                  <p className="text-[#E6EEF5]/80 text-sm leading-relaxed">
                    ISO 9001 certified. Our commitment to engineering excellence is backed by internationally
                    recognized certification.
                  </p>
                </div>
                <Link
                  href="/quality-policy"
                  className="inline-flex items-center gap-2 text-[#E6EEF5] font-semibold text-sm hover:gap-3 transition-all"
                >
                  Read Our Policy
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-6">
              {/* Cathodic Materials */}
              <div
                className="rounded-xl p-8 flex flex-col justify-between relative overflow-hidden"
                style={{ height: '358px', background: '#001d40' }}
              >
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
                  style={{ background: '#E6EEF5', filter: 'blur(40px)' }}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#E6EEF5] flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Cathodic Materials</h3>
                  <p className="text-[#E6EEF5]/80 text-sm leading-relaxed">
                    High-quality anodes and CP equipment developed through continuous R&amp;D. Manufactured to
                    international standards for reliability and longevity.
                  </p>
                </div>
                <Link href="/services" className="relative z-10 text-[#E6EEF5] font-semibold text-sm">
                  Learn More →
                </Link>
              </div>

              {/* TR Units & Monitoring */}
              <div
                className="rounded-xl p-8 flex flex-col justify-between relative overflow-hidden"
                style={{ height: '358px', background: '#001d40' }}
              >
                <div
                  className="absolute bottom-0 left-0 w-40 h-40 rounded-full opacity-10"
                  style={{ background: '#E6EEF5', filter: 'blur(40px)' }}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#E6EEF5] flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">TR Units &amp; Monitoring</h3>
                  <p className="text-[#E6EEF5]/80 text-sm leading-relaxed">
                    Fully automatic Transformer Rectifier units and Remote Data Acquisition systems using
                    state-of-the-art technology for continuous protection monitoring.
                  </p>
                </div>
                <Link href="/services" className="relative z-10 text-[#E6EEF5] font-semibold text-sm">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile fallback */}
          <div className="lg:hidden grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Survey & Installation', desc: 'Pre & Post installation surveys, CIPL & DCVG Surveys.' },
              { title: 'Quality Policy', desc: 'ISO 9001 certified engineering excellence.' },
              { title: 'Cathodic Materials', desc: 'High-quality anodes and CP equipment.' },
              { title: 'TR Units & Monitoring', desc: 'Automatic TR units and Remote Data Acquisition systems.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-7">
                <div className="w-12 h-12 rounded-full bg-[#E6EEF5] flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#003366]" />
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-[#E6EEF5]/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="bg-white hover:bg-[#E6EEF5] text-[#003366] font-semibold px-8 py-3.5 rounded text-sm transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

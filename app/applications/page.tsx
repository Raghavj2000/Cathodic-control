import Link from 'next/link'
import { HeroItem, SlideLeft, SlideRight, Stagger, StaggerItem, FadeUp, CountUp } from '@/components/motion'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cathodic Protection Applications',
  description: 
    'Cathodic protection solutions for onshore buried pipelines, storage tank bottoms, well casings, offshore platforms, submarine pipelines, jetties, marine vessel hulls, ballast tanks, and industrial process equipment. Designed to NACE, ISO 15589 and DNV standards.',
  keywords: [
    'cathodic protection applications',
    'pipeline cathodic protection',
    'offshore platform CP',
    'submarine pipeline protection',
    'ship hull cathodic protection',
    'storage tank cathodic protection',
    'well casing protection',
    'marine cathodic protection',
    'jetty cathodic protection',
    'heat exchanger cathodic protection',
    'offshore jacket CP',
    'ballast tank corrosion protection',
  ],
  alternates: {
    canonical: 'https://www.cathodiccontrol.com/applications',
  },
  openGraph: {
    title: 'Cathodic Protection Applications | Cathodic Control Company',
    description:
      'CP solutions for onshore pipelines, offshore platforms, marine vessels, and industrial process equipment. Engineered to NACE, ISO 15589 and DNV standards.',
    url: 'https://www.cathodiccontrol.com/applications',
  },
}

const applications = [
  {
    category: 'On Shore Assets',
    number: '01',
    bg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    iconPath:
      'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    intro:
      'Onshore buried structures face aggressive soil corrosion, stray currents, and electrolytic attack. Our impressed current and sacrificial anode systems provide continuous, reliable protection across the full asset lifecycle.',
    items: [
      {
        name: 'Underground Oil & Gas Pipelines',
        desc: 'Cross-country and distribution pipelines buried in varying soil resistivity conditions. We design ICCP and sacrificial anode systems compliant with NACE SP0169 to ensure full-length protection and pipeline integrity.',
      },
      {
        name: 'Tank Bottoms — External',
        desc: 'Above-ground storage tank floors are highly susceptible to soil-side corrosion at the tank-to-soil interface. We apply distributed anode groundbeds beneath tank foundations to achieve uniform protection across the entire floor plate.',
      },
      {
        name: 'Tank Bottoms — Internal',
        desc: 'Internal surfaces of storage tanks holding crude oil, refined products, or water are protected using sacrificial anodes or impressed current systems rated for the specific electrolyte and product chemistry.',
      },
      {
        name: 'Well Casings',
        desc: 'Oil and gas well casings are exposed to highly aggressive subsurface corrosion from varying soil layers and formation waters. Deep anode groundbeds and telluric current mitigation ensure effective protection of the full casing string.',
      },
    ],
  },
  {
    category: 'Off Shore Assets',
    number: '02',
    bg: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&q=80',
    iconPath:
      'M3 21h18M5 21V7l7-4 7 4v14M9 21V11h6v10',
    intro:
      'Marine and subsea environments are among the most corrosive on earth. Our offshore CP systems — from platform jackets to subsea pipelines — are designed to DNV, NACE, and ISO 15589 standards for service life of 20–30 years.',
    items: [
      {
        name: 'Offshore Platforms',
        desc: 'Jacket structures, conductors, and submerged topsides components are protected using aluminium-indium-zinc alloy sacrificial anodes or impressed current systems, designed to ensure cathodic protection current reaches all submerged and splash-zone surfaces.',
      },
      {
        name: 'Submarine Pipelines',
        desc: 'Subsea pipelines carrying oil, gas, and produced water between offshore facilities and onshore terminals are protected with bracelet anodes or field joint anode systems engineered for long-term current output in deep-sea conditions.',
      },
      {
        name: 'Jetties & Wharfs',
        desc: 'Steel piles, fender systems, and berthing structures in tidal and splash zones are subjected to accelerated corrosion. We provide both sacrificial and ICCP systems with flush-mounted reference electrodes for continuous monitoring.',
      },
      {
        name: 'Offshore Rigs',
        desc: 'Jack-up rigs, semi-submersibles, and drillship hulls require robust cathodic protection during operational and stacked phases. We design systems that account for variable immersion depth, dynamic positioning, and mooring interfaces.',
      },
      {
        name: 'Seawater Intake Systems',
        desc: 'Seawater cooling and fire-fighting intake systems in offshore and coastal plants corrode rapidly due to high chloride concentration and turbulent flow. Sacrificial anodes and segmented ICCP systems protect pipework, screens, and caissons.',
      },
    ],
  },
  {
    category: 'Floating Structures',
    number: '03',
    bg: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200&q=80',
    iconPath:
      'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z',
    intro:
      'Vessels and floating structures operate in the harshest corrosion environment. Our marine CP systems — for hulls, ballast tanks, and internal spaces — comply with IMO, classification society, and navy requirements.',
    items: [
      {
        name: "Ships' External Hull",
        desc: 'Impressed current cathodic protection (ICCP) systems for vessel hulls provide continuous, automatic protection in seawater. We design and commission hull ICCP systems incorporating Ag/AgCl reference electrodes and high-performance MMO-coated titanium anodes for merchant, naval, and specialty vessels.',
      },
      {
        name: "Ships' Ballast Tanks",
        desc: 'Internal ballast tanks are subject to cyclic wetting and drying with high-salinity seawater, creating severe corrosion conditions. Sacrificial aluminium or zinc anodes are engineered and distributed for uniform current coverage of all tank surfaces including frames and stringers.',
      },
      {
        name: 'Pontoons',
        desc: 'Floating pontoon structures used as mooring points, ferry platforms, and support bases are protected with aluminium alloy bracelet anodes on submerged steel sections, with designs accounting for tidal variation and immersion schedules.',
      },
      {
        name: 'Floating Barges',
        desc: 'Deck barges, crane barges, and accommodation barges require hull protection comparable to seagoing vessels. We provide both ICCP and sacrificial anode systems sized for the operating draft, route, and classification requirements.',
      },
      {
        name: 'Other Sea-Going Vessels',
        desc: 'Coastal patrol craft, survey vessels, harbour tugs, and FPSOs are covered under our comprehensive marine CP design service — including naval vessels for the Indian Navy and Indian Coast Guard where we hold extensive project references.',
      },
    ],
  },
  {
    category: 'Process Equipment',
    number: '04',
    bg: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80',
    iconPath:
      'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    intro:
      'Petrochemical and industrial process equipment handles aggressive fluids at elevated temperatures and pressures. Internal and external cathodic protection extends equipment life, reduces unplanned shutdowns, and improves HSE performance.',
    items: [
      {
        name: 'Heat Exchangers',
        desc: 'Shell-and-tube and plate heat exchangers handling seawater, cooling water, or corrosive process fluids are protected internally with sacrificial zinc or aluminium anodes sized for the specific fluid chemistry, velocity, and temperature range.',
      },
      {
        name: 'Static Exhaust Systems',
        desc: 'Exhaust stacks and silencers in gas turbine and diesel engine installations are subject to condensate and stack gas corrosion. Internal CP systems arrest electrochemical attack on carbon steel casing surfaces.',
      },
      {
        name: 'RCC Cathodic Protection',
        desc: 'Reinforced concrete structures in marine and industrial environments are protected using embedded titanium mesh anode systems or discrete anode systems that polarise the embedded steel reinforcement and arrest chloride-induced corrosion.',
      },
      {
        name: 'Condensers',
        desc: 'Steam condensers and air-cooled condensers with seawater or brackish water cooling circuits are protected with distributed sacrificial anode inserts, maintaining the waterbox and tube sheet integrity between maintenance cycles.',
      },
      {
        name: 'Separators',
        desc: 'Three-phase production separators handling produced water, crude, and gas experience internal pitting and crevice corrosion. ICCP systems with probe-type anodes and reference electrodes provide active internal protection with remote monitoring capability.',
      },
      {
        name: 'Seawater Intake Systems',
        desc: 'Onshore desalination, power plant cooling, and refinery seawater intake structures — including caissons, pipework, and pump casings — are protected with impressed current or sacrificial anode systems designed for the specific flow regime and water chemistry.',
      },
    ],
  },
]

export default function ApplicationsPage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center"
        style={{
          minHeight: '420px',
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0,25,60,0.88)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-3xl">
            <HeroItem delay={0.1}><span className="text-[#E6EEF5] text-xs font-bold tracking-widest uppercase">
              Where We Protect
            </span></HeroItem>
            <HeroItem delay={0.2}><h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
              Field of Application
            </h1></HeroItem>
            <HeroItem delay={0.3}><p className="text-[#E6EEF5]/85 text-lg leading-relaxed">
              Engineered cathodic protection solutions across onshore pipelines, offshore platforms,
              marine vessels, and industrial process equipment.
            </p></HeroItem>
          </div>
          <HeroItem delay={0.4}><nav className="flex items-center gap-2 mt-8 text-xs text-[#E6EEF5]/60">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Applications</span>
          </nav></HeroItem>
        </div>
      </section>

      {/* ─── APPLICATION SECTIONS ────────────────────────────────────── */}
      {applications.map((app, appIdx) => (
        <section
          key={app.category}
          id={app.category.toLowerCase().replace(/\s+/g, '-')}
          className={appIdx % 2 === 0 ? 'py-20 bg-white' : 'py-20 bg-[#F8FAFC]'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section header */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">

              {/* Text side */}
              {appIdx % 2 !== 0 ? (
                <SlideRight className="order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#003366]/25 text-4xl font-black leading-none">{app.number}</span>
                    <div className="w-px h-8 bg-[#003366]/15" />
                    <div>
                      <div className="w-7 h-0.5 bg-[#003366] mb-1.5" />
                      <span className="text-[#003366] text-xs font-bold tracking-widest uppercase">Category</span>
                    </div>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] mb-5">{app.category}</h2>
                  <p className="text-[#64748B] leading-relaxed text-sm lg:text-base">{app.intro}</p>
                </SlideRight>
              ) : (
                <SlideLeft>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#003366]/25 text-4xl font-black leading-none">{app.number}</span>
                    <div className="w-px h-8 bg-[#003366]/15" />
                    <div>
                      <div className="w-7 h-0.5 bg-[#003366] mb-1.5" />
                      <span className="text-[#003366] text-xs font-bold tracking-widest uppercase">Category</span>
                    </div>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#003366] mb-5">{app.category}</h2>
                  <p className="text-[#64748B] leading-relaxed text-sm lg:text-base">{app.intro}</p>
                </SlideLeft>
              )}

              {/* Image side */}
              {appIdx % 2 !== 0 ? (
                <SlideLeft className="order-1 lg:order-2">
                  <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
                    <img src={app.bg} alt={app.category} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,30,70,0.5) 0%, transparent 70%)' }} />
                    <div className="absolute top-5 left-5 w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={app.iconPath} />
                      </svg>
                    </div>
                  </div>
                </SlideLeft>
              ) : (
                <SlideRight>
                  <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
                    <img src={app.bg} alt={app.category} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,30,70,0.5) 0%, transparent 70%)' }} />
                    <div className="absolute top-5 left-5 w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={app.iconPath} />
                      </svg>
                    </div>
                  </div>
                </SlideRight>
              )}
            </div>

            {/* Items grid */}
            <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {app.items.map((item, idx) => (
                <StaggerItem key={item.name}>
                  <div className="group bg-white rounded-xl border border-[#E6EEF5] p-6 hover:border-[#003366]/25 hover:shadow-md transition-all duration-200">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-[#003366] flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white text-[10px] font-bold">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="font-bold text-[#003366] text-sm leading-snug pt-1">{item.name}</h3>
                    </div>
                    <p className="text-[#64748B] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

          </div>
        </section>
      ))}

      {/* ─── STATS STRIP ─────────────────────────────────────────────── */}
      <section className="py-16 bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { to: 500, suffix: '+', label: 'Projects Completed' },
              { to: 4,   suffix: '',  label: 'Application Domains' },
              { to: 40,  suffix: '+', label: 'Years Experience' },
              { to: 5,   suffix: '+', label: 'Countries' },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-4xl font-bold text-white mb-2">
                  <CountUp to={stat.to} suffix={stat.suffix} />
                </div>
                <div className="text-[#E6EEF5]/60 text-sm">{stat.label}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#E6EEF5]">
        <FadeUp className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#003366] mb-4">
            Don&apos;t see your application?
          </h2>
          <p className="text-[#64748B] mb-8 text-sm leading-relaxed">
            We engineer custom cathodic protection solutions for unique and complex challenges.
            Contact our team to discuss your specific requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#003366] hover:bg-[#002244] text-white font-semibold px-8 py-3.5 rounded-lg text-sm transition-colors"
            >
              Discuss Your Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white font-semibold px-8 py-3.5 rounded-lg text-sm transition-colors"
            >
              Our Services
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}

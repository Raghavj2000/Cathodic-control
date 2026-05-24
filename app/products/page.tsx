import Link from 'next/link'
import Image from 'next/image'
import { HeroItem, SlideLeft, SlideRight, Stagger, StaggerItem, FadeUp } from '@/components/motion'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cathodic Protection Products & Equipment',
  description:
    'Cathodic protection equipment and materials: transformer rectifier units, auto control panels, MMO anodes, high silicon iron anodes, sacrificial anodes (magnesium, zinc, aluminium), reference electrodes, test stations, polarisation cells and monitoring panels. Manufactured to international standards.',
  keywords: [
    'cathodic protection equipment',
    'transformer rectifier unit',
    'MMO anode',
    'mixed metal oxide anode',
    'sacrificial anode',
    'magnesium anode',
    'zinc anode',
    'high silicon iron anode',
    'reference electrode',
    'copper sulphate electrode',
    'silver silver chloride electrode',
    'CP test station',
    'polarisation cell',
    'cathodic protection monitoring',
    'auto control unit',
  ],
  alternates: {
    canonical: 'https://www.cathodiccontrol.com/products',
  },
  openGraph: {
    title: 'Cathodic Protection Products & Equipment | Cathodic Control Company',
    description:
      'Complete range of CP equipment: TR units, MMO anodes, sacrificial anodes, reference electrodes, test stations and monitoring panels. Manufactured to international standards.',
    url: 'https://www.cathodiccontrol.com/products',
  },
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[#003366]/20 text-5xl font-black leading-none select-none">{number}</span>
      <div className="w-px h-8 bg-[#E6EEF5]" />
      <span className="text-[#003366] text-xs font-bold tracking-widest uppercase">{label}</span>
    </div>
  )
}

function SpecItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full bg-[#EEF4FB] flex items-center justify-center shrink-0 mt-0.5">
        <svg className="w-3 h-3 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-[#334155] text-sm leading-relaxed">{text}</span>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section className="relative flex items-center" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=85"
            alt="CP equipment"
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(105deg,rgba(0,15,40,0.96) 0%,rgba(0,38,84,0.88) 55%,rgba(0,51,102,0.65) 100%)' }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full text-center">
          <HeroItem delay={0.1}><span className="text-[#E6EEF5] text-xs font-bold tracking-widest uppercase">What We Supply</span></HeroItem>
          <HeroItem delay={0.2}><h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5 leading-tight">Our Products</h1></HeroItem>
          <HeroItem delay={0.3}><p className="text-[#E6EEF5]/75 text-lg leading-relaxed max-w-2xl mx-auto">
            A complete range of cathodic protection equipment and materials — designed, manufactured,
            and supplied to international quality standards.
          </p></HeroItem>
          <HeroItem delay={0.4}><nav className="flex items-center justify-center gap-2 mt-10 text-xs text-[#E6EEF5]/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Products</span>
          </nav></HeroItem>
        </div>
      </section>

      {/* ─── 01 CONTROL PANELS ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionLabel number="01" label="Power Supply" />
            <h2 className="text-3xl font-bold text-[#003366] mb-3">Control Panels</h2>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-2xl mb-12">
              Microcontroller-based power supply units for impressed current cathodic protection systems.
              Available in onshore and offshore variants, designed for continuous unattended operation.
            </p>
          </FadeUp>

          <Stagger className="grid lg:grid-cols-2 gap-8">

            {/* Onshore TR Unit */}
            <StaggerItem><div className="rounded-2xl overflow-hidden border border-[#E6EEF5] hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56">
                <Image
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&q=80"
                  alt="Transformer Rectifier Unit"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(0,19,51,0.55)' }} />
                <div className="absolute bottom-5 left-6">
                  <span className="text-[#E6EEF5]/70 text-xs font-bold tracking-widest uppercase">Onshore Application</span>
                  <h3 className="text-white text-xl font-bold mt-1">Transformer Rectifier Unit</h3>
                </div>
              </div>
              <div className="p-7 space-y-3">
                <SpecItem text="Suitable for Single Phase AC / Three Phase AC / DC input" />
                <SpecItem text="Available up to 300A DC output" />
                <SpecItem text="Natural / Forced Air cooled / Oil Cooled systems" />
                <SpecItem text="Enclosure protection IP44–IP56 to suit installation area" />
                <SpecItem text="Microcontroller based — Manual, Automatic & AVCC modes" />
                <SpecItem text="Optional inbuilt interrupter, SCADA interface & Data logging" />
              </div>
            </div></StaggerItem>

            {/* Offshore Auto Control */}
            <StaggerItem><div className="rounded-2xl overflow-hidden border border-[#E6EEF5] hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56">
                <Image
                  src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=900&q=80"
                  alt="Auto Control Unit Offshore"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(0,19,51,0.60)' }} />
                <div className="absolute bottom-5 left-6">
                  <span className="text-[#E6EEF5]/70 text-xs font-bold tracking-widest uppercase">Offshore Application</span>
                  <h3 className="text-white text-xl font-bold mt-1">Auto Control Unit</h3>
                </div>
              </div>
              <div className="p-7 space-y-3">
                <SpecItem text="Suitable for Single Phase AC / Three Phase AC / DC input" />
                <SpecItem text="Available up to 150A DC output" />
                <SpecItem text="Natural / Forced Air cooled system" />
                <SpecItem text="Enclosure protection IP44–IP56 to suit installation area" />
                <SpecItem text="Microcontroller based — multi-zone protection, Manual & Automatic modes" />
                <SpecItem text="Optional SCADA interface and Data logging" />
              </div>
            </div></StaggerItem>

          </Stagger>
        </div>
      </section>

      {/* ─── 02 MONITORING PANEL ─────────────────────────────────────── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <SlideLeft>
              <SectionLabel number="02" label="Monitoring" />
              <h2 className="text-3xl font-bold text-[#003366] mb-4">Monitoring Panel</h2>
              <p className="text-[#64748B] text-sm leading-relaxed mb-8">
                Dedicated monitoring panels providing continuous, real-time visibility of cathodic
                protection system performance. Used across pipeline networks, offshore structures,
                and industrial plant assets.
              </p>
              <div className="space-y-5">
                {[
                  {
                    title: 'Structure Potential Monitoring',
                    desc: 'Continuous measurement of pipe-to-soil and structure-to-electrolyte potentials at multiple locations across the protected network.',
                  },
                  {
                    title: 'Protection Current Monitoring',
                    desc: 'Measurement of current output through monitoring anodes to verify adequate cathodic protection current delivery to all protected structures.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 bg-white border border-[#E6EEF5] rounded-xl hover:border-[#003366]/20 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-[#003366] flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[#003366] font-bold text-sm mb-1">{item.title}</div>
                      <p className="text-[#64748B] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SlideLeft>

            <SlideRight>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80"
                  alt="Monitoring equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </SlideRight>

          </div>
        </div>
      </section>

      {/* ─── 03 CP ANODES ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionLabel number="03" label="Materials" />
            <h2 className="text-3xl font-bold text-[#003366] mb-3">Cathodic Protection Anodes</h2>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-2xl mb-12">
              Available in a variety of sizes and shapes to suit all applications — from buried onshore
              pipelines to offshore platforms and marine vessels. All manufactured and tested to
              international standards.
            </p>
          </FadeUp>

          <Stagger className="grid lg:grid-cols-2 gap-8">

            {/* Onshore */}
            <StaggerItem><div>
              <div className="relative h-44 rounded-xl overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
                  alt="Onshore anodes"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(0,19,51,0.6)' }} />
                <div className="absolute bottom-4 left-5">
                  <h3 className="text-white font-bold text-lg">Onshore Anodes</h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border border-[#E6EEF5] rounded-xl p-6 bg-[#F8FAFC]">
                  <div className="text-[#003366] text-xs font-bold tracking-widest uppercase mb-4">Sacrificial Anodes</div>
                  <div className="space-y-3 mb-5">
                    {[
                      { m: 'Magnesium', n: 'Standard and high-potential alloys for buried onshore applications.' },
                      { m: 'Zinc', n: 'For moderately corrosive soils and freshwater environments.' },
                      { m: 'Soft Iron', n: 'For specific applications requiring low driving voltage.' },
                    ].map((a) => (
                      <div key={a.m} className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#003366] shrink-0 mt-2" />
                        <span className="text-[#334155] text-sm"><span className="font-semibold text-[#003366]">{a.m}</span> — {a.n}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#E6EEF5]">
                    <p className="text-[#64748B] text-xs mb-3 font-medium">Suitable for:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Internal & external tank bottoms', "Ship's hull & sea chest", 'Condenser water boxes', 'Heat exchangers'].map((app) => (
                        <span key={app} className="text-xs bg-white border border-[#E6EEF5] text-[#64748B] px-3 py-1 rounded-full">{app}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border border-[#E6EEF5] rounded-xl p-6 bg-[#F8FAFC]">
                  <div className="text-[#003366] text-xs font-bold tracking-widest uppercase mb-4">Impressed Current Anodes</div>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#003366] shrink-0 mt-2" />
                      <div>
                        <span className="text-[#003366] font-semibold text-sm">Mixed Metal Oxide (MMO) Anodes</span>
                        <p className="text-[#64748B] text-xs mt-1 leading-relaxed">High-performance MMO-coated titanium anodes for ICCP systems. Long service life and low consumption rate.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#003366] shrink-0 mt-2" />
                      <div>
                        <span className="text-[#003366] font-semibold text-sm">High Silicon Iron Anodes</span>
                        <p className="text-[#64748B] text-xs mt-1 leading-relaxed">Available bare or prepackaged. Low cost with proven onshore performance. Suitable for deep well and distributed ground beds.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div></StaggerItem>

            {/* Offshore */}
            <StaggerItem><div>
              <div className="relative h-44 rounded-xl overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=900&q=80"
                  alt="Offshore anodes"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(0,19,51,0.6)' }} />
                <div className="absolute bottom-4 left-5">
                  <h3 className="text-white font-bold text-lg">Offshore Anodes</h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border border-[#E6EEF5] rounded-xl p-6 bg-[#F8FAFC]">
                  <div className="text-[#003366] text-xs font-bold tracking-widest uppercase mb-4">Sacrificial Anodes</div>
                  <div className="space-y-3">
                    {[
                      { m: 'Magnesium', n: 'For offshore buried and submerged structures in low-conductivity environments.' },
                      { m: 'Zinc', n: 'Widely used for offshore platform jacket protection and subsea pipelines.' },
                      { m: 'Soft Iron', n: 'For specific offshore cathodic protection applications.' },
                    ].map((a) => (
                      <div key={a.m} className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#003366] shrink-0 mt-2" />
                        <span className="text-[#334155] text-sm"><span className="font-semibold text-[#003366]">{a.m}</span> — {a.n}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-[#E6EEF5] rounded-xl p-6 bg-[#F8FAFC]">
                  <div className="text-[#003366] text-xs font-bold tracking-widest uppercase mb-4">Impressed Current Anodes</div>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#003366] shrink-0 mt-2" />
                      <div>
                        <span className="text-[#003366] font-semibold text-sm">Platinised Titanium Anode</span>
                        <p className="text-[#64748B] text-xs mt-1 leading-relaxed">High-efficiency anode for offshore ICCP systems — ultra-low consumption rate, long service life in seawater.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#003366] shrink-0 mt-2" />
                      <div>
                        <span className="text-[#003366] font-semibold text-sm">Lead Silver Alloy Anode</span>
                        <p className="text-[#64748B] text-xs mt-1 leading-relaxed">Robust and reliable in seawater environments. Used in offshore impressed current CP systems.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div></StaggerItem>

          </Stagger>
        </div>
      </section>

      {/* ─── 04 TEST STATIONS ────────────────────────────────────────── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <SlideLeft className="order-2 lg:order-1">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
                  alt="Test station in field"
                  fill
                  className="object-cover"
                />
              </div>
            </SlideLeft>

            <SlideRight className="order-1 lg:order-2">
              <SectionLabel number="04" label="Field Equipment" />
              <h2 className="text-3xl font-bold text-[#003366] mb-4">Test Stations</h2>
              <p className="text-[#64748B] text-sm leading-relaxed mb-8">
                Test stations provide permanent, easily accessible field measurement points for
                monitoring the performance of cathodic protection systems throughout their operational
                life. Installed at regular intervals along pipelines and at key structure locations.
              </p>
              <div className="space-y-3">
                {[
                  'Monitoring of Cathodic Protection system performance',
                  'Structure-to-Soil Potential measurement',
                  'Anode Current output measurement',
                  'Integrity testing of insulation flanges and joints',
                  'Integrity testing between carrier pipe and casing pipe',
                ].map((item) => (
                  <SpecItem key={item} text={item} />
                ))}
              </div>
            </SlideRight>

          </div>
        </div>
      </section>

      {/* ─── 05 LEAD SILVER ALLOY ANODES ─────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <SlideLeft>
              <SectionLabel number="05" label="Marine — Offshore" />
              <h2 className="text-3xl font-bold text-[#003366] mb-4">Lead Silver Alloy Anodes</h2>
              <p className="text-[#64748B] text-sm leading-relaxed mb-8">
                Used primarily in ships' external hull impressed current cathodic protection systems.
                Manufactured to withstand the demanding conditions of continuous seawater immersion.
                Available in two mounting configurations to accommodate different hull designs and
                ICCP system requirements.
              </p>
              <div className="space-y-3 mb-8">
                <SpecItem text="Suitable for offshore and marine applications" />
                <SpecItem text="Primarily used for ships' external hull ICCP systems" />
                <SpecItem text="High conductivity alloy for efficient current output" />
                <SpecItem text="Designed for long service life in seawater environments" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Protruded Type', 'Flush Type'].map((type) => (
                  <div key={type} className="border border-[#E6EEF5] bg-[#F8FAFC] rounded-xl p-5 text-center hover:border-[#003366]/25 hover:shadow-sm transition-all">
                    <div className="w-10 h-10 rounded-full bg-[#003366] mx-auto mb-3 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                    <div className="text-[#003366] text-sm font-bold">{type}</div>
                  </div>
                ))}
              </div>
            </SlideLeft>

            <SlideRight>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=900&q=80"
                  alt="Marine vessel hull"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </SlideRight>

          </div>
        </div>
      </section>

      {/* ─── 06 REFERENCE ELECTRODES ─────────────────────────────────── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionLabel number="06" label="Measurement" />
            <h2 className="text-3xl font-bold text-[#003366] mb-3">Reference Electrodes</h2>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-2xl mb-10">
              Accurate reference electrodes are essential to reliable CP potential measurement. We supply
              all standard types for onshore, offshore, and marine applications.
            </p>
          </FadeUp>
          <Stagger className="grid sm:grid-cols-3 gap-6">
            {[
              {
                type: 'Zinc Reference Electrode',
                env: 'Offshore / Marine',
                desc: 'Standard reference electrode for offshore and marine applications. Primarily used for ships\' hull CP systems. Available in protruded and flush-type configurations.',
                tags: ['Protruded Type', 'Flush Type'],
                img: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80',
              },
              {
                type: 'Silver / Silver Chloride',
                env: 'Offshore / Subsea',
                desc: 'Industry-standard reference electrode for offshore, subsea, and seawater immersion CP measurement. Stable, reliable, and widely specified on international projects.',
                tags: ['Ag/AgCl'],
                img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
              },
              {
                type: 'Copper / Copper Sulphate',
                env: 'Onshore / Buried',
                desc: 'The standard reference electrode for onshore buried pipeline and structure potential measurement. Used for all close-interval surveys and permanent monitoring installations.',
                tags: ['Cu/CuSO₄'],
                img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
              },
            ].map((e) => (
              <StaggerItem key={e.type}><div className="bg-white border border-[#E6EEF5] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#003366]/20 transition-all duration-200">
                <div className="relative h-36">
                  <Image src={e.img} alt={e.type} fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: 'rgba(0,19,51,0.55)' }} />
                  <span className="absolute top-3 left-4 text-[#E6EEF5]/70 text-xs font-bold tracking-widest uppercase">{e.env}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-[#003366] font-bold text-base mb-2">{e.type}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-4">{e.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {e.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-[#EEF4FB] text-[#003366] font-semibold px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div></StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── 07 + 08 ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Stagger className="grid lg:grid-cols-2 gap-8">

            {/* Slip Ring */}
            <StaggerItem><div className="rounded-2xl overflow-hidden border border-[#E6EEF5] hover:shadow-lg transition-shadow">
              <div className="relative h-52">
                <Image
                  src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=900&q=80"
                  alt="Ship propeller shaft"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(0,19,51,0.65)' }} />
                <div className="absolute bottom-5 left-6">
                  <span className="text-[#E6EEF5]/65 text-xs font-bold tracking-widest uppercase">07 — Marine</span>
                  <h2 className="text-white font-bold text-xl mt-1">Slip Ring</h2>
                </div>
              </div>
              <div className="p-7">
                <p className="text-[#64748B] text-sm leading-relaxed mb-6">
                  Used for grounding the propeller shaft on marine vessels. The slip ring provides
                  a continuous electrical connection between the rotating propeller shaft and the
                  ship's hull — preventing galvanic corrosion of the propeller, shaft, and stern
                  tube bearings by integrating them into the vessel's cathodic protection circuit.
                </p>
                <div className="flex items-center gap-3 p-4 bg-[#EEF4FB] rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-[#003366] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-[#003366] text-sm font-semibold">Propeller shaft grounding on ships & marine vessels</span>
                </div>
              </div>
            </div></StaggerItem>

            {/* Polarisation Cell */}
            <StaggerItem><div className="rounded-2xl overflow-hidden border border-[#E6EEF5] hover:shadow-lg transition-shadow">
              <div className="relative h-52">
                <Image
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&q=80"
                  alt="Polarisation cell equipment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(0,19,51,0.65)' }} />
                <div className="absolute bottom-5 left-6">
                  <span className="text-[#E6EEF5]/65 text-xs font-bold tracking-widest uppercase">08 — AC Decoupling</span>
                  <h2 className="text-white font-bold text-xl mt-1">Polarisation Cell</h2>
                </div>
              </div>
              <div className="p-7">
                <p className="text-[#64748B] text-sm leading-relaxed mb-6">
                  AC/DC decoupling devices that electrically isolate cathodic protection systems
                  from AC power infrastructure — while allowing DC cathodic protection current to
                  flow freely to the protected structure. Essential for CP systems on pipelines
                  sharing corridors with high-voltage AC transmission lines.
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    'Single Phase or Three Phase input',
                    'Natural / Forced Air / Oil Cooled',
                    'Manual & Fully Automatic modes',
                    'Optional SCADA interfacing',
                    'Available up to 250A DC',
                    'Multiple enclosure options',
                  ].map((spec) => (
                    <SpecItem key={spec} text={spec} />
                  ))}
                </div>
              </div>
            </div></StaggerItem>

          </Stagger>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#003366]">
        <FadeUp className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need a custom specification?</h2>
          <p className="text-[#E6EEF5]/70 mb-8 text-sm leading-relaxed">
            All products can be tailored to project-specific requirements. Contact our team to
            discuss your application and receive a detailed quotation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#E6EEF5] text-[#003366] font-semibold px-8 py-3.5 rounded-lg text-sm transition-colors"
            >
              Request a Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-lg text-sm transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}

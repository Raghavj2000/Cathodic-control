'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeroItem, SlideLeft, SlideRight, FadeUp, Stagger, StaggerItem } from '@/components/motion'



export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section className="relative flex items-center" style={{ minHeight: '380px' }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=85"
            alt="Contact Cathodic Control"
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(105deg,rgba(0,15,40,0.96) 0%,rgba(0,38,84,0.88) 55%,rgba(0,51,102,0.65) 100%)' }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full text-center">
          <HeroItem delay={0.1}><span className="text-[#E6EEF5] text-xs font-bold tracking-widest uppercase">Reach Our Team</span></HeroItem>
          <HeroItem delay={0.2}><h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5 leading-tight">Get in Touch</h1></HeroItem>
          <HeroItem delay={0.3}><p className="text-[#E6EEF5]/75 text-lg leading-relaxed max-w-xl mx-auto">
            Our expert engineers are ready to help with your corrosion protection challenges.
          </p></HeroItem>
          <HeroItem delay={0.4}><nav className="flex items-center justify-center gap-2 mt-8 text-xs text-[#E6EEF5]/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </nav></HeroItem>
        </div>
      </section>

      {/* ─── MAIN ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 xl:gap-10">

            {/* ── LEFT COLUMN: Info + Map ───────────────────────── */}
            <SlideLeft className="space-y-6">

              {/* Contact Details */}
              <div className="bg-[#003366] rounded-2xl p-7">
                <h2 className="text-white font-bold text-lg mb-6">Contact Information</h2>
                <div className="space-y-5">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#E6EEF5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[#E6EEF5]/55 text-xs font-bold tracking-widest uppercase mb-1">Phone (Oman)</div>
                      <a href="tel:+96824546411" className="text-white text-sm font-semibold hover:text-[#E6EEF5] transition-colors block">+968 245 46411</a>
                      <a href="tel:+96824545229" className="text-[#E6EEF5]/75 text-sm hover:text-white transition-colors block">+968 245 45229</a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#E6EEF5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[#E6EEF5]/55 text-xs font-bold tracking-widest uppercase mb-1">Email</div>
                      <a href="mailto:info@cathodiccontrol.com" className="text-white text-sm font-semibold hover:text-[#E6EEF5] transition-colors break-all">info@cathodiccontrol.com</a>
                    </div>
                  </div>

                  {/* Fax */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#E6EEF5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[#E6EEF5]/55 text-xs font-bold tracking-widest uppercase mb-1">Fax</div>
                      <span className="text-[#E6EEF5]/80 text-sm">+968 245 45802</span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#E6EEF5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[#E6EEF5]/55 text-xs font-bold tracking-widest uppercase mb-1">Head Office</div>
                      <p className="text-[#E6EEF5]/80 text-sm leading-relaxed">Plot No. 86, Phase 3, Peenya<br />Bengaluru, Karnataka 560058, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="bg-white rounded-2xl overflow-hidden border border-[#E6EEF5] shadow-sm">
                <div className="px-5 pt-5 pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[#003366] text-xs font-bold tracking-widest uppercase">Head Office — India</div>
                      <p className="text-[#64748B] text-xs mt-0.5">Plot No. 86, Phase 3, Peenya, Bengaluru 560058</p>
                    </div>
                    <a
                      href="https://maps.google.com/maps?q=13.0233769,77.5191861"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#003366] text-xs font-semibold hover:underline"
                    >
                      Directions ↗
                    </a>
                  </div>
                </div>
                <div style={{ height: '220px' }}>
                  <iframe
                    title="Cathodic Control — Bengaluru Office"
                    src="https://maps.google.com/maps?q=13.0233769,77.5191861&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

            </SlideLeft>

            {/* ── RIGHT 2 COLS: Form + Offices ─────────────────── */}
            <SlideRight className="lg:col-span-2 space-y-8">

              {/* Contact Form */}
              <div className="bg-white rounded-2xl border border-[#E6EEF5] p-8 shadow-sm">
                <div className="mb-7">
                  <span className="text-[#003366] text-xs font-bold tracking-widest uppercase">Send a Message</span>
                  <h2 className="text-2xl font-bold text-[#003366] mt-1.5">Tell Us About Your Project</h2>
                  <p className="text-[#64748B] text-sm mt-1.5 leading-relaxed">
                    Our engineering team will respond within one business day.
                  </p>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-14 text-center">
                    <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mb-5">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-[#003366] text-xl mb-2">Message Received</h3>
                    <p className="text-[#64748B] text-sm max-w-sm leading-relaxed mb-6">
                      Thank you for reaching out. One of our engineers will review your inquiry and respond within one business day.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                      className="text-[#003366] text-sm font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#003366] mb-2 tracking-wide uppercase">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text" required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E6EEF5] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003366]/15 focus:border-[#003366] text-sm text-[#1E293B] placeholder-[#94A3B8] transition-all"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#003366] mb-2 tracking-wide uppercase">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email" required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E6EEF5] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003366]/15 focus:border-[#003366] text-sm text-[#1E293B] placeholder-[#94A3B8] transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#003366] mb-2 tracking-wide uppercase">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E6EEF5] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003366]/15 focus:border-[#003366] text-sm text-[#1E293B] placeholder-[#94A3B8] transition-all"
                          placeholder="+968 000 00000"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#003366] mb-2 tracking-wide uppercase">
                          Subject <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text" required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E6EEF5] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003366]/15 focus:border-[#003366] text-sm text-[#1E293B] placeholder-[#94A3B8] transition-all"
                          placeholder="e.g. Pipeline CP Design"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#003366] mb-2 tracking-wide uppercase">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        required rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E6EEF5] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003366]/15 focus:border-[#003366] text-sm text-[#1E293B] placeholder-[#94A3B8] transition-all resize-none"
                        placeholder="Describe your project, asset type, or the corrosion challenge you're facing..."
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center gap-2 bg-[#003366] hover:bg-[#002244] disabled:bg-[#003366]/60 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-colors cursor-pointer disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </>
                        )}
                      </button>
                      <p className="text-[#94A3B8] text-xs">Typically responds within 1 business day.</p>
                    </div>
                  </form>
                )}
              </div>


            </SlideRight>
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ───────────────────────────────────────────────── */}
      <section className="py-12 bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Stagger className="grid sm:grid-cols-3 gap-4">
            {[
              { href: '/services', label: 'Our Services', desc: 'Full lifecycle CP services' },
              { href: '/products', label: 'Our Products', desc: 'CP equipment & materials' },
              { href: '/applications', label: 'Applications', desc: 'Onshore, offshore & marine' },
            ].map((link) => (
              <StaggerItem key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center justify-between p-5 rounded-xl border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-200"
                >
                  <div>
                    <div className="text-white font-bold text-sm">{link.label}</div>
                    <div className="text-[#E6EEF5]/50 text-xs mt-0.5">{link.desc}</div>
                  </div>
                  <svg className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}

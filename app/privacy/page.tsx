import Link from 'next/link'
import Image from 'next/image'
import { HeroItem } from '@/components/motion'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Cathodic Control Company',
  description:
    'Privacy Policy for Cathodic Control Company — how we collect, use, and protect your personal information.',
  robots: {
    index: false,
    follow: false,
  },
}

const sections = [
  {
    id: 'overview',
    title: '1. Overview',
    content: [
      'Cathodic Control Company Pvt. Ltd. ("Company", "we", "our", or "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, store, and disclose personal information when you visit our website at cathodiccontrol.com or contact us for engineering services.',
      'By using our website or submitting any form on it, you consent to the collection and use of your information in accordance with this Policy. We encourage you to read this Policy carefully.',
    ],
  },
  {
    id: 'collection',
    title: '2. Information We Collect',
    content: [
      'We collect information you voluntarily provide when you contact us through our enquiry form, email, or telephone. This may include your full name, email address, phone number, company name, job title, and the nature of your technical enquiry.',
      'We also automatically collect certain technical data when you visit our website, including your IP address, browser type and version, operating system, referring URLs, pages visited, and the date and time of your visit. This data is collected through standard server logs and analytics tools and does not identify you personally.',
      'We do not knowingly collect personal information from individuals under the age of 18. Our website and services are directed at professionals and business entities in the engineering and industrial sectors.',
    ],
  },
  {
    id: 'use',
    title: '3. How We Use Your Information',
    content: [
      'We use the information we collect for the following purposes:',
      '• To respond to your enquiries and provide information about our cathodic protection products and services.\n• To assess your technical requirements and prepare proposals, quotations, or project scopes.\n• To communicate with you regarding projects, orders, and ongoing service agreements.\n• To improve the content, functionality, and user experience of our website.\n• To comply with applicable legal and regulatory obligations.\n• To send you relevant industry updates or information about our services, where you have opted in to receive such communications.',
      'We will not use your personal information for purposes incompatible with those stated above without your prior consent.',
    ],
  },
  {
    id: 'sharing',
    title: '4. Sharing of Information',
    content: [
      'We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following limited circumstances:',
      '• With our subsidiary offices and affiliated entities in Oman, India, Qatar, UAE, and the United Kingdom — solely for the purpose of servicing your enquiry or project.\n• With trusted third-party service providers (such as IT infrastructure or analytics providers) who process data on our behalf under strict confidentiality agreements and only as necessary to deliver their service.\n• When required by law, regulation, court order, or governmental authority.\n• In connection with a merger, acquisition, or sale of all or a portion of our business assets, provided the acquiring entity agrees to treat personal information in accordance with this Policy.',
      'Any third parties with whom we share your data are required to handle it in compliance with applicable data protection laws and with a standard of care no less than that described in this Policy.',
    ],
  },
  {
    id: 'retention',
    title: '5. Data Retention',
    content: [
      'We retain personal information for as long as is necessary to fulfil the purposes for which it was collected, including any legal, accounting, or reporting obligations. Enquiry data from website forms is typically retained for up to three years unless an active business relationship exists, in which case records may be kept for the duration of the relationship and for a reasonable period thereafter.',
      'When personal information is no longer required, it is securely deleted or anonymised in accordance with our internal data management procedures.',
    ],
  },
  {
    id: 'security',
    title: '6. Data Security',
    content: [
      'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, accidental loss, alteration, disclosure, or destruction. These measures include secure server infrastructure, encrypted data transmission (SSL/TLS), and restricted internal access controls.',
      'However, no method of transmission over the internet or method of electronic storage is completely secure. While we strive to protect your personal data, we cannot guarantee its absolute security. If you become aware of any security vulnerability or breach, please notify us immediately at info@cathodiccontrol.com.',
    ],
  },
  {
    id: 'cookies',
    title: '7. Cookies & Analytics',
    content: [
      'Our website uses cookies — small text files placed on your device — to improve your browsing experience and help us understand how visitors interact with our content. We use the following types of cookies:',
      '• Strictly necessary cookies: Required for the website to function properly (e.g. session management). These cannot be disabled.\n• Analytics cookies: Used to collect aggregated, anonymised data about website traffic and usage patterns (e.g. via Google Analytics). This helps us improve our content and user experience.\n• Preference cookies: Used to remember your settings and preferences across visits.',
      'You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of parts of our website. By continuing to use our website without adjusting your cookie settings, you consent to our use of cookies as described above.',
    ],
  },
  {
    id: 'rights',
    title: '8. Your Rights',
    content: [
      'Depending on your location and applicable law, you may have the following rights regarding your personal information:',
      '• Right of access: You may request a copy of the personal information we hold about you.\n• Right to rectification: You may ask us to correct any inaccurate or incomplete personal information.\n• Right to erasure: You may request that we delete your personal information, subject to our legal obligations and legitimate business interests.\n• Right to restriction: You may ask us to restrict the processing of your personal information in certain circumstances.\n• Right to object: You may object to our processing of your personal information for direct marketing purposes at any time.\n• Right to data portability: Where applicable, you may request that we transfer your personal information to you or a third party in a structured, commonly used format.',
      'To exercise any of these rights, please contact us using the details in Section 10 below. We will respond to all legitimate requests within a reasonable timeframe and in accordance with applicable law.',
    ],
  },
  {
    id: 'third-party-links',
    title: '9. Third-Party Links',
    content: [
      'Our website may contain links to third-party websites. This Privacy Policy applies solely to information collected by our website. We are not responsible for the privacy practices or content of any third-party websites. We encourage you to review the privacy policies of any external sites you visit.',
    ],
  },
  {
    id: 'contact-privacy',
    title: '10. Contact & Complaints',
    content: [
      'If you have any questions, concerns, or requests regarding this Privacy Policy or the way we handle your personal information, please contact us at:',
      'Cathodic Control Company Pvt. Ltd.\nP.O Box: 201, PC. 132 Al Khoudh, Sultanate of Oman\nEmail: info@cathodiccontrol.com\nPhone: +968 245 46411',
      'If you are not satisfied with our response, you may have the right to lodge a complaint with the relevant data protection authority in your jurisdiction.',
    ],
  },
  {
    id: 'changes',
    title: '11. Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. The revised Policy will be posted on this page with an updated "Last updated" date. We encourage you to review this page periodically.',
      'Your continued use of our website following any changes constitutes your acceptance of the updated Privacy Policy.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section className="relative flex items-center" style={{ minHeight: '340px' }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=85"
            alt="Privacy Policy"
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(105deg,rgba(0,15,40,0.97) 0%,rgba(0,38,84,0.90) 55%,rgba(0,51,102,0.70) 100%)' }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full text-center">
          <HeroItem delay={0.1}><span className="text-[#E6EEF5] text-xs font-bold tracking-widest uppercase">Legal</span></HeroItem>
          <HeroItem delay={0.2}><h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4 leading-tight">Privacy Policy</h1></HeroItem>
          <HeroItem delay={0.3}><p className="text-[#E6EEF5]/70 text-base max-w-xl mx-auto">
            How we collect, use, and protect your personal information.
          </p></HeroItem>
          <HeroItem delay={0.4}><nav className="flex items-center justify-center gap-2 mt-8 text-xs text-[#E6EEF5]/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Privacy Policy</span>
          </nav></HeroItem>
        </div>
      </section>

      {/* ─── CONTENT ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">

            {/* Sticky sidebar — table of contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-[#003366] text-xs font-bold tracking-widest uppercase mb-4">On This Page</p>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-[#64748B] hover:text-[#003366] py-1.5 px-3 rounded-lg hover:bg-[#F8FAFC] transition-colors"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 p-4 bg-[#F8FAFC] border border-[#E6EEF5] rounded-xl">
                  <p className="text-xs text-[#64748B] leading-relaxed mb-3">
                    Privacy questions or requests?
                  </p>
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-[#003366] hover:underline"
                  >
                    Contact Us →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-3">
              <div className="mb-10 pb-8 border-b border-[#E6EEF5]">
                <p className="text-[#64748B] text-sm leading-relaxed">
                  <span className="font-semibold text-[#003366]">Last updated: May 2026.</span>{' '}
                  This Privacy Policy describes how Cathodic Control Company Pvt. Ltd. collects, uses,
                  and safeguards personal information in connection with our website and business activities.
                </p>
              </div>

              <div className="space-y-12">
                {sections.map((section) => (
                  <div key={section.id} id={section.id} className="scroll-mt-28">
                    <h2 className="text-xl font-bold text-[#003366] mb-5 pb-3 border-b border-[#E6EEF5]">
                      {section.title}
                    </h2>
                    <div className="space-y-4">
                      {section.content.map((para, i) => (
                        <p key={i} className="text-[#475569] text-sm leading-relaxed whitespace-pre-line">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div className="mt-14 p-6 bg-[#F8FAFC] border border-[#E6EEF5] rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#003366] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#003366] font-bold text-sm mb-1">Your Privacy Matters</p>
                    <p className="text-[#64748B] text-sm leading-relaxed">
                      If you wish to exercise your rights or have any concerns about how we handle
                      your data, please{' '}
                      <Link href="/contact" className="text-[#003366] font-semibold hover:underline">
                        contact us
                      </Link>
                      {' '}and we will respond promptly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── RELATED ─────────────────────────────────────────────────── */}
      <section className="py-12 bg-[#F8FAFC] border-t border-[#E6EEF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-[#003366] font-semibold text-sm">Also see our Terms & Conditions</p>
              <p className="text-[#64748B] text-xs mt-0.5">The rules and regulations governing the use of our website.</p>
            </div>
            <Link
              href="/terms"
              className="shrink-0 inline-flex items-center gap-2 border border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
            >
              Terms & Conditions →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

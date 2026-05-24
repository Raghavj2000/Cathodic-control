import Link from 'next/link'
import Image from 'next/image'
import { HeroItem, FadeUp } from '@/components/motion'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Cathodic Control Company',
  description:
    'Terms and conditions governing the use of the Cathodic Control Company website and services.',
  robots: {
    index: false,
    follow: false,
  },
}

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: [
      'By accessing or using the website of Cathodic Control Company Pvt. Ltd. ("Company", "we", "our", or "us") at cathodiccontrol.com, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms in their entirety, you must not use this website.',
      'These Terms apply to all visitors, users, and others who access or use the website. We reserve the right to modify these Terms at any time. Your continued use of the website following the posting of revised Terms constitutes your acceptance of those changes.',
    ],
  },
  {
    id: 'use',
    title: '2. Use of the Website',
    content: [
      'You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict or inhibit anyone else\'s use and enjoyment of the website.',
      'Prohibited conduct includes, but is not limited to: transmitting any material that is unlawful, defamatory, offensive, or fraudulent; attempting to gain unauthorised access to any part of the website or its related systems; introducing viruses, trojans, or other malicious code; and using automated tools to scrape, crawl, or data-mine the website without our prior written consent.',
      'We reserve the right to restrict or terminate your access to the website at any time, without notice, for any breach of these Terms.',
    ],
  },
  {
    id: 'ip',
    title: '3. Intellectual Property',
    content: [
      'All content published on this website — including but not limited to text, graphics, logos, images, technical documentation, and software — is the property of Cathodic Control Company Pvt. Ltd. or its content suppliers and is protected by applicable intellectual property laws.',
      'You may access and view content on this website for your personal, non-commercial reference only. You may not reproduce, distribute, modify, create derivative works from, publicly display, or commercially exploit any content from this website without our express prior written permission.',
      'The Cathodic Control Company name, logo, and all related product and service names are trademarks of Cathodic Control Company Pvt. Ltd. You must not use such marks without our prior written permission.',
    ],
  },
  {
    id: 'information',
    title: '4. Technical Information & Accuracy',
    content: [
      'The technical information, specifications, and service descriptions on this website are provided for general informational purposes only. While we strive to ensure accuracy, the information does not constitute professional engineering advice and must not be relied upon as the sole basis for engineering decisions.',
      'Cathodic protection systems must be designed and installed by qualified engineers to applicable standards (NACE, ISO, DNV, etc.) for each specific asset and environment. The specifications and performance data referenced on this website are indicative and subject to change without notice.',
      'We make no representations or warranties, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of any information, products, or services described on this website.',
    ],
  },
  {
    id: 'liability',
    title: '5. Limitation of Liability',
    content: [
      'To the fullest extent permitted by applicable law, Cathodic Control Company Pvt. Ltd., its directors, employees, partners, and agents shall not be liable for any indirect, incidental, consequential, special, or exemplary damages — including loss of profits, data, goodwill, or business interruption — arising out of or in connection with your use of, or inability to use, this website or its content.',
      'Our total liability to you for any claim arising out of or relating to these Terms or your use of this website shall not exceed the amount, if any, paid by you to us in the twelve months preceding the event giving rise to the claim.',
      'Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited under applicable law.',
    ],
  },
  {
    id: 'third-party',
    title: '6. Third-Party Links',
    content: [
      'This website may contain links to third-party websites for reference or convenience. These links are provided solely as a convenience to you. We do not endorse the content, products, services, or views expressed on any third-party website, and we are not responsible for the content, privacy practices, or terms of any linked website.',
      'Your access to and use of any third-party website is entirely at your own risk and subject to that website\'s own terms and conditions.',
    ],
  },
  {
    id: 'governing',
    title: '7. Governing Law & Jurisdiction',
    content: [
      'These Terms and Conditions shall be governed by and construed in accordance with the laws of the Sultanate of Oman. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of the Sultanate of Oman.',
      'If any provision of these Terms is found to be invalid, unlawful, or unenforceable, such provision shall be severed and the remaining provisions shall continue in full force and effect.',
    ],
  },
  {
    id: 'contact-terms',
    title: '8. Contact',
    content: [
      'If you have any questions about these Terms and Conditions, please contact us at:',
      'Cathodic Control Company Pvt. Ltd.\nP.O Box: 201, PC. 132 Al Khoudh, Sultanate of Oman\nEmail: info@cathodiccontrol.com\nPhone: +968 245 46411',
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section className="relative flex items-center" style={{ minHeight: '340px' }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=85"
            alt="Terms and Conditions"
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
          <HeroItem delay={0.2}><h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4 leading-tight">Terms & Conditions</h1></HeroItem>
          <HeroItem delay={0.3}><p className="text-[#E6EEF5]/70 text-base max-w-xl mx-auto">
            Please read these terms carefully before using our website or services.
          </p></HeroItem>
          <HeroItem delay={0.4}><nav className="flex items-center justify-center gap-2 mt-8 text-xs text-[#E6EEF5]/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Terms & Conditions</span>
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
                    Questions about our terms?
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
                  These Terms and Conditions govern your use of the Cathodic Control Company website
                  and outline the rules and regulations applicable to all visitors.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#003366] font-bold text-sm mb-1">Have Questions?</p>
                    <p className="text-[#64748B] text-sm leading-relaxed">
                      If you have questions about these Terms or need clarification on any matter,
                      our team is happy to help.{' '}
                      <Link href="/contact" className="text-[#003366] font-semibold hover:underline">
                        Get in touch →
                      </Link>
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
              <p className="text-[#003366] font-semibold text-sm">Also see our Privacy Policy</p>
              <p className="text-[#64748B] text-xs mt-0.5">How we collect, use, and protect your personal information.</p>
            </div>
            <Link
              href="/privacy"
              className="shrink-0 inline-flex items-center gap-2 border border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
            >
              Privacy Policy →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

import Link from 'next/link'
import Image from 'next/image'

const companyLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/quality-policy', label: 'Quality Policy' },
  { href: '/contact', label: 'Partners & Clients' },
]

const solutionLinks = [
  { href: '/applications', label: 'Applications' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-[#E6EEF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* 1 — Brand info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/assets/cathodic logo.png"
                alt="Cathodic Control Company"
                width={130}
                height={34}
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-[#E6EEF5]/70 mt-4">
              Protecting infrastructure with advanced engineering solutions since 1980. Comprehensive services in
              Cathodic Protection of offshore and onshore structures.
            </p>
            {/* Contact quick info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#E6EEF5]/70">
                <svg className="w-3.5 h-3.5 text-[#E6EEF5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@cathodiccontrol.com
              </div>
              <div className="flex items-center gap-2 text-xs text-[#E6EEF5]/70">
                <svg className="w-3.5 h-3.5 text-[#E6EEF5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Plot No. 86, Phase 3, Peenya, Bengaluru 560058
              </div>
            </div>
          </div>

          {/* 2 — Company links */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={`company-${link.href}-${link.label}`}>
                  <Link href={link.href} className="text-sm text-[#E6EEF5]/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3 — Solutions links */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">Solutions</h4>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={`solutions-${link.href}-${link.label}`}>
                  <Link href={link.href} className="text-sm text-[#E6EEF5]/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mt-8 mb-5">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-[#E6EEF5]/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-[#E6EEF5]/70 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* 4 — CTA */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5">
              Looking for a Solution?
            </h4>
            <p className="text-sm text-[#E6EEF5]/70 mb-5">
              Our experts are ready to engineer the right cathodic protection system for your infrastructure.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#E6EEF5] text-[#003366] text-sm font-semibold px-5 py-3 rounded transition-colors"
            >
              Schedule a Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {/* Presence badge */}
            <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-[#E6EEF5] text-xs font-bold tracking-widest uppercase mb-2">Global Presence</div>
              <div className="flex flex-wrap gap-1.5">
                {['🇮🇳 India', '🇴🇲 Oman', '🇶🇦 Qatar', '🇦🇪 UAE', '🇬🇧 UK'].map((country) => (
                  <span key={country} className="text-xs text-[#E6EEF5]/70 bg-white/5 rounded px-2 py-0.5">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#E6EEF5]/50">
            © {new Date().getFullYear()} Cathodic Control Company Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-[#E6EEF5]/50 hover:text-[#E6EEF5] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-[#E6EEF5]/50 hover:text-[#E6EEF5] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

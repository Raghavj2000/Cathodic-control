import Link from 'next/link'
import type { Metadata } from 'next'
import { HeroItem } from '@/components/motion'

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#003366] overflow-hidden pt-20">

      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: '#E6EEF5' }} />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto">

        {/* 404 */}
        <HeroItem delay={0.05}>
          <div className="text-[120px] sm:text-[160px] font-bold leading-none text-white/10 select-none">
            404
          </div>
        </HeroItem>

        {/* Icon */}
        <HeroItem delay={0.15}>
          <div className="flex justify-center -mt-8 mb-6">
            <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
              <svg className="w-9 h-9 text-[#E6EEF5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </HeroItem>

        {/* Heading */}
        <HeroItem delay={0.25}>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
        </HeroItem>

        {/* Description */}
        <HeroItem delay={0.35}>
          <p className="text-[#E6EEF5]/70 text-base sm:text-lg leading-relaxed mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let us guide you back to the right place.
          </p>
        </HeroItem>

        {/* CTAs */}
        <HeroItem delay={0.45}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto bg-white hover:bg-[#E6EEF5] text-[#003366] font-bold px-8 py-3.5 rounded text-sm transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto border border-white/25 hover:border-white/50 hover:bg-white/5 text-white font-semibold px-8 py-3.5 rounded text-sm transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </HeroItem>

        {/* Quick links */}
        <HeroItem delay={0.55}>
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-[#E6EEF5]/50 text-xs font-bold tracking-widest uppercase mb-4">
              Or explore
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: '/services',       label: 'Services' },
                { href: '/products',       label: 'Products' },
                { href: '/applications',   label: 'Applications' },
                { href: '/about',          label: 'About Us' },
                { href: '/quality-policy', label: 'Quality Policy' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#E6EEF5]/60 hover:text-white text-sm transition-colors hover:underline underline-offset-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </HeroItem>

      </div>
    </section>
  )
}

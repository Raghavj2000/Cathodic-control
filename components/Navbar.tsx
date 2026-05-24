'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/applications', label: 'Applications' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/quality-policy', label: 'Quality Policy' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)

  // ── Scroll detection via direct DOM — zero React re-renders ──────────
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const update = () => {
      if (window.scrollY > 24) {
        nav.setAttribute('data-scrolled', '')
      } else {
        nav.removeAttribute('data-scrolled')
      }
    }

    update() // run once on mount to set initial state
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <>
      {/* nav starts transparent; CSS handles solid state via [data-scrolled] */}
      <nav
        ref={navRef}
        // Non-home pages start solid immediately (before JS hydrates)
        data-scrolled={undefined}
        className="
          group fixed top-0 left-0 right-0 z-50
          transition-[background-color,box-shadow] duration-300 ease-in-out
          bg-transparent
          data-[scrolled]:bg-white/[0.97]
          data-[scrolled]:shadow-[0_1px_0_0_rgba(0,0,0,0.08)]
          data-[scrolled]:backdrop-blur-md
        "
      >
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="relative flex items-center justify-between h-18">

            {/* ── Logo ── */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href="/" className="shrink-0 flex items-center" aria-label="Cathodic Control Company — Home">
                <Image
                  src="/assets/cathodic logo.png"
                  alt="Cathodic Control Company"
                  width={110}
                  height={28}
                  className="object-contain"
                  priority
                />
              </Link>
            </motion.div>

            {/* ── Desktop nav ── */}
            <motion.div
              className="hidden lg:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              {navLinks.map((link, i) => {
                const active = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`
                        relative px-4 py-2.5 text-sm rounded-lg
                        transition-[color,background-color,font-weight] duration-200
                        ${active
                          ? 'text-white font-semibold group-data-[scrolled]:text-[#003366] group-data-[scrolled]:bg-[#EEF4FB]'
                          : 'text-white/75 font-medium hover:text-white hover:bg-white/10 group-data-[scrolled]:text-[#64748B] group-data-[scrolled]:hover:text-[#003366] group-data-[scrolled]:hover:bg-[#F8FAFC]'
                        }
                      `}
                    >
                      {link.label}
                      {active && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-white group-data-[scrolled]:bg-[#003366] transition-colors duration-200" />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* ── Right actions ── */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >

              {/* Phone — xl only */}
              <a
                href="tel:+96824546411"
                className="hidden xl:flex items-center gap-2 text-xs font-medium transition-colors duration-200
                  text-white/65 hover:text-white
                  group-data-[scrolled]:text-[#64748B] group-data-[scrolled]:hover:text-[#003366]"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +968 245 46411
              </a>

              {/* Divider */}
              <div className="hidden xl:block w-px h-5 transition-colors duration-200
                bg-white/20 group-data-[scrolled]:bg-gray-200" />

              {/* CTA — border always present to keep box-model stable */}
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold
                  border transition-[color,background-color,border-color] duration-200 cursor-pointer
                  border-white/40 text-white bg-transparent hover:bg-white hover:text-[#003366] hover:border-white
                  group-data-[scrolled]:border-[#003366] group-data-[scrolled]:bg-[#003366] group-data-[scrolled]:text-white
                  group-data-[scrolled]:hover:bg-[#002244] group-data-[scrolled]:hover:border-[#002244]"
              >
                Get in Touch
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Hamburger */}
              <button
                className="lg:hidden p-2 rounded-lg transition-[color,background-color] duration-200 cursor-pointer
                  text-white hover:bg-white/10
                  group-data-[scrolled]:text-[#003366] group-data-[scrolled]:hover:bg-[#EEF4FB]"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom rule — always in DOM, CSS opacity toggle */}
        <div className="absolute bottom-0 left-0 right-0 h-px
          bg-linear-to-r from-transparent via-gray-200 to-transparent
          opacity-0 group-data-[scrolled]:opacity-100
          transition-opacity duration-300" />
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className={`fixed inset-x-0 top-18 z-40 lg:hidden transition-all duration-300 ease-in-out ${
          mobileOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
      >
        <div className="bg-white shadow-2xl border-t border-gray-100 rounded-b-2xl mx-2 overflow-hidden">
          <div className="px-4 pt-3 pb-2 space-y-0.5">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm font-medium transition-colors duration-150 ${
                    active
                      ? 'text-[#003366] bg-[#EEF4FB] font-semibold'
                      : 'text-[#64748B] hover:text-[#003366] hover:bg-[#F8FAFC]'
                  }`}
                >
                  {link.label}
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-[#003366] shrink-0" />}
                </Link>
              )
            })}
          </div>

          <div className="px-4 pb-5 pt-2 border-t border-gray-100">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#003366] hover:bg-[#002244] text-white text-sm font-bold py-3.5 px-4 rounded-xl transition-colors duration-200 mt-2"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+96824546411"
              className="flex items-center justify-center gap-2 text-[#64748B] text-xs mt-3 hover:text-[#003366] transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +968 245 46411
            </a>
          </div>
        </div>

        {/* Tap-outside backdrop */}
        <div
          className="absolute inset-x-0 top-full h-screen bg-black/20 -z-10"
          onClick={() => setMobileOpen(false)}
        />
      </div>
    </>
  )
}

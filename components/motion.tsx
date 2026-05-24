'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, type Variants, type HTMLMotionProps } from 'framer-motion'

// ─── Shared easing curve ──────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as const

// ─── Shared variants ──────────────────────────────────────────────────────────
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.55, ease } },
}

const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease } },
}

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const heroContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
}

// ─── Shared viewport config ───────────────────────────────────────────────────
const vp = { once: true, margin: '-60px' }

// ─── Types ────────────────────────────────────────────────────────────────────
type ChildProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

// ─── Scroll-triggered components ─────────────────────────────────────────────

/** Fades up from below as element enters viewport */
export function FadeUp({ children, className = '', delay = 0 }: ChildProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      variants={fadeUpVariants}
      transition={{ duration: 0.6, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Simple opacity fade as element enters viewport */
export function FadeIn({ children, className = '', delay = 0 }: ChildProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      variants={fadeInVariants}
      transition={{ duration: 0.55, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Scales up from slightly smaller as element enters viewport */
export function ScaleIn({ children, className = '', delay = 0 }: ChildProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      variants={scaleInVariants}
      transition={{ duration: 0.55, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Slides in from the left */
export function SlideLeft({ children, className = '', delay = 0 }: ChildProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -44 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={vp}
      transition={{ duration: 0.65, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Slides in from the right */
export function SlideRight({ children, className = '', delay = 0 }: ChildProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 44 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={vp}
      transition={{ duration: 0.65, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * Stagger container — children with StaggerItem animate in sequence
 * as the container enters viewport
 */
export function Stagger({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Must be a direct child of <Stagger> */
export function StaggerItem({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div variants={fadeUpVariants} className={className}>
      {children}
    </motion.div>
  )
}

// ─── Hero components (animate on mount, not scroll) ───────────────────────────

/**
 * Animates immediately on mount with a configurable delay.
 * Use multiple HeroItems with staggered delays for hero sequences.
 * Works as a standalone element — no parent wrapper required.
 */
export function HeroItem({ children, className = '', delay = 0 }: ChildProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Hover card ───────────────────────────────────────────────────────────────

/** Wraps a card with a subtle lift on hover */
export function HoverCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Count-up number animation ───────────────────────────────────────────────

/**
 * Animates a number from 0 to `to` when it scrolls into view.
 * Renders as a <span> — place it inline inside any text element.
 *
 * @example <CountUp to={500} suffix="+" /> → "0" … "500+"
 */
export function CountUp({
  to,
  suffix = '',
  duration = 1800,
  className = '',
}: {
  to: number
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const startTime = performance.now()

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * to))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, to, duration])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}

// ─── Re-export motion for direct use in client components ─────────────────────
export { motion }

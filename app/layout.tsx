import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const BASE_URL = 'https://www.cathodiccontrol.com'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Cathodic Control Company | Cathodic Protection Engineering Since 1984',
    template: '%s | Cathodic Control Company',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  description:
    'Leading cathodic protection engineering company. Expert ICCP and sacrificial anode systems for pipelines, offshore platforms, marine vessels and process equipment. Serving Oman, UAE, Qatar, India and UK since 1980.',
  keywords: [
    'cathodic protection',
    'corrosion control',
    'ICCP',
    'impressed current cathodic protection',
    'sacrificial anodes',
    'pipeline protection',
    'offshore cathodic protection',
    'CP engineering',
    'corrosion engineering',
    'MMO anodes',
    'transformer rectifier',
    'pipeline integrity',
    'cathodic protection company',
    'NACE',
    'ISO 15589',
    'corrosion inhibition',
    'marine cathodic protection',
    'offshore corrosion',
    'cathodic protection Oman',
    'cathodic protection India',
  ],
  authors: [{ name: 'Cathodic Control Company Pvt. Ltd.' }],
  creator: 'Cathodic Control Company Pvt. Ltd.',
  publisher: 'Cathodic Control Company Pvt. Ltd.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Cathodic Control Company',
    title: 'Cathodic Control Company | Cathodic Protection Engineering Since 1980',
    description:
      'Leading cathodic protection engineering company. Expert ICCP and sacrificial anode systems for pipelines, offshore platforms, marine vessels and process equipment.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cathodic Control Company — Cathodic Protection Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cathodic Control Company | Cathodic Protection Engineering Since 1980',
    description:
      'Leading cathodic protection engineering company. ICCP and sacrificial anode systems for pipelines, offshore platforms, marine vessels and process equipment.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: 'engineering',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cathodic Control Company Pvt. Ltd.',
  url: BASE_URL,
  logo: `${BASE_URL}/assets/cathodic%20logo.png`,
  foundingDate: '1980',
  description:
    'End-to-end cathodic protection engineering company specialising in ICCP and sacrificial anode systems for onshore pipelines, offshore platforms, marine vessels and industrial process equipment.',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+96824546411',
      contactType: 'customer service',
      areaServed: ['OM', 'IN', 'QA', 'AE', 'GB'],
      availableLanguage: 'English',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot No. 86, Phase 3, Peenya',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560058',
    addressCountry: 'IN',
  },
  email: 'info@cathodiccontrol.com',
  sameAs: [],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Cathodic Control Company',
  url: BASE_URL,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Cathodic Control Company. Contact our engineering team for cathodic protection enquiries, project consultations, and product quotations. Offices in Oman, India, Qatar, UAE and the United Kingdom.',
  keywords: [
    'contact cathodic protection company',
    'CP engineering enquiry',
    'cathodic protection consultation',
    'cathodic protection Oman contact',
    'corrosion engineering contact',
  ],
  alternates: {
    canonical: 'https://www.cathodiccontrol.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Cathodic Control Company',
    description:
      'Get in touch with our engineering team for cathodic protection enquiries and project consultations. Offices in Oman, India, Qatar, UAE and UK.',
    url: 'https://www.cathodiccontrol.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

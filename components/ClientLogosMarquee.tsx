'use client'

import { useState } from 'react'

type Client = {
  abbr: string
  short: string
  sub: string
  logo: string
}

const TOKEN = 'pk_Txvq-Z10RA2xJ-ioMO3WXw'
const logo = (domain: string) => `https://img.logo.dev/${domain}?token=${TOKEN}`

const row1: Client[] = [
  { abbr: 'IOCL', short: 'Indian Oil',           sub: 'India', logo: logo('iocl.com') },
  { abbr: 'BPCL', short: 'Bharat Petroleum',      sub: 'India', logo: logo('bharatpetroleum.com') },
  { abbr: 'HPCL', short: 'Hindustan Petroleum',   sub: 'India', logo: logo('hindustanpetroleum.com') },
  { abbr: 'ONGC', short: 'ONGC',                  sub: 'India', logo: logo('ongcindia.com') },
  { abbr: 'GAIL', short: 'GAIL India',             sub: 'India', logo: logo('gailonline.com') },
  { abbr: 'PDO',  short: 'Petroleum Dev. Oman',   sub: 'Oman',  logo: logo('pdo.co.om') },
  { abbr: 'OGC',  short: 'Oman Gas Company',      sub: 'Oman',  logo: logo('ogcompany.net') },
]

const row2: Client[] = [
  { abbr: 'IN',   short: 'Indian Navy',            sub: 'Ministry of Defence',    logo: logo('indiannavy.nic.in') },
  { abbr: 'ICG',  short: 'Indian Coast Guard',     sub: 'Ministry of Defence',    logo: logo('indiancoastguard.gov.in') },
  { abbr: 'BARC', short: 'BARC',                   sub: 'Dept. of Atomic Energy', logo: logo('barc.gov.in') },
  { abbr: 'MDL',  short: 'Mazagon Dock',            sub: 'Mumbai',                 logo: logo('mazagondock.in') },
  { abbr: 'GRSE', short: 'Garden Reach Shipbuilders', sub: 'Kolkata',              logo: logo('grse.in') },
  { abbr: 'CSL',  short: 'Cochin Shipyard',         sub: 'Kochi',                  logo: logo('cochinshipyard.com') },
  { abbr: 'HSL',  short: 'Hindustan Shipyard',      sub: 'Visakhapatnam',          logo: logo('hslvizag.in') },
]

function LogoCard({ client }: { client: Client }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="shrink-0 flex items-center gap-3.5 bg-white border border-[#E6EEF5] rounded-2xl px-5 py-3.5 shadow-sm hover:shadow-md hover:border-[#003366]/20 transition-all duration-200 cursor-default select-none min-w-[210px]">
      {/* Logo / fallback */}
      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 overflow-hidden bg-[#F8FAFC] border border-[#E6EEF5]">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={client.logo}
            alt={client.short}
            width={36}
            height={36}
            className="w-9 h-9 object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-[#003366] flex items-center justify-center rounded-xl">
            <span className="text-white text-[10px] font-bold leading-tight text-center px-0.5">
              {client.abbr}
            </span>
          </div>
        )}
      </div>

      {/* Text */}
      <div className="min-w-0">
        <div className="text-[#003366] text-sm font-semibold whitespace-nowrap leading-tight">
          {client.short}
        </div>
        <div className="text-[#94A3B8] text-xs leading-tight mt-0.5 whitespace-nowrap">
          {client.sub}
        </div>
      </div>
    </div>
  )
}

export default function ClientLogosMarquee() {
  const maskStyle: React.CSSProperties = {
    WebkitMaskImage:
      'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
    maskImage:
      'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
  }

  return (
    <div className="space-y-4">
      {/* Row 1 — scroll left */}
      <div className="overflow-hidden marquee-track" style={maskStyle}>
        <div className="flex gap-4 w-max animate-marquee-ltr py-1.5 px-2">
          {[...row1, ...row1].map((client, i) => (
            <LogoCard key={i} client={client} />
          ))}
        </div>
      </div>

      {/* Row 2 — scroll right */}
      <div className="overflow-hidden marquee-track" style={maskStyle}>
        <div className="flex gap-4 w-max animate-marquee-rtl py-1.5 px-2">
          {[...row2, ...row2].map((client, i) => (
            <LogoCard key={i} client={client} />
          ))}
        </div>
      </div>
    </div>
  )
}

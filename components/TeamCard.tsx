'use client'

import { useState } from 'react'

type TeamMember = {
  name: string
  role: string
  desc: string
  photo: string
  initials: string
}

export default function TeamCard({ member }: { member: TeamMember }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="group bg-white border border-[#E6EEF5] rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#003366]/15 transition-all duration-300">
      {/* Photo */}
      <div className="relative h-72 bg-[#E6EEF5] overflow-hidden">
        {!imgError ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-[#003366] flex items-center justify-center">
            <span className="text-white text-4xl font-bold tracking-wider">{member.initials}</span>
          </div>
        )}
        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-[#003366] font-bold text-lg leading-tight">{member.name}</h3>
        <p className="text-[#003366]/55 text-xs font-semibold tracking-widest uppercase mt-1 mb-4">
          {member.role}
        </p>
        <div className="w-8 h-0.5 bg-[#003366]/20 mb-4" />
        <p className="text-[#64748B] text-sm leading-relaxed">{member.desc}</p>
      </div>
    </div>
  )
}

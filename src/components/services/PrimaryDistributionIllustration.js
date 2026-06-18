import React from 'react';

export default function PrimaryDistributionIllustration() {
  return (
          <svg viewBox="0 0 480 420" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#071525"/><stop offset="100%" stopColor="#0A1E30"/></linearGradient>
        <linearGradient id="dvan" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#0F6E56"/><stop offset="100%" stopColor="#1D9E75"/></linearGradient>
        <linearGradient id="droute" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#1D9E75" stopOpacity="0.8"/><stop offset="100%" stopColor="#1D9E75" stopOpacity="0.2"/></linearGradient>
        <filter id="d-sh"><feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#040C1A" floodOpacity="0.40"/></filter>
        <filter id="d-sh2"><feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#040C1A" floodOpacity="0.18"/></filter>
        <filter id="d-glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="480" height="420" fill="url(#dbg)"/>
      {/* Map road network (faint lines) */}
      <line x1="0" y1="200" x2="480" y2="200" stroke="rgba(255,255,255,0.03)" strokeWidth="2"/>
      <line x1="240" y1="0" x2="240" y2="420" stroke="rgba(255,255,255,0.03)" strokeWidth="2"/>
      <circle cx="240" cy="210" r="160" fill="none" stroke="rgba(29,158,117,0.05)" strokeWidth="1"/>
      <circle cx="240" cy="210" r="100" fill="none" stroke="rgba(29,158,117,0.05)" strokeWidth="1"/>
      {/* Hub node — warehouse */}
      <rect x="26" y="165" width="110" height="90" rx="16" fill="#0F6E56" filter="url(#d-sh)"/>
      {/* Warehouse mini-icon */}
      <polygon points="81,178 110,196 52,196" fill="rgba(255,255,255,0.15)"/>
      <rect x="56" y="196" width="50" height="30" fill="rgba(255,255,255,0.1)"/>
      <rect x="72" y="208" width="18" height="18" fill="rgba(255,255,255,0.18)"/>
      <text x="81" y="240" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9.5" fontWeight="800" fill="#9FE1CB" letterSpacing="0.05em">WAREHOUSE</text>
      <text x="81" y="252" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.72)">Gurgaon</text>
      {/* Route paths — 3 arcs */}
      <path d="M136 190 Q230 90 316 76" stroke="url(#droute)" strokeWidth="2" strokeDasharray="7 5" fill="none"/>
      <path d="M136 210 Q230 210 316 210" stroke="#1D9E75" strokeWidth="2.5" strokeDasharray="7 5" fill="none"/>
      <path d="M136 230 Q230 320 316 340" stroke="url(#droute)" strokeWidth="2" strokeDasharray="7 5" fill="none"/>
      {/* Arrow markers */}
      <polygon points="312,72 320,76 312,80" fill="#1D9E75"/>
      <polygon points="312,206 320,210 312,214" fill="#1D9E75"/>
      <polygon points="312,336 320,340 312,344" fill="#1D9E75"/>
      {/* Moving van on middle route */}
      <g filter="url(#d-sh2)">
        {/* Van body */}
        <rect x="198" y="196" width="58" height="30" rx="6" fill="#fff"/>
        {/* Cargo box */}
        <rect x="198" y="200" width="36" height="22" rx="3" fill="url(#dvan)"/>
        {/* Cab */}
        <rect x="236" y="202" width="18" height="20" rx="3" fill="#5DCAA5"/>
        {/* Windshield */}
        <rect x="238" y="205" width="9" height="11" rx="1.5" fill="rgba(255,255,255,0.45)"/>
        {/* Headlight */}
        <rect x="250" y="209" width="4" height="7" rx="2" fill="#FFE580"/>
        {/* Wheels */}
        <circle cx="210" cy="228" r="7" fill="#0A1628"/>
        <circle cx="210" cy="228" r="3.5" fill="#fff"/>
        <circle cx="245" cy="228" r="7" fill="#0A1628"/>
        <circle cx="245" cy="228" r="3.5" fill="#fff"/>
        {/* Shubhlabh logo strip on van */}
        <rect x="202" y="213" width="28" height="5" rx="2.5" fill="rgba(255,255,255,0.4)"/>
      </g>
      {/* POD badge */}
      <rect x="152" y="174" width="56" height="24" rx="8" fill="#0F6E56" filter="url(#d-sh2)"/>
      <text x="180" y="189.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9.5" fontWeight="700" fill="#9FE1CB">POD ✓</text>
      {/* Destination node 1 — Wholesaler */}
      <rect x="320" y="48" width="144" height="60" rx="14" fill="#fff" filter="url(#d-sh)"/>
      <rect x="320" y="48" width="144" height="18" rx="14" fill="#E1F5EE"/>
      <rect x="320" y="58" width="144" height="8" fill="#E1F5EE"/>
      <text x="392" y="62" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fontWeight="800" fill="#085041" letterSpacing="0.06em">WHOLESALER</text>
      <text x="392" y="80" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="#1D9E75" fontWeight="600">Primary delivery</text>
      <text x="392" y="96" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="#5DCAA5">Same day · Bulk</text>
      {/* Destination node 2 — Retail */}
      <rect x="320" y="180" width="144" height="60" rx="14" fill="#fff" filter="url(#d-sh)"/>
      <rect x="320" y="180" width="144" height="18" rx="14" fill="#E1F5EE"/>
      <rect x="320" y="190" width="144" height="8" fill="#E1F5EE"/>
      <text x="392" y="194" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fontWeight="800" fill="#085041" letterSpacing="0.06em">RETAIL OUTLET</text>
      <text x="392" y="212" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="#1D9E75" fontWeight="600">Secondary delivery</text>
      <text x="392" y="228" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="#5DCAA5">24–48 hours · POD</text>
      {/* Destination node 3 — Modern trade */}
      <rect x="320" y="312" width="144" height="60" rx="14" fill="#fff" filter="url(#d-sh)"/>
      <rect x="320" y="312" width="144" height="18" rx="14" fill="#E1F5EE"/>
      <rect x="320" y="322" width="144" height="8" fill="#E1F5EE"/>
      <text x="392" y="326" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fontWeight="800" fill="#085041" letterSpacing="0.06em">MODERN TRADE</text>
      <text x="392" y="344" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="#1D9E75" fontWeight="600">Committed SLA</text>
      <text x="392" y="360" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="#5DCAA5">Beat plans · Route</text>
      {/* Floating counter bubble */}
      <circle cx="175" cy="340" r="36" fill="#0F6E56" filter="url(#d-sh2)"/>
      <text x="175" y="334" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="18" fontWeight="900" fill="#fff">2K+</text>
      <text x="175" y="350" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.72)">Outlets</text>
    </svg>
  );
}

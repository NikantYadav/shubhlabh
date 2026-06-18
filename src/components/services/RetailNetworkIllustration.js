import React from 'react';

export default function RetailNetworkIllustration() {
  return (
          <svg viewBox="0 0 480 420" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#071525"/><stop offset="100%" stopColor="#0A1E2E"/></linearGradient>
        <filter id="r-sh"><feDropShadow dx="0" dy="8" stdDeviation="14" floodColor="#040C1A" floodOpacity="0.4"/></filter>
        <filter id="r-sh2"><feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#040C1A" floodOpacity="0.2"/></filter>
      </defs>
      <rect width="480" height="420" fill="url(#rbg)"/>
      {/* Faint hex grid background */}
      <polygon points="240,10 292,40 292,100 240,130 188,100 188,40" fill="none" stroke="rgba(29,158,117,0.06)" strokeWidth="1"/>
      <polygon points="240,130 292,160 292,220 240,250 188,220 188,160" fill="none" stroke="rgba(29,158,117,0.06)" strokeWidth="1"/>
      <polygon points="136,70 188,100 188,160 136,190 84,160 84,100" fill="none" stroke="rgba(29,158,117,0.06)" strokeWidth="1"/>
      <polygon points="344,70 396,100 396,160 344,190 292,160 292,100" fill="none" stroke="rgba(29,158,117,0.06)" strokeWidth="1"/>
      {/* Large Gurgaon map outline */}
      <ellipse cx="240" cy="210" r="190" ry="145" fill="rgba(29,158,117,0.03)" stroke="rgba(29,158,117,0.08)" strokeWidth="1"/>
      {/* Main hex: DLF Phases (top centre, highlighted) */}
      <polygon points="240,36 300,70 300,138 240,172 180,138 180,70" fill="#0F6E56" filter="url(#r-sh)"/>
      <polygon points="240,44 294,76 294,130 240,162 186,130 186,76" fill="#0F6E56" opacity="0.7"/>
      <text x="240" y="95" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="14" fontWeight="900" fill="#fff">2000+</text>
      <text x="240" y="112" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9.5" fontWeight="700" fill="#9FE1CB">Outlets</text>
      <text x="240" y="128" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="rgba(255,255,255,0.7)">DLF 1–5</text>
      {/* Hex: Sohna Road (left) */}
      <polygon points="136,106 196,140 196,208 136,242 76,208 76,140" fill="rgba(29,158,117,0.12)" stroke="#1D9E75" strokeWidth="1.5" filter="url(#r-sh2)"/>
      <polygon points="136,114 190,146 190,202 136,234 82,202 82,146" fill="rgba(29,158,117,0.08)"/>
      <text x="136" y="172" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="10" fontWeight="700" fill="#9FE1CB">SOHNA</text>
      <text x="136" y="186" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="rgba(255,255,255,0.65)">Road</text>
      {/* Hex: Golf Course Road (right) */}
      <polygon points="344,106 404,140 404,208 344,242 284,208 284,140" fill="rgba(29,158,117,0.12)" stroke="#1D9E75" strokeWidth="1.5" filter="url(#r-sh2)"/>
      <polygon points="344,114 398,146 398,202 344,234 290,202 290,146" fill="rgba(29,158,117,0.08)"/>
      <text x="344" y="172" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#9FE1CB">GOLF COURSE</text>
      <text x="344" y="186" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="rgba(255,255,255,0.65)">Road</text>
      {/* Hex: Sector Markets (bottom left) */}
      <polygon points="136,242 196,276 196,344 136,378 76,344 76,276" fill="rgba(29,158,117,0.09)" stroke="#5DCAA5" strokeWidth="1.2" filter="url(#r-sh2)"/>
      <text x="136" y="307" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9.5" fontWeight="700" fill="#9FE1CB">SECTOR MKT</text>
      <text x="136" y="322" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="rgba(255,255,255,0.65)">1–115</text>
      {/* Hex: Cyber City (bottom centre, dark) */}
      <polygon points="240,172 300,206 300,274 240,308 180,274 180,206" fill="#085041" filter="url(#r-sh)"/>
      <polygon points="240,180 294,212 294,268 240,300 186,268 186,212" fill="#085041" opacity="0.8"/>
      <text x="240" y="236" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="10" fontWeight="800" fill="#9FE1CB">CYBER CITY</text>
      <text x="240" y="252" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="rgba(255,255,255,0.72)">+ Udyog Vihar</text>
      {/* Hex: New Gurgaon (bottom right) */}
      <polygon points="344,242 404,276 404,344 344,378 284,344 284,276" fill="rgba(29,158,117,0.09)" stroke="#5DCAA5" strokeWidth="1.2" filter="url(#r-sh2)"/>
      <text x="344" y="307" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9.5" fontWeight="700" fill="#9FE1CB">NEW GGN</text>
      <text x="344" y="322" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="rgba(255,255,255,0.65)">82–113</text>
      {/* 7+ zones badge */}
      <rect x="176" y="384" width="128" height="28" rx="10" fill="#0F6E56" filter="url(#r-sh2)"/>
      <text x="240" y="401" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="10" fontWeight="700" fill="#fff" letterSpacing="0.04em">7+ Active Zones</text>
      {/* Connecting dots */}
      <circle cx="240" cy="172" r="4" fill="#9FE1CB"/>
      <circle cx="180" cy="138" r="3" fill="#5DCAA5" opacity="0.7"/>
      <circle cx="300" cy="138" r="3" fill="#5DCAA5" opacity="0.7"/>
      <circle cx="180" cy="206" r="3" fill="#5DCAA5" opacity="0.5"/>
      <circle cx="300" cy="206" r="3" fill="#5DCAA5" opacity="0.5"/>
    </svg>
  );
}

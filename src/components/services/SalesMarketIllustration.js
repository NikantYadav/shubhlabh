import React from 'react';

export default function SalesMarketIllustration() {
  return (
          <svg viewBox="0 0 480 420" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#071525"/><stop offset="100%" stopColor="#0A1E30"/></linearGradient>
        <linearGradient id="sarea" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1D9E75" stopOpacity="0.35"/><stop offset="100%" stopColor="#1D9E75" stopOpacity="0.02"/></linearGradient>
        <linearGradient id="sline" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#5DCAA5"/><stop offset="100%" stopColor="#1D9E75"/></linearGradient>
        <filter id="s-card"><feDropShadow dx="0" dy="12" stdDeviation="18" floodColor="#040C1A" floodOpacity="0.45"/></filter>
        <filter id="s-sh2"><feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#040C1A" floodOpacity="0.2"/></filter>
        <filter id="s-glow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="480" height="420" fill="url(#sbg)"/>
      <ellipse cx="350" cy="120" rx="200" ry="130" fill="rgba(29,158,117,0.06)"/>
      {/* Chart card */}
      <rect x="24" y="28" width="334" height="258" rx="18" fill="#0C1A2E" filter="url(#s-card)" stroke="rgba(29,158,117,0.12)" strokeWidth="1"/>
      {/* Card header */}
      <rect x="24" y="28" width="334" height="44" rx="18" fill="#132244"/>
      <rect x="24" y="56" width="334" height="16" fill="#132244"/>
      <circle cx="44" cy="50" r="5.5" fill="#E24B4A"/>
      <circle cx="60" cy="50" r="5.5" fill="#EF9F27"/>
      <circle cx="76" cy="50" r="5.5" fill="#1D9E75"/>
      <text x="214" y="54" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9.5" fill="rgba(255,255,255,0.60)">Sales &amp; Volume — Monthly Growth</text>
      {/* Grid lines */}
      <line x1="64" y1="88" x2="64" y2="256" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <line x1="64" y1="110" x2="340" y2="110" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 3"/>
      <line x1="64" y1="145" x2="340" y2="145" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 3"/>
      <line x1="64" y1="180" x2="340" y2="180" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 3"/>
      <line x1="64" y1="215" x2="340" y2="215" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 3"/>
      <line x1="64" y1="250" x2="340" y2="250" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      {/* Y labels */}
      <text x="56" y="113" textAnchor="end" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="rgba(93,202,165,0.6)">4K</text>
      <text x="56" y="148" textAnchor="end" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="rgba(93,202,165,0.6)">3K</text>
      <text x="56" y="183" textAnchor="end" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="rgba(93,202,165,0.6)">2K</text>
      <text x="56" y="218" textAnchor="end" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="rgba(93,202,165,0.6)">1K</text>
      {/* X labels */}
      <text x="96" y="266" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="rgba(93,202,165,0.6)">M1</text>
      <text x="152" y="266" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="rgba(93,202,165,0.6)">M2</text>
      <text x="208" y="266" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="rgba(93,202,165,0.6)">M3</text>
      <text x="264" y="266" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="rgba(93,202,165,0.6)">M4</text>
      <text x="318" y="266" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="rgba(93,202,165,0.6)">M5</text>
      {/* Area fill */}
      <path d="M80,238 C108,218 130,202 152,188 C174,172 190,152 208,138 C226,118 248,104 264,90 C280,76 300,68 318,56 L318,250 L80,250 Z" fill="url(#sarea)"/>
      {/* Line */}
      <path d="M80,238 C108,218 130,202 152,188 C174,172 190,152 208,138 C226,118 248,104 264,90 C280,76 300,68 318,56" stroke="url(#sline)" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#s-glow)"/>
      {/* Data points */}
      <circle cx="80" cy="238" r="9" fill="rgba(29,158,117,0.2)"/>
      <circle cx="80" cy="238" r="5" fill="#0C1A2E" stroke="#5DCAA5" strokeWidth="2.5"/>
      <circle cx="152" cy="188" r="9" fill="rgba(29,158,117,0.2)"/>
      <circle cx="152" cy="188" r="5" fill="#0C1A2E" stroke="#5DCAA5" strokeWidth="2.5"/>
      <circle cx="208" cy="138" r="9" fill="rgba(29,158,117,0.2)"/>
      <circle cx="208" cy="138" r="5" fill="#0C1A2E" stroke="#5DCAA5" strokeWidth="2.5"/>
      <circle cx="264" cy="90" r="9" fill="rgba(29,158,117,0.2)"/>
      <circle cx="264" cy="90" r="5" fill="#0C1A2E" stroke="#5DCAA5" strokeWidth="2.5"/>
      {/* Peak point */}
      <circle cx="318" cy="56" r="12" fill="rgba(29,158,117,0.25)"/>
      <circle cx="318" cy="56" r="7" fill="#0F6E56" stroke="#9FE1CB" strokeWidth="2.5"/>
      {/* Peak vertical drop */}
      <line x1="318" y1="63" x2="318" y2="250" stroke="#1D9E75" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.35"/>
      {/* Tooltip bubble */}
      <rect x="248" y="24" width="104" height="44" rx="12" fill="#0F6E56" filter="url(#s-sh2)"/>
      <polygon points="305,68 312,78 298,68" fill="#0F6E56"/>
      <text x="300" y="39" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.72)">Volume units</text>
      <text x="300" y="60" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="20" fontWeight="900" fill="#fff">↑94%</text>
      {/* Side metric cards */}
      <rect x="374" y="28" width="90" height="76" rx="14" fill="#0F6E56" filter="url(#s-sh2)"/>
      <text x="419" y="52" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.65)">New Outlets</text>
      <text x="419" y="74" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="22" fontWeight="900" fill="#fff">48</text>
      <text x="419" y="90" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="#9FE1CB">added / month</text>
      <rect x="374" y="116" width="90" height="76" rx="14" fill="#132244" filter="url(#s-sh2)" stroke="rgba(29,158,117,0.25)" strokeWidth="1"/>
      <text x="419" y="140" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.55)">Schemes</text>
      <text x="419" y="162" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="22" fontWeight="900" fill="#4ABCF5">12</text>
      <text x="419" y="178" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="rgba(74,188,245,0.7)">active</text>
      <rect x="374" y="204" width="90" height="76" rx="14" fill="#132244" filter="url(#s-sh2)" stroke="rgba(29,158,117,0.25)" strokeWidth="1"/>
      <text x="419" y="228" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.55)">Fill Rate</text>
      <text x="419" y="250" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="22" fontWeight="900" fill="#9FE1CB">98%</text>
      <text x="419" y="266" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="rgba(93,202,165,0.7)">excellent</text>
      {/* Bottom label */}
      <text x="192" y="296" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="rgba(93,202,165,0.55)" letterSpacing="0.03em">Volume growth trend — monthly data</text>
      {/* Mini bar sparkline */}
      <rect x="36" y="310" width="408" height="90" rx="14" fill="#0C1A2E" filter="url(#s-sh2)" stroke="rgba(29,158,117,0.1)" strokeWidth="1"/>
      <text x="52" y="333" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="rgba(255,255,255,0.45)" letterSpacing="0.08em">WEEKLY PERFORMANCE</text>
      <rect x="52" y="358" width="32" height="28" rx="3" fill="rgba(29,158,117,0.4)"/>
      <rect x="92" y="346" width="32" height="40" rx="3" fill="rgba(29,158,117,0.5)"/>
      <rect x="132" y="338" width="32" height="48" rx="3" fill="rgba(29,158,117,0.65)"/>
      <rect x="172" y="328" width="32" height="58" rx="3" fill="rgba(29,158,117,0.8)"/>
      <rect x="212" y="320" width="32" height="66" rx="3" fill="#1D9E75"/>
      <rect x="252" y="324" width="32" height="62" rx="3" fill="#1D9E75" opacity="0.85"/>
      <rect x="292" y="330" width="32" height="56" rx="3" fill="rgba(29,158,117,0.7)"/>
      <rect x="332" y="316" width="32" height="70" rx="3" fill="#0F6E56"/>
      <rect x="372" y="322" width="32" height="64" rx="3" fill="rgba(29,158,117,0.75)"/>
      <text x="68" y="395" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.35)">W1</text>
      <text x="108" y="395" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.35)">W2</text>
      <text x="148" y="395" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.35)">W3</text>
      <text x="188" y="395" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.35)">W4</text>
      <text x="228" y="395" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.35)">W5</text>
      <text x="268" y="395" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.35)">W6</text>
      <text x="308" y="395" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.35)">W7</text>
      <text x="348" y="395" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.35)">W8</text>
      <text x="388" y="395" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.35)">W9</text>
    </svg>
  );
}

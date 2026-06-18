import React from 'react';

export default function CfIllustration() {
  return (
          <svg viewBox="0 0 480 420" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cfbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#071525"/><stop offset="100%" stopColor="#0A1E38"/></linearGradient>
        <linearGradient id="cfdoc" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#F5F9F7"/></linearGradient>
        <filter id="cf-sh"><feDropShadow dx="0" dy="16" stdDeviation="24" floodColor="#040C1A" floodOpacity="0.45"/></filter>
        <filter id="cf-sh2"><feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#040C1A" floodOpacity="0.20"/></filter>
      </defs>
      <rect width="480" height="420" fill="url(#cfbg)"/>
      {/* Subtle grid overlay */}
      <pattern id="cfgrid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0L0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/></pattern>
      <rect width="480" height="420" fill="url(#cfgrid)"/>
      {/* Glow orb */}
      <ellipse cx="360" cy="100" rx="180" ry="120" fill="rgba(0,169,157,0.08)"/>
      {/* Background docs (shadow stack) */}
      <rect x="108" y="52" width="216" height="296" rx="10" fill="#C8E6DC" filter="url(#cf-sh2)" opacity="0.5"/>
      <rect x="100" y="44" width="216" height="296" rx="10" fill="#DFF0E8" filter="url(#cf-sh2)"/>
      {/* Main doc */}
      <rect x="88" y="32" width="220" height="300" rx="14" fill="url(#cfdoc)" filter="url(#cf-sh)"/>
      {/* Header band */}
      <rect x="88" y="32" width="220" height="64" rx="14" fill="#0F6E56"/>
      <rect x="88" y="82" width="220" height="14" fill="#0F6E56"/>
      {/* Header logo mark */}
      <rect x="104" y="46" width="28" height="28" rx="6" fill="rgba(255,255,255,0.12)"/>
      <rect x="109" y="51" width="18" height="3" rx="1.5" fill="rgba(255,255,255,0.65)"/>
      <rect x="109" y="57" width="12" height="3" rx="1.5" fill="rgba(255,255,255,0.45)"/>
      <rect x="109" y="63" width="15" height="3" rx="1.5" fill="rgba(255,255,255,0.45)"/>
      {/* Header text */}
      <text x="208" y="58" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="13" fontWeight="800" fill="#fff" letterSpacing="0.05em">C&amp;F AGREEMENT</text>
      <text x="208" y="74" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fill="rgba(255,255,255,0.70)">Shubhlabh Express Pvt. Ltd. · Authorized Agent</text>
      {/* Section: Parties */}
      <text x="104" y="114" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fontWeight="700" fill="#0F6E56" letterSpacing="0.10em">PRINCIPAL DETAILS</text>
      <rect x="104" y="120" width="90" height="5" rx="2.5" fill="#C8E6DC"/>
      <rect x="200" y="120" width="60" height="5" rx="2.5" fill="#D1EDE5"/>
      <rect x="104" y="130" width="130" height="5" rx="2.5" fill="#D1EDE5"/>
      <rect x="240" y="130" width="42" height="5" rx="2.5" fill="#E5F3EE"/>
      <rect x="104" y="140" width="78" height="5" rx="2.5" fill="#C8E6DC"/>
      {/* Horizontal rule */}
      <line x1="104" y1="153" x2="288" y2="153" stroke="#E1F5EE" strokeWidth="1.5"/>
      {/* Section: Territory */}
      <text x="104" y="167" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fontWeight="700" fill="#0F6E56" letterSpacing="0.10em">TERRITORY &amp; SLA</text>
      <rect x="104" y="173" width="110" height="5" rx="2.5" fill="#D1EDE5"/>
      <rect x="220" y="173" width="58" height="5" rx="2.5" fill="#E5F3EE"/>
      <rect x="104" y="183" width="94" height="5" rx="2.5" fill="#C8E6DC"/>
      {/* Pills row */}
      <rect x="104" y="196" width="64" height="20" rx="6" fill="#E1F5EE" stroke="#9FE1CB" strokeWidth="1"/>
      <text x="136" y="209" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="600" fill="#085041">GST Compliant</text>
      <rect x="174" y="196" width="48" height="20" rx="6" fill="#E1F5EE" stroke="#9FE1CB" strokeWidth="1"/>
      <text x="198" y="209" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="600" fill="#085041">Haryana</text>
      <rect x="228" y="196" width="36" height="20" rx="6" fill="#0F6E56"/>
      <text x="246" y="209" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="700" fill="#9FE1CB">C&amp;F</text>
      {/* Checklist items */}
      <line x1="104" y1="226" x2="288" y2="226" stroke="#E1F5EE" strokeWidth="1.5"/>
      <text x="104" y="240" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fontWeight="700" fill="#0F6E56" letterSpacing="0.10em">OBLIGATIONS</text>
      <rect x="104" y="248" width="16" height="16" rx="4" fill="#0F6E56"/>
      <text x="112" y="259.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="10" fill="#fff">✓</text>
      <rect x="126" y="251" width="100" height="5" rx="2.5" fill="#C8E6DC"/>
      <rect x="104" y="270" width="16" height="16" rx="4" fill="#0F6E56"/>
      <text x="112" y="281.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="10" fill="#fff">✓</text>
      <rect x="126" y="273" width="118" height="5" rx="2.5" fill="#C8E6DC"/>
      <rect x="104" y="292" width="16" height="16" rx="4" fill="#0F6E56"/>
      <text x="112" y="303.5" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="10" fill="#fff">✓</text>
      <rect x="126" y="295" width="80" height="5" rx="2.5" fill="#C8E6DC"/>
      {/* Stamp */}
      <circle cx="256" cy="288" r="32" fill="none" stroke="#1D9E75" strokeWidth="2.5" strokeDasharray="6 3"/>
      <circle cx="256" cy="288" r="26" fill="rgba(15,110,86,0.06)"/>
      <text x="256" y="282" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fontWeight="800" fill="#0F6E56" letterSpacing="0.10em">AUTHORIZED</text>
      <text x="256" y="293" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fontWeight="800" fill="#0F6E56" letterSpacing="0.08em">AGENT</text>
      <text x="256" y="305" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="6.5" fill="#1D9E75" letterSpacing="0.06em">GURGAON NCR</text>
      {/* Floating badge top right */}
      <rect x="310" y="56" width="148" height="72" rx="14" fill="#fff" filter="url(#cf-sh2)"/>
      <rect x="310" y="56" width="148" height="20" rx="14" fill="#0F6E56"/>
      <rect x="310" y="66" width="148" height="10" fill="#0F6E56"/>
      <text x="384" y="70" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="700" fill="#9FE1CB" letterSpacing="0.06em">AGREEMENT STATUS</text>
      <text x="326" y="95" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="#334155">Principal</text>
      <text x="326" y="109" fontFamily="Inter,system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#0A1628">Manufacturer / Brand</text>
      {/* Status dot */}
      <circle cx="432" cy="96" r="5" fill="#1D9E75"/>
      <text x="432" y="110" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7" fill="#1D9E75">Active</text>
      {/* Floating note card bottom right */}
      <rect x="310" y="152" width="148" height="100" rx="14" fill="#0F6E56" filter="url(#cf-sh2)"/>
      <text x="326" y="174" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="700" fill="rgba(255,255,255,0.75)" letterSpacing="0.08em">COVERAGE</text>
      <text x="326" y="193" fontFamily="Inter,system-ui,sans-serif" fontSize="18" fontWeight="900" fill="#fff">Gurgaon</text>
      <text x="326" y="210" fontFamily="Inter,system-ui,sans-serif" fontSize="10" fill="rgba(255,255,255,0.75)">Haryana, NCR</text>
      <rect x="326" y="222" width="60" height="18" rx="5" fill="rgba(255,255,255,0.15)"/>
      <text x="356" y="234" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="600" fill="#9FE1CB">7+ Zones</text>
      {/* E-way icon */}
      <rect x="310" y="276" width="148" height="64" rx="14" fill="#132244" filter="url(#cf-sh2)" stroke="rgba(29,158,117,0.25)" strokeWidth="1"/>
      <text x="326" y="299" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="rgba(255,255,255,0.55)" letterSpacing="0.08em">E-WAY BILL</text>
      <rect x="326" y="307" width="60" height="6" rx="3" fill="rgba(29,158,117,0.3)"/>
      <rect x="326" y="317" width="88" height="6" rx="3" fill="rgba(29,158,117,0.2)"/>
      <circle cx="432" cy="308" r="12" fill="rgba(29,158,117,0.1)" stroke="#1D9E75" strokeWidth="1"/>
      <text x="432" y="313" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="12" fill="#1D9E75">✓</text>
      {/* Floating line connecting */}
      <line x1="308" y1="96" x2="292" y2="96" stroke="rgba(29,158,117,0.25)" strokeWidth="1" strokeDasharray="3 2"/>
      <line x1="308" y1="196" x2="292" y2="196" stroke="rgba(29,158,117,0.25)" strokeWidth="1" strokeDasharray="3 2"/>
    </svg>
  );
}

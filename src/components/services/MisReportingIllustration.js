import React from 'react';

export default function MisReportingIllustration() {
  return (
          <svg viewBox="0 0 480 420" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#040C1A"/><stop offset="100%" stopColor="#071830"/></linearGradient>
        <linearGradient id="mbar1" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#085041"/><stop offset="100%" stopColor="#1D9E75"/></linearGradient>
        <linearGradient id="mbar2" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#0C447C"/><stop offset="100%" stopColor="#185FA5"/></linearGradient>
        <filter id="m-screen"><feDropShadow dx="0" dy="16" stdDeviation="24" floodColor="#000" floodOpacity="0.5"/></filter>
        <filter id="m-sh2"><feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.25"/></filter>
        <filter id="m-glow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="480" height="420" fill="url(#mbg)"/>
      {/* Ambient glow */}
      <ellipse cx="240" cy="200" rx="220" ry="160" fill="rgba(24,95,165,0.05)"/>
      <ellipse cx="100" cy="340" rx="160" ry="100" fill="rgba(29,158,117,0.04)"/>
      {/* Screen frame */}
      <rect x="18" y="14" width="444" height="384" rx="18" fill="#0A1628" filter="url(#m-screen)" stroke="rgba(24,95,165,0.2)" strokeWidth="1.5"/>
      {/* Screen inner border glow */}
      <rect x="20" y="16" width="440" height="380" rx="16" fill="none" stroke="rgba(29,158,117,0.08)" strokeWidth="1"/>
      {/* Title bar */}
      <rect x="18" y="14" width="444" height="44" rx="18" fill="#0D1E3A"/>
      <rect x="18" y="44" width="444" height="14" fill="#0D1E3A"/>
      {/* Traffic lights */}
      <circle cx="40" cy="36" r="6" fill="#E24B4A"/>
      <circle cx="58" cy="36" r="6" fill="#EF9F27"/>
      <circle cx="76" cy="36" r="6" fill="#1D9E75"/>
      {/* Title */}
      <text x="250" y="40" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="10" fill="rgba(255,255,255,0.50)" letterSpacing="0.03em">MIS Dashboard — Shubhlabh Express</text>
      {/* Tab bar */}
      <rect x="32" y="62" width="68" height="22" rx="6" fill="#1D9E75"/>
      <text x="66" y="77" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="700" fill="#fff">Overview</text>
      <text x="130" y="77" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.35)">Sales</text>
      <text x="184" y="77" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.35)">Inventory</text>
      <text x="256" y="77" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.35)">Collections</text>
      {/* ── Metric cards row ── */}
      {/* Card 1: Stock */}
      <rect x="32" y="96" width="88" height="76" rx="12" fill="#0D1E3A" stroke="#1D9E75" strokeWidth="1" filter="url(#m-sh2)"/>
      <text x="52" y="118" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="rgba(255,255,255,0.5)">Stock Units</text>
      <text x="52" y="144" fontFamily="Inter,system-ui,sans-serif" fontSize="22" fontWeight="900" fill="#4ABCF5">4,820</text>
      <text x="52" y="160" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="#1D9E75">↑ 8% this week</text>
      {/* Card 2: Sales */}
      <rect x="128" y="96" width="88" height="76" rx="12" fill="#0D1E3A" stroke="#1D9E75" strokeWidth="1" filter="url(#m-sh2)"/>
      <text x="148" y="118" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="rgba(255,255,255,0.5)">Weekly Sales</text>
      <text x="148" y="144" fontFamily="Inter,system-ui,sans-serif" fontSize="22" fontWeight="900" fill="#5DCAA5">₹2.1L</text>
      <text x="148" y="160" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="#1D9E75">↑ 12% vs last</text>
      {/* Card 3: Outlets */}
      <rect x="224" y="96" width="88" height="76" rx="12" fill="#0D1E3A" stroke="#185FA5" strokeWidth="1" filter="url(#m-sh2)"/>
      <text x="244" y="118" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="rgba(255,255,255,0.5)">Outlets Hit</text>
      <text x="244" y="144" fontFamily="Inter,system-ui,sans-serif" fontSize="22" fontWeight="900" fill="#4ABCF5">347</text>
      <text x="244" y="160" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="#378ADD">of 380 target</text>
      {/* Card 4: Fill rate */}
      <rect x="320" y="96" width="128" height="76" rx="12" fill="#0F6E56" stroke="#1D9E75" strokeWidth="1" filter="url(#m-sh2)"/>
      <text x="340" y="118" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="rgba(255,255,255,0.65)">Fill Rate</text>
      {/* Fill rate ring gauge */}
      <circle cx="408" cy="140" r="26" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="5"/>
      <circle cx="408" cy="140" r="26" fill="none" stroke="#9FE1CB" strokeWidth="5" strokeLinecap="round" strokeDasharray="148 163" strokeDashoffset="41" transform="rotate(-90 408 140)"/>
      <text x="408" y="145" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="14" fontWeight="900" fill="#fff">98%</text>
      <text x="340" y="160" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="rgba(255,255,255,0.65)">Excellent</text>
      {/* ── Bar chart ── */}
      <text x="32" y="196" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="600" fill="rgba(255,255,255,0.55)" letterSpacing="0.06em">DAILY SALES — CURRENT WEEK</text>
      <rect x="32" y="204" width="416" height="122" rx="10" fill="#060F1C"/>
      {/* Bars — 7 days */}
      <rect x="50" y="258" width="36" height="52" rx="3" fill="url(#mbar1)" opacity="0.7"/>
      <rect x="102" y="248" width="36" height="62" rx="3" fill="url(#mbar1)" opacity="0.8"/>
      <rect x="154" y="236" width="36" height="74" rx="3" fill="url(#mbar1)"/>
      <rect x="206" y="228" width="36" height="82" rx="3" fill="url(#mbar1)"/>
      <rect x="258" y="218" width="36" height="92" rx="3" fill="url(#mbar1)"/>
      <rect x="310" y="224" width="36" height="86" rx="3" fill="url(#mbar2)" opacity="0.75"/>
      <rect x="362" y="234" width="36" height="76" rx="3" fill="url(#mbar2)" opacity="0.65"/>
      {/* Value labels above bars */}
      <text x="68" y="253" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fill="rgba(93,202,165,0.6)">18K</text>
      <text x="120" y="243" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fill="rgba(93,202,165,0.6)">22K</text>
      <text x="172" y="231" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fill="rgba(93,202,165,0.6)">28K</text>
      <text x="224" y="223" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fill="rgba(93,202,165,0.6)">32K</text>
      <text x="276" y="213" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fill="rgba(93,202,165,0.75)">38K</text>
      <text x="328" y="219" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fill="rgba(74,188,245,0.6)">35K</text>
      <text x="380" y="229" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fill="rgba(74,188,245,0.5)">29K</text>
      {/* Day labels */}
      <text x="68" y="336" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="rgba(255,255,255,0.35)">Mon</text>
      <text x="120" y="336" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="rgba(255,255,255,0.35)">Tue</text>
      <text x="172" y="336" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="rgba(255,255,255,0.35)">Wed</text>
      <text x="224" y="336" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="rgba(255,255,255,0.35)">Thu</text>
      <text x="276" y="336" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="rgba(255,255,255,0.35)">Fri</text>
      <text x="328" y="336" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="rgba(74,188,245,0.4)">Sat</text>
      <text x="380" y="336" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fill="rgba(74,188,245,0.4)">Sun</text>
      {/* ── Status / report strip ── */}
      <rect x="18" y="346" width="444" height="48" rx="18" fill="#060F1C"/>
      <rect x="18" y="346" width="444" height="24" fill="#060F1C"/>
      <circle cx="42" cy="370" r="5" fill="#1D9E75" filter="url(#m-glow)"/>
      <circle cx="42" cy="370" r="9" fill="none" stroke="#1D9E75" strokeWidth="1" opacity="0.3"/>
      <text x="56" y="374" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.55)">Auto-generated report · Sent weekly to principal company</text>
      <rect x="370" y="358" width="80" height="24" rx="6" fill="#0F6E56" opacity="0.8"/>
      <text x="410" y="373" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="600" fill="#9FE1CB">Download ↓</text>
    </svg>
  );
}

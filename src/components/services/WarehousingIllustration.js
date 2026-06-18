import React from 'react';

export default function WarehousingIllustration() {
  return (
          <svg viewBox="0 0 480 420" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Backgrounds */}
        <linearGradient id="wh-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#040E1C"/>
          <stop offset="100%" stopColor="#071A2E"/>
        </linearGradient>
        {/* Floor */}
        <linearGradient id="wh-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0C2237"/>
          <stop offset="100%" stopColor="#071525"/>
        </linearGradient>
        {/* Roof gradient */}
        <linearGradient id="wh-roof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0F7A5A"/>
          <stop offset="100%" stopColor="#064433"/>
        </linearGradient>
        {/* Roof highlight */}
        <linearGradient id="wh-roof-hi" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.12)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
        </linearGradient>
        {/* Wall */}
        <linearGradient id="wh-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0D2440"/>
          <stop offset="100%" stopColor="#081A30"/>
        </linearGradient>
        {/* Rack shelves */}
        <linearGradient id="wh-shelf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0E3550"/>
          <stop offset="100%" stopColor="#0A2438"/>
        </linearGradient>
        {/* Box gradients */}
        <linearGradient id="wh-box-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00C4A0"/>
          <stop offset="100%" stopColor="#007A62"/>
        </linearGradient>
        <linearGradient id="wh-box-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A9E82"/>
          <stop offset="100%" stopColor="#0A6050"/>
        </linearGradient>
        <linearGradient id="wh-box-c" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ABCF5"/>
          <stop offset="100%" stopColor="#1A7FAF"/>
        </linearGradient>
        <linearGradient id="wh-box-d" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A8A6A"/>
          <stop offset="100%" stopColor="#145040"/>
        </linearGradient>
        {/* Card gradient */}
        <linearGradient id="wh-card" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0F4A38"/>
          <stop offset="100%" stopColor="#083020"/>
        </linearGradient>
        {/* Glow card */}
        <linearGradient id="wh-gcard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#104050"/>
          <stop offset="100%" stopColor="#072030"/>
        </linearGradient>
        {/* Process arrow gradient */}
        <linearGradient id="wh-arrow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00A99D" stopOpacity="0"/>
          <stop offset="50%" stopColor="#00A99D"/>
          <stop offset="100%" stopColor="#4ABCF5" stopOpacity="0"/>
        </linearGradient>
        {/* Shadows */}
        <filter id="wh-sh" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#000" floodOpacity="0.55"/>
        </filter>
        <filter id="wh-sh-sm" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#000" floodOpacity="0.4"/>
        </filter>
        <filter id="wh-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        {/* Clip building interior */}
        <clipPath id="wh-clip">
          <rect x="52" y="152" width="320" height="218"/>
        </clipPath>
      </defs>
    
      {/* ── Background ── */}
      <rect width="480" height="420" fill="url(#wh-bg)"/>
      {/* Ambient glow behind building */}
      <ellipse cx="212" cy="250" rx="190" ry="130" fill="rgba(0,169,157,0.06)"/>
      <ellipse cx="212" cy="160" rx="130" ry="80" fill="rgba(74,188,245,0.04)"/>
    
      {/* ── PROCESS FLOW LABELS (top strip) ── */}
      {/* Inbound */}
      <rect x="28" y="16" width="68" height="22" rx="6" fill="rgba(0,169,157,0.15)" stroke="rgba(0,169,157,0.35)" strokeWidth="1"/>
      <text x="62" y="31" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="700" fill="#00D4C5" letterSpacing="0.08em">INBOUND</text>
      {/* Arrow */}
      <path d="M100 27 L142 27" stroke="url(#wh-arrow)" strokeWidth="1.5" strokeDasharray="3 2"/>
      <polygon points="142,23 150,27 142,31" fill="#00A99D" opacity="0.7"/>
      {/* Storage */}
      <rect x="153" y="16" width="68" height="22" rx="6" fill="rgba(0,169,157,0.15)" stroke="rgba(0,169,157,0.35)" strokeWidth="1"/>
      <text x="187" y="31" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="700" fill="#00D4C5" letterSpacing="0.08em">STORAGE</text>
      {/* Arrow */}
      <path d="M225 27 L267 27" stroke="url(#wh-arrow)" strokeWidth="1.5" strokeDasharray="3 2"/>
      <polygon points="267,23 275,27 267,31" fill="#00A99D" opacity="0.7"/>
      {/* Outbound */}
      <rect x="278" y="16" width="72" height="22" rx="6" fill="rgba(74,188,245,0.12)" stroke="rgba(74,188,245,0.30)" strokeWidth="1"/>
      <text x="314" y="31" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="700" fill="#4ABCF5" letterSpacing="0.08em">OUTBOUND</text>
    
      {/* ── BUILDING SHELL ── */}
      {/* Ground shadow */}
      <ellipse cx="212" cy="384" rx="155" ry="10" fill="rgba(0,0,0,0.40)"/>
      {/* Wall */}
      <rect x="52" y="152" width="320" height="218" rx="4" fill="url(#wh-wall)" filter="url(#wh-sh)"/>
      {/* Left side shadow */}
      <rect x="52" y="152" width="16" height="218" rx="2" fill="rgba(0,0,0,0.25)"/>
      {/* Right side shadow */}
      <rect x="356" y="152" width="16" height="218" rx="2" fill="rgba(0,0,0,0.18)"/>
      {/* Eave */}
      <rect x="42" y="148" width="340" height="7" rx="3" fill="#0A5A44"/>
    
      {/* ── ROOF ── */}
      <polygon points="212,38 390,152 34,152" fill="url(#wh-roof)" filter="url(#wh-sh)"/>
      {/* Roof left face highlight */}
      <polygon points="212,38 130,95 34,152 130,152" fill="url(#wh-roof-hi)"/>
      {/* Ridge line */}
      <line x1="212" y1="38" x2="212" y2="152" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeDasharray="5 4"/>
      {/* Skylights */}
      <rect x="110" y="78" width="38" height="20" rx="5" fill="rgba(74,188,245,0.22)" stroke="rgba(74,188,245,0.55)" strokeWidth="1.5"/>
      <line x1="129" y1="78" x2="129" y2="98" stroke="rgba(74,188,245,0.4)" strokeWidth="1"/>
      <rect x="276" y="78" width="38" height="20" rx="5" fill="rgba(74,188,245,0.22)" stroke="rgba(74,188,245,0.55)" strokeWidth="1.5"/>
      <line x1="295" y1="78" x2="295" y2="98" stroke="rgba(74,188,245,0.4)" strokeWidth="1"/>
      {/* Roof ridge cap */}
      <rect x="206" y="34" width="12" height="8" rx="3" fill="rgba(255,255,255,0.25)"/>
    
      {/* ── INTERIOR FLOOR ── */}
      <rect x="52" y="348" width="320" height="22" fill="url(#wh-floor)"/>
      {/* Floor line */}
      <line x1="52" y1="348" x2="372" y2="348" stroke="rgba(0,169,157,0.25)" strokeWidth="1"/>
    
      {/* ── AISLE DIVIDERS ── */}
      <line x1="160" y1="155" x2="160" y2="348" stroke="rgba(0,169,157,0.12)" strokeWidth="1" strokeDasharray="5 4"/>
      <line x1="268" y1="155" x2="268" y2="348" stroke="rgba(0,169,157,0.12)" strokeWidth="1" strokeDasharray="5 4"/>
    
      {/* ══════════════════════════════════ */}
      {/* LEFT ZONE: INBOUND / RECEIVING   */}
      {/* ══════════════════════════════════ */}
    
      {/* Rack frame */}
      <rect x="62" y="162" width="88" height="148" rx="3" fill="url(#wh-shelf)" stroke="rgba(0,169,157,0.20)" strokeWidth="1"/>
      {/* Shelf rails */}
      <line x1="62" y1="198" x2="150" y2="198" stroke="rgba(0,169,157,0.30)" strokeWidth="1.5"/>
      <line x1="62" y1="238" x2="150" y2="238" stroke="rgba(0,169,157,0.30)" strokeWidth="1.5"/>
      <line x1="62" y1="278" x2="150" y2="278" stroke="rgba(0,169,157,0.30)" strokeWidth="1.5"/>
      {/* Shelf 1 – fresh inbound boxes */}
      <rect x="68" y="165" width="30" height="29" rx="3" fill="url(#wh-box-a)"/>
      <rect x="68" y="165" width="30" height="8" rx="3" fill="rgba(255,255,255,0.12)"/>
      <rect x="101" y="168" width="42" height="26" rx="3" fill="url(#wh-box-a)" opacity="0.75"/>
      <rect x="101" y="168" width="42" height="7" rx="2" fill="rgba(255,255,255,0.10)"/>
      {/* Barcode hint on box */}
      <line x1="73" y1="175" x2="73" y2="188" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
      <line x1="76" y1="175" x2="76" y2="188" stroke="rgba(255,255,255,0.2)" strokeWidth="2.5"/>
      <line x1="80" y1="175" x2="80" y2="188" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
      {/* Shelf 2 */}
      <rect x="68" y="202" width="34" height="32" rx="3" fill="url(#wh-box-b)"/>
      <rect x="106" y="202" width="38" height="32" rx="3" fill="url(#wh-box-b)" opacity="0.65"/>
      {/* FIFO + EXP badges */}
      <rect x="68" y="242" width="42" height="19" rx="5" fill="#00A99D"/>
      <text x="89" y="255" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="800" fill="#fff" letterSpacing="0.07em">FIFO</text>
      <rect x="113" y="242" width="32" height="19" rx="5" fill="rgba(74,188,245,0.18)" stroke="rgba(74,188,245,0.50)" strokeWidth="1"/>
      <text x="129" y="255" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8" fontWeight="700" fill="#4ABCF5">EXP</text>
      {/* Shelf 4 – pallet */}
      <rect x="68" y="282" width="76" height="22" rx="3" fill="rgba(0,169,157,0.15)" stroke="rgba(0,169,157,0.30)" strokeWidth="1"/>
      <rect x="72" y="286" width="16" height="14" rx="2" fill="rgba(0,169,157,0.35)"/>
      <rect x="91" y="286" width="16" height="14" rx="2" fill="rgba(0,169,157,0.25)"/>
      <rect x="110" y="286" width="16" height="14" rx="2" fill="rgba(0,169,157,0.30)"/>
      {/* Zone label */}
      <text x="106" y="320" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fontWeight="600" fill="rgba(0,212,197,0.60)" letterSpacing="0.06em">RECEIVING</text>
    
      {/* ══════════════════════════════════ */}
      {/* CENTRE ZONE: BULK STORAGE        */}
      {/* ══════════════════════════════════ */}
    
      <rect x="170" y="162" width="88" height="148" rx="3" fill="url(#wh-shelf)" stroke="rgba(0,169,157,0.20)" strokeWidth="1"/>
      <line x1="170" y1="198" x2="258" y2="198" stroke="rgba(0,169,157,0.30)" strokeWidth="1.5"/>
      <line x1="170" y1="238" x2="258" y2="238" stroke="rgba(0,169,157,0.30)" strokeWidth="1.5"/>
      <line x1="170" y1="278" x2="258" y2="278" stroke="rgba(0,169,157,0.30)" strokeWidth="1.5"/>
      {/* Shelf 1 – stacked boxes */}
      <rect x="176" y="165" width="34" height="29" rx="3" fill="url(#wh-box-d)"/>
      <rect x="176" y="165" width="34" height="8" rx="2" fill="rgba(255,255,255,0.10)"/>
      <rect x="214" y="165" width="36" height="29" rx="3" fill="url(#wh-box-d)" opacity="0.80"/>
      {/* small box stacked on top */}
      <rect x="182" y="156" width="22" height="11" rx="2" fill="url(#wh-box-a)" opacity="0.70"/>
      {/* Shelf 2 */}
      <rect x="176" y="202" width="38" height="32" rx="3" fill="url(#wh-box-b)" opacity="0.90"/>
      <rect x="218" y="202" width="32" height="32" rx="3" fill="url(#wh-box-c)" opacity="0.55"/>
      {/* Tracked badge + QR hint */}
      <rect x="176" y="242" width="72" height="30" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(0,169,157,0.35)" strokeWidth="1"/>
      <rect x="180" y="246" width="16" height="16" rx="2" fill="rgba(0,169,157,0.20)" stroke="rgba(0,169,157,0.50)" strokeWidth="1"/>
      {/* QR micro */}
      <rect x="182" y="248" width="4" height="4" rx="1" fill="rgba(0,212,197,0.7)"/>
      <rect x="188" y="248" width="4" height="4" rx="1" fill="rgba(0,212,197,0.7)"/>
      <rect x="182" y="254" width="4" height="4" rx="1" fill="rgba(0,212,197,0.7)"/>
      <rect x="185" y="251" width="7" height="7" rx="1" fill="rgba(0,212,197,0.25)"/>
      <text x="230" y="257" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="700" fill="rgba(255,255,255,0.80)">Tracked</text>
      <text x="230" y="267" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7" fill="rgba(0,212,197,0.60)">SKU Verified</text>
      {/* Shelf 4 */}
      <rect x="176" y="282" width="72" height="22" rx="3" fill="rgba(0,169,157,0.12)" stroke="rgba(0,169,157,0.25)" strokeWidth="1"/>
      <rect x="180" y="286" width="12" height="14" rx="2" fill="rgba(0,169,157,0.40)"/>
      <rect x="195" y="286" width="12" height="14" rx="2" fill="rgba(0,169,157,0.30)"/>
      <rect x="210" y="286" width="12" height="14" rx="2" fill="rgba(0,169,157,0.35)"/>
      <rect x="225" y="286" width="12" height="14" rx="2" fill="rgba(0,169,157,0.25)"/>
      <text x="214" y="320" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fontWeight="600" fill="rgba(0,212,197,0.60)" letterSpacing="0.06em">BULK STORAGE</text>
    
      {/* ══════════════════════════════════ */}
      {/* RIGHT ZONE: PICK & DISPATCH      */}
      {/* ══════════════════════════════════ */}
    
      <rect x="278" y="162" width="84" height="148" rx="3" fill="url(#wh-shelf)" stroke="rgba(74,188,245,0.20)" strokeWidth="1"/>
      <line x1="278" y1="198" x2="362" y2="198" stroke="rgba(74,188,245,0.25)" strokeWidth="1.5"/>
      <line x1="278" y1="238" x2="362" y2="238" stroke="rgba(74,188,245,0.25)" strokeWidth="1.5"/>
      <line x1="278" y1="278" x2="362" y2="278" stroke="rgba(74,188,245,0.25)" strokeWidth="1.5"/>
      {/* Shelf 1 */}
      <rect x="284" y="165" width="30" height="29" rx="3" fill="url(#wh-box-c)" opacity="0.80"/>
      <rect x="318" y="165" width="36" height="29" rx="3" fill="url(#wh-box-c)" opacity="0.55"/>
      {/* Shelf 2 – pick in progress (one gap) */}
      <rect x="284" y="202" width="30" height="32" rx="3" fill="url(#wh-box-a)" opacity="0.70"/>
      {/* gap where one was picked */}
      <rect x="318" y="202" width="36" height="32" rx="3" fill="rgba(74,188,245,0.08)" stroke="rgba(74,188,245,0.20)" strokeWidth="1" strokeDasharray="3 2"/>
      <text x="336" y="221" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7" fill="rgba(74,188,245,0.50)">PICKED</text>
      {/* Shelf 3 – ready to ship boxes */}
      <rect x="284" y="242" width="66" height="30" rx="3" fill="rgba(74,188,245,0.10)" stroke="rgba(74,188,245,0.28)" strokeWidth="1"/>
      <rect x="288" y="246" width="28" height="22" rx="2" fill="url(#wh-box-c)" opacity="0.60"/>
      <rect x="320" y="246" width="26" height="22" rx="2" fill="url(#wh-box-c)" opacity="0.45"/>
      {/* Shelf 4 */}
      <rect x="284" y="282" width="66" height="22" rx="3" fill="rgba(74,188,245,0.08)" stroke="rgba(74,188,245,0.20)" strokeWidth="1"/>
      <text x="317" y="296" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fontWeight="600" fill="rgba(74,188,245,0.65)">READY</text>
      <text x="317" y="320" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fontWeight="600" fill="rgba(74,188,245,0.60)" letterSpacing="0.06em">DISPATCH</text>
    
      {/* ── LOADING DOCK / ROLLER DOOR ── */}
      <rect x="168" y="316" width="80" height="58" rx="4" fill="rgba(0,0,0,0.35)" stroke="rgba(0,169,157,0.30)" strokeWidth="1.5"/>
      {/* door panels */}
      <line x1="168" y1="326" x2="248" y2="326" stroke="rgba(0,169,157,0.25)" strokeWidth="1"/>
      <line x1="168" y1="336" x2="248" y2="336" stroke="rgba(0,169,157,0.25)" strokeWidth="1"/>
      <line x1="168" y1="346" x2="248" y2="346" stroke="rgba(0,169,157,0.25)" strokeWidth="1"/>
      <line x1="168" y1="356" x2="248" y2="356" stroke="rgba(0,169,157,0.25)" strokeWidth="1"/>
      {/* Handle */}
      <rect x="200" y="352" width="20" height="8" rx="4" fill="rgba(0,169,157,0.45)" stroke="rgba(0,169,157,0.70)" strokeWidth="1"/>
      {/* Door label */}
      <text x="208" y="370" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7" fontWeight="600" fill="rgba(0,169,157,0.55)" letterSpacing="0.05em">LOADING DOCK</text>
    
      {/* ── FORKLIFT ICON (small, between racks) ── */}
      {/* Body */}
      <rect x="145" y="300" width="22" height="14" rx="2" fill="rgba(0,169,157,0.25)" stroke="rgba(0,169,157,0.50)" strokeWidth="1"/>
      {/* Mast */}
      <rect x="163" y="288" width="3" height="16" rx="1" fill="rgba(0,169,157,0.55)"/>
      {/* Forks */}
      <rect x="166" y="298" width="14" height="2" rx="1" fill="rgba(0,169,157,0.75)"/>
      <rect x="166" y="302" width="14" height="2" rx="1" fill="rgba(0,169,157,0.75)"/>
      {/* Wheel */}
      <circle cx="150" cy="315" r="3" fill="rgba(0,169,157,0.40)" stroke="rgba(0,169,157,0.60)" strokeWidth="1"/>
      <circle cx="162" cy="315" r="3" fill="rgba(0,169,157,0.40)" stroke="rgba(0,169,157,0.60)" strokeWidth="1"/>
    
      {/* ── LIVE STATUS DOT ── */}
      <circle cx="370" cy="167" r="9" fill="#0F6E56"/>
      <circle cx="370" cy="167" r="16" fill="none" stroke="#00A99D" strokeWidth="1.5" opacity="0.30"/>
      <circle cx="370" cy="167" r="23" fill="none" stroke="#00A99D" strokeWidth="1" opacity="0.12"/>
      <circle cx="370" cy="167" r="5" fill="#00D4C5"/>
      <text x="370" y="186" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fontWeight="700" fill="#00A99D" letterSpacing="0.07em">LIVE</text>
    
      {/* ── FLOATING METRIC CARD: INVENTORY ── */}
      <rect x="384" y="205" width="88" height="106" rx="12" fill="url(#wh-card)" stroke="rgba(0,169,157,0.30)" strokeWidth="1" filter="url(#wh-sh-sm)"/>
      {/* Card top accent */}
      <rect x="384" y="205" width="88" height="4" rx="12" fill="rgba(0,169,157,0.60)"/>
      <text x="428" y="228" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.50)" letterSpacing="0.10em">INVENTORY</text>
      <text x="428" y="254" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="26" fontWeight="900" fill="#fff" letterSpacing="-0.03em">98%</text>
      <text x="428" y="268" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.60)">Fill Rate</text>
      <rect x="400" y="277" width="56" height="18" rx="5" fill="rgba(0,169,157,0.20)" stroke="rgba(0,169,157,0.40)" strokeWidth="1"/>
      <circle cx="413" cy="286" r="3" fill="#00D4C5"/>
      <text x="432" y="290" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fontWeight="700" fill="#00D4C5">Real-time</text>
      {/* Sparkline under card */}
      <polyline points="392,328 402,322 412,325 422,318 432,315 442,310 452,308 462,312" fill="none" stroke="rgba(0,169,157,0.50)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="462" cy="312" r="3" fill="#00A99D"/>
    
      {/* ── FLOATING AUDIT CARD ── */}
      <rect x="384" y="320" width="88" height="54" rx="10" fill="url(#wh-gcard)" stroke="rgba(74,188,245,0.22)" strokeWidth="1" filter="url(#wh-sh-sm)"/>
      <rect x="384" y="320" width="88" height="3" rx="10" fill="rgba(74,188,245,0.45)"/>
      <text x="428" y="338" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.45)" letterSpacing="0.08em">STOCK AUDIT</text>
      <text x="428" y="354" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="13" fontWeight="800" fill="#4ABCF5">Weekly</text>
      {/* tick icon */}
      <circle cx="398" cy="360" r="6" fill="rgba(74,188,245,0.15)" stroke="rgba(74,188,245,0.40)" strokeWidth="1"/>
      <polyline points="395,360 397,363 402,357" fill="none" stroke="#4ABCF5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="432" y="363" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7" fill="rgba(74,188,245,0.60)">Verified</text>
    
      {/* ── INBOUND TRUCK (left edge) ── */}
      {/* Truck body */}
      <rect x="2" y="308" width="50" height="28" rx="3" fill="rgba(0,169,157,0.18)" stroke="rgba(0,169,157,0.45)" strokeWidth="1.2"/>
      {/* Cab */}
      <rect x="38" y="312" width="16" height="24" rx="2" fill="rgba(0,169,157,0.28)" stroke="rgba(0,169,157,0.55)" strokeWidth="1"/>
      {/* Windshield */}
      <rect x="40" y="314" width="12" height="9" rx="2" fill="rgba(74,188,245,0.25)" stroke="rgba(74,188,245,0.45)" strokeWidth="0.8"/>
      {/* Headlight */}
      <rect x="50" y="328" width="5" height="5" rx="1" fill="rgba(255,220,80,0.70)"/>
      {/* Wheels */}
      <circle cx="12" cy="338" r="5" fill="rgba(0,0,0,0.5)" stroke="rgba(0,169,157,0.50)" strokeWidth="1.2"/>
      <circle cx="12" cy="338" r="2" fill="rgba(0,169,157,0.40)"/>
      <circle cx="38" cy="338" r="5" fill="rgba(0,0,0,0.5)" stroke="rgba(0,169,157,0.50)" strokeWidth="1.2"/>
      <circle cx="38" cy="338" r="2" fill="rgba(0,169,157,0.40)"/>
      {/* Cargo text */}
      <text x="20" y="327" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="7" fontWeight="700" fill="rgba(0,212,197,0.75)" letterSpacing="0.05em">INBOUND</text>
      {/* Arrow from truck to dock */}
      <path d="M54 322 L62 322" stroke="rgba(0,169,157,0.60)" strokeWidth="1.5" strokeDasharray="3 2"/>
      <polygon points="62,319 67,322 62,325" fill="rgba(0,169,157,0.70)"/>
    </svg>
  );
}

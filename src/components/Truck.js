import React from 'react';

export default function Truck() {
  return (
    <svg width="110" height="52" viewBox="0 0 110 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <rect x="2" y="10" width="68" height="32" rx="3" fill="#0F3550" stroke="rgba(0,169,157,0.5)" strokeWidth="1.2" />
      {/* Logo panel on body */}
      <rect x="6" y="14" width="42" height="20" rx="2" fill="rgba(0,169,157,0.12)" stroke="rgba(0,169,157,0.25)" strokeWidth="0.8" />
      <text x="27" y="23" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="5" fontWeight="800" fill="#00D4C5" letterSpacing="0.3">SHUBHLABH</text>
      <text x="27" y="30" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="4" fontWeight="600" fill="rgba(0,169,157,0.7)" letterSpacing="0.2">EXPRESS</text>
      {/* Cab */}
      <rect x="70" y="18" width="34" height="24" rx="3" fill="#0D2A40" stroke="rgba(0,169,157,0.5)" strokeWidth="1.2" />
      {/* Windshield */}
      <rect x="74" y="21" width="22" height="14" rx="2" fill="rgba(74,188,245,0.20)" stroke="rgba(74,188,245,0.50)" strokeWidth="0.8" />
      {/* Cab roof light bar */}
      <rect x="74" y="18" width="22" height="3" rx="1.5" fill="rgba(0,169,157,0.40)" />
      {/* Headlight */}
      <rect x="101" y="28" width="7" height="5" rx="1" fill="rgba(255,220,80,0.85)" />
      <rect x="101" y="28" width="7" height="5" rx="1" fill="rgba(255,220,80,0.25)" transform="translate(2,0) scale(1.4,1)" style={{ filter: 'blur(3px)' }} />
      {/* Door line */}
      <line x1="70" y1="26" x2="70" y2="42" stroke="rgba(0,169,157,0.25)" strokeWidth="0.8" />
      {/* Side stripe */}
      <rect x="2" y="36" width="68" height="3" rx="0" fill="rgba(0,169,157,0.20)" />
      {/* Wheel wells */}
      <rect x="10" y="38" width="18" height="4" rx="2" fill="#0A1628" />
      <rect x="76" y="38" width="18" height="4" rx="2" fill="#0A1628" />
      {/* Wheels with spin animation */}
      <g transform="translate(19,43)">
        <circle r="8" fill="#0D2234" stroke="rgba(0,169,157,0.55)" strokeWidth="1.5" />
        <circle r="4" fill="#0F3550" stroke="rgba(0,169,157,0.40)" strokeWidth="1" />
        <line x1="-4" y1="0" x2="4" y2="0" stroke="rgba(0,169,157,0.50)" strokeWidth="1" style={{ transformOrigin: 'center', animation: 'wheelSpin 1.2s linear infinite' }} />
        <line x1="0" y1="-4" x2="0" y2="4" stroke="rgba(0,169,157,0.50)" strokeWidth="1" style={{ transformOrigin: 'center', animation: 'wheelSpin 1.2s linear infinite' }} />
        <circle r="1.5" fill="#00A99D" />
      </g>
      <g transform="translate(85,43)">
        <circle r="8" fill="#0D2234" stroke="rgba(0,169,157,0.55)" strokeWidth="1.5" />
        <circle r="4" fill="#0F3550" stroke="rgba(0,169,157,0.40)" strokeWidth="1" />
        <line x1="-4" y1="0" x2="4" y2="0" stroke="rgba(0,169,157,0.50)" strokeWidth="1" style={{ transformOrigin: 'center', animation: 'wheelSpin 1.2s linear infinite' }} />
        <line x1="0" y1="-4" x2="0" y2="4" stroke="rgba(0,169,157,0.50)" strokeWidth="1" style={{ transformOrigin: 'center', animation: 'wheelSpin 1.2s linear infinite' }} />
        <circle r="1.5" fill="#00A99D" />
      </g>
    </svg>
  );
}

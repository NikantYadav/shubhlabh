import React from 'react';
import Truck from './Truck';

const BrandPillIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#00D4C5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3m4 0h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z" /></svg>
);

const PILLS = ['2000+ Outlets', '7+ Zones', 'Gurgaon NCR', '24h Activation', 'GST Compliant', 'B2B Distribution'];

function TruckUnit({ ariaHidden }) {
  return (
    <div className="truck-unit" aria-hidden={ariaHidden || undefined}>
      <Truck />
      <span className="truck-brand"><BrandPillIcon />{PILLS[0]}</span><span className="truck-dot"></span>
      <span className="truck-brand"><BrandPillIcon />{PILLS[1]}</span><span className="truck-dot"></span>
      <Truck />
      <span className="truck-brand"><BrandPillIcon />{PILLS[2]}</span><span className="truck-dot"></span>
      <span className="truck-brand"><BrandPillIcon />{PILLS[3]}</span><span className="truck-dot"></span>
      <Truck />
      <span className="truck-brand"><BrandPillIcon />{PILLS[4]}</span><span className="truck-dot"></span>
      <span className="truck-brand"><BrandPillIcon />{PILLS[5]}</span><span className="truck-dot"></span>
    </div>
  );
}

export default function TruckBand() {
  return (
    <div className="truck-band" aria-hidden="true">
      <div className="truck-road"></div>
      <div className="truck-track">
        <TruckUnit />
        <TruckUnit ariaHidden="true" />
      </div>
    </div>
  );
}

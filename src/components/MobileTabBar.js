import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PAGE_TO_PATH, PATH_TO_PAGE } from './Header';

export default function MobileTabBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const activePage = PATH_TO_PAGE[location.pathname] || 'index';

  const nav = (page) => navigate(PAGE_TO_PATH[page] || '/');

  return (
    <div className="is-bar" role="navigation" aria-label="Pages">
      <div className="is-inner">

        <button className={`is-item${activePage === 'index' ? ' is-active' : ''}`} data-page="index" onClick={() => nav('index')}>
          <span className="is-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></span>
          <span className="is-lbl">Home</span>
        </button>

        <button className={`is-item${activePage === 'services' ? ' is-active' : ''}`} data-page="services" onClick={() => nav('services')}>
          <span className="is-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg></span>
          <span className="is-lbl">Services</span>
        </button>

        <button className={`is-item${activePage === 'distribute' ? ' is-active' : ''}`} data-page="distribute" onClick={() => nav('distribute')}>
          <span className="is-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></span>
          <span className="is-lbl">Hire Us</span>
        </button>

        <button className={`is-item${activePage === 'coverage' ? ' is-active' : ''}`} data-page="coverage" onClick={() => nav('coverage')}>
          <span className="is-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></span>
          <span className="is-lbl">Coverage</span>
        </button>

        <button className={`is-item${activePage === 'faq' ? ' is-active' : ''}`} data-page="faq" onClick={() => nav('faq')}>
          <span className="is-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg></span>
          <span className="is-lbl">FAQ</span>
        </button>

        {/* Social icons — compact, clearly separated */}
        <div className="is-soc-group">
          <a href="https://www.linkedin.com/in/shubhlabh-express-private-limited-8a7ba1415/" target="_blank" rel="noopener noreferrer" className="is-soc-icon" aria-label="LinkedIn">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="is-soc-icon" aria-label="Instagram">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="is-soc-icon" aria-label="Facebook">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
          </a>
        </div>

      </div>
    </div>
  );
}

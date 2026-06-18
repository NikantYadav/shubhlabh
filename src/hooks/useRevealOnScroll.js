import { useEffect } from 'react';

/*
  Port of initReveal() from the original site.
  Elements with class "r" get class "v" added once they intersect the viewport.
  Runs on every page mount and scans the current page's ".r:not(.v)" elements.
*/
export default function useRevealOnScroll() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) e.target.classList.add('v');
        });
      },
      { threshold: 0.07, rootMargin: '0px 0px -18px 0px' }
    );
    const els = document.querySelectorAll('.page-section.active .r:not(.v)');
    els.forEach(function (el) {
      obs.observe(el);
    });
    return function () {
      obs.disconnect();
    };
  }, []);
}

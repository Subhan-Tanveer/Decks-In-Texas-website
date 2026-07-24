import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';
import { prefersReducedMotion } from '../lib/motion';

gsap.registerPlugin(ScrollTrigger);

/**
 * Sets up Lenis buttery smooth scrolling and wires it into GSAP's ticker so
 * every ScrollTrigger stays perfectly in sync. Fully disabled for users who
 * request reduced motion — native scrolling takes over and nothing animates.
 *
 * Returns the Lenis instance (or null) so components can call lenis.scrollTo().
 */
let lenisSingleton = null;

export function getLenis() {
  return lenisSingleton;
}

export default function useSmoothScroll() {
  const location = useLocation();

  useEffect(() => {
    // Flag lets CSS hide [data-reveal] elements only when JS + motion are live.
    document.documentElement.classList.add('js-ready');

    if (prefersReducedMotion()) {
      // No smooth scroll, no hidden content — everything is immediately visible.
      document.documentElement.classList.remove('js-ready');
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out expo
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });
    lenisSingleton = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Recalculate trigger positions once fonts/images settle.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const t = setTimeout(refresh, 600);

    return () => {
      gsap.ticker.remove(raf);
      window.removeEventListener('load', refresh);
      clearTimeout(t);
      lenis.destroy();
      lenisSingleton = null;
    };
  }, []);

  // Scroll to top + refresh triggers on every route change.
  useEffect(() => {
    if (lenisSingleton) {
      lenisSingleton.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    const t = setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => clearTimeout(t);
  }, [location.pathname]);
}

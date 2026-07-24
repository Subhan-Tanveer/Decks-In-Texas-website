import { useRef } from 'react';
import { gsap } from 'gsap';
import { prefersReducedMotion } from '../lib/motion';

/**
 * Wraps a child so it magnetically eases toward the cursor on hover — the
 * signature micro-interaction on premium sites. Falls back to a static wrapper
 * for touch / reduced-motion.
 */
export default function Magnetic({ children, strength = 0.4, className = '' }) {
  const ref = useRef(null);

  const onMove = (e) => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    gsap.to(el, { x, y, duration: 0.6, ease: 'power3.out' });
  };
  const reset = () => gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.4)' });

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </span>
  );
}

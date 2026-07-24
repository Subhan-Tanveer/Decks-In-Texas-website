import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { prefersReducedMotion } from '../lib/motion';

/**
 * Custom cursor: a crisp dot that tracks 1:1 and a ring that eases behind it and
 * swells over interactive elements. Desktop-only (pointer:fine); never shown for
 * touch or reduced-motion users. Uses mix-blend-mode so it reads on any bg.
 */
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;

    document.body.classList.add('has-cursor');
    const xTo = gsap.quickTo(dot.current, 'x', { duration: 0.08, ease: 'power3' });
    const yTo = gsap.quickTo(dot.current, 'y', { duration: 0.08, ease: 'power3' });
    const rxTo = gsap.quickTo(ring.current, 'x', { duration: 0.4, ease: 'power3' });
    const ryTo = gsap.quickTo(ring.current, 'y', { duration: 0.4, ease: 'power3' });

    const move = (e) => {
      xTo(e.clientX); yTo(e.clientY); rxTo(e.clientX); ryTo(e.clientY);
    };
    const over = (e) => {
      if (e.target.closest('a, button, [data-cursor], input, select, textarea, label'))
        ring.current.classList.add('is-hover');
    };
    const out = (e) => {
      if (e.target.closest('a, button, [data-cursor], input, select, textarea, label'))
        ring.current.classList.remove('is-hover');
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    return () => {
      document.body.classList.remove('has-cursor');
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden />
      <div ref={dot} className="cursor-dot" aria-hidden />
    </>
  );
}

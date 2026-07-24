import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { prefersReducedMotion } from '../lib/motion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Counts from 0 → `value` when scrolled into view (ease-in-out-quad, 1.5s).
 * `decimals` renders fixed places (e.g. 5.0). `prefix`/`suffix` wrap the number.
 */
export default function Counter({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      const render = (n) => {
        el.textContent = prefix + Number(n).toFixed(decimals) + suffix;
      };

      if (prefersReducedMotion()) {
        render(value);
        return;
      }

      const obj = { n: 0 };
      render(0);
      gsap.to(obj, {
        n: value,
        duration: 1.5,
        ease: 'power2.inOut',
        onUpdate: () => render(obj.n),
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    },
    { scope: ref, dependencies: [value] }
  );

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}

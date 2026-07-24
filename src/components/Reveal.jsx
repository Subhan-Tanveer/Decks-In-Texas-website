import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { EASE, prefersReducedMotion } from '../lib/motion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Scroll-triggered reveal. Fades + slides its children in as they enter the
 * viewport. When `stagger` is set, direct children animate in sequence.
 *
 * Props:
 *  - as: element/component to render (default 'div')
 *  - y: slide distance in px (default 24)
 *  - stagger: seconds between children; if >0, staggers direct children
 *  - delay, duration, start: fine-tuning
 */
export default function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  y = 24,
  stagger = 0,
  delay = 0,
  duration = 0.8,
  start = 'top 82%',
  ...rest
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const el = ref.current;
      const targets = stagger > 0 ? el.children : el;

      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: EASE.outCubic,
        stagger: stagger > 0 ? stagger : 0,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} data-reveal className={className} {...rest}>
      {children}
    </Tag>
  );
}

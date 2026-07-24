import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { prefersReducedMotion } from '../lib/motion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Word-by-word masked reveal for headings — each word rises out of a clipped
 * line. `trigger:false` plays on mount (hero); otherwise on scroll into view.
 * `as` sets the element (h1/h2/…). Highlighted words wrap in {ember:'...'}.
 */
export default function SplitReveal({
  text,
  as: Tag = 'h2',
  className = '',
  emberWords = [],
  trigger = true,
  delay = 0,
}) {
  const ref = useRef(null);
  const words = text.split(' ');

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const spans = ref.current.querySelectorAll('[data-w]');
      gsap.set(spans, { yPercent: 120 });
      gsap.to(spans, {
        yPercent: 0,
        duration: 0.9,
        delay,
        ease: 'expo.out',
        stagger: 0.06,
        scrollTrigger: trigger ? { trigger: ref.current, start: 'top 85%' } : undefined,
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span
            data-w
            className={`inline-block ${emberWords.includes(w.replace(/[.,]/g, '')) ? 'text-ember' : ''}`}
          >
            {w}
          </span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </Tag>
  );
}

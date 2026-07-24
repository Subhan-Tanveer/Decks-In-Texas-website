import { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { TESTIMONIALS } from '../data/content';
import { Star } from './icons';
import { prefersReducedMotion } from '../lib/motion';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const cardRef = useRef(null);
  const timer = useRef(null);
  const count = TESTIMONIALS.length;

  const go = useCallback((i) => setActive((i + count) % count), [count]);

  const stopAuto = () => timer.current && clearInterval(timer.current);
  const startAuto = useCallback(() => {
    if (prefersReducedMotion()) return;
    stopAuto();
    timer.current = setInterval(() => setActive((a) => (a + 1) % count), 6000);
  }, [count]);

  useEffect(() => { startAuto(); return stopAuto; }, [startAuto]);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.fromTo(cardRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out' });
  }, { dependencies: [active] });

  const t = TESTIMONIALS[active];

  return (
    <div className="mx-auto max-w-3xl" onMouseEnter={stopAuto} onMouseLeave={startAuto}>
      <div ref={cardRef} className="card relative p-8 sm:p-12">
        <span className="pointer-events-none absolute right-8 top-2 font-display text-9xl leading-none text-ember/15">&rdquo;</span>
        <div className="flex text-ember">
          {[...Array(t.rating)].map((_, i) => <Star key={i} className="h-5 w-5" />)}
        </div>
        <blockquote className="mt-5 font-display text-xl leading-relaxed text-bone sm:text-2xl">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <div className="mt-6 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-ember font-display text-sm font-semibold text-ink">
            {t.name.charAt(0)}
          </span>
          <div>
            <div className="font-semibold text-bone">{t.name}</div>
            <div className="text-sm text-ash">{t.location} · {t.date}</div>
          </div>
        </div>
      </div>

      <div className="mt-7 flex items-center justify-center gap-2.5">
        {TESTIMONIALS.map((_, i) => (
          <button key={i} onClick={() => go(i)} aria-label={`Show review ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ease-expo ${i === active ? 'w-8 bg-ember' : 'w-2.5 bg-bone/20 hover:bg-bone/40'}`} />
        ))}
      </div>
    </div>
  );
}

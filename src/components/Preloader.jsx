import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { prefersReducedMotion } from '../lib/motion';

/**
 * First-load curtain: brand mark + a 0→100 counter, then the panel wipes up to
 * reveal the hero. Runs once per session. Skipped entirely for reduced motion.
 *
 * The progress bar is driven ENTIRELY by GSAP (via a ref, not React state/inline
 * style) — having React re-render an inline `transform` on the same element GSAP
 * is tweening was fighting GSAP's own transform cache and could silently break
 * the timeline, leaving this full-screen overlay stuck forever. A hard timeout
 * safety-net below guarantees it can never block the page again either way.
 */
export default function Preloader({ onDone }) {
  const root = useRef(null);
  const barRef = useRef(null);
  const done = useRef(false);
  const [pct, setPct] = useState(0);

  const finish = () => {
    if (done.current) return;
    done.current = true;
    sessionStorage.setItem('dit-loaded', '1');
    if (root.current) root.current.style.display = 'none';
    onDone?.();
  };

  useGSAP(() => {
    if (prefersReducedMotion() || sessionStorage.getItem('dit-loaded')) {
      finish();
      return;
    }

    const counter = { v: 0 };
    const tl = gsap.timeline({ onComplete: finish });
    tl.to(counter, {
      v: 100,
      duration: 1.6,
      ease: 'power2.inOut',
      onUpdate: () => {
        setPct(Math.round(counter.v));
        gsap.set(barRef.current, { scaleX: counter.v / 100 });
      },
    })
      .to('[data-pl-mark]', { y: -20, opacity: 0, duration: 0.5, ease: 'power2.in' }, '-=0.2')
      .to(root.current, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' }, '+=0.15')
      .set(root.current, { display: 'none' });
  }, { scope: root });

  // Safety net: whatever GSAP does, this overlay can never block the page
  // for more than ~4.5s. Guards against any future regression in the tween above.
  useEffect(() => {
    const t = setTimeout(finish, 4500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div ref={root} className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink">
      <div data-pl-mark className="flex flex-col items-center text-center">
        <img src="/logo.png" alt="Decks In Texas" className="h-36 w-auto sm:h-44" />
        <div className="mt-3 text-[11px] font-semibold uppercase tracking-widest2 text-ash">
          Built to last · Built with honor
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 mx-auto flex w-[min(88%,32rem)] items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-widest text-ash">Loading</span>
        <span className="font-display text-5xl font-semibold text-bone tabular-nums">{pct}</span>
      </div>
      <div ref={barRef} className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-ember" />
    </div>
  );
}

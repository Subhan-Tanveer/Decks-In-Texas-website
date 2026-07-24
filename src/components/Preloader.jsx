import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { prefersReducedMotion } from '../lib/motion';

/**
 * First-load curtain: brand mark + a 0→100 counter, then the panel wipes up to
 * reveal the hero. Runs once per session. Skipped entirely for reduced motion.
 */
export default function Preloader({ onDone }) {
  const root = useRef(null);
  const [pct, setPct] = useState(0);

  useGSAP(() => {
    if (prefersReducedMotion() || sessionStorage.getItem('dit-loaded')) {
      onDone?.();
      if (root.current) root.current.style.display = 'none';
      return;
    }

    const counter = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('dit-loaded', '1');
        onDone?.();
      },
    });
    tl.to(counter, { v: 100, duration: 1.6, ease: 'power2.inOut', onUpdate: () => setPct(Math.round(counter.v)) })
      .to('[data-pl-mark]', { y: -20, opacity: 0, duration: 0.5, ease: 'power2.in' }, '-=0.2')
      .to('[data-pl-bar]', { scaleX: 1, duration: 0.5, ease: 'power2.inOut' }, '-=0.5')
      .to(root.current, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' }, '+=0.05')
      .set(root.current, { display: 'none' });
  }, { scope: root });

  return (
    <div ref={root} className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink">
      <div data-pl-mark className="text-center">
        <div className="font-display text-3xl font-semibold tracking-tight text-bone">
          Decks<span className="text-ember">In</span>Texas
        </div>
        <div className="mt-2 text-[11px] font-semibold uppercase tracking-widest2 text-ash">
          Built to last · Built with honor
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 mx-auto flex w-[min(88%,32rem)] items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-widest text-ash">Loading</span>
        <span className="font-display text-5xl font-semibold text-bone tabular-nums">{pct}</span>
      </div>
      <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-ember" data-pl-bar style={{ transform: `scaleX(${pct / 100})` }} />
    </div>
  );
}

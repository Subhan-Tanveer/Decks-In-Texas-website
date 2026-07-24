import { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { prefersReducedMotion } from '../lib/motion';

const ENTER = 0.65; // left → covers the full screen
const HOLD = 0.15; // fully covered — this is when the page content swaps underneath
const EXIT = 0.6; // continues right, off-screen

/**
 * Full-screen curtain wipe played on every route change: slides in from the
 * left until it covers the screen, briefly holds (brand mark visible), then
 * keeps moving right and exits off-screen — one continuous left-to-right sweep.
 *
 * Keeps its own `displayLocation` one step behind the router's real `location`
 * so the actual page content only swaps once the curtain is fully covering —
 * the visitor never sees the new page pop in mid-wipe.
 *
 * Usage: const [displayLocation, curtain] = usePageTransition(location);
 * Render `curtain` once near the root, and feed `displayLocation` to <Routes>.
 */
export default function usePageTransition(location) {
  const [displayLocation, setDisplayLocation] = useState(location);
  const panelRef = useRef(null);
  const markRef = useRef(null);
  const busy = useRef(false);
  const queued = useRef(null);

  // GSAP must be the ONLY thing that ever sets xPercent/opacity on these
  // elements — including the very first, resting position. A CSS class doing
  // `transform: translateX(-100%)` as the "default" looked reasonable, but
  // GSAP's xPercent reads the element's CURRENT computed transform as its
  // baseline and adds the new offset on top of it; if that baseline already
  // holds -100% from a stylesheet rule, `.set({xPercent:-100})` compounds it
  // to -200%, and every later tween in the sequence inherits that same
  // one-step offset (confirmed via progress-scrubbing: the panel never
  // visually reached 0%, and the final "exit" step landed at 0% instead of
  // 100%). useLayoutEffect runs before paint, so there's no flash of an
  // unset (fully covering) curtain on first load.
  useLayoutEffect(() => {
    if (panelRef.current) gsap.set(panelRef.current, { xPercent: -100 });
    if (markRef.current) gsap.set(markRef.current, { opacity: 0, scale: 0.92 });
  }, []);

  useEffect(() => {
    if (location.pathname === displayLocation.pathname) return;
    if (busy.current) {
      queued.current = location;
      return;
    }
    run(location);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  function run(target) {
    busy.current = true;
    const panel = panelRef.current;
    const mark = markRef.current;

    if (!panel || prefersReducedMotion()) {
      setDisplayLocation(target);
      busy.current = false;
      return;
    }

    gsap.killTweensOf([panel, mark]);
    gsap
      .timeline({
        onComplete: () => {
          busy.current = false;
          if (queued.current && queued.current.pathname !== target.pathname) {
            const next = queued.current;
            queued.current = null;
            run(next);
          }
        },
      })
      .set(panel, { xPercent: -100 })
      .set(mark, { opacity: 0, scale: 0.92 })
      .to(panel, { xPercent: 0, duration: ENTER, ease: 'power3.inOut' })
      .to(mark, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }, '-=0.3')
      .call(() => setDisplayLocation(target))
      .to({}, { duration: HOLD })
      .to(mark, { opacity: 0, duration: 0.2, ease: 'power2.in' })
      .to(panel, { xPercent: 100, duration: EXIT, ease: 'power3.inOut' }, '-=0.05');
  }

  // No CSS classes for position/opacity here — see the useLayoutEffect above
  // for why GSAP must own these from the very first paint.
  const curtain = (
    <div
      ref={panelRef}
      className="pointer-events-none fixed inset-0 z-[250] flex items-center justify-center bg-ink"
      aria-hidden
    >
      <div ref={markRef} className="flex items-center gap-3.5">
        <span className="grid h-14 w-14 place-items-center rounded-xl bg-ember text-ink">
          <span className="font-display text-2xl font-semibold leading-none">D</span>
        </span>
        <span className="font-display text-3xl font-semibold tracking-tight text-bone">
          Decks<span className="text-ember">In</span>Texas
        </span>
      </div>
    </div>
  );

  return [displayLocation, curtain];
}

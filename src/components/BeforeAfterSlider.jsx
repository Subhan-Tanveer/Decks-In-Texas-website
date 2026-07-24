import { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MEDIA } from '../data/media';
import { Drag } from './icons';
import { prefersReducedMotion } from '../lib/motion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Signature draggable before/after reveal. Works with mouse, touch, and
 * keyboard. Plays a deliberate "wipe" intro the first time it enters view,
 * then hands control to the visitor.
 */
export default function BeforeAfterSlider() {
  const [pos, setPos] = useState(50); // percent — clip position of the "before" layer
  const containerRef = useRef(null);
  const dragging = useRef(false);
  const played = useRef(false);

  const setFromClientX = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setFromClientX(x);
    };
    const onUp = () => (dragging.current = false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, [setFromClientX]);

  // Deliberate intro wipe (ease-in-out-cubic) the first time it's seen.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          if (played.current) return;
          played.current = true;
          const p = { v: 78 };
          setPos(78);
          gsap.to(p, {
            v: 42,
            duration: 2.2,
            ease: 'power3.inOut',
            onUpdate: () => setPos(p.v),
          });
        },
      });
    },
    { scope: containerRef }
  );

  const start = (e) => {
    dragging.current = true;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setFromClientX(x);
  };

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4));
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl shadow-lift"
      onMouseDown={start}
      onTouchStart={start}
    >
      {/* AFTER (underneath, full) */}
      <img
        src={MEDIA.beforeAfter.after}
        alt="Finished custom deck — after transformation by Decks In Texas"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      {/* BEFORE (clipped to `pos`) */}
      <div className="absolute inset-0 h-full w-full" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={MEDIA.beforeAfter.before}
          alt="Backyard before the deck was built"
          className="h-full w-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-ink/10" />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-bone backdrop-blur">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-ember px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink backdrop-blur">
        After
      </span>

      {/* Divider + handle */}
      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -ml-px w-0.5 bg-bone shadow-[0_0_24px_rgba(210,130,58,0.6)]" />
        <button
          type="button"
          onKeyDown={onKey}
          aria-label="Drag to compare before and after"
          className="pointer-events-auto absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-bone text-ink shadow-lift transition-transform duration-200 group-hover:scale-105"
        >
          <Drag className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

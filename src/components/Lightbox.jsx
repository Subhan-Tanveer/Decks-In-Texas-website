import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Close, ArrowRight, MapPin } from './icons';
import { prefersReducedMotion } from '../lib/motion';

/** Full-screen lightbox with smooth zoom+fade, keyboard nav, and focus trap-ish behavior. */
export default function Lightbox({ items, index, onClose, onNav }) {
  const item = items[index];
  const backdropRef = useRef(null);
  const figureRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNav(1);
      if (e.key === 'ArrowLeft') onNav(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onNav]);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' });
    gsap.fromTo(
      figureRef.current,
      { scale: 0.82, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    );
  }, { dependencies: [index] });

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <button
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-ink/10 text-bone transition hover:bg-ink/20"
      >
        <Close className="h-6 w-6" />
      </button>

      {/* Prev / Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNav(-1); }}
        aria-label="Previous"
        className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-ink/10 text-bone transition hover:bg-ink/20 sm:left-6"
      >
        <ArrowRight className="h-6 w-6 rotate-180" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNav(1); }}
        aria-label="Next"
        className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-ink/10 text-bone transition hover:bg-ink/20 sm:right-6"
      >
        <ArrowRight className="h-6 w-6" />
      </button>

      <figure ref={figureRef} className="max-h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={item.full}
          alt={item.alt}
          className="mx-auto max-h-[76vh] w-auto rounded-xl object-contain shadow-lift"
        />
        <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 text-bone">
          <div className="max-w-xl">
            <h3 className="font-display text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-bone/70">{item.desc || item.material}</p>
          </div>
          <span className="flex items-center gap-1.5 text-sm text-bone/70">
            <MapPin className="h-4 w-4 text-ember" /> {item.location}, TX · {index + 1}/{items.length}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}

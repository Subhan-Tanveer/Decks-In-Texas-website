import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { FAQ as FAQ_DATA } from '../data/content';
import { prefersReducedMotion } from '../lib/motion';

function Item({ q, a, open, onToggle }) {
  const bodyRef = useRef(null);
  const innerRef = useRef(null);

  useGSAP(() => {
    const h = open ? innerRef.current.offsetHeight : 0;
    if (prefersReducedMotion()) { gsap.set(bodyRef.current, { height: h }); return; }
    gsap.to(bodyRef.current, { height: h, duration: 0.45, ease: 'power3.inOut' });
  }, { dependencies: [open] });

  return (
    <div className="border-b border-bone/10">
      <button onClick={onToggle} aria-expanded={open} className="flex w-full items-center justify-between gap-4 py-5 text-left">
        <span className="font-display text-lg font-semibold text-bone">{q}</span>
        <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-bone/20 text-bone transition-all duration-300 ${open ? 'rotate-45 border-ember bg-ember text-ink' : ''}`}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
        </span>
      </button>
      <div ref={bodyRef} className="h-0 overflow-hidden">
        <p ref={innerRef} className="pb-5 pr-12 leading-relaxed text-bone/65">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-3xl">
      {FAQ_DATA.map((f, i) => (
        <Item key={f.q} {...f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
      ))}
    </div>
  );
}

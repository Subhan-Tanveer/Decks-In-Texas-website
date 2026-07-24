import { useEffect, useRef } from 'react';

/** Thin cedar progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop || window.scrollY) / max : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${pct})`;
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[55] h-1 origin-left">
      <div ref={ref} className="h-full origin-left scale-x-0 bg-ember" style={{ transformOrigin: 'left' }} />
    </div>
  );
}

import { useMemo, useState } from 'react';
import Img from './Img';
import Reveal from './Reveal';
import Lightbox from './Lightbox';
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from '../data/media';
import { MapPin } from './icons';

export default function PortfolioGallery({ limit, categories, showFilter = true }) {
  const [filter, setFilter] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);

  // `categories` (array) hard-scopes the gallery to a service page.
  const scoped = useMemo(
    () => (categories?.length ? PORTFOLIO.filter((p) => categories.includes(p.category)) : PORTFOLIO),
    [categories]
  );

  const items = useMemo(() => {
    const list = filter === 'All' ? scoped : scoped.filter((p) => p.category === filter);
    return limit ? list.slice(0, limit) : list;
  }, [filter, limit, scoped]);

  const nav = (dir) =>
    setOpenIndex((i) => (i + dir + items.length) % items.length);

  // Which filter chips to show: none if disabled, scoped subset if categories given.
  const chips = !showFilter
    ? []
    : categories?.length > 1
    ? ['All', ...categories]
    : categories?.length === 1
    ? []
    : PORTFOLIO_CATEGORIES;

  return (
    <div>
      {/* Filter chips */}
      {chips.length > 0 && (
      <Reveal className="mb-8 flex flex-wrap gap-2.5" stagger={0.05}>
        {chips.map((c) => (
          <button key={c} onClick={() => setFilter(c)} className={`chip ${filter === c ? 'chip-active' : ''}`}>
            {c}
          </button>
        ))}
      </Reveal>
      )}

      {/* Masonry-ish grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 0.05} y={30}>
            <button
              onClick={() => setOpenIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-bone/10 focus:outline-none"
              aria-label={`View ${p.title}`}
              data-cursor
            >
              <Img
                src={p.src}
                alt={p.alt}
                className="aspect-[4/3]"
                imgClassName="transition-transform duration-[1100ms] ease-expo group-hover:scale-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-left opacity-0 transition-all duration-300 ease-expo group-hover:translate-y-0 group-hover:opacity-100">
                <span className="rounded-full bg-ember px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-ink">
                  {p.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-bone">{p.title}</h3>
                <p className="flex items-center gap-1.5 text-xs text-bone/80">
                  <MapPin className="h-3.5 w-3.5" /> {p.location} · {p.material}
                </p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox items={items} index={openIndex} onClose={() => setOpenIndex(null)} onNav={nav} />
      )}
    </div>
  );
}

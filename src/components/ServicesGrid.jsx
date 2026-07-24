import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import Img from './Img';
import { SERVICE_PAGE_LIST } from '../data/servicePages';
import { ArrowRight, Clock } from './icons';

/** Home-page service overview — one card per dedicated service page. */
export default function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {SERVICE_PAGE_LIST.map((s, i) => (
        <Reveal key={s.slug} delay={i * 0.08} y={30}>
          <Link to={`/${s.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden" data-cursor>
            <div className="relative overflow-hidden">
              <Img
                src={s.overview.image}
                alt={`${s.hero.eyebrow} by Decks In Texas`}
                className="aspect-[4/3]"
                imgClassName="transition-transform duration-[1100ms] ease-expo group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80" />
              <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-bone backdrop-blur">
                <Clock className="h-3.5 w-3.5 text-ember" /> {s.timeline}
              </span>
              <h3 className="absolute bottom-4 left-5 font-display text-2xl font-semibold text-bone">{s.hero.eyebrow}</h3>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="flex-1 text-sm leading-relaxed text-bone/65">{s.hero.intro}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.materials.slice(0, 3).map((m) => (
                  <span key={m} className="rounded-full border border-bone/10 bg-coal px-2.5 py-1 text-[11px] font-semibold text-ash">{m}</span>
                ))}
              </div>
              <span className="link-underline mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ember">
                Explore {s.hero.eyebrow} <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

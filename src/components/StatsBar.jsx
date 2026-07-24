import Counter from './Counter';
import Reveal from './Reveal';
import { SITE } from '../data/site';

const STATS = [
  { value: SITE.rating, decimals: 1, label: 'Google Rating', suffix: '' },
  { value: SITE.reviewCount, decimals: 0, label: '5-Star Reviews', suffix: '' },
  { value: SITE.yearsInBusiness, decimals: 0, label: 'Years Building', suffix: '' },
  { value: SITE.projectsCompleted, decimals: 0, label: 'Projects Completed', suffix: '+' },
];

export default function StatsBar() {
  return (
    <Reveal
      stagger={0.1}
      className="grid grid-cols-2 gap-y-10 rounded-3xl border border-bone/10 bg-coal px-6 py-12 sm:px-10 md:grid-cols-4"
    >
      {STATS.map((s) => (
        <div key={s.label} className="text-center">
          <div className="font-display text-5xl font-semibold text-ember sm:text-6xl">
            <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
          </div>
          <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-ash">{s.label}</div>
        </div>
      ))}
    </Reveal>
  );
}

import Reveal from './Reveal';
import { PROCESS_STEPS } from '../data/content';

export default function Process() {
  return (
    <div className="relative grid gap-6 md:grid-cols-4">
      <div className="absolute left-0 right-0 top-8 hidden h-px bg-bone/10 md:block" aria-hidden />
      {PROCESS_STEPS.map((s, i) => (
        <Reveal key={s.step} delay={i * 0.1} y={30} className="relative">
          <div className="grid h-16 w-16 place-items-center rounded-2xl border border-ember/30 bg-coal font-display text-xl font-semibold text-ember">
            {s.step}
          </div>
          <h3 className="mt-5 font-display text-lg font-semibold text-bone">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-bone/60">{s.body}</p>
        </Reveal>
      ))}
    </div>
  );
}

import Reveal from './Reveal';
import SplitReveal from './SplitReveal';

/** Eyebrow + animated title + optional intro, used across sections. */
export default function SectionHeading({ eyebrow, title, intro, align = 'left', emberWords = [], className = '' }) {
  const centered = align === 'center';
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${centered ? 'justify-center' : ''}`}>{eyebrow}</span>
        </Reveal>
      )}
      <SplitReveal
        text={title}
        emberWords={emberWords}
        className="mt-5 font-display text-display-md font-semibold text-bone"
      />
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg leading-relaxed text-bone/70">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}

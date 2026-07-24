import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import Img from './Img';
import { MEDIA } from '../data/media';
import { Shield, Bolt, Leaf, Hammer, ArrowRight } from './icons';
import { prefersReducedMotion } from '../lib/motion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const VALUES = [
  { icon: Shield, title: 'Discipline', body: 'Military precision on every cut, fastener, and finish.' },
  { icon: Hammer, title: 'Craftsmanship', body: 'We build like it’s our own backyard — our name is on it.' },
  { icon: Bolt, title: 'Speed', body: 'Most decks finished in 3–7 days without cutting corners.' },
  { icon: Leaf, title: 'Premium Materials', body: 'Trex, TimberTech & AZEK, engineered for the Texas sun.' },
];

export default function VeteranStory() {
  const root = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.to('[data-story-img]', {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  }, { scope: root });

  return (
    <div ref={root} className="grid items-center gap-12 lg:grid-cols-2">
      <Reveal y={30} className="relative">
        <div className="relative overflow-hidden rounded-3xl shadow-card" data-story-img>
          <Img src={MEDIA.ownerPortrait} alt="JC, veteran owner of Decks In Texas" className="aspect-[4/5]" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
        </div>
        <div className="absolute -bottom-6 -right-4 hidden w-44 rounded-2xl border border-ember/30 bg-coal p-5 text-bone shadow-glow sm:block">
          <Shield className="h-7 w-7 text-ember" />
          <p className="mt-2 font-display text-sm font-semibold leading-tight">Veteran-Owned &amp; Operated</p>
          <p className="mt-1 text-xs text-ash">Serving Austin since 2014</p>
        </div>
      </Reveal>

      <div>
        <SectionHeading eyebrow="Our story" title="Built on the values we served by." emberWords={['values']} />
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg leading-relaxed text-bone/70">
            Decks In Texas was founded by JC, a veteran who traded one kind of service for another.
            The same discipline, accountability, and attention to detail that defined his time in uniform
            now go into every deck, porch, and railing we build.
          </p>
          <p className="mt-4 leading-relaxed text-bone/70">
            No subcontractor roulette. No disappearing acts. Just a tight, veteran-led crew that shows up
            on time, communicates clearly, and treats your home like our own.
          </p>
        </Reveal>

        <Reveal stagger={0.08} className="mt-8 grid grid-cols-2 gap-5">
          {VALUES.map((v) => (
            <div key={v.title} className="card p-5" data-cursor>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ember/15 text-ember">
                <v.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-3 font-display text-base font-semibold text-bone">{v.title}</h3>
              <p className="mt-1 text-sm text-bone/55">{v.body}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-8">
          <Link to="/about" className="link-underline inline-flex items-center gap-2 font-semibold text-ember">
            Read our full story <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}

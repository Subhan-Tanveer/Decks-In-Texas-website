import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import VideoBackground from './VideoBackground';
import SplitReveal from './SplitReveal';
import { prefersReducedMotion } from '../lib/motion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Interior-page hero with a cinematic video background + animated headline. */
export default function PageHero({ eyebrow, title, intro, crumb, video, poster, emberWords = [] }) {
  const root = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.1 });
    tl.from('[data-ph-crumb]', { y: 14, opacity: 0, duration: 0.5 })
      .from('[data-ph-eyebrow]', { y: 14, opacity: 0, duration: 0.5 }, '-=0.3')
      .from('[data-ph-intro]', { y: 18, opacity: 0, duration: 0.6 }, '+=0.2');

    gsap.to('[data-ph-video]', {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
    });
  }, { scope: root });

  return (
    <section ref={root} className="relative flex min-h-[62vh] items-end overflow-hidden pb-14 pt-32 sm:min-h-[68vh] sm:pb-20">
      <div data-ph-video className="absolute inset-0 -z-10">
        <VideoBackground video={video} poster={poster} overlay="center" />
      </div>
      <div className="ember-glow pointer-events-none absolute -right-32 top-10 h-[32rem] w-[32rem] -z-10" aria-hidden />

      <div className="container-px relative">
        <nav data-ph-crumb className="text-sm text-bone/50" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-bone">Home</Link>
          <span className="mx-2 text-ember">/</span>
          <span className="text-bone/80">{crumb || title}</span>
        </nav>
        {eyebrow && <span data-ph-eyebrow className="eyebrow mt-5">{eyebrow}</span>}
        <SplitReveal
          as="h1"
          text={title}
          emberWords={emberWords}
          trigger={false}
          delay={0.25}
          className="mt-4 max-w-4xl font-display text-display-lg font-semibold text-bone text-glow"
        />
        {intro && <p data-ph-intro className="mt-6 max-w-2xl text-lg leading-relaxed text-bone/75">{intro}</p>}
      </div>
    </section>
  );
}

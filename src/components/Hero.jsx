import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import VideoBackground from './VideoBackground';
import SplitReveal from './SplitReveal';
import Magnetic from './Magnetic';
import { MEDIA } from '../data/media';
import { SITE, telHref } from '../data/site';
import { Star, Phone, ArrowRight, Shield } from './icons';
import { prefersReducedMotion } from '../lib/motion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.15 });
      tl.from('[data-h-eyebrow]', { y: 20, opacity: 0, duration: 0.7 })
        .from('[data-h-sub]', { y: 20, opacity: 0, duration: 0.7 }, '-=0.2')
        .from('[data-h-cta] > *', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.3')
        .from('[data-h-trust] > *', { y: 16, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.3')
        .from('[data-h-scroll]', { opacity: 0, duration: 0.6 }, '-=0.2');

      // Parallax + fade the content as the hero leaves.
      gsap.to('[data-h-content]', {
        yPercent: -14,
        opacity: 0.1,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('[data-h-video]', {
        scale: 1.12,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <div data-h-video className="absolute inset-0 -z-10">
        <VideoBackground video={MEDIA.heroVideo} poster={MEDIA.heroImage} overlay="default" />
      </div>
      <div className="ember-glow pointer-events-none absolute -left-40 top-1/3 h-[40rem] w-[40rem] -z-10" aria-hidden />

      <div data-h-content className="container-px w-full pt-24">
        <div className="max-w-4xl">
          <span data-h-eyebrow className="eyebrow">Veteran-Owned · Austin, Texas</span>

          <SplitReveal
            as="h1"
            text="Decks worth coming home to."
            emberWords={['home', 'to']}
            className="mt-6 font-display text-display-xl font-semibold text-bone text-glow"
            trigger={false}
            delay={0.3}
          />

          <p data-h-sub className="mt-7 max-w-xl text-lg leading-relaxed text-bone/80">
            Custom decks, porches, railings &amp; fences engineered for the Texas climate —
            premium materials, permits handled, most builds finished in{' '}
            <span className="font-semibold text-bone">3–7 days</span>.
          </p>

          <div data-h-cta className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Link to="/get-quote" className="btn-primary text-base">
                Get My Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a href={telHref} className="btn-outline">
                <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
              </a>
            </Magnetic>
          </div>

          <div data-h-trust className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex text-ember">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5" />)}
              </div>
              <span className="text-sm font-semibold text-bone">5.0 · {SITE.reviewCount} reviews</span>
            </div>
            <div className="h-8 w-px bg-bone/20" />
            <div className="flex items-center gap-2 text-sm font-semibold text-bone">
              <Shield className="h-5 w-5 text-ember" /> Licensed · Insured · Permits Handled
            </div>
          </div>
        </div>
      </div>

      <div data-h-scroll className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-bone/50 sm:flex">
        <span className="text-[10px] font-semibold uppercase tracking-widest2">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-bone/30 pt-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-ember" />
        </span>
      </div>
    </section>
  );
}

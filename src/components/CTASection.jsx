import { Link } from 'react-router-dom';
import VideoBackground from './VideoBackground';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Magnetic from './Magnetic';
import { MEDIA, VIDEOS } from '../data/media';
import { SITE, telHref } from '../data/site';
import { Phone, ArrowRight } from './icons';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <VideoBackground video={VIDEOS.woodCraft2} poster={MEDIA.ctaImage} overlay="heavy" />
      <div className="ember-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="container-px relative text-center">
        <SectionHeading
          align="center"
          eyebrow="Ready when you are"
          title="Let's build the backyard you've been picturing."
          emberWords={['backyard']}
          className="!max-w-3xl"
        />
        <Reveal delay={0.1} className="mx-auto mt-5 max-w-xl">
          <p className="text-lg text-bone/75">
            Free, no-pressure on-site estimate. Honest pricing, premium materials, and a firm timeline —
            usually 3–7 days from first cut to final walkthrough.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
        </Reveal>
      </div>
    </section>
  );
}

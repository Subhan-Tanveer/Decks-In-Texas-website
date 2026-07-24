import { Link } from 'react-router-dom';
import PageHero from './PageHero';
import Section from './Section';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Img from './Img';
import Process from './Process';
import Testimonials from './Testimonials';
import CTASection from './CTASection';
import PortfolioGallery from './PortfolioGallery';
import Magnetic from './Magnetic';
import { useSeo } from '../lib/seo';
import { Check, Clock, ArrowRight, Hammer, Leaf, Bolt, Shield } from './icons';

const ICONS = { Hammer, Leaf, Bolt, Shield };

/** Renders a full, individually-animated service page from a config object. */
export default function ServicePageTemplate({ config }) {
  const { hero, overview, materials, timeline, categories, benefits, galleryHeading, seo } = config;
  useSeo(seo);

  return (
    <>
      <PageHero
        crumb={hero.eyebrow}
        eyebrow={hero.eyebrow}
        title={hero.title}
        intro={hero.intro}
        video={hero.video}
        poster={hero.poster}
        emberWords={hero.emberWords}
      />

      {/* Overview */}
      <Section tone="ink">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal y={30} className="relative order-1">
            <Img src={overview.image} alt={hero.eyebrow} className="aspect-[4/3] rounded-3xl shadow-card" priority />
            <span className="absolute -bottom-5 left-5 flex items-center gap-2 rounded-full bg-ember px-4 py-2 text-sm font-bold text-ink shadow-glow">
              <Clock className="h-4 w-4" /> Typically {timeline}
            </span>
          </Reveal>

          <div className="order-2">
            <SectionHeading eyebrow="What we build" title={overview.heading} emberWords={[]} />
            <Reveal delay={0.1}>
              {overview.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 leading-relaxed text-bone/70">{p}</p>
              ))}
            </Reveal>

            <Reveal stagger={0.06} className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {overview.features.map((f) => (
                <div key={f} className="flex items-start gap-2.5 text-bone">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                  <span className="text-sm font-medium">{f}</span>
                </div>
              ))}
            </Reveal>

            <Reveal className="mt-8">
              <Magnetic>
                <Link to="/get-quote" className="btn-primary">
                  Get a free estimate <ArrowRight className="h-4 w-4" />
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section tone="coal">
        <SectionHeading align="center" eyebrow="Why homeowners choose us" title="Built to a higher standard." className="mb-14" emberWords={['higher', 'standard.']} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = ICONS[b.icon] || Hammer;
            return (
              <Reveal key={b.title} delay={i * 0.08} y={30}>
                <div className="card card-hover h-full p-6" data-cursor>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-ember/15 text-ember">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-bone">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bone/60">{b.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Materials */}
      <Section tone="ink" className="!py-16 board-lines">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <SectionHeading eyebrow="Premium materials" title="We build with the best." emberWords={['best.']} />
          <Reveal stagger={0.05} className="flex max-w-2xl flex-wrap gap-2.5">
            {materials.map((m) => (
              <span key={m} className="rounded-full border border-bone/15 bg-coal px-4 py-2 text-sm font-semibold text-bone/85">
                {m}
              </span>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* Gallery */}
      <Section tone="coal">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Our work" title={galleryHeading} intro="Tap any project for a closer look." />
          <Reveal>
            <Link to="/portfolio" className="btn-outline">
              Full portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <PortfolioGallery categories={categories} />
      </Section>

      {/* Process */}
      <Section tone="ink">
        <SectionHeading align="center" eyebrow="How it works" title="From first call to final walkthrough." className="mb-14" />
        <Process />
      </Section>

      {/* Testimonials */}
      <Section tone="coal">
        <SectionHeading align="center" eyebrow="Kind words" title="5.0 stars, earned one project at a time." className="mb-12" emberWords={['5.0']} />
        <Testimonials />
      </Section>

      <CTASection />
    </>
  );
}

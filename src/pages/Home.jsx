import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import ServicesGrid from '../components/ServicesGrid';
import StatsBar from '../components/StatsBar';
import VeteranStory from '../components/VeteranStory';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import PortfolioGallery from '../components/PortfolioGallery';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import ServiceAreas from '../components/ServiceAreas';
import CTASection from '../components/CTASection';
import Reveal from '../components/Reveal';
import { ArrowRight } from '../components/icons';
import { useSeo } from '../lib/seo';

export default function Home() {
  useSeo({
    title: 'Decks In Texas | Veteran-Owned Deck & Porch Builder in Austin, TX',
    description:
      'Veteran-owned custom deck, porch, railing & fence builder in Austin. Premium Trex, TimberTech & AZEK. Permits handled. Decks in 3–7 days. 5.0★ · Free estimates.',
  });

  return (
    <>
      <Hero />
      <Marquee />

      {/* Services */}
      <Section tone="ink">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What we build"
            title="Craftsmanship for every corner of your outdoor space."
            intro="Three specialties, one standard: built right, built to last."
          />
          <Reveal>
            <Link to="/get-quote" className="btn-outline">
              Get a free estimate <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <ServicesGrid />
      </Section>

      {/* Before / After — emotional peak */}
      <Section tone="ink">
        <SectionHeading
          light
          align="center"
          eyebrow="See the transformation"
          title="Drag to reveal what's possible."
          intro="Real project, real backyard. Slide to watch an unused slope become the heart of a home."
          className="mb-12"
        />
        <Reveal y={40} className="mx-auto max-w-4xl">
          <BeforeAfterSlider />
        </Reveal>
      </Section>

      {/* Veteran story */}
      <Section tone="umber">
        <VeteranStory />
      </Section>

      {/* Stats */}
      <Section tone="ink" className="!py-16">
        <StatsBar />
      </Section>

      {/* Portfolio preview */}
      <Section tone="coal">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Recent work"
            title="A portfolio built board by board."
            intro="A look at decks, porches, railings, and fences we've built across Central Texas."
          />
          <Reveal>
            <Link to="/portfolio" className="btn-outline">
              View full portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <PortfolioGallery limit={6} />
      </Section>

      {/* Process */}
      <Section tone="ink">
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title="From first call to final walkthrough."
          intro="A clear, honest process with no surprises — the way it should be."
          className="mb-14"
        />
        <Process />
      </Section>

      {/* Testimonials */}
      <Section tone="umber">
        <SectionHeading
          align="center"
          eyebrow="What neighbors say"
          title="5.0 stars, earned one deck at a time."
          className="mb-12"
        />
        <Testimonials />
      </Section>

      {/* Service areas */}
      <Section tone="coal">
        <ServiceAreas />
      </Section>

      <CTASection />
    </>
  );
}

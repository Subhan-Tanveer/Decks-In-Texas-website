import PageHero from '../components/PageHero';
import Section from '../components/Section';
import PortfolioGallery from '../components/PortfolioGallery';
import SectionHeading from '../components/SectionHeading';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Reveal from '../components/Reveal';
import { MEDIA, VIDEOS } from '../data/media';
import { useSeo } from '../lib/seo';

export default function Portfolio() {
  useSeo({
    title: 'Portfolio | Deck, Porch & Fence Projects — Decks In Texas',
    description:
      'Browse real deck, porch, railing, and fence projects built by Decks In Texas across Austin, Cedar Park, Leander, Round Rock, and the Hill Country.',
  });

  return (
    <>
      <PageHero
        crumb="Portfolio"
        eyebrow="Our work"
        title="Built board by board across Central Texas."
        emberWords={['Central', 'Texas.']}
        video={VIDEOS.deckWide}
        poster={MEDIA.heroImage}
        intro="Filter by project type and tap any photo for a closer look. Every project here was designed and built by our own crew."
      />

      <Section tone="ink">
        <SectionHeading
          light
          align="center"
          eyebrow="Before & after"
          title="From forgotten yard to favorite room."
          className="mb-12"
        />
        <Reveal y={40} className="mx-auto max-w-4xl">
          <BeforeAfterSlider />
        </Reveal>
      </Section>

      <Section tone="ink">
        <PortfolioGallery />
      </Section>

      <Section tone="umber">
        <SectionHeading align="center" eyebrow="Kind words" title="What our clients say." className="mb-12" />
        <Testimonials />
      </Section>

      <CTASection />
    </>
  );
}

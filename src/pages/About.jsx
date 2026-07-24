import PageHero from '../components/PageHero';
import Section from '../components/Section';
import VeteranStory from '../components/VeteranStory';
import StatsBar from '../components/StatsBar';
import Process from '../components/Process';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import Reveal from '../components/Reveal';
import Img from '../components/Img';
import { MEDIA, VIDEOS } from '../data/media';
import { useSeo } from '../lib/seo';

export default function About() {
  useSeo({
    title: 'About | Veteran-Owned Deck Builder in Austin — Decks In Texas',
    description:
      'Meet the veteran-owned team behind Decks In Texas. Discipline, craftsmanship, and premium materials on every deck, porch, railing, and fence in the Austin metro.',
  });

  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Veteran-owned since 2014"
        title="A builder you can take at their word."
        emberWords={['word.']}
        video={VIDEOS.workshop}
        poster={MEDIA.aboutHeroImage}
        intro="We brought the discipline of military service into the trade — and it shows in every board we set."
      />

      <Section tone="ink">
        <VeteranStory />
      </Section>

      <Section tone="umber" className="!py-16">
        <StatsBar />
      </Section>

      <Section tone="coal">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal y={30}>
            <Img src={MEDIA.craftDetail} alt="Close-up of precision deck joinery" className="aspect-[4/3] rounded-3xl shadow-lift" />
          </Reveal>
          <SectionHeading
            eyebrow="Our commitment"
            title="Quality you can stand on for decades."
            intro="We don't chase volume — we chase a reputation. That means premium composites and hand-selected lumber, structural engineering that exceeds code, permits handled start to finish, and a crew that cleans up like we were never there. When we hand you the keys to your new outdoor space, it's built to outlast the mortgage."
          />
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title="A process built on accountability."
          className="mb-14"
        />
        <Process />
      </Section>

      <CTASection />
    </>
  );
}

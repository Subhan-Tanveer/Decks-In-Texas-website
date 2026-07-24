import PageHero from '../components/PageHero';
import Section from '../components/Section';
import QuoteForm from '../components/QuoteForm';
import ServiceAreas from '../components/ServiceAreas';
import FAQ from '../components/FAQ';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { SITE, telHref, whatsappHref } from '../data/site';
import { Phone, Whatsapp, Clock, Shield, Bolt, Check } from '../components/icons';
import { MEDIA, VIDEOS } from '../data/media';
import { useSeo } from '../lib/seo';

const PERKS = [
  { icon: Bolt, text: 'Free, no-pressure on-site visit' },
  { icon: Clock, text: 'Firm timeline in writing' },
  { icon: Shield, text: 'Permits handled for you' },
  { icon: Check, text: 'Honest, itemized pricing' },
];

export default function GetQuote() {
  useSeo({
    title: 'Free Estimate | Decks In Texas — Austin Deck Builder',
    description:
      'Request your free deck, porch, railing, or fence estimate in Austin. Veteran-owned, premium materials, permits handled. JC replies within one business day.',
  });

  return (
    <>
      <PageHero
        crumb="Free Estimate"
        eyebrow="Let's build something"
        title="Get your free estimate."
        emberWords={['free', 'estimate.']}
        video={VIDEOS.sawdust}
        poster={MEDIA.quoteHeroImage}
        intro="Tell us about your project and JC will personally reach out within one business day to schedule your free on-site visit."
      />

      <Section tone="ink">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          {/* Left rail */}
          <div>
            <Reveal stagger={0.1}>
              <h2 className="font-display text-2xl font-bold text-bone">Prefer to talk it through?</h2>
              <p className="mt-3 text-bone/70">We're happy to answer questions before you commit to anything.</p>
              <div className="mt-6 flex flex-col gap-3">
                <a href={telHref} className="btn-primary justify-start">
                  <Phone className="h-5 w-5" /> Call {SITE.phoneDisplay}
                </a>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-outline justify-start">
                  <Whatsapp className="h-5 w-5" /> Message us on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal stagger={0.08} className="mt-8 grid gap-3">
              {PERKS.map((p) => (
                <div key={p.text} className="flex items-center gap-3 rounded-xl bg-umber p-4 shadow-card">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-ember/10 text-ember">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <span className="font-semibold text-bone">{p.text}</span>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Form */}
          <Reveal y={30}>
            <QuoteForm />
          </Reveal>
        </div>
      </Section>

      <Section tone="coal">
        <ServiceAreas />
      </Section>

      <Section tone="umber">
        <SectionHeading align="center" eyebrow="Good to know" title="Frequently asked questions." className="mb-10" />
        <FAQ />
      </Section>
    </>
  );
}

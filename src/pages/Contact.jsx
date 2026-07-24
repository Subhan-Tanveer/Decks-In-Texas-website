import PageHero from '../components/PageHero';
import Section from '../components/Section';
import QuoteForm from '../components/QuoteForm';
import Reveal from '../components/Reveal';
import { SITE, telHref, whatsappHref } from '../data/site';
import { Phone, Whatsapp, Mail, MapPin, Clock } from '../components/icons';
import { MEDIA, VIDEOS } from '../data/media';
import { useSeo } from '../lib/seo';

export default function Contact() {
  useSeo({
    title: 'Contact | Decks In Texas — Austin Deck & Porch Builder',
    description:
      'Contact Decks In Texas — call, text, or WhatsApp (512) 657-3781. Veteran-owned deck builder serving Austin, Cedar Park, Leander, Round Rock, and the Hill Country.',
  });

  const cards = [
    { icon: Phone, label: 'Call or text', value: SITE.phoneDisplay, href: telHref },
    { icon: Whatsapp, label: 'WhatsApp', value: 'Start a chat', href: whatsappHref, external: true },
    { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  ];

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="We'd love to hear from you"
        title="Let's talk about your project."
        emberWords={['project.']}
        video={VIDEOS.woodCraft}
        poster={MEDIA.craftDetail}
        intro="Call, text, WhatsApp, or drop us a note — a real person on our crew will get back to you fast."
      />

      <Section tone="ink">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Reveal stagger={0.09} className="grid gap-4 sm:grid-cols-1">
              {cards.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="card card-hover flex items-center gap-4 rounded-2xl bg-umber p-5 shadow-card"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-coal text-bone">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-widest text-ash">{c.label}</span>
                    <span className="block font-display text-lg font-bold text-bone">{c.value}</span>
                  </span>
                </a>
              ))}
            </Reveal>

            <Reveal className="mt-6 rounded-2xl bg-coal p-6 text-bone">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-ember" />
                <span className="font-semibold">{SITE.city}</span>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-ember" />
                <ul className="text-sm text-bone/85">
                  {SITE.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6">
                      <span>{h.day}</span><span className="text-bone/60">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 border-t border-bone/10 pt-4 text-sm text-bone/70">
                Serving {SITE.serviceAreas.slice(0, -1).join(', ')} &amp; {SITE.serviceAreas.at(-1)}.
              </p>
            </Reveal>
          </div>

          <Reveal y={30}>
            <QuoteForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}

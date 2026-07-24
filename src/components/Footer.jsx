import { Link } from 'react-router-dom';
import { ALL_LINKS, SITE, telHref, whatsappHref } from '../data/site';
import { Phone, Whatsapp, Mail, MapPin, Clock, Star } from './icons';
import SplitReveal from './SplitReveal';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-bone/10 bg-ink text-bone/70">
      <div className="grain absolute inset-0 opacity-30" aria-hidden />

      {/* Big kinetic wordmark */}
      <div className="container-px relative pt-16">
        <SplitReveal
          text="Let's build something that lasts."
          emberWords={['lasts.']}
          className="font-display text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.05] text-bone"
        />
        <div className="mt-6 flex flex-wrap gap-4">
          <Link to="/get-quote" className="btn-primary">Get a free estimate</Link>
          <a href={telHref} className="btn-outline"><Phone className="h-4 w-4" /> {SITE.phoneDisplay}</a>
        </div>
      </div>

      <div className="container-px relative mt-16 grid gap-12 border-t border-bone/10 pt-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Decks In Texas" className="h-16 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Veteran-owned custom deck, porch, railing &amp; fence builder proudly serving the Greater Austin metro.
          </p>
          <div className="mt-4 flex items-center gap-1.5 text-ember">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4" />)}
            <span className="ml-2 text-sm text-bone/60">5.0 · {SITE.reviewCount} Google reviews</span>
          </div>
        </div>

        <nav aria-label="Footer">
          <h4 className="text-xs font-bold uppercase tracking-widest2 text-ash">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {ALL_LINKS.map((l) => (
              <li key={l.to}><Link to={l.to} className="link-underline hover:text-bone">{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest2 text-ash">Service Areas</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SITE.serviceAreas.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest2 text-ash">Get In Touch</h4>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li><a href={telHref} className="flex items-center gap-3 hover:text-bone"><Phone className="h-4 w-4 shrink-0 text-ember" /> {SITE.phoneDisplay}</a></li>
            <li><a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-bone"><Whatsapp className="h-4 w-4 shrink-0 text-ember" /> WhatsApp us</a></li>
            <li><a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-bone"><Mail className="h-4 w-4 shrink-0 text-ember" /> {SITE.email}</a></li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 shrink-0 text-ember" /> {SITE.city}</li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
              <span>{SITE.hours.map((h) => <span key={h.day} className="block">{h.day}: {h.time}</span>)}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-px relative mt-14 flex flex-col items-center justify-between gap-4 border-t border-bone/10 py-6 text-xs text-ash sm:flex-row">
        <p>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved. Proudly veteran-owned.</p>
        <p>Built to last. Built with honor.</p>
      </div>
    </footer>
  );
}

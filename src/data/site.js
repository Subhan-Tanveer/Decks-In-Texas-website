// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for business info. Edit here; it flows everywhere.
// ─────────────────────────────────────────────────────────────────────────────
export const SITE = {
  name: 'Decks In Texas',
  legalName: 'Decks In Texas, LLC',
  owner: 'JC',
  tagline: 'Built to last. Built with honor.',
  city: 'Austin, Texas',

  phoneDisplay: '(512) 657-3781',
  phoneRaw: '5126573781', // used for tel: and wa.me
  email: 'estimates@decksintexas.com',

  rating: 5.0,
  reviewCount: 20,
  yearsInBusiness: 12,
  projectsCompleted: 380,

  hours: [
    { day: 'Mon – Fri', time: '8:00 AM – 6:00 PM' },
    { day: 'Saturday', time: '9:00 AM – 4:00 PM' },
    { day: 'Sunday', time: 'By appointment' },
  ],

  serviceAreas: [
    'Austin',
    'Westlake Hills',
    'Cedar Park',
    'Leander',
    'Round Rock',
    'Georgetown',
    'Dripping Springs',
    'South Austin',
  ],

  // ── Backend endpoint for the quote form. See README for wiring instructions.
  //    Point this at Formspree, a Netlify function, or your own API.
  quoteEndpoint: import.meta.env.VITE_QUOTE_ENDPOINT || '',
};

export const telHref = `tel:+1${SITE.phoneRaw}`;
export const whatsappHref = `https://wa.me/1${SITE.phoneRaw}?text=${encodeURIComponent(
  "Hi Decks In Texas! I'd like to get a free estimate for a deck project."
)}`;

// Primary navigation — mirrors the real decksintx.com structure:
// Home · Decks & Porches · Railings · Fences · (More ▾) · Get a Free Estimate
export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/decks-and-porches', label: 'Decks & Porches' },
  { to: '/railings', label: 'Railings' },
  { to: '/fences', label: 'Fences' },
];

// Secondary pages, shown in the "More" dropdown + footer.
export const MORE_LINKS = [
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

export const QUOTE_LINK = { to: '/get-quote', label: 'Get a Free Estimate' };

// Full flat list (mobile menu + footer sitemap).
export const ALL_LINKS = [...NAV_LINKS, ...MORE_LINKS, QUOTE_LINK];

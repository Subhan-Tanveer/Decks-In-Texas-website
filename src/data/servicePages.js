import { MEDIA, VIDEOS } from './media';

// ─────────────────────────────────────────────────────────────────────────────
// Config for each dedicated service page. Mirrors the real decksintx.com nav:
// Decks & Porches · Railings · Fences. Rendered by <ServicePageTemplate/>.
// Icons are referenced by key and mapped inside the template.
// ─────────────────────────────────────────────────────────────────────────────

export const SERVICE_PAGES = {
  'decks-and-porches': {
    slug: 'decks-and-porches',
    seo: {
      title: 'Decks & Porches | Custom Deck Builder in Austin — Decks In Texas',
      description:
        'Custom composite & cedar decks and covered, screened porches in Austin. Trex, TimberTech & AZEK. Cowboy-pool decks, pergolas, built-ins. Permits handled. Free estimates.',
    },
    hero: {
      eyebrow: 'Decks & Porches',
      title: 'Custom decks & porches, built for Texas living.',
      emberWords: ['Texas', 'living.'],
      video: VIDEOS.deckWide,
      poster: MEDIA.services.decks,
      intro:
        'From Trex and TimberTech composite decks to covered and screened porches — we build the outdoor room your backyard has been missing.',
    },
    overview: {
      image: MEDIA.services.decks,
      heading: 'The heart of your backyard, done right.',
      paragraphs: [
        'Have a dream deck or porch in mind? A Cowboy Pool deck, a pergola, a screened-in retreat, or a multi-level composite build with built-in seating? We design and build it to fit your home, your slope, and the way you actually live outdoors.',
        'We build with premium composites that shrug off the Texas sun and natural cedar for warmth and character — and we sweat the details that separate a good job from a great one.',
      ],
      features: [
        'Composite & PVC decking (Trex, TimberTech, AZEK)',
        'Covered & screened porches',
        'Pergolas, built-in benches & planters',
        'Cowboy Pool & hot-tub decks',
        'Cedar tongue-and-groove ceilings',
        'Custom features (slide-out tables, lighting)',
      ],
    },
    materials: ['Trex Transcend', 'Trex Toasted Sand', 'TimberTech PVC', 'AZEK Vintage', 'Western Red Cedar', 'Pressure-Treated Pine'],
    timeline: '3–10 days',
    categories: ['Decks', 'Porches'],
    benefits: [
      { icon: 'Hammer', title: 'Expert Craftsmanship', body: 'Precision framing and hidden fasteners for a clean, seamless finish.' },
      { icon: 'Leaf', title: 'Premium Materials', body: 'Composite and cedar engineered to last decades in the Texas climate.' },
      { icon: 'Bolt', title: 'Fast Turnaround', body: 'Most decks finished in 3–7 days without cutting a single corner.' },
      { icon: 'Shield', title: 'Permits Handled', body: 'We pull every permit and pass inspection so you never touch paperwork.' },
    ],
    galleryHeading: 'Recent decks & porches',
  },

  railings: {
    slug: 'railings',
    seo: {
      title: 'Railings | Cable, Metal & Cedar Deck Railings in Austin — Decks In Texas',
      description:
        'Cable, powder-coated metal, glass, and cedar railings in Austin. Code-compliant, rust-proof, and built to keep your Hill Country view wide open. Free estimates.',
    },
    hero: {
      eyebrow: 'Railings',
      title: 'Railings that protect the view, not block it.',
      emberWords: ['view,', 'block'],
      video: VIDEOS.deckDetail,
      poster: MEDIA.services.railings,
      intro:
        'Stainless cable, black powder-coated metal, glass, and cedar railings — code-compliant, rust-proof, and designed around your sightlines.',
    },
    overview: {
      image: MEDIA.services.railings,
      heading: 'Safety and style, in equal measure.',
      paragraphs: [
        'A railing keeps your family safe — but it should never wall off the view you paid for. We build cable and slim-profile metal railings that all but disappear against the Hill Country, plus warm cedar and modern glass options.',
        'Every railing is engineered to meet or exceed code height and load requirements, with rust-proof, powder-coated hardware finished to match your deck.',
      ],
      features: [
        'Stainless steel cable railing',
        'Black powder-coated metal railing',
        'Tempered glass panels',
        'Cedar & composite top rails',
        'Code-compliant heights & spacing',
        'Custom powder-coat colors',
      ],
    },
    materials: ['Stainless Cable', 'Powder-Coated Steel', 'Tempered Glass', 'Cedar', 'Aluminum'],
    timeline: '2–4 days',
    categories: ['Railings'],
    benefits: [
      { icon: 'Shield', title: 'Code-Compliant', body: 'Every railing meets or exceeds height and load requirements.' },
      { icon: 'Leaf', title: 'Rust-Proof', body: 'Powder-coated and stainless hardware built for the outdoors.' },
      { icon: 'Hammer', title: 'Clean Sightlines', body: 'Slim profiles and cable keep your view wide open.' },
      { icon: 'Bolt', title: 'Custom Finishes', body: 'Match your deck with custom powder-coat colors and top rails.' },
    ],
    galleryHeading: 'Recent railing projects',
  },

  fences: {
    slug: 'fences',
    seo: {
      title: 'Fences & Gates | Cedar Privacy Fence Builder in Austin — Decks In Texas',
      description:
        'Horizontal cedar, board-on-board, and modern slat privacy fences and gates in Austin. Steel-post durability, custom hardware, stained and sealed. Free estimates.',
    },
    hero: {
      eyebrow: 'Fences & Gates',
      title: 'Privacy, security & curb appeal, built to last.',
      emberWords: ['built', 'to', 'last.'],
      video: VIDEOS.fenceGolden,
      poster: MEDIA.services.fences,
      intro:
        'Horizontal cedar, board-on-board, and modern slat fences and gates that stand up to Texas weather and finish off your outdoor space.',
    },
    overview: {
      image: MEDIA.services.fences,
      heading: 'The finishing touch on your backyard.',
      paragraphs: [
        'A great deck deserves a great fence line. We build horizontal cedar slat, board-on-board, and modern privacy fences with matching gates — set on steel posts so they stay straight and solid for years.',
        'From stain and seal to concealed hardware and custom gates, we finish fences with the same care we put into every deck we build.',
      ],
      features: [
        'Horizontal cedar slat fences',
        'Board-on-board privacy fences',
        'Modern slat gates',
        'Steel-post durability',
        'Custom gates & concealed hardware',
        'Stain & seal finishing',
      ],
    },
    materials: ['Western Red Cedar', 'Treated Pine', 'Steel Posts', 'Powder-Coated Hardware'],
    timeline: '2–5 days',
    categories: ['Fences'],
    benefits: [
      { icon: 'Shield', title: 'Steel-Post Strength', body: 'Steel posts keep your fence straight and solid for years.' },
      { icon: 'Leaf', title: 'Weather-Ready', body: 'Cedar and treated lumber, stained and sealed for Texas seasons.' },
      { icon: 'Hammer', title: 'Custom Gates', body: 'Matching gates with concealed, rust-proof hardware.' },
      { icon: 'Bolt', title: 'Curb Appeal', body: 'Modern styles that finish off your yard and boost your home.' },
    ],
    galleryHeading: 'Recent fences & gates',
  },
};

export const SERVICE_PAGE_LIST = Object.values(SERVICE_PAGES);

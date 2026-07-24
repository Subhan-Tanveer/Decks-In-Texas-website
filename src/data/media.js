// ─────────────────────────────────────────────────────────────────────────────
// MEDIA REGISTRY  — real deck/porch/fence photography (Unsplash CDN).
//
// These are curated PLACEHOLDER photos so the site looks complete and premium
// out of the box. Swap them for the client's own project photos (or AI-
// generated images — see IMAGE_AND_VIDEO_PROMPTS.md) by dropping files in
// /public/media/ and pointing the URL below at e.g. '/media/hero.jpg'.
//
// `img()` builds a correctly-sized, auto-format Unsplash URL on demand.
// ─────────────────────────────────────────────────────────────────────────────

const img = (id, w = 1400, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}${h ? `&h=${h}` : ''}`;

// Client's own footage, generated from the prompts in IMAGE_AND_VIDEO_PROMPTS.md
// and dropped in /public/media/. Each clip has a matching starter-image poster
// (same file name pattern) so the hero never flashes between poster → video.
const clip = (n) => `/media/clip-${n}.mp4`;
const still = (n) => `/media/portfolio${n}.jpg`;

export const VIDEOS = {
  deckDusk: clip(1), // Home hero
  deckWide: clip(2), // Decks & Porches hero
  deckDetail: clip(3), // Railings hero
  fenceGolden: clip(4), // Fences hero
  backyardBlue: clip(5), // Portfolio hero
  workshop: clip(6), // About hero
  sawdust: clip(7), // Get a Free Estimate hero
  woodCraft: clip(8), // Contact hero
  woodCraft2: clip(9), // Closing CTA band (every page)
};

export const MEDIA = {
  // Hero — home page.
  heroImage: still(1),
  heroVideo: VIDEOS.deckDusk,

  // Dedicated poster stills, one per hero video (see VIDEOS above for the pairing).
  decksHeroImage: still(2),
  railingsHeroImage: still(3),
  fencesHeroImage: still(4),
  portfolioHeroImage: still(5),
  aboutHeroImage: still(6),
  quoteHeroImage: still(7),
  contactHeroImage: still(8),
  ctaImage: still(9),

  // Supporting body photography (unrelated to the hero videos above).
  ownerPortrait: img('1608613304899-ea8098577e38', 900, 1100),
  craftDetail: img('1543764477-646365e11da3', 1100, 800),

  beforeAfter: {
    after: img('1613544723371-23b514a78c85', 1400, 900),
    before: img('1656646549607-8fda5837a4ca', 1400, 900),
  },

  services: {
    decks: still(2),
    porches: img('1760552268175-431696421106', 1000, 750),
    railings: still(3),
    fences: still(4),
  },
};

// Portfolio — real Decks In Texas project descriptions paired with photography.
const P = [
  { id: 1, img: '1613544723366-448490ac466b', title: 'Trex Golden Hour Deck & Pergola', category: 'Decks', material: 'Trex Golden Hour Composite', location: 'Austin', desc: "12'x16' Trex Golden Hour composite decking with a custom pergola." },
  { id: 2, img: '1716904519810-349244919824', title: 'Trex Toasted Sand Deck', category: 'Decks', material: 'Trex Toasted Sand', location: 'Austin', desc: "40'x12' Trex Toasted Sand composite deck. Completed January 2026." },
  { id: 3, img: '1722881445918-75ae564ffced', title: 'Cowboy Pool Deck', category: 'Decks', material: 'TimberTech PVC', location: 'Austin', desc: 'TimberTech PVC deck wrapped around a Cowboy Pool. Yorkie not included!' },
  { id: 4, img: '1780686330738-120ad466f374', title: 'Coconut Husk Covered Deck', category: 'Porches', material: 'TimberTech Coconut Husk', location: 'Austin', desc: "30'x13' TimberTech composite deck in Coconut Husk with a cedar-covered ceiling. Completed 8/24." },
  { id: 5, img: '1784657057386-3285a127dfb7', title: 'Screened-In Porch', category: 'Porches', material: 'Screen + Plexiglass', location: 'Austin', desc: 'Screened-in porch — screens on top, plexiglass on the bottom. Completed 1/3/2021.' },
  { id: 6, img: '1626035031057-98c9c774c86c', title: 'Cedar & Metal Paver Deck', category: 'Railings', material: 'Cedar + Powder-Coated Metal', location: 'Austin', desc: 'Concrete pavers with cedar and black powder-coated metal railing. 12/23.' },
  { id: 7, img: '1777626752926-aeaeb1b3276f', title: 'Trex Biscayne Deck', category: 'Decks', material: 'Trex Biscayne', location: 'Austin', desc: "Trex's Biscayne composite deck, 16'x10'. Completed April 2023." },
  { id: 8, img: '1559591096-1e3db9fcfff9', title: 'Slate Grey PVC Deck', category: 'Railings', material: 'AZEK / TimberTech Slate Grey', location: 'Austin', desc: "32'x10' AZEK/TimberTech Slate Grey PVC deck with metal railing. 2/2023." },
  { id: 9, img: '1649375900234-ee653e58914b', title: 'Toasted Sand Deck & Pergola', category: 'Decks', material: 'Trex Toasted Sand', location: 'Austin', desc: "32'x10' Trex Toasted Sand with enclosed steps and a pergola. Completed 9/22." },
  { id: 10, img: '1724643005039-fb5dae982d45', title: 'Custom Slide-Out Table Deck', category: 'Decks', material: 'Composite + Cedar', location: 'Austin', desc: 'Deck featuring a custom-built slide-out table — composite with cedar accents.' },
  { id: 11, img: '1569935000385-5087efe7857a', title: 'Cable & Cedar Railing', category: 'Railings', material: 'Stainless Cable + Cedar', location: 'Westlake Hills', desc: 'Stainless cable railing with cedar posts — keeps the Hill Country view wide open.' },
  { id: 12, img: '1780396415765-87260fc395e1', title: 'Horizontal Cedar Privacy Fence', category: 'Fences', material: 'Western Red Cedar', location: 'South Austin', desc: 'Modern horizontal cedar slat privacy fence with a matching gate.' },
  { id: 13, img: '1634576324773-36e56672d0d9', title: 'Board-on-Board Fence', category: 'Fences', material: 'Treated Pine + Steel Posts', location: 'Cedar Park', desc: 'Board-on-board privacy fence on steel posts, stained and sealed.' },
  { id: 14, img: '1722311297923-07c19ebd48e1', title: 'Modern Slat Gate', category: 'Fences', material: 'Cedar Slat', location: 'Leander', desc: 'Custom cedar slat gate with concealed hardware and a steel frame.' },
  { id: 15, img: '1623253238810-3bc2b255bd8b', title: 'Wraparound Farmhouse Porch', category: 'Porches', material: 'AZEK Vintage', location: 'Georgetown', desc: 'Wraparound covered porch with tongue-and-groove cedar ceiling and fans.' },
  { id: 16, img: '1567872427053-5c57b29e9fd5', title: 'Powder-Coated Steel Deck Rail', category: 'Railings', material: 'Powder-Coated Steel', location: 'Round Rock', desc: 'Black powder-coated steel railing with a slim top rail for clean sightlines.' },
];

export const PORTFOLIO = P.map((p) => ({
  ...p,
  src: img(p.img, 900, 700),
  full: img(p.img, 1600, 1100),
  alt: `${p.title} — ${p.desc} Built by Decks In Texas in ${p.location}, TX.`,
}));

export const PORTFOLIO_CATEGORIES = ['All', 'Decks', 'Porches', 'Railings', 'Fences'];

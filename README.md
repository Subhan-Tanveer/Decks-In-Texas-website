# Decks In Texas — Website

A fast, animated marketing site for **Decks In Texas, LLC** — a veteran-owned
custom deck, porch, railing & fence builder in Austin, TX.

**Stack:** React 18 · Vite · Tailwind CSS · GSAP + ScrollTrigger · Lenis (smooth scroll) · React Router

---

## 🚀 Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → /dist
npm run preview    # preview the production build
```

Requires Node 18+.

---

## 🎬 What's animated

Every section is choreographed with GSAP and respects `prefers-reduced-motion`:

- **Lenis smooth scroll** site-wide (inertia deceleration).
- **Hero** — cinematic staggered intro, parallax background, scroll fade-out.
- **Scroll reveals** — fade + slide-up on every section (`<Reveal>`), with stagger.
- **Animated counters** — rating, reviews, years, projects count up on view.
- **Signature Before/After slider** — draggable (mouse/touch/keyboard) with a
  deliberate intro "wipe."
- **Portfolio** — hover zoom, category filter, animated lightbox (zoom + fade,
  arrow/esc keys).
- **Testimonials** — auto-rotating carousel with fade/slide transitions.
- **Marquee** trust strip, **scroll progress bar**, **animated service-area map**,
  **FAQ accordion**, **floating call/WhatsApp** buttons, **CTA parallax**.
- Buttons: underline-grow + lift on hover (no bounce/elastic — disciplined motion).

Motion is centralized in `src/lib/motion.js`, `src/hooks/useSmoothScroll.js`,
and the reusable `<Reveal>` / `<Counter>` components.

---

## 🧱 Project structure

```
src/
├─ components/     UI + animated blocks (Hero, BeforeAfterSlider, ServicePageTemplate, …)
├─ pages/          Home · DecksAndPorches · Railings · Fences · GetQuote
│                  · Portfolio · About · Contact · 404
├─ data/           site.js (business info + nav) · media.js (images/gallery)
│                  · content.js (copy) · servicePages.js (per-service page config)
├─ hooks/          useSmoothScroll.js (Lenis + ScrollTrigger sync)
├─ lib/            motion.js · analytics.js (GA4) · seo.js
├─ App.jsx         routing + layout
└─ index.css       Tailwind + design system (brand tokens, buttons, utilities)
```

### Pages & routes (mirrors decksintx.com)

| Route | Page |
|---|---|
| `/` | Home |
| `/decks-and-porches` | Decks & Porches (dedicated service page) |
| `/railings` | Railings (dedicated service page) |
| `/fences` | Fences & Gates (dedicated service page) |
| `/get-quote` | Get a Free Estimate (quote form + service areas + FAQ) |
| `/portfolio` · `/about` · `/contact` | secondary pages (in the "More ▾" menu) |

Each service page is generated from a config object in `src/data/servicePages.js`
by the shared `ServicePageTemplate` — edit copy/materials/benefits there, no
component code needed. `/services`, `/estimate`, `/decks`, `/porches` redirect
to the right page.

---

## ✏️ Editing content (no code required for most changes)

| To change… | Edit |
|---|---|
| Phone, email, hours, service areas, rating | `src/data/site.js` |
| Each service page (Decks/Railings/Fences) copy, materials, benefits | `src/data/servicePages.js` |
| Testimonials, process steps, FAQ, form dropdown options | `src/data/content.js` |
| Nav links & "More" menu | `src/data/site.js` |
| Every image / video on the site | `src/data/media.js` |
| Brand colors, fonts, shadows | `tailwind.config.js` |
| SEO title/description per page | `useSeo({...})` at the top of each page |
| Global meta, Open Graph, LocalBusiness schema | `index.html` |

---

## 🎨 Design — "Nightfall Cedar"

Dark, cinematic, warm. Near-black espresso background (`#0d0a07`), glowing
cedar-amber accent (`#d2823a`), warm bone text (`#f4ecde`). Display type is
**Fraunces** (a crafted optical serif that echoes hand-built craftsmanship)
paired with **Inter**. Motion: a first-load preloader, custom cursor, magnetic
buttons, word-by-word headline reveals, scroll-triggered section reveals,
parallax, and **HD background video on the home hero, every page hero, and the
closing CTA**. All of it respects `prefers-reduced-motion`.

## 🖼️ Replacing the placeholder images/videos

The site ships with real, curated **placeholders** so it looks complete
immediately:
- **Photos** — Unsplash CDN (deck/porch/fence/carpentry), defined in `src/data/media.js`.
- **Videos** — Pexels CDN HD clips, defined in the `VIDEOS` map in `src/data/media.js`.

Both are hotlinked for the demo. For launch, swap them for the client's own
project photos and footage (or AI-generated assets):

1. Generate/collect assets — **`IMAGE_AND_VIDEO_PROMPTS.md`** has ready-to-paste
   image + starter-image + video prompts.
2. Drop files in `public/media/` (e.g. `public/media/hero.jpg`, `hero.mp4`).
3. Point the URL to `'/media/hero.jpg'` in `src/data/media.js` (images) or the
   `VIDEOS` map (video). Every hero reads its clip from there.

You can swap them one at a time — nothing breaks in the meantime. Poster images
show instantly while video loads, and everything degrades to the image if video
can't play.

---

## 📨 Wiring the quote form to a real backend

The form (`src/components/QuoteForm.jsx`) posts JSON to
`VITE_QUOTE_ENDPOINT`. With no endpoint set, it simulates success and logs the
payload (so you can demo the UX immediately).

**Easiest — Formspree (no server):**
1. Create a form at [formspree.io](https://formspree.io) → get an endpoint like
   `https://formspree.io/f/abcdwxyz`.
2. In `.env`: `VITE_QUOTE_ENDPOINT=https://formspree.io/f/abcdwxyz`
3. In Formspree, set the **notification email** to JC and enable an
   **autoresponse** to the submitter — that satisfies "confirmation email to
   user + notification to JC."

**Or a Netlify/Vercel serverless function** — post to `/api/quote` and send mail
via Resend/SendGrid/Nodemailer. The field names sent are:
`name, email, phone, service, message, preferred`.

Copy `.env.example` → `.env` to configure.

---

## 📊 Analytics (GA4)

Set `VITE_GA_ID=G-XXXXXXXXXX` in `.env`. The app auto-loads gtag and tracks:

- `page_view` on every route change
- `quote_request_submitted` (with `service_type`) on form success
- add `cta_click` calls via `track('cta_click', { button: '...' })` from `src/lib/analytics.js` where desired.

No ID = analytics silently disabled (safe for dev).

---

## ☁️ Deploying

Static site — deploy `/dist` anywhere. SPA routing is pre-configured:

- **Netlify:** `public/_redirects` handles deep links. Build cmd `npm run build`, publish `dist`.
- **Vercel:** `vercel.json` handles rewrites. Framework preset: Vite.
- **Any static host:** ensure all routes fall back to `index.html`.

Set your env vars (`VITE_GA_ID`, `VITE_QUOTE_ENDPOINT`) in the host dashboard.

---

## ♿ Accessibility & performance

- WCAG-minded: semantic landmarks, alt text, keyboard-operable slider/lightbox/menu,
  visible focus rings, `aria-*` on interactive controls.
- All motion disabled under `prefers-reduced-motion` (content stays fully visible).
- Images lazy-load below the fold; hero is eager. Fonts preconnected.
- GSAP is code-split into its own chunk (see `vite.config.js`).

---

## 📞 Business contact

**JC (Owner)** · (512) 657-3781 · WhatsApp available · Austin, TX
Serving Austin, Westlake Hills, Cedar Park, Leander, Round Rock, Georgetown,
Dripping Springs & South Austin.

*Built to last. Built with honor.*

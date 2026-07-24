# 🎨 AI Image & Video Prompt Kit — Decks In Texas ("Nightfall Cedar")

Everything you need to replace the placeholder photos and videos with bespoke,
on-brand AI assets that match the site's **dark, cinematic, warm** aesthetic.

**Three things in here:**
1. **Image prompts** — every still on the site.
2. **Starter-image prompts** — the single frame you generate first to seed a video.
3. **Video prompts** — feed the starter image + this prompt into an image-to-video
   tool to get the hero clips.

---

## 🧰 Tools & workflow

- **Images:** Midjourney v6.1, Flux 1.1 Pro, Google Imagen / Gemini, DALL·E 3, Ideogram.
  - Midjourney: append `--ar {RATIO} --style raw --v 6.1`
- **Video (image-to-video):** Runway Gen-3 Alpha, Kling 1.6, Luma Dream Machine, Google Veo 3, Pika 1.5.
  - Generate the **starter image first**, then upload it + paste the **video prompt**.
- **Specs:** heroes/video = **1920×1080 (16:9)**; keep clips **5–8s, muted, ≥1080p**, export **MP4 (H.264)**.
- **Where files go:** drop into `public/media/`, then point the URL in
  `src/data/media.js` — images in `MEDIA`, clips in the `VIDEOS` map.

---

## 🎛️ GLOBAL STYLE BLOCK — paste at the END of EVERY image prompt

```
— cinematic editorial architectural photography, warm golden-hour or blue-hour
light, moody and atmospheric, deep rich shadows with glowing warm amber
highlights, palette of cedar brown, charcoal and warm off-white with amber
accents, Texas Hill Country, shot on a full-frame cinema camera at a wide
aperture, shallow depth of field, volumetric light, subtle film grain, teal-and-
amber color grade, hyper-detailed, photorealistic, 8k, no people (unless noted),
no text, no logos, no watermark. Aspect ratio {RATIO}.
```

---

# 📸 PART 1 — IMAGES

> File map: each heading shows the `src/data/media.js` key it replaces.

### 1. Home hero poster — `MEDIA.heroImage` · 16:9
```
A luxurious modern backyard deck at blue-hour dusk in the Texas Hill Country.
Warm cedar decking meeting dark charcoal composite boards, glowing warm LED step
lights, sleek matte-black horizontal cable railing, a low firepit with soft
orange embers, two chairs and a side table, mature live-oak silhouettes, a modern
limestone home with warm interior lights behind, deep twilight sky graduating
from navy to amber. Wide cinematic establishing shot, low camera angle across
the deck. [+ GLOBAL STYLE BLOCK, RATIO 16:9]
```

### 2. Owner portrait — `MEDIA.ownerPortrait` · 4:5
```
Authentic portrait of a confident 40-something male military veteran deck builder
standing on a freshly built cedar deck at golden hour, clean work shirt and tool
belt, arms crossed, calm and trustworthy expression, soft warm backlight rimming
his shoulders, dark moody background, dignified and grounded. [+ GLOBAL STYLE
BLOCK, RATIO 4:5]
```
> Best replaced with a real photo of JC when available.

### 3. Craftsmanship detail — `MEDIA.craftDetail` · 3:2
```
Extreme close-up of skilled hands driving a hidden fastener into a composite deck
board with a cordless impact driver, fine sawdust suspended in a warm shaft of
golden light, rich wood grain, dark moody surroundings, macro detail, sense of
precision and care. [+ GLOBAL STYLE BLOCK, RATIO 3:2]
```

### 4. Signature BEFORE / AFTER pair — `MEDIA.beforeAfter`
⚠️ Generate the **AFTER first**, then use it as a reference to make the **BEFORE**
from the **exact same camera angle & framing** so the slider wipe lines up.

**AFTER — `beforeAfter.after` · 3:2**
```
A beautiful finished two-level cedar-and-composite backyard deck at warm late
afternoon, cable railing, built-in bench, string lights just glowing on, potted
plants and outdoor furniture, lush landscaping, photographed straight-on from the
back of the yard, wide shot. [+ GLOBAL STYLE BLOCK, RATIO 3:2]
```
**BEFORE — `beforeAfter.before` · 3:2 (identical framing)**
```
The exact same backyard from the exact same camera angle and framing, but BEFORE
any deck was built: a bare, patchy, sloped dirt-and-grass yard, a plain back
door, no deck, no landscaping, flat overcast light, empty and neglected. Match
the house, fence line and horizon of the reference image precisely. [+ GLOBAL
STYLE BLOCK, RATIO 3:2]
```

### 5–8. Service images · 3:2 — `MEDIA.services.*`
**Decks — `services.decks`**
```
A modern multi-level composite backyard deck with clean lines, hidden fasteners
and a slim black cable railing, warm low sun raking across the boards, Hill
Country backdrop, three-quarter wide angle. [+ GLOBAL STYLE BLOCK, RATIO 3:2]
```
**Porches — `services.porches`**
```
A covered back porch with a tongue-and-groove cedar ceiling, ceiling fan, warm
hanging string lights, comfortable outdoor seating, inviting evening glow,
wraparound farmhouse feel. [+ GLOBAL STYLE BLOCK, RATIO 3:2]
```
**Railings — `services.railings`**
```
A detail shot of a stainless-steel cable railing on a cedar deck with an
unobstructed Hill Country view behind it, matte-black powder-coated posts, golden
hour, shallow depth of field. [+ GLOBAL STYLE BLOCK, RATIO 3:2]
```
**Fences — `services.fences`**
```
A modern horizontal cedar-slat privacy fence with a matching gate, freshly
stained warm wood, long golden-hour shadows across a Texas backyard, clean
craftsmanship. [+ GLOBAL STYLE BLOCK, RATIO 3:2]
```

### 9. Portfolio gallery — 16 images · 4:3 — `PORTFOLIO[].img`
Use this **template**, substituting each item's real title / material / location
from `src/data/media.js`:
```
A professional real-estate photo of a {MATERIAL} {CATEGORY} — "{TITLE}" — built
in {LOCATION}, Texas: {DESC}. Styled with tasteful outdoor furniture and
landscaping, realistic scale, three-quarter or wide angle. [+ GLOBAL STYLE
BLOCK, RATIO 4:3]
```
Per-item quick prompts:
1. **Trex Golden Hour Deck & Pergola** — 12×16 Trex Golden Hour composite deck with a custom pergola, warm sunset.
2. **Trex Toasted Sand Deck** — 40×12 Trex Toasted Sand composite deck, wide, warm light.
3. **Cowboy Pool Deck** — TimberTech PVC deck wrapped around a round Cowboy Pool, playful, summer.
4. **Coconut Husk Covered Deck** — 30×13 TimberTech Coconut Husk deck with a cedar-covered ceiling, warm glow.
5. **Screened-In Porch** — screened porch, screens on top and plexiglass on the bottom, cozy dusk.
6. **Cedar & Metal Paver Deck** — concrete pavers with cedar and black powder-coated metal railing.
7. **Trex Biscayne Deck** — 16×10 Trex Biscayne composite deck, modern, golden hour.
8. **Slate Grey PVC Deck** — 32×10 AZEK/TimberTech Slate Grey PVC deck with black metal railing.
9. **Toasted Sand Deck & Pergola** — 32×10 Trex Toasted Sand deck with enclosed steps and a pergola.
10. **Custom Slide-Out Table Deck** — composite deck featuring a clever custom slide-out table with cedar accents.
11. **Cable & Cedar Railing** — stainless cable railing with cedar posts framing an open Hill Country view.
12. **Horizontal Cedar Privacy Fence** — modern horizontal cedar slat privacy fence with a matching gate.
13. **Board-on-Board Fence** — board-on-board privacy fence on steel posts, stained and sealed.
14. **Modern Slat Gate** — custom cedar slat gate with concealed hardware and a steel frame.
15. **Wraparound Farmhouse Porch** — wraparound covered porch, tongue-and-groove cedar ceiling, fans.
16. **Powder-Coated Steel Deck Rail** — black powder-coated steel railing with a slim top rail, clean sightlines.

---

# 🎬 PART 2 — VIDEO (starter image + video prompt)

**Workflow for each:** (1) generate the **Starter image** with any image tool,
(2) upload it into an image-to-video tool and paste the **Video prompt**,
(3) export a 5–8s muted MP4, (4) drop it in `public/media/` and set the matching
`VIDEOS` key in `src/data/media.js`.

---

### 🎥 V1 — HOME HERO → `VIDEOS.deckDusk`
**Starter image:**
```
Cinematic wide establishing shot of a luxurious cedar-and-composite backyard deck
at golden-blue hour in the Austin Hill Country, glowing step lights, a lit
firepit, cable railing, two coffee mugs with faint steam on a side table, mature
oaks, modern limestone home behind, rich warm twilight sky. Photorealistic,
cinematic color grade, 16:9.
```
**Video prompt:**
```
Slow, smooth cinematic dolly-forward across the deck. Subtle parallax between the
foreground railing and background trees, warm firepit light gently flickering,
faint steam rising from the mugs, string lights twinkling, leaves softly swaying
in a light breeze. Very slow, elegant, premium real-estate b-roll. No people, no
camera shake, seamless loop. 6 seconds.
```

### 🎥 V2 — DECKS & PORCHES HERO → `VIDEOS.deckWide`
**Starter image:**
```
A modern multi-level composite backyard deck photographed at golden hour, warm
sun raking across the boards, cable railing, built-in bench, Hill Country
backdrop, three-quarter wide angle. Photorealistic, cinematic, 16:9.
```
**Video prompt:**
```
Slow cinematic crane-up that gradually reveals the deck's levels, warm sunlight
sweeping across the composite boards, gentle breeze in nearby foliage, soft lens
flare. Calm, aspirational, premium. No people, no shake, loopable. 6 seconds.
```

### 🎥 V3 — RAILINGS HERO → `VIDEOS.deckDetail`
**Starter image:**
```
Close detail of a stainless-steel cable railing on a cedar deck at golden hour,
the open Texas Hill Country view softly blurred behind it, matte-black posts,
shallow depth of field. Photorealistic, cinematic, 16:9.
```
**Video prompt:**
```
Slow lateral slider/truck move along the cable railing, gentle rack focus from
the taut cables to the distant glowing hills, warm light shifting across the
metal. Precise, elegant, quiet. No people, no shake, seamless. 5 seconds.
```

### 🎥 V4 — FENCES HERO → add `VIDEOS.fenceGolden` (see wiring note)
**Starter image:**
```
A modern horizontal cedar-slat privacy fence with a matching gate at golden hour,
long warm shadows striping across a tidy Texas backyard, freshly stained wood.
Photorealistic, cinematic, 16:9.
```
**Video prompt:**
```
Slow tracking dolly gliding along the fence line, warm dappled light and slat
shadows sliding across the frame, a light breeze moving nearby grass. Grounded,
warm, premium. No people, no shake, loopable. 6 seconds.
```

### 🎥 V5 — PORTFOLIO HERO → add `VIDEOS.backyardBlue` (see wiring note)
**Starter image:**
```
A hero-grade finished backyard living space at blue hour — cedar deck, firepit,
string lights just glowing on, lush landscaping, modern home behind, moody warm-
cool sky. Photorealistic, cinematic, 16:9.
```
**Video prompt:**
```
Slow orbit / parallax push across the scene as warm lights glow on and the sky
deepens, subtle steam and flickering firelight. Cinematic, aspirational, gallery-
opening feel. No people, no shake, seamless loop. 7 seconds.
```

### 🎥 V6 — ABOUT HERO → `VIDEOS.workshop`
**Starter image:**
```
A veteran builder in a warm wood workshop, hands on a cedar board at the
workbench, tools nearby, sawdust drifting in a shaft of warm window light, moody
dark background. Photorealistic, cinematic, 16:9.
```
**Video prompt:**
```
Slow push-in toward the hands and tools, sawdust particles drifting slowly
through the warm light beam, subtle movement of the plane along the grain. Quiet,
honest, craftsmanship documentary feel. No fast motion, no shake. 6 seconds.
```

### 🎥 V7 — GET A FREE ESTIMATE HERO → `VIDEOS.sawdust`
**Starter image:**
```
Macro close-up of a cordless impact driver about to seat a hidden fastener into a
composite deck board, fine sawdust suspended in warm golden light, rich wood
grain, dark moody surroundings. Photorealistic, shallow depth of field, 16:9.
```
**Video prompt:**
```
Macro slow-motion: the driver spins and seats the fastener, sawdust drifts slowly
through the golden light, the board flexes almost imperceptibly, gentle rack focus
from screw to grain. Tactile, satisfying, premium. No text. 5 seconds, subtle loop.
```

### 🎥 V8 — CONTACT HERO → `VIDEOS.woodCraft`
**Starter image:**
```
Hands running a hand plane along a cedar board, a thin curl of wood shaving
lifting off, warm side light, sawdust and rich grain, dark moody workshop.
Photorealistic, cinematic, 16:9.
```
**Video prompt:**
```
Slow macro of the plane gliding along the grain, a wood shaving curling up and
drifting, warm light catching the dust. Calm, human, inviting. No people's faces,
no shake, loopable. 5 seconds.
```

### 🎥 V9 — CLOSING CTA BAND → `VIDEOS.woodCraft2`
**Starter image:**
```
A wide cedar deck at dusk with warm string lights overhead, a lit firepit, cozy
furniture, inviting golden ambience, modern home softly lit behind. Photorealistic,
cinematic, 16:9.
```
**Video prompt:**
```
Very slow push-in toward the glowing deck, string lights twinkling, firepit
flickering warmly, a gentle breeze in the trees. Warm, aspirational, calm — a
"come home to this" closer. No people, no shake, seamless loop. 7 seconds.
```

### 🎥 V10 (optional) — VETERAN STORY / craftsmanship ambient
**Starter image:**
```
Warm close shot of a folded American flag detail or a veteran's hands setting a
deck board with military precision, sawdust in warm light, respectful and
understated, dark moody tones. Photorealistic, cinematic, 16:9.
```
**Video prompt:**
```
Very slow, reverent push-in, dust drifting in warm light, minimal motion.
Dignified, understated, emotional. No text, no shake. 5 seconds.
```

---

## 🔌 Wiring the videos in code (`src/data/media.js`)

Each hero reads its clip from the `VIDEOS` map. To use your new files:

```js
export const VIDEOS = {
  deckDusk:   '/media/home-hero.mp4',      // V1  Home hero
  deckWide:   '/media/decks-hero.mp4',     // V2  Decks & Porches hero
  deckDetail: '/media/railings-hero.mp4',  // V3  Railings hero
  fenceGolden:'/media/fences-hero.mp4',    // V4  Fences hero  (NEW key)
  backyardBlue:'/media/portfolio-hero.mp4',// V5  Portfolio hero (NEW key)
  workshop:   '/media/about-hero.mp4',     // V6  About hero
  sawdust:    '/media/estimate-hero.mp4',  // V7  Get a Free Estimate hero
  woodCraft:  '/media/contact-hero.mp4',   // V8  Contact hero
  woodCraft2: '/media/cta-band.mp4',       // V9  Closing CTA band
};
```

Two heroes currently share a clip — after adding the two **NEW** keys above, point
them at the new keys:
- **Fences hero:** in `src/data/servicePages.js` → `fences.hero.video` → `VIDEOS.fenceGolden`
- **Portfolio hero:** in `src/pages/Portfolio.jsx` → `video={VIDEOS.backyardBlue}`

Update the matching **poster** images the same way in `MEDIA` (posters show
instantly while the video loads, and are the fallback if video can't play).

---

## ✅ Export checklist
- [ ] Before/after pair uses **identical framing**.
- [ ] Images exported at the listed ratios; compress to optimized JPG/WebP (< 400 KB each).
- [ ] Videos: **muted, 5–8s, ≥1080p, H.264 MP4** (optional WebM), no audio, no text.
- [ ] Each hero has a matching **poster still** set in `MEDIA`.
- [ ] Files in `public/media/`, URLs updated in `src/data/media.js`, then `npm run build`.
- [ ] You can swap assets one at a time — nothing breaks in the meantime.

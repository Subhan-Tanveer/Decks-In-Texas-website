# 🎨 Image & Video Generation Prompts — Decks In Texas

This guide gives you **copy-paste prompts** to generate every visual on the site.
It covers three things:

1. **Image prompts** — for still photos (hero, services, portfolio, before/after, owner).
2. **Starter-image prompts** — a single frame you generate first, to seed a video.
3. **Video prompts** — paired with the starter image, for image-to-video tools
   (Runway Gen-3, Luma Dream Machine, Kling, Pika, Google Veo, etc.).

> **Where the images go:** After you generate an asset, drop the file in
> `public/media/` and update the matching entry in `src/data/media.js`.
> Recommended sizes: hero **1920×1080**, service/portfolio **1200×800**,
> owner portrait **900×1100**, before/after pair **1400×900** (identical framing).

---

## 🧭 Global Style Guide (paste into EVERY image prompt)

Keep every image consistent by appending this style block:

```
Style: professional architectural & real-estate photography, warm golden-hour
light, natural cedar and composite wood tones, Texas Hill Country setting,
shallow depth of field, crisp detail, realistic textures, no people unless
specified, no text or logos, no watermark, editorial magazine quality,
color palette of cedar brown, weathered gray, warm off-white, deep navy accents.
Aspect ratio: {RATIO}. Ultra-detailed, 8k, photorealistic.
```

Recommended generators: **Midjourney v6.1**, **Google Imagen / Gemini**,
**Flux 1.1 Pro**, **DALL·E 3**, **Adobe Firefly**.
For Midjourney add `--ar 16:9 --style raw --v 6.1` (swap the ratio per asset).

---

## 1) HERO — `MEDIA.heroImage` (1920×1080, ratio 16:9)

```
A stunning custom multi-level backyard deck at dusk in the Austin Texas Hill
Country, built from warm cedar and Trex composite boards, glowing integrated
step lighting, modern black cable railing, a firepit and outdoor furniture,
mature oak trees and native landscaping in the background, a limestone modern
home visible behind, dramatic warm golden-and-blue twilight sky, wide
cinematic establishing shot, low camera angle looking across the deck.
[+ Global Style Guide, RATIO 16:9]
```

## 2) OWNER PORTRAIT — `MEDIA.ownerPortrait` (900×1100, ratio 4:5)

```
Authentic portrait of a confident 40-something male veteran deck builder
standing on a freshly built cedar deck, wearing a clean work shirt and a tool
belt, arms crossed, subtle American-made pride, warm approachable expression,
soft golden-hour backlight, shallow depth of field, documentary craftsmanship
feel, respectful and dignified. [+ Global Style Guide, RATIO 4:5]
```
> Prefer a real photo of JC here for authenticity — swap when available.

## 3) CRAFT DETAIL — `MEDIA.craftDetail` (900×700, ratio 4:3)

```
Extreme close-up of skilled hands setting a hidden deck fastener into a Trex
composite board, sawdust in the golden light, cordless impact driver, precise
clean joinery, macro detail of wood grain, shallow depth of field, sense of
craftsmanship and care. [+ Global Style Guide, RATIO 4:3]
```

---

## 4) SIGNATURE BEFORE / AFTER PAIR — `MEDIA.beforeAfter`

⚠️ **Critical:** generate BOTH frames from the **same camera position, lens, and
framing** so the slider wipe lines up. Generate the "after" first, then use it as
a reference/edit base for the "before."

**AFTER — `beforeAfter.after` (1400×900, ratio 3:2)**
```
A beautiful finished two-level cedar and composite backyard deck with cable
railing, built-in bench seating, string lights, potted plants and outdoor
furniture, lush landscaping, warm late-afternoon light, photographed straight-on
from the back of the yard, wide shot. [+ Global Style Guide, RATIO 3:2]
```

**BEFORE — `beforeAfter.before` (1400×900, ratio 3:2, SAME framing)**
```
The exact same backyard from the exact same camera angle and framing, BUT
before any deck was built: a bare, patchy, sloped dirt-and-grass yard with a
plain back door, no deck, no landscaping, overcast flat light, slightly
neglected and empty. Match the house, fence line, and horizon of the reference
image precisely. [+ Global Style Guide, RATIO 3:2]
```

---

## 5) SERVICE CARDS — `MEDIA.services.*` (1200×800, ratio 3:2)

**Decks — `services.decks`**
```
A modern multi-level composite backyard deck with clean lines, hidden
fasteners, and a sleek horizontal cable railing, warm afternoon sun,
Texas Hill Country backdrop, wide angle. [+ Global Style Guide, RATIO 3:2]
```

**Porches — `services.porches`**
```
A charming covered back porch with a tongue-and-groove cedar ceiling, ceiling
fan, hanging string lights, comfortable outdoor seating, and a wraparound
farmhouse feel, warm inviting evening light. [+ Global Style Guide, RATIO 3:2]
```

**Railings — `services.railings`**
```
A detail shot of a sleek stainless-steel cable railing on a cedar deck with an
unobstructed Hill Country view behind it, powder-coated black posts, golden
hour, shallow depth of field. [+ Global Style Guide, RATIO 3:2]
```

**Fences — `services.fences`**
```
A modern horizontal cedar slat privacy fence with a matching gate, clean
craftsmanship, freshly stained warm wood, suburban Austin backyard, soft
directional light. [+ Global Style Guide, RATIO 3:2]
```

---

## 6) PORTFOLIO GALLERY — 15 images (`PORTFOLIO` in `src/data/media.js`)

Use this **template**, substituting the `title`, `material`, and `category`
from each entry in `src/data/media.js`:

```
A professional real-estate photo of a {MATERIAL} {CATEGORY} — "{TITLE}" — built
in {LOCATION}, Texas. Beautiful craftsmanship, realistic scale, styled with
tasteful outdoor furniture and landscaping, warm natural light, wide or
three-quarter angle. [+ Global Style Guide, RATIO 3:2]
```

Example (item #2):
```
A professional real-estate photo of a Trex Transcend multi-level deck — "Trex
Transcend Multi-Level" — built in Westlake Hills, Texas. Beautiful
craftsmanship, realistic scale, styled with tasteful outdoor furniture and
landscaping, warm natural light, three-quarter angle. [+ Global Style Guide]
```

---

# 🎬 VIDEO — Starter Image + Video Prompt Pairs

For each hero/section video, **first generate the starter image**, then feed that
image + the **video prompt** into an image-to-video tool. Keep clips 4–8s,
1920×1080, and **muted + looping** on the site. Set the file path in
`MEDIA.heroVideo` (or add new fields) once rendered.

### A) HERO BACKGROUND VIDEO (primary — set `MEDIA.heroVideo`)

**Starter-image prompt** (generate this frame first):
```
Cinematic wide establishing shot of a luxurious custom cedar-and-composite
backyard deck at golden hour in the Austin Hill Country, glowing step lights
just turning on, firepit, cable railing, gentle steam from two coffee mugs on a
side table, mature oaks, modern limestone home behind, rich warm twilight sky.
Photorealistic, 8k, cinematic color grade, 16:9.
```

**Video prompt** (image-to-video):
```
Slow, smooth cinematic dolly-forward across the deck, subtle parallax between
foreground railing and background trees, gentle warm light flickering from the
firepit, faint steam rising from the mugs, leaves softly swaying in a light
breeze, string lights twinkling. Very slow, elegant, premium real-estate
b-roll. No people, no camera shake, seamless loopable motion. 6 seconds.
```

### B) CRAFTSMANSHIP / "HOW WE BUILD" CLIP (optional accent)

**Starter-image prompt:**
```
Close-up of a veteran builder's hands driving a hidden fastener into a composite
deck board, sawdust suspended in warm golden light, cordless impact driver,
macro detail of wood grain. Photorealistic, shallow depth of field, 16:9.
```

**Video prompt:**
```
Macro slow-motion: the impact driver spins and seats the fastener, sawdust
drifts slowly through a shaft of golden light, board flexes slightly. Tactile,
satisfying, premium craftsmanship b-roll. Slight rack focus from screw to wood
grain. No text. 5 seconds, subtle loop.
```

### C) BEFORE→AFTER MORPH CLIP (optional, for a "reveal" section)

**Starter-image prompt:** use your generated **AFTER** deck image from §4.

**Video prompt:**
```
Start on the finished deck, then a smooth time-lapse-style transition where the
scene elegantly transforms — furniture and landscaping gently materialize,
warm light blooms across the boards, string lights fade in at dusk. Slow,
deliberate, cinematic reveal. Seamless, no harsh cuts. 6 seconds.
```

### D) TESTIMONIAL / LIFESTYLE AMBIENCE (optional footer loop)

**Starter-image prompt:**
```
A family relaxing at dusk on a beautiful new cedar deck (shot from behind,
faces not visible), string lights glowing, firepit lit, warm and inviting
Hill Country evening. Photorealistic, cinematic, 16:9.
```

**Video prompt:**
```
Gentle handheld-free push-in, string lights swaying, firepit glow flickering
warmly, a soft breeze in the trees, cozy golden ambience. Calm, aspirational,
slow. No fast motion. 6 seconds, loopable.
```

---

## ✅ Quick Checklist After Generating

- [ ] Export at the recommended dimensions; compress to WebP/optimized JPG (< 300 KB each where possible).
- [ ] Before/after pair uses **identical framing**.
- [ ] Drop files in `public/media/` and update `src/data/media.js`.
- [ ] Videos are **muted, looping, ≤ 8s**, H.264 MP4 (+ optional WebM), poster = hero still.
- [ ] Re-run `npm run build` and check the site.

> Tip: You can keep the current placeholder URLs live while you swap assets in
> one at a time — nothing breaks.

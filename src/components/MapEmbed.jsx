import Reveal from './Reveal';
import { SITE } from '../data/site';

/**
 * Real, embedded Google Map pinned to the business's actual Google listing
 * (no API key required — this is the standard no-key iframe embed format).
 * Swap `GOOGLE_MAPS_EMBED_SRC` if the business's Maps CID/address ever changes.
 */
const GOOGLE_MAPS_EMBED_SRC =
  'https://www.google.com/maps?cid=17911049464777647418&output=embed';

export default function MapEmbed() {
  return (
    <Reveal y={30} className="overflow-hidden rounded-3xl border border-bone/10 shadow-card">
      <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
        <iframe
          src={GOOGLE_MAPS_EMBED_SRC}
          title={`${SITE.legalName} on Google Maps`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full grayscale-[15%] contrast-[1.05] invert-[0.92] hue-rotate-180"
          allowFullScreen
        />
        {/* Dims the map's white chrome to sit naturally in the dark theme without hiding data. */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-bone/10" />
      </div>
    </Reveal>
  );
}

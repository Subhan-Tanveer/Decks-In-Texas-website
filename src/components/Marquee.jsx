const ITEMS = [
  'Trex Pro Certified',
  'TimberTech Registered',
  'AZEK Decking',
  'Veteran-Owned',
  'Licensed & Insured',
  'Permits Handled',
  '3–7 Day Builds',
  '5.0 ★ Rated',
];

/** Infinite marquee of trust badges (GPU-friendly CSS animation). */
export default function Marquee() {
  return (
    <div className="relative flex overflow-hidden border-y border-bone/10 bg-coal py-5 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap font-display text-lg font-medium text-bone/45">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          </span>
        ))}
      </div>
    </div>
  );
}

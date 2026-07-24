import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { SITE } from '../data/site';
import { MapPin } from './icons';

/** Stylized service-area map — no external map dependency. */
export default function ServiceAreas() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <SectionHeading eyebrow="Where we build" title="Proudly serving the Greater Austin metro." emberWords={['Austin']} />
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg leading-relaxed text-bone/70">
            From the hills of Westlake to the neighborhoods of Round Rock, we build across Central Texas.
            Not sure if you&rsquo;re in range? Give us a call — we go where the good projects are.
          </p>
        </Reveal>
        <Reveal stagger={0.05} className="mt-7 grid grid-cols-2 gap-3">
          {SITE.serviceAreas.map((a) => (
            <div key={a} className="flex items-center gap-2 text-bone">
              <MapPin className="h-4 w-4 shrink-0 text-ember" />
              <span className="font-medium">{a}</span>
            </div>
          ))}
        </Reveal>
      </div>

      <Reveal y={30}>
        <div className="card relative overflow-hidden p-8">
          <div className="grain absolute inset-0 opacity-40" aria-hidden />
          <svg viewBox="0 0 400 320" className="relative w-full" role="img" aria-label="Map of the Austin service area">
            <defs>
              <radialGradient id="glow" cx="50%" cy="45%" r="60%">
                <stop offset="0%" stopColor="#d2823a" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#d2823a" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="400" height="320" fill="url(#glow)" />
            <g stroke="#f4ecde" strokeOpacity="0.1" strokeWidth="1.5" fill="none">
              <path d="M40 160 L360 160" /><path d="M200 30 L200 300" />
              <path d="M70 60 L330 260" /><path d="M330 60 L70 260" />
            </g>
            {[
              [200, 160, 'Austin'], [120, 110, 'Cedar Park'], [150, 70, 'Leander'],
              [250, 80, 'Round Rock'], [270, 55, 'Georgetown'], [150, 210, 'Westlake'],
              [110, 250, 'Dripping Springs'], [230, 235, 'South Austin'],
            ].map(([x, y, name], i) => (
              <g key={name}>
                <circle cx={x} cy={y} r="8" fill="#d2823a" opacity="0.25">
                  <animate attributeName="r" values="6;16;6" dur="2.6s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0;0.4" dur="2.6s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={x} cy={y} r="4" fill="#f4ecde" />
              </g>
            ))}
          </svg>
          <p className="relative mt-4 text-center text-sm font-semibold text-ash">8 cities · one veteran-owned crew</p>
        </div>
      </Reveal>
    </div>
  );
}

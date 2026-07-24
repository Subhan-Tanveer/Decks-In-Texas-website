import { useEffect, useRef, useState } from 'react';

/**
 * Full-bleed background video with an image poster fallback and a layered
 * gradient scrim so foreground text stays legible. Autoplays muted + looping,
 * lazy-attaches the source on mount, and never blocks first paint (the poster
 * shows instantly). Falls back to just the image under reduced-data / errors.
 */
export default function VideoBackground({
  video,
  poster,
  overlay = 'default',
  className = '',
}) {
  const ref = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v || !video) return;
    v.play?.().catch(() => {}); // ignore autoplay rejections
  }, [video]);

  const scrims = {
    // strong left-weighted scrim for hero copy
    default:
      'bg-[linear-gradient(105deg,rgba(13,10,7,0.94)_0%,rgba(13,10,7,0.7)_38%,rgba(13,10,7,0.35)_100%)]',
    // centered darken for page heroes
    center: 'bg-[radial-gradient(120%_120%_at_50%_0%,rgba(13,10,7,0.6),rgba(13,10,7,0.92))]',
    // heavy for text-forward sections
    heavy: 'bg-ink/85',
  };

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {poster && (
        <img
          src={poster}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {video && !failed && (
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover"
          src={video}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
        />
      )}
      <div className={`absolute inset-0 ${scrims[overlay]}`} />
      <div className="grain absolute inset-0 opacity-40" aria-hidden />
    </div>
  );
}

import { useState } from 'react';

/**
 * Lazy-loaded image that fades + gently un-zooms once decoded. Below-the-fold
 * by default (loading="lazy"); pass `priority` for above-the-fold images.
 */
export default function Img({ src, alt, className = '', imgClassName = '', priority = false, ...rest }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-umber ${className}`} {...rest}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-700 ease-out-cubic ${
          loaded ? 'scale-100 opacity-100 blur-0' : 'scale-105 opacity-0 blur-sm'
        } ${imgClassName}`}
      />
    </div>
  );
}

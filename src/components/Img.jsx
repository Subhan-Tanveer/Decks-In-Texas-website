import { useEffect, useRef, useState } from 'react';

/**
 * Lazy-loaded image that fades + gently un-zooms once decoded. Below-the-fold
 * by default (loading="lazy"); pass `priority` for above-the-fold images.
 */
export default function Img({ src, alt, className = '', imgClassName = '', priority = false, ...rest }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  // If the browser already had this image cached/decoded before React attached
  // the onLoad listener, `load` never fires again — check `.complete` on mount
  // (and whenever `src` changes) so the image doesn't stay hidden forever.
  useEffect(() => {
    setLoaded(false);
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-umber ${className}`} {...rest}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-700 ease-out-cubic ${
          loaded ? 'scale-100 opacity-100 blur-0' : 'scale-105 opacity-0 blur-sm'
        } ${imgClassName}`}
      />
    </div>
  );
}

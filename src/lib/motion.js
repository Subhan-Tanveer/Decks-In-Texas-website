// Central motion helpers: honor prefers-reduced-motion everywhere.

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Signature easings used site-wide (mapped to GSAP's power curves).
export const EASE = {
  outCubic: 'power2.out',
  inOutCubic: 'power3.inOut',
  outQuad: 'power1.out',
  inOutQuad: 'power2.inOut',
};

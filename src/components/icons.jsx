// Lightweight inline SVG icons (no icon-library dependency = smaller bundle).
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const Phone = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const Whatsapp = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.1-.2.2-.3.2-.6.1a8.2 8.2 0 0 1-4-3.5c-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.3 4.7 2 .8 2.7.9 3.7.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
    <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
  </svg>
);

export const Star = ({ filled = true, ...p }) => (
  <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" {...p}>
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17.9 6.2 20.5l1.1-6.5L2.5 9.4l6.6-.9L12 2.5z" />
  </svg>
);

export const ArrowRight = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export const Check = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M20 6L9 17l-5-5" /></svg>
);

export const MapPin = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

export const Clock = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);

export const Shield = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
);

export const Bolt = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></svg>
);

export const Hammer = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M14 6l4 4M3 21l7.5-7.5M14.5 5.5l4 4 2-2a2.8 2.8 0 0 0-4-4l-2 2z" /><path d="M10.5 9.5l-6 6a1.4 1.4 0 0 0 2 2l6-6" />
  </svg>
);

export const Leaf = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M11 20A7 7 0 0 1 9 6c3-3 9-3 11-3 0 2 0 8-3 11a7 7 0 0 1-6 6z" /><path d="M8 16s2-6 8-8" /></svg>
);

export const Menu = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);

export const Close = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
);

export const Drag = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M8 8l-4 4 4 4M16 8l4 4-4 4" /></svg>
);

export const Mail = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
);

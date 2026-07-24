// Thin GA4 wrapper. Loads gtag if a measurement ID is provided via
// VITE_GA_ID (e.g. "G-XXXXXXXXXX"), and exposes track() for custom events.
// No-ops gracefully when no ID is set, so nothing breaks in development.

const GA_ID = import.meta.env.VITE_GA_ID || '';
let initialized = false;

export function initAnalytics() {
  if (initialized || !GA_ID || typeof window === 'undefined') return;
  initialized = true;

  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { anonymize_ip: true });
}

export function track(event, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', event, params);
  } else if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info('[analytics]', event, params);
  }
}

export function trackPageView(path) {
  if (GA_ID && typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', { page_path: path });
  }
}

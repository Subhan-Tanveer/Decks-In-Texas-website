import { useEffect, useState } from 'react';
import { telHref, whatsappHref, SITE } from '../data/site';
import { Phone, Whatsapp } from './icons';

/**
 * Floating click-to-call + WhatsApp buttons. Appears after the user scrolls
 * past the hero, so it never covers the top-of-page CTAs.
 */
export default function FloatingContact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col gap-3 transition-all duration-500 ease-out-cubic ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-200 hover:scale-110"
      >
        <Whatsapp className="h-7 w-7" />
      </a>
      <a
        href={telHref}
        aria-label={`Call ${SITE.phoneDisplay}`}
        className="group grid h-14 w-14 place-items-center rounded-full bg-ember text-ink shadow-lift transition-transform duration-200 hover:scale-110"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-ember/40" />
      </a>
    </div>
  );
}

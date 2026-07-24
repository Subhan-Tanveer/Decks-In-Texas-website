import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { NAV_LINKS, MORE_LINKS, QUOTE_LINK, ALL_LINKS, SITE, telHref } from '../data/site';
import { Phone, Menu, Close } from './icons';
import Magnetic from './Magnetic';
import { prefersReducedMotion } from '../lib/motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();
  const barRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [open]);

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.from(barRef.current, { y: -80, opacity: 0, duration: 0.9, ease: 'expo.out', delay: 0.2 });
  }, { scope: barRef });

  useGSAP(() => {
    if (!open || prefersReducedMotion()) return;
    const links = menuRef.current.querySelectorAll('[data-mlink]');
    gsap.fromTo(menuRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' });
    gsap.fromTo(links, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'expo.out', delay: 0.05 });
  }, { dependencies: [open], scope: menuRef });

  const solid = scrolled || open;
  const linkCls = ({ isActive }) =>
    `link-underline text-sm font-medium text-bone/75 hover:text-bone ${isActive ? 'text-ember after:w-full' : ''}`;

  return (
    <>
      <header
        ref={barRef}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-expo ${
          solid ? 'border-b border-bone/10 bg-ink/85 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav className="container-px flex h-[74px] items-center justify-between gap-4">
          <Link to="/" aria-label="Decks In Texas home" className="group flex shrink-0 items-center gap-2.5" data-cursor>
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-ember text-ink transition-transform duration-500 group-hover:rotate-[-8deg]">
              <span className="font-display text-lg font-semibold leading-none">D</span>
            </span>
            <span className="font-display text-lg font-semibold leading-tight tracking-tight text-bone">
              Decks<span className="text-ember">In</span>Texas
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkCls}>{l.label}</NavLink>
            ))}
            <div className="relative" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium text-bone/75 hover:text-bone" aria-expanded={moreOpen} onClick={() => setMoreOpen((v) => !v)}>
                More
                <svg viewBox="0 0 24 24" className={`h-4 w-4 transition-transform ${moreOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              <div className={`absolute right-0 top-full w-52 pt-3 transition-all duration-300 ${moreOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}>
                <div className="overflow-hidden rounded-xl border border-bone/10 bg-coal p-2 shadow-lift">
                  {MORE_LINKS.map((l) => (
                    <NavLink key={l.to} to={l.to}
                      className={({ isActive }) => `block rounded-lg px-3 py-2.5 text-sm font-medium transition ${isActive ? 'bg-umber text-ember' : 'text-bone/75 hover:bg-umber hover:text-bone'}`}>
                      {l.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href={telHref} className="hidden items-center gap-2 text-sm font-medium text-bone xl:flex">
              <Phone className="h-4 w-4 text-ember" /> {SITE.phoneDisplay}
            </a>
            <Magnetic strength={0.3} className="hidden sm:inline-block">
              <Link to={QUOTE_LINK.to} className="btn-primary">Free Estimate</Link>
            </Magnetic>
            <button onClick={() => setOpen((o) => !o)} className="grid h-11 w-11 place-items-center rounded-lg text-bone lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
              {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div ref={menuRef} className="fixed inset-0 z-40 overflow-y-auto bg-ink lg:hidden">
          <div className="grain absolute inset-0 opacity-40" aria-hidden />
          <div className="container-px relative flex min-h-full flex-col justify-center gap-1 py-24">
            {ALL_LINKS.filter((l) => l.to !== QUOTE_LINK.to).map((l) => (
              <NavLink key={l.to} to={l.to} data-mlink
                className={({ isActive }) => `font-display text-3xl font-semibold tracking-tight ${isActive ? 'text-ember' : 'text-bone'}`}>
                {l.label}
              </NavLink>
            ))}
            <div data-mlink className="mt-8 flex flex-col gap-3">
              <a href={telHref} className="btn-outline w-full"><Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}</a>
              <Link to={QUOTE_LINK.to} className="btn-primary w-full">Get My Free Estimate</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

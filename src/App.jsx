import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import ScrollProgress from './components/ScrollProgress';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import useSmoothScroll from './hooks/useSmoothScroll';
import { initAnalytics, trackPageView } from './lib/analytics';

import Home from './pages/Home';
import DecksAndPorches from './pages/DecksAndPorches';
import Railings from './pages/Railings';
import Fences from './pages/Fences';
import GetQuote from './pages/GetQuote';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-ink px-6 text-center">
      <div>
        <p className="font-display text-7xl font-extrabold text-ember">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-bone">This page took a different path.</h1>
        <p className="mt-3 text-bone/70">Let&rsquo;s get you back to solid ground.</p>
        <Link to="/" className="btn-primary mt-7">Back to home</Link>
      </div>
    </section>
  );
}

export default function App() {
  const location = useLocation();
  useSmoothScroll();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Preloader />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/decks-and-porches" element={<DecksAndPorches />} />
          <Route path="/railings" element={<Railings />} />
          <Route path="/fences" element={<Fences />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Redirects for old/alternate paths */}
          <Route path="/services" element={<Navigate to="/decks-and-porches" replace />} />
          <Route path="/estimate" element={<Navigate to="/get-quote" replace />} />
          <Route path="/decks" element={<Navigate to="/decks-and-porches" replace />} />
          <Route path="/porches" element={<Navigate to="/decks-and-porches" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}

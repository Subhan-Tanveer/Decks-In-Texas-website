import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SITE } from '../data/site';
import { SERVICES } from '../data/content';
import { Check, ArrowRight } from './icons';
import { prefersReducedMotion } from '../lib/motion';
import { track } from '../lib/analytics';

const EMPTY = { name: '', email: '', phone: '', service: '', message: '', preferred: 'Phone' };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.';
  if (v.phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a valid phone number.';
  if (!v.service) e.service = 'Choose a service.';
  if (v.message.trim().length < 10) e.message = 'Tell us a little more (10+ characters).';
  return e;
}

export default function QuoteForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const successRef = useRef(null);
  const formRef = useRef(null);

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  useGSAP(() => {
    if (status === 'success' && !prefersReducedMotion()) {
      gsap.fromTo(successRef.current, { opacity: 0, scale: 0.92, y: 16 }, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'expo.out' });
    }
  }, { dependencies: [status] });

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const firstKey = Object.keys(errs)[0];
      const el = formRef.current.querySelector(`[name="${firstKey}"]`);
      if (el && !prefersReducedMotion()) {
        gsap.fromTo(el, { x: -6 }, { x: 0, duration: 0.4, ease: 'elastic.out(1,0.4)' });
        el.focus();
      }
      return;
    }
    setStatus('submitting');
    try {
      if (SITE.quoteEndpoint) {
        const res = await fetch(SITE.quoteEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...values, _subject: `New deck estimate request from ${values.name}` }),
        });
        if (!res.ok) throw new Error('Request failed');
      } else {
        await new Promise((r) => setTimeout(r, 900));
        // eslint-disable-next-line no-console
        console.info('[QuoteForm] No VITE_QUOTE_ENDPOINT set. Payload:', values);
      }
      track('quote_request_submitted', { service_type: values.service });
      setStatus('success');
      setValues(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div ref={successRef} className="card p-10 text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-sage/15 text-sage">
          <Check className="h-8 w-8" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold text-bone">Request received — thank you!</h3>
        <p className="mx-auto mt-3 max-w-md text-bone/65">
          {SITE.owner} will personally reach out within one business day to schedule your free on-site estimate.
          Need us sooner? Call <a href={`tel:+1${SITE.phoneRaw}`} className="font-semibold text-ember link-underline">{SITE.phoneDisplay}</a>.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-outline mt-7">Submit another request</button>
      </div>
    );
  }

  const errText = 'mt-1.5 flex items-center gap-1 text-sm font-medium text-red-400';
  const label = 'mb-1.5 block text-sm font-semibold text-bone';

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Full name *</label>
          <input id="name" name="name" value={values.name} onChange={set('name')} className={`field ${errors.name ? '!border-red-500/70' : ''}`} placeholder="Jane Doe" />
          {errors.name && <p className={errText}>⚠ {errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone *</label>
          <input id="phone" name="phone" type="tel" value={values.phone} onChange={set('phone')} className={`field ${errors.phone ? '!border-red-500/70' : ''}`} placeholder="(512) 555-0134" />
          {errors.phone && <p className={errText}>⚠ {errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className={label}>Email *</label>
          <input id="email" name="email" type="email" value={values.email} onChange={set('email')} className={`field ${errors.email ? '!border-red-500/70' : ''}`} placeholder="jane@email.com" />
          {errors.email && <p className={errText}>⚠ {errors.email}</p>}
        </div>
        <div>
          <label htmlFor="service" className={label}>Service *</label>
          <select id="service" name="service" value={values.service} onChange={set('service')} className={`field ${errors.service ? '!border-red-500/70' : ''}`}>
            <option value="">Select a service…</option>
            {SERVICES.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}
            <option value="Multiple / Not sure">Multiple / Not sure</option>
          </select>
          {errors.service && <p className={errText}>⚠ {errors.service}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={label}>Project details *</label>
        <textarea id="message" name="message" rows={4} value={values.message} onChange={set('message')} className={`field resize-none ${errors.message ? '!border-red-500/70' : ''}`} placeholder="Tell us about your space, size, materials you're considering, and your timeline…" />
        {errors.message && <p className={errText}>⚠ {errors.message}</p>}
      </div>

      <fieldset className="mt-5">
        <legend className="mb-2 text-sm font-semibold text-bone">Preferred contact method</legend>
        <div className="flex flex-wrap gap-2.5">
          {['Phone', 'Email', 'Text', 'WhatsApp'].map((opt) => (
            <label key={opt} className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition ${values.preferred === opt ? 'border-ember bg-ember text-ink' : 'border-bone/15 text-bone/70 hover:border-bone/40'}`}>
              <input type="radio" name="preferred" value={opt} checked={values.preferred === opt} onChange={set('preferred')} className="sr-only" />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      {status === 'error' && (
        <p className="mt-5 rounded-xl bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300">
          Something went wrong sending your request. Please call us at {SITE.phoneDisplay} and we&rsquo;ll take care of you.
        </p>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary mt-6 w-full text-base disabled:cursor-not-allowed disabled:opacity-70">
        {status === 'submitting' ? 'Sending…' : <>Request My Free Estimate <ArrowRight className="h-4 w-4" /></>}
      </button>
      <p className="mt-3 text-center text-xs text-ash">No spam, ever. {SITE.owner} typically replies within one business day.</p>
    </form>
  );
}

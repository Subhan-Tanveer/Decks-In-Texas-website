/** Vertical rhythm wrapper. `tone` sets the background band (all dark). */
export default function Section({ children, tone = 'ink', className = '', id }) {
  const tones = {
    ink: 'bg-ink',
    coal: 'bg-coal',
    umber: 'bg-umber',
  };
  return (
    <section id={id} className={`relative ${tones[tone]} py-20 sm:py-28 ${className}`}>
      <div className="container-px">{children}</div>
    </section>
  );
}

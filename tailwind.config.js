/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Nightfall Cedar — dark, warm, cinematic.
        ink: '#0d0a07', // page background (warm near-black)
        coal: '#141009', // raised panels
        umber: { DEFAULT: '#1e1710', light: '#2a2016' }, // cards
        ember: { DEFAULT: '#d2823a', light: '#eaa75f', dark: '#a6621f' }, // cedar amber accent
        bone: { DEFAULT: '#f4ecde', dim: '#c9bda8' }, // warm off-white text
        ash: '#948a7a', // muted text
        sage: '#8a9a6b', // secondary natural accent
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 9vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 6.5vw, 5.5rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
      },
      letterSpacing: { widest2: '0.32em' },
      boxShadow: {
        glow: '0 30px 90px -30px rgba(210, 130, 58, 0.45)',
        lift: '0 40px 80px -30px rgba(0, 0, 0, 0.7)',
        card: '0 20px 50px -24px rgba(0, 0, 0, 0.65)',
      },
      transitionTimingFunction: {
        'out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        shimmer: { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '200% 50%' } },
      },
      animation: {
        marquee: 'marquee 34s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

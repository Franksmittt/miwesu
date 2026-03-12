/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#E5C687', // Pale Gold
          400: '#D4AF37', // Standard Gold
          500: '#C5A059', // Rich Dubai Gold (Matches Logo)
          600: '#997B3D', // Dark Antique Gold
          700: '#7c6426', // Contrast-safe on marble (WCAG AA 4.5:1)
        },
        onyx: {
          DEFAULT: '#050505', // True Black (Deep Luxury)
          light: '#121212', // Slightly lighter for cards
        },
        marble: {
          DEFAULT: '#FAFAFA', // Ultra White
          dark: '#F4F4F4', // Off White
        }
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg')",
        'luxury-gradient': "linear-gradient(135deg, #050505 0%, #1a1a1a 100%)",
        'gold-gradient': "linear-gradient(45deg, #C5A059, #E5C687, #C5A059)",
      },
      boxShadow: {
        'luxury': '0 20px 50px -12px rgba(0, 0, 0, 0.25)',
        'gold-glow': '0 0 20px rgba(197, 160, 89, 0.3)',
      },
      letterSpacing: {
        'widest-xl': '0.3em',
      },
      keyframes: {
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.08) translate(-2%, -2%)' },
        },
      },
      animation: {
        'ken-burns': 'kenBurns 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          offwhite: '#F2EDE6',
          sky: '#59B8E9',
          royal: '#153D94',
          'royal-dark': '#0F2E70',
          slate: '#406489',
          sand: '#C7B49D',
          gold: '#CCB17C',
          navy: '#121A37',
          'navy-dark': '#0C1226',
        }
      },
      fontFamily: {
        heading: ['"Cormorant SC"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
        accent: ['"Cormorant Garamond"', '"Goudy Old Style"', 'serif'],
      },
      letterSpacing: {
        'extra-wide': '0.25em',
        'super-wide': '0.35em',
      },
      boxShadow: {
        'brand-subtle': '0 4px 20px -2px rgba(18, 26, 55, 0.05)',
        'brand-card': '0 10px 30px -5px rgba(21, 61, 148, 0.08)',
        'brand-glow': '0 0 25px rgba(89, 184, 233, 0.25)',
        'brand-royal': '0 10px 25px -5px rgba(21, 61, 148, 0.3)',
      }
    },
  },
  plugins: [],
}

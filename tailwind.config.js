/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tamarind Brown - earthy, authentic, traditional
        primary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#8B4513', // Main brand color - Saddle brown
          600: '#7a3a10',
          700: '#6B3410',
          800: '#5c2d0e',
          900: '#4d260c',
        },
        // Sambal Red - their secret weapon, bold, appetizing
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#DC2626', // Spicy red
          600: '#B91C1C',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#6b1818',
        },
        // Fresh Green - halal certified, fresh ingredients
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#059669', // Emerald
          600: '#047857',
          700: '#065f46',
          800: '#064e3b',
          900: '#053d30',
        },
        // Warm Cream - comfort, family-friendly
        neutral: {
          50: '#FFF7ED',  // Warm cream
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#44403C', // Warm gray
        },
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'serif'],
        handwritten: ['var(--font-great-vibes)', 'cursive'],
      },
    },
  },
  plugins: [],
}
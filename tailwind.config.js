/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2f8',
          100: '#cce5f1',
          200: '#99cbe3',
          300: '#66b1d5',
          400: '#3397c7',
          500: '#0F4C75',
          600: '#0c3d5e',
          700: '#092e47',
          800: '#061f30',
          900: '#030f18',
        },
        secondary: {
          50: '#e3f2f9',
          100: '#c7e5f3',
          200: '#8fcbe7',
          300: '#57b1db',
          400: '#1f97cf',
          500: '#3282B8',
          600: '#286893',
          700: '#1e4e6e',
          800: '#14344a',
          900: '#0a1a25',
        },
        accent: {
          50: '#fffdf5',
          100: '#fffbeb',
          200: '#fff7d6',
          300: '#fff3c2',
          400: '#ffefad',
          500: '#FFE66D',
          600: '#ccb857',
          700: '#998a41',
          800: '#665c2c',
          900: '#332e16',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
}
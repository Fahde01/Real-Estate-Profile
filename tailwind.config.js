/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef3fa',
          100: '#d7e2f1',
          700: '#1d355d',
          900: '#0b1f3a',
          950: '#08162b',
        },
        warm: {
          50: '#f8f6f3',
          100: '#f2ede7',
          200: '#e6ddd1',
          300: '#d3c3ae',
          600: '#7b6b58',
          700: '#5f5344',
        },
        gold: {
          100: '#fef7df',
          300: '#f4d47c',
          400: '#edc965',
          500: '#e3b64e',
          600: '#c9932d',
          700: '#9f6f1a',
        },
      },
    },
  },
  plugins: [],
}

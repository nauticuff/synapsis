/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: '#app',
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '541px',
      ...defaultTheme.screens,
    },
    extend: {
      borderWidth: {
        1: '1px'
      },
      fontFamily: {
        rubik: ['var(--font-rubik)'],
        syne: ['var(--font-syne)'],
      },
    },
  },
  plugins: [],
}

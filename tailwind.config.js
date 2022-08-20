/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      pacifico: ['Pacifico', 'cursive'],
      crete: ['Crete Round', 'serif'],
      raleway: ['Raleway', 'sans-serif'],
      alegreya: ['Alegreya', 'serif'],
      nunito: ['Nunito', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
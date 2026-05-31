/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",    
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['Poppins', 'sans-serif'],
      },
      colors: {
        accent: '#b8a06a',
        'accent-dark': '#9a8455',
        'site-dark': '#2c2416',
      },
    },
  },
  plugins: [],
}
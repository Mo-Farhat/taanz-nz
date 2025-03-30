/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a'
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        ovo: ['Ovo', 'sans-serif']
      }
    },
  },
  plugins: [],
} 
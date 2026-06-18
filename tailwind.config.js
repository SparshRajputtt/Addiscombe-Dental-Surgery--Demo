/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: '#0F4C81',
        secondary: '#4DA8DA',
        accent: '#5BC0BE',
        background: '#F8FAFC',
        dark: '#1F2937',
      },
    },
  },
  plugins: [],
}
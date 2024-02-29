/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'madimi-one': ['Madimi One', 'sans-serif'],
    },
  },
  },
  plugins: [],
}
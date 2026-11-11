/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./pages/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
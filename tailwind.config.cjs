/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '200px',
        md: '768px',
        lg: '1028px',
        xl: '1440px'
      }
    },
  },
  plugins: [],
}
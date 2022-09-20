/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      grayscale: {
        50: '50%',
        25: '25%'
      },
      colors: {
        'surf-blue': '#98c1d9',
      },
    },
  },
  plugins: [],
}

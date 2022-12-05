/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      grayscale: {
        50: "50%",
        25: "25%",
      },
      colors: {
        "surf-blue": "#98c1d9",
        "water-blue": "#44728D",
        sand: "#E6D9A5",
        newBg: "#e1f3fd",
        footerColor: "#11010e",
        buttonColor: "#43d1f7",
        buttonBorder: "#6f3991",
        containerColor: "#e1ecfd",
      },
    },
  },
  plugins: [],
};

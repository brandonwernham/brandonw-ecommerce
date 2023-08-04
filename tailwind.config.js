/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(180deg, #4D1D91 0.82%, #9681EB 129%)",
      },
      colors: {
        primary: {
          light: "#A7EDE7",
          DEFAULT: "#45CFDD",
          dark: "#37A7B3",
          primarylight: "#9681EB",
          primarydark: "#4D1D91",
        },
      },
    },
  },
  plugins: [],
};

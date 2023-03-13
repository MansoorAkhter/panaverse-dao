const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00616C"
      },
      fontFamily: {
        sans: ['var(--font-manrope)', ...fontFamily.sans],
      },
    },
    // screens: {
    //   xs: "350px",
    //   sm: "500px",
    //   md: "640px",
    //   lg: "768px",
    //   "lg-2": "868px"
    // }
  },

  plugins: [],
}

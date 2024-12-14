/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const Breakpoints = require("./src/entities/enums/Breakpoints");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-golos)", "sans-serif"],
        golos: ["var(--font-golos)", "sans-serif"],
        jost: ["var(--font-jost)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xlg: `${Breakpoints.XLG}px`, // 1200px
        lg: `${Breakpoints.LG}px`, // 992px
        md: `${Breakpoints.MD}px`, // 768px
        sm: `${Breakpoints.SM}px`, // 576px
      },
    },
    colors: {
      primary: "#120a8f",
      darkTheme: "#1e1f1d",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
    },
  },
  plugins: [],
};

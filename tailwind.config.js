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
        xlg: `${Breakpoints.XLG}px`,
        lg: `${Breakpoints.LG}px`,
        md: `${Breakpoints.MD}px`,
        sm: `${Breakpoints.SM}px`,
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: "slideDown 200ms ease-out",
        slideUp: "slideUp 200ms ease-out",
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

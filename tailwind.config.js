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
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        bgGradientAnimation: {
          from: {
            transform: "rotate(0deg) scale(1.5)",
          },
          to: {
            transform: "rotate(360deg) scale(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        bgGradientAnimation: "bgGradientAnimation 6s infinite linear alternate",
      },
    },
    colors: {
      primary: "#120a8f",
      darkTheme: "#1e1f1d",
      cornsilk: "#fff6d6",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
    },
  },
  plugins: [require("tailwindcss-animate")],
};

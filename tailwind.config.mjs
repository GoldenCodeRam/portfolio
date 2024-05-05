const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "ease-out-bounce": "ease-out-bounce 3s",
        "ease-in-bounce": "ease-in-bounce 5s forwards",
        "bulb-in": "bulb-in forwards 1s",
      },
      keyframes: {
        "ease-out-bounce": {
          "0%": { opacity: 1 },
          "12%": { opacity: 0.89 },
          "24%": { opacity: 0.56 },
          "36%": { opacity: 0.02 },
          "54%": { opacity: 0.25 },
          "74%": { opacity: 0.02 },
          "82%": { opacity: 0.06 },
          "92%": { opacity: 0.01 },
          "96%": { opacity: 0.02 },
          "100%": { opacity: 0 },
        },
        "ease-in-bounce": {
          "0%": { opacity: 0 },
          "4%": { opacity: 0.11 },
          "8%": { opacity: 0.44 },
          "18%": { opacity: 0.98 },
          "26%": { opacity: 0.75 },
          "46%": { opacity: 0.98 },
          "64%": { opacity: 0.94 },
          "76%": { opacity: 0.99 },
          "88%": { opacity: 0.98 },
          "100%": { opacity: 1 },
        },
        "bulb-in": {
          "0%": { opacity: 1 },
          "50%": { opacity: 0.25 },
          "75%": { opacity: 1 },
          "90%": { opacity: 0.50 },
          "100%": { opacity: 1 },
        },
        "bulb-out": {},
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-delay": (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme("transitionDelay") },
      );
    }),
  ],
};

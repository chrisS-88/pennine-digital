import base from "pennine-design-system/base/tailwind.base.js";
import minimal from "pennine-design-system/motion/minimal.js";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [base, minimal],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#062a29",
        accent: "#4c998e",
        highlight: "#C8A27A",
      },

      fontFamily: {
        sans: ["SN Pro", "sans-serif"],
        heading: ["Playwrite NZ", "serif"],
      },
    },
  },
  plugins: [],
};

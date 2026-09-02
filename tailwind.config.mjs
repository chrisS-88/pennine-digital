import base from "./pennine-design-system/base/tailwind.base.js";
import minimal from "./pennine-design-system/motion/minimal.js";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [base, minimal],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: "#2F6B4F",
        accentHover: "#3C8A65",
      },

      fontFamily: {
        heading: ["Oswald Variable, sans-serif"],
        body: ["Montserrat Variable', sans-serif"],
      },
    },
  },
  plugins: [],
};

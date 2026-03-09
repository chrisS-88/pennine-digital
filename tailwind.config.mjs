/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Brand Core
        primary: "#0A3A4A",
        primaryHover: "#082F3B",

        accent: "#A65A2A",
        accentHover: "#b56330",

        background: "#F3F2EE",
        surface: "#E8E6DF",
        surfaceHover: "#DEDCD4",

        dark: "#0C1C22",
        muted: "#6A6F6D",
      },

      backgroundImage: {
        "gradient-soft": "linear-gradient(180deg, #F8F7F3 0%, #F3F2EC 30%, #EEF0EB 65%, #E8ECE8 100%)",

        "gradient-dark": "linear-gradient(180deg, #143842 0%, #0E252C 50%, #08171C 100%)",

        "gradient-cta":
          "radial-gradient(circle at 50% 10%, rgba(10,58,74,0.35) 0%, rgba(10,58,74,0.15) 35%, transparent 70%), linear-gradient(180deg, #143842 0%, #0E252C 60%, #08171C 100%)",
      },

      fontFamily: {
        sans: ["Lora", "serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

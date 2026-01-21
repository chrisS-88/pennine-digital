/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A2A2A", // Soft Black
        secondary: "#654d7c", // Heather Purple
        accent: "#8C6A4A", // Warm Bronze
        light: "#FAF9f7", // Off White
        dark: "#1C1A1D", // Ink
      },

      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #1C1A1D 0%, #43384C 100%)",
        "gradient-warm": "linear-gradient(135deg, #43384C 0%, #8C6A4A 100%)",
        "gradient-soft": "linear-gradient(180deg, #FAF9F7 0%, #F0EEEB 100%)",
        "gradient-dark": "linear-gradient(180deg, #2A2A2A  0%, #1C1A1D 100%)",
        "gradient-footer": "linear-gradient(180deg, #18171A 0%, #121115 100%)",
      },

      fontFamily: {
        sans: ["Lora", "serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

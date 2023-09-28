/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    screens: {
      // sm (640px)	max-width: 640px;
      // md (768px)	max-width: 768px;
      // lg (1024px)	max-width: 1024px;
      // xl (1280px)	max-width: 1280px;
      // 2xl (1536px)	max-width: 1536px;
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "mid-lg": "1150px",
      xl: "1280",
      "2xl": "1536px",
      "true-hd": "1920px",
    },
    extend: {
      colors: { primary: "#ED5937", secondary: "#231F20" },
    },
    fontFamily: {
      aeonik: ["aeonik", "sans-serif"],
    },
  },
  plugins: [],
};

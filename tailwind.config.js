/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FCF7F4",
        blush: "#F8E1E8",
        petal: "#F3B6C8",
        rose: "#D9567F",
        berry: "#B53A64",
        wine: "#3B1A2E",
        mauve: "#7D5B6D",
        lavender: "#E6DCF6",
        lilac: "#A98BE0",
        gold: "#C7A07A",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        hand: ["Caveat", "cursive"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px -24px rgba(120,40,80,.35)",
        card: "0 18px 40px -22px rgba(90,30,60,.45)",
      },
    },
  },
  plugins: [],
};

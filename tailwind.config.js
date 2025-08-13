
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        royal: "#0a192f", // Deep Royal Blue
        gold: "#f5c518", // Elegant Gold
        night: "#020817", // Dark navy
      },
      boxShadow: {
        gold: "0 0 15px rgba(245, 197, 24, 0.5)",
      },
    },
  },
  plugins: [],
};

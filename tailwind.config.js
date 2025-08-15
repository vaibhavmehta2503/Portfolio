/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        classy: ["'Playfair Display'", "serif"],
        modern: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#3b82f6",
        secondary: "#8b5cf6",
        accent: "#10b981",
        dark: "#1f2937",
        light: "#f9fafb",
      },
    },
  },
  plugins: [],
};

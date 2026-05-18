/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eklezia: {
          cream: "#FAF7F0",
          navy: "#1E3A5F",
          gold: "#D4A853",
          dark: "#1F2937",
          soft: "#F3EFE7",
        },
      },
      boxShadow: {
        soft: "0 20px 50px rgba(30, 58, 95, 0.12)",
      },
    },
  },
  plugins: [],
};
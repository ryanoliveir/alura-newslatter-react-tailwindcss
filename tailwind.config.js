/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      colors: {
        blue: {
          light: "#C5dFFF",
          dark: "#061E3C",
          hover: "#1057B0",
        },
        white: '#ffffff'
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  // plugins: [require("@tailwindcss/forms")],
};

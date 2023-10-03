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
        white: "#ffffff",
      },
      keyframes: {
        sino_kf: {
          "0%, 100%": {
            transform: "rotate(-10deg)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
        },
      },
      animation: {
        sino: "sino_kf 0.31s ease-in-out infinite",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  // plugins: [require("@tailwindcss/forms")],
};

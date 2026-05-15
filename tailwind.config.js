/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030014",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#7000FF",
          light: "#B266FF",
          dark: "#3B0086",
        },
        secondary: {
          DEFAULT: "#00E5FF",
          light: "#80F2FF",
          dark: "#008A99",
        }
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: 1, filter: "brightness(1)" },
          "50%": { opacity: .7, filter: "brightness(1.5)" },
        }
      }
    },
  },
  plugins: [],
}

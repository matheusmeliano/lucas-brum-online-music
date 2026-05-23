/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: {
          deep: "#050505",
          vivid: "#0E0E12",
          ink: "#EDE9E1",
          text: "#F6F2EA",
          muted: "rgba(246,242,234,0.72)",
          border: "rgba(246,242,234,0.12)",
          glow: "#C2A46A",
          accent: "#FFB347",
        },
      },
      boxShadow: {
        "glow-sm": "none",
        "glow-md": "none",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-45%)" },
          "100%": { transform: "translateX(45%)" },
        },
      },
      animation: {
        "float-slow": "floatSlow 7s ease-in-out infinite",
        "gradient-shift": "gradientShift 12s ease-in-out infinite",
        shimmer: "shimmer 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

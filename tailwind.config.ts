import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Inter Variable'", "system-ui", "sans-serif"],
      },
      colors: {
        sky: {
          dawn: "#87ceeb",
          glow: "#ffe7a3",
        },
        meadow: {
          base: "#8bc34a",
          shadow: "#5a9216",
        },
      },
      boxShadow: {
        softGlow: "0 20px 45px -20px rgba(12, 74, 110, 0.45)",
      },
      keyframes: {
        sway: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(3%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        shimmer: {
          from: { backgroundPosition: "0%" },
          to: { backgroundPosition: "200%" },
        },
      },
      animation: {
        sway: "sway 6s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

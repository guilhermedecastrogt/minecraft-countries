import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070504",
          900: "#0a0807",
          800: "#120d0b",
          700: "#1a1311",
          600: "#241a16",
        },
        ember: {
          400: "#ff9d4d",
          500: "#ff7a18",
          600: "#f25c05",
        },
        war: {
          400: "#f0463c",
          500: "#e0241c",
          600: "#b3140d",
          700: "#7d0f0a",
        },
        gold: {
          300: "#ffe08a",
          400: "#f5c542",
          500: "#d4af37",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        ember: "0 0 40px -8px rgba(255,122,24,0.45)",
        war: "0 0 50px -10px rgba(224,36,28,0.5)",
        deep: "0 30px 80px -20px rgba(0,0,0,0.85)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #0a0807 80%), repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 40px)",
        "radial-ember":
          "radial-gradient(circle at 50% 0%, rgba(255,122,24,0.18), transparent 60%)",
      },
      keyframes: {
        "ember-rise": {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0" },
          "10%": { opacity: "0.8" },
          "100%": { transform: "translateY(-120px) scale(0.3)", opacity: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 3.5s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

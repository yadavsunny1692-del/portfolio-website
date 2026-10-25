/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        background: "#050508",
        surface: "#0a0a0f",
        "surface-2": "#111118",
        border: "rgba(100,120,255,0.15)",
        accent: {
          DEFAULT: "#4f8eff",
          dim: "#2563eb",
          glow: "rgba(79,142,255,0.25)",
          cyan: "#22d3ee",
          "cyan-glow": "rgba(34,211,238,0.2)",
        },
        text: {
          primary: "#f0f4ff",
          secondary: "#8892b0",
          muted: "#4a5568",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,255,0.15) 0%, transparent 70%)",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(79,142,255,0.2)",
        "glow-cyan": "0 0 30px rgba(34,211,238,0.15)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};

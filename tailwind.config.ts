import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-family-heading)", "monospace"],
        body: ["var(--font-family-body)", "monospace"],
        mono: ["var(--font-family-mono)", "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          dim: "var(--primary-dim)",
          muted: "var(--primary-muted)",
        },
        secondary: "var(--secondary)",
        background: "var(--background)",
        surface: "var(--surface)",
        foreground: "var(--foreground)",
        outline: "var(--outline)",
      },
      animation: {
        flicker: "flicker 0.1s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
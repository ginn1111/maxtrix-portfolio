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
          DEFAULT: "var(--c-action)",
          dim: "var(--c-action)",
          muted: "var(--c-text-muted)",
        },
        secondary: "var(--c-warning)",
        background: "var(--c-bg)",
        surface: "var(--c-surface)",
        foreground: "var(--c-text)",
        outline: "var(--c-border)",
        "on-surface-variant": "var(--c-text-muted)",
        "on-background": "var(--c-text)",
        "primary-fixed": "var(--c-text)",
        "primary-fixed-dim": "var(--c-action)",
        "primary-container": "var(--c-action)",
        "on-primary-container": "var(--on-action)",
        "secondary-container": "var(--c-warning)",
        "surface-container-low": "var(--c-surface)",
        "surface-container-lowest": "var(--c-bg)",
        "surface-container": "var(--c-surface)",
        "surface-container-high": "var(--c-surface)",
        "surface-container-highest": "var(--c-surface)",
        "outline-variant": "var(--c-border)",
        error: "var(--c-warning)",
        tertiary: "var(--c-text)",
      },
      spacing: {
        margin: "24px",
        gutter: "8px",
        "container-max": "1440px",
        unit: "4px",
      },
      borderRadius: {
        DEFAULT: "0px",
        lg: "0px",
        xl: "0px",
        full: "9999px",
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "400" }],
        "code-sm": ["14px", { lineHeight: "1.4", letterSpacing: "0em", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "700" }],
        "headline-xl": ["48px", { lineHeight: "1.1", letterSpacing: "-0.05em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "1.3", letterSpacing: "0em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "400" }],
      },
      animation: {
        flicker: "flicker 0.1s infinite",
        scan: "scan 8s linear infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": { opacity: "1" },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": { opacity: "0.4" },
        },
        scan: {
          "0%": { top: "-100px" },
          "100%": { top: "100vh" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
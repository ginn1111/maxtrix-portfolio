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
          DEFAULT: "var(--accent)",
          dim: "var(--accent-dim)",
          muted: "var(--muted)",
        },
        secondary: "var(--internal-fg)",
        background: "var(--bg)",
        surface: "var(--surface)",
        foreground: "var(--fg)",
        outline: "var(--border)",
        "on-surface-variant": "var(--muted)",
        "on-background": "var(--fg)",
        "primary-fixed": "var(--fg)",
        "primary-fixed-dim": "var(--accent)",
        "primary-container": "var(--accent)",
        "on-primary-container": "var(--bg)",
        "secondary-container": "var(--internal-fg)",
        "surface-container-low": "var(--surface-low)",
        "surface-container-lowest": "var(--bg)",
        "surface-container": "var(--surface)",
        "surface-container-high": "var(--surface)",
        "surface-container-highest": "var(--surface)",
        "outline-variant": "var(--border)",
        error: "var(--internal-fg)",
        tertiary: "var(--fg)",
      },
      spacing: {
        margin: "24px",
        gutter: "16px",
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
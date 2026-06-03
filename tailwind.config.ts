import type { Config } from "tailwindcss";

/**
 * Tokens transcribed from PM-design/DESIGN.md.
 * Executive Mobility Portfolio — Corporate Modern / Glassmorphic, dark.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0b1326",
          dim: "#0b1326",
          bright: "#31394d",
          "container-lowest": "#060e20",
          "container-low": "#131b2e",
          container: "#171f33",
          "container-high": "#222a3d",
          "container-highest": "#2d3449",
          variant: "#2d3449",
        },
        "on-surface": "#dae2fd",
        "on-surface-variant": "#d7c2b9",
        outline: "#9f8d84",
        "outline-variant": "#52443c",
        primary: {
          DEFAULT: "#feb68e",
          container: "#c2825d",
          "on-container": "#471e02",
          on: "#502407",
          fixed: "#ffdbc9",
          "fixed-dim": "#feb68e",
        },
        secondary: {
          DEFAULT: "#bcc7de",
          container: "#3e495d",
          on: "#263143",
          "on-container": "#aeb9d0",
        },
        tertiary: {
          DEFAULT: "#b9c7e0",
          container: "#8392a9",
          on: "#233144",
        },
        error: {
          DEFAULT: "#ffb4ab",
          container: "#93000a",
          on: "#690005",
        },
        background: "#0b1326",
        "on-background": "#dae2fd",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-geist)", "var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-lg-mobile": ["24px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "1.4", letterSpacing: "-0.01em", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "1.6", letterSpacing: "0" }],
        "body-md": ["16px", { lineHeight: "1.6", letterSpacing: "0" }],
        "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "500" }],
        "label-sm": ["12px", { lineHeight: "1.2", letterSpacing: "0.02em", fontWeight: "500" }],
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
      spacing: {
        gutter: "24px",
        "section-gap": "80px",
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "shadow-color": "var(--shadow-color)",
        "link-text": "var(--link-text)",
        "link-background": "var(--link-background)",
        "link-hover": "var(--link-hover)",
        "card-link-hover": "var(--card-link-hover)",
        "panel-link-background": "var(--panel-link-background)",
        "panel-link-hover": "var(--panel-link-hover)",
        "common-text": "var(--common-text)",
        "common-border": "var(--common-border)",
        "common-bg": "var(--common-bg)",
      },
      fontFamily: {
        mplus: ["var(--font-m-plus)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
      },
      container: {
        center: true,
        screens: {
          lg: "50rem",
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".flex-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".flex-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
      });
    }),
  ],
} satisfies Config;

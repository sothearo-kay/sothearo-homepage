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
        "link-background": "var(--link-background)",
        "link-hover": "var(--link-hover)",
        gray: {
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          700: "var(--gray-700)",
          800: "var(--gray-800)",
        },
      },
      fontFamily: {
        mplus: ["var(--font-m-plus)", "sans-serif"],
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
      });
    }),
  ],
} satisfies Config;

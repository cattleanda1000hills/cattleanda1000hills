import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        turquoise: {
          "50": "#f9f7ed",
          "100": "#f0ecd1",
          "200": "#e3d8a5",
          "300": "#d3bd71",
          "400": "#c5a54a",
          "500": "#b6913c",
          "600": "#9c7432",
          "700": "#7d572b",
          "800": "#6a4729",
          "900": "#493120",
          "950": "#342014",
        },
        pinklet: {
          "50": "#f6f7ee",
          "100": "#eaedda",
          "200": "#d6dcba",
          "300": "#bbc591",
          "400": "#a1ae6d",
          "500": "#84934f",
          "600": "#606c38",
          "700": "#4f5a31",
          "800": "#41492b",
          "900": "#383f28",
          "950": "#1d2112",
        },
      },
      scale: {
        "100": "1",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("preline/plugin"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;

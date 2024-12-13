import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        gray900: "var(--gray900)",
        gray800: "var(--gray800)",
        gray300: "var(--gray300)",
        green500: "var(--green500)",
        green300: "var(--green300)",
      },
    },
  },
  plugins: [],
} satisfies Config;

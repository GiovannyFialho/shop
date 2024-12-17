import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "black-opacity-60": "rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
      },
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

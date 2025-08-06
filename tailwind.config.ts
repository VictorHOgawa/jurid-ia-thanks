import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#AB8E63",
        secondary: "#282A3B",
      },
      keyframes: {
        shake: {
          "0%, 20%, 30%, 70%, 90%, 100%": { transform: "translateX(0)" },
          "10%, 50%, 80%": { transform: "translateX(-1px)" },
          "40%, 60%": { transform: "translateX(1px)" },
        },
      },
      animation: {
        shake: "shake 1s ease-in-out infinite",
      },
    },
    screens: {
      xxs: "200px",
      xs: "390px",
      sm: "550px",
      md: "768px",
      lg: "1024px",
      xl: "1360px",
      "2xl": "1920px",
      "3xl": "2560px",
    },
  },
  plugins: [],
} satisfies Config;

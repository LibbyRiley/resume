import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green: {
          50: "#f2f7f5", // Lightest
          100: "#d3e7e0",
          200: "#a3d5cb",
          300: "#74c4b5",
          400: "#4c836d", // Base
          500: "#376956",
          600: "#2c554a",
          700: "#23433d",
          800: "#1a322f",
          900: "#121f23", // Darkest
        },
      },
      boxShadow: {
        custom: "8px 8px 0px 0px #74c4b5",
      },
    },
  },
  plugins: [],
};
export default config;

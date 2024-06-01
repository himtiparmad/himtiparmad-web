import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          main: "#18A800",
          dark: "#0C5400",
          light: "#72E048",
          subtle: "#D4F5C8",
        },
        state: {
          error: {
            main: "#FF3B3B",
            dark: "#E53535",
            light: "#FF5C5C",
            subtle: "#FF8080",
          },
          warning: {
            main: "#FFCC00",
            dark: "#E5B800",
            light: "#FDDD48",
            subtle: "#FDED72",
          },
          info: {
            main: "#0063F7",
            dark: "#004FC4",
            light: "#5B8DEF",
            subtle: "#9DBFF9",
          },
          success: {
            main: "#06C270",
            dark: "#05A660",
            light: "#39D98A",
            subtle: "#57EBA1",
          },
        },
        dark: {
          main: "#3A3A3C",
          dark: "#6B7588",
          light: "#8F90A6",
          subtle: "#C7C9D9",
          himti: "#121316",
        },
        light: {
          main: "#DDE5E9",
          dark: "#EBEBF0",
          light: "#F2F2F5",
          subtle: "#FAFAFC",
        },
      },
    },
  },
  plugins: [],
};
export default config;

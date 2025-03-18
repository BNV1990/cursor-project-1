/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A85FF",
        gray: {
          50: "#F7F7F8",
          100: "#EFEFEF",
          200: "#E6E6E6",
          300: "#DCDBDC",
          400: "#B9B8B9",
          500: "#969596",
          600: "#737273",
          700: "#4F4E4F",
          800: "#2B2A2B",
          900: "#070607",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "0.5-5": "0.5fr repeat(5, minmax(0, 1fr))",
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()]
}
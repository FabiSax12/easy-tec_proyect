import type { Config } from "tailwindcss"
import { nextui } from "@nextui-org/react"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light": "#F4F4F4",
        "gray": "#6a737b"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
export default config

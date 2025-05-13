const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../node_modules/@heroui/theme/dist*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(alert|autocomplete|breadcrumbs|button|card|chip|date-picker|divider|drawer|dropdown|form|image|input|link|modal|pagination|progress|scroll-shadow|select|skeleton|spinner|toggle|table|tabs|popover|user|ripple|listbox|calendar|date-input|menu|checkbox|spacer|avatar).js"
  ],
  darkMode: "class",
  plugins: [heroui()],
};
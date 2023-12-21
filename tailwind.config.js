/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,scss,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: true,
    darkTheme: "emerald",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}


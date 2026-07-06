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
    themes: [
      {
        rettvest: {
          "primary": "#2f9e72",
          "primary-content": "#ffffff",
          "secondary": "#f4b942",
          "secondary-content": "#24352f",
          "accent": "#315c55",
          "accent-content": "#ffffff",
          "neutral": "#24352f",
          "neutral-content": "#f7fbf6",
          "base-100": "#fbfff9",
          "base-200": "#eef7f0",
          "base-300": "#d9eadc",
          "base-content": "#26352f",
          "info": "#3b82f6",
          "success": "#2f9e72",
          "warning": "#f4b942",
          "error": "#dc3545",
        },
      },
      "light",
      "emerald",
    ],
    darkTheme: "rettvest",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}

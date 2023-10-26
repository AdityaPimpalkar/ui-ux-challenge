/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      grey: {
        100: "#444444",
        200: "#6F6F6F",
        300: "#0000001F",
      },
      blue: {
        100: "#0D7AB5",
        200: "#64C0F3",
        300: "#64C0F330",
      },
      purple: {
        100: "#BBA4FB",
        200: "#BBA4FB30",
      },
    },
    extend: {},
  },
  plugins: [],
};

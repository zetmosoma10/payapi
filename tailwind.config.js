/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_pink: "#ba4270",
        water_white: "#fbfcfe",
        san_juan_blue: "#36536b",
        mirage_blue: "#1b262f",
        charm_pink: "#da6d97",
        light_san_juan_blue: "#6c8294",
        background_color: "#edf3f8",
      },
    },
  },
  plugins: [],
};

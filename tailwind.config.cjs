/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary100: "#dce2f2",
        primary200: "#A8B9DB",
        primary300: "#6E8BC4",
        primary400: "#435BA3",
        primarybtn: "#5972c0",
      },

      container: "2rem",

      fontFamily: {
        mont: "Montserrat",
        fira: "Fira Sans",
      },
    },
  },
  plugins: [],
};

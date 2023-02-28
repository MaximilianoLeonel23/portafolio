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

      container: {
        padding: {
          DEFAULT: '2rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      fontFamily: {
        mont: "Montserrat",
        fira: "Fira Sans",
      },
      boxShadow: {
        card: "0 4px 8px rgba(0, 0, 0, 0.1)"
      }
    },
  },
  plugins: [],
};

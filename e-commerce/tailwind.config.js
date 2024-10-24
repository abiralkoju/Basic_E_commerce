/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Prociono", "serif"],
      },
      boxShadow: {
        custom: "0 0 5px rgba(0,0,0,0.3)",
      },
      outline: {
        outline: "",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DBSystem: "#203463",
        DBSystem2: "#00A398",
      },
    },
  },
  plugins: [],
};

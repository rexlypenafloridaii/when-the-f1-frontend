/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-pattern": "url(https://www.toptal.com/designers/subtlepatterns/uploads/gravel.png)",
      },
    },
  },
  plugins: [],
};

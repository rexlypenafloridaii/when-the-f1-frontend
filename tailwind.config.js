/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-pattern": "url(https://www.toptal.com/designers/subtlepatterns/uploads/gravel.png)",
        "neow-gif":
          "url(https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDJpN3c3aGE1NDd4dzd2aDd3ZHpvN2gzb2xxNnZ1NTdhbXN1c3FoayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iJDLBX5GY8niCpZYkR/giphy.gif)",
      },
    },
  },
  plugins: [],
};

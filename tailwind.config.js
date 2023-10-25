/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'onest': ['Onest', 'sans-serif']
      },
      colors: {
        amazonclone: {
          background: "#EBEBEB",
          light_blue: "#232F3A",
          yellow: "#212326",
          DEFAULT: "#23836B",
        },
      },
    },
  },
  plugins: [],
};
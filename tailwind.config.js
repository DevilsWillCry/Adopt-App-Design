/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '76.5': '19.125rem',
        '35.5': '8.875rem',
      },
      height: {
        '62.25': '15.5625rem',
        '22.5': '5.625rem',
      },
      colors: {
        'yellowDesign': '#FED45B',
      },
    },
  },
  plugins: [],
}
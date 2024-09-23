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
        'cyanDesign': '#23F3DF',
        'grayDesign':'#ACACAC',
        'whiteMainDesign':'#FAFAFA',
        'FooterDesign': '#24202A'
      },
      fontFamily: {
        'nunito':['Nunito', 'sans-serirf', 'system-ui'],
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': {'max': '576px'},
      'sm': {'min': '576px', 'max': '768px'},
      'md': {'min': '768px', 'max': '992px'},
      'lg': {'min': '992px', 'max': '1200px'},
      'xl': {'min': '1200px'},
    }
  },
  plugins: [],
}

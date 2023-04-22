/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],

      }, colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      }, animation: {
        'spin-slow': 'spin 9s linear infinite',
      },backgroundImage:{
        gradientLight: ' repeating-radial-gradient(circle at 50% 50%, #000, #f5f5f5 1px, #f5f5f5 2px, #f5f5f5 40%)'
      }
    },
    plugins: [],
  }
}


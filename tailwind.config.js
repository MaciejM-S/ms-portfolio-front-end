/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],

  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],

      }, colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        secondary: "#58E6D9", // 80,230,217
      }, animation: {
        'spin-slow': 'spin 9s linear infinite',
      }, backgroundImage: {
        gradientLight: ' repeating-radial-gradient(circle at 50% 0%, #000, #f5f5f5 2px, #f5f5f5 2px, #f5f5f5 10%)',
        gradientDark: ' repeating-radial-gradient(circle at 50% 0%, #f5f5f5, #1b1b1b 2px, #1b1b1b 2px, #1b1b1b 10%)'
      }
    },
    screens: {
      // @media (max-width:xxxxpx){}
      "2xl": {
        max: '1500px'
      },
      xl: {
        max: '1250px'
      },
      lg: { max: '1000px' },
      md: { max: '750px' },
      sm:{max:'630px'},
      xs:{max:'450px'}

    },
    plugins: [],
  }
}


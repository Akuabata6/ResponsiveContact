const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors:{
        'pink': colors.pink,
        'gray': colors.gray,
        'cyan':colors.cyan,
        'teal':colors.teal

      }
      
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      margin: {
         'first': 'ml-5', 
         'second': 'ml-0',  
         'third': 'ml-2',},
         screens:{
          'xs':'360px'

         },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'dna': "url('../public/images/background.jpg')"
      },
      colors:{
        'antiquewhite': '#faebd7'
      }
    },
  },
  plugins:[
  ],
}


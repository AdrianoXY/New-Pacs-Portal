/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'dna': "url('../public/images/background.jpg')"
      },
      colors:{
        'antiquewhite': '#faebd7',
        'ablue': '#A9D6E5',
        'bblue': '#89C2D9',
        'cblud': '#61a5c2',
        'dblud': '#468faf',
        'eblud': '#2C7DAO',
        'fblue': '#014F86',
        'bcolor': '#DBE4EE'
      }
    },
  },
  plugins:[
  ],
}


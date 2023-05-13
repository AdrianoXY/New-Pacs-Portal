/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes:{
        fadein:{
          to:{opacity:1},
          from:{opacity:0},
        }
      },
      gridTemplateRows:{
        '7':'repeat(7, minmax(0, 1fr))',
        '8':'repeat(8, minmax(0, 1fr))',
        '9':'repeat(9, minmax(0, 1fr))',
        '11':'repeat(11, minmax(0, 1fr))'
      },
      animation:{
        'fadein': 'fadein 1s ease',
      },
      backgroundImage:{
        'dna': "url('../public/images/background.jpg')"
      },
      colors:{
        'antiquewhite': '#faebd7',
        'bgcol': '#F6F7F9',
        'gren': '#0A586C',
        'lightgreen': '#44BC8E',
        'deepgreen': '#425A58',
        'graygreen': '#6F8F97',
        'logbg': '#B8C8BE'

      }
    },
  },
  plugins:[
  ],
}


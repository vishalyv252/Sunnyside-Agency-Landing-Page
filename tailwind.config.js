/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{

        /*-----------Primary---------*/
        'SR':'hsl(7, 99%, 70%)',//SR-Soft Red
        'Yellow':'hsl(51, 100%, 49%)',
        'DDC':'hsl(167, 40%, 24%)',//DDC-Dark Desaturated Cyan
        'DB':'hsl(198, 62%, 26%)',//DB-Dark Blue
        'DMC':'hsl(168, 34%, 41%)',//DMC-Dark Moderate Cyan

        /*-----------Neutral---------*/
        'VDDB':'hsl(212, 27%, 19%)',//VDDB-Very Dark Desaturated Blue
        'VDGB':'hsl(213, 9%, 39%)',//VDGB-Very Dark Grayish Blue
        'DGB':'hsl(232, 10%, 55%)',//DGB-Dark Grayish Blue
        'GB':'hsl(210, 4%, 67%)',//GB-Grayish Blue
        'White':'hsl(0, 0%, 100%)'

      },
      backgroundColor:{

        /*-----------Primary---------*/
        'SR':'hsl(7, 99%, 70%)',//SR-Soft Red
        'Yellow':'hsl(51, 100%, 49%)',
        'DDC':'hsl(167, 40%, 24%)',//DDC-Dark Desaturated Cyan
        'DB':'hsl(198, 62%, 26%)',//DB-Dark Blue
        'DMC':'hsl(168, 34%, 41%)',//DMC-Dark Moderate Cyan

        /*-----------Neutral---------*/
        'VDDB':'hsl(212, 27%, 19%)',//VDDB-Very Dark Desaturated Blue
        'VDGB':'hsl(213, 9%, 39%)',//VDGB-Very Dark Grayish Blue
        'DGB':'hsl(232, 10%, 55%)',//DGB-Dark Grayish Blue
        'GB':'hsl(210, 4%, 67%)',//GB-Grayish Blue
        'White':'hsl(0, 0%, 100%)'

      },
      fontFamily:{
        'Barlow':['Barlow','sans-serif'],
        'Fraunces':['Fraunces','serif'],
        'Poppins':['Poppins','sans-serif']
      },
      screens:{
        'Mobile':{'max':'426px'},
        'Tablet':{'max':'769px'},
        'LS':{'max':'1025px'}
      },
    },
  },
  plugins: [],
}


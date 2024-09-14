import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // plugin(function({addBase}){
    //   addBase({
    //     //Default colors
    //     ':root':{
    //       '--main-color':toRGB('#121421')
    //     }
    //   })
    // })
  ],
}


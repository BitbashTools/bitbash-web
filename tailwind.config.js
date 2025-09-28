/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {fontFamily: {
      'work-sans': ['Work Sans', 'sans-serif'],
      'Opensauceone': ['Opensauceone', 'sans-serif'],
      'clash': ['Clashgrotesk', 'sans-serif'],

    },
    // screens:{
    //   'b1':{'max':'1440px'}
    // }
  },
  
}}
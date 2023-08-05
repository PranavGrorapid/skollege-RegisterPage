/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {


    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },


    screens:{

      sm:'480px',
      md:'768px',
      lg:'1004px',
      xl:'1240px',
 
     },





    extend: {
      

      colors: {
        baseWhites: '#F4F4F4;', // You need to define a specific color here.
        baseOrange:'##F68C35'
      },
    },
  },
  plugins: [],
};

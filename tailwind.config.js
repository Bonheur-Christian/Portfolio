/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '0px',
      'md': '701px',
      'lg': '1251px',
    },
    extend: {
      
      fontFamily: {
        lato: ['lato', 'sans-serif'],
        montserrat: ['montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}


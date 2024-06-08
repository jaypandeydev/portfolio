/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
             '3xl':'3840px',
           }
    },
  },
  plugins: [],
}


// extend: {
//   screens:{
//     "3xl":"1680",
//   }
// },

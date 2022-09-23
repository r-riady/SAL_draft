/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      'sm': '640px',      
      'md': '768px',      
      'lg': '1024px',      
      'xl': '1240px',      
      //'2xl': '1536px',      
    },
    extend: {
      fontFamily:{
        body:['DM+Sans']
      }
    },    
  },
  plugins: [],
}

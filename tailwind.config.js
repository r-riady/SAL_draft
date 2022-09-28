/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  
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
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-0',
    '!delay-0',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
}
module.exports = {
  content: {
    transform: (content) => content.replace(/taos:/g, ''),
  },
}

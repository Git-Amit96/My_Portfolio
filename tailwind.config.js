/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        neon: 'var(--color-first)',
        newPurple: 'var(--color-second)',
        newYellow: 'var(--color-third)',
      
       
        
      },
      fontFamily:{
        primaryFont: ["Ubuntu", 'sans-serif'],
      },
    },
  },
  plugins: [],
}


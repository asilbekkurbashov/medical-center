/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'light-1' : '#ffffff',
        'light-2' : '#f5f5f5',
        'blue' : '#42B2FC',
        'blue-light': '#E1F1FF'
      }
    },
  },
  plugins: [],
}


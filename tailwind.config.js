/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b91010', // تغيير اللون الأساسي إلى الأخضر الرياضي
        secondary: '#780404',
        sport: {
          light: '#ff5858',
          DEFAULT: '#b91010',
          dark: '#780404',
        }
      },
      
    },
  },
  plugins: [],
}
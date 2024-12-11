/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10B981', // تغيير اللون الأساسي إلى الأخضر الرياضي
        secondary: '#059669',
        sport: {
          light: '#D1FAE5',
          DEFAULT: '#10B981',
          dark: '#047857',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
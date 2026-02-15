/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0266ff',
          dark: '#070808',
        }
      },
      fontFamily: {
        sans: ['Switzer', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '108rem',
      }
    },
  },
  plugins: [],
}

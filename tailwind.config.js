// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './assets/**/*.{css,scss}',
    './components/**/*.{js,jsx,ts,tsx,vue}',
    './layouts/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: { primary: '#123456' },
    // Default theme extensions
    extend: {},
  },
}

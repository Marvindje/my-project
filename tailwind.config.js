module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#5A67D8',
        'secondary': '#E53E3E',
        'accent': '#38B2AC',
        'neutral': '#718096',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

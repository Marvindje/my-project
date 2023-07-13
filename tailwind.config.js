module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1DA1F2',
        'custom-green': '#17BF63',
        'custom-pink': '#E1306C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
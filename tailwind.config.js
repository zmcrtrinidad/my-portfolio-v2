module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'berkshire-swash': ['"Berkshire Swash"', 'cursive'],
        'bigshot-one': ['"Bigshot One"', 'cursive'],
      },
   
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
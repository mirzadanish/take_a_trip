module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#b5838d',
        secondary: '#6d6875'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
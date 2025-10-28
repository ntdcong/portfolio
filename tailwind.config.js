/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sketch': ['"Patrick Hand"', '"Kalam"', '"Comic Sans MS"', 'cursive'],
        'mono-sketch': ['"Courier New"', 'monospace'],
      },
      colors: {
        'sketch-dark': '#2D2D2D',
        'sketch-gray': '#6B6B6B',
        'sketch-light': '#E8E8E8',
        'sketch-bg': '#FAFAFA',
        'sketch-border': '#4A4A4A',
      },
      boxShadow: {
        'sketch': '3px 3px 0px 0px rgba(0,0,0,0.15)',
        'sketch-sm': '2px 2px 0px 0px rgba(0,0,0,0.1)',
        'sketch-lg': '5px 5px 0px 0px rgba(0,0,0,0.2)',
      },
      borderRadius: {
        'sketch': '255px 15px 225px 15px/15px 225px 15px 255px',
        'sketch-sm': '155px 10px 125px 10px/10px 125px 10px 155px',
      },
      backgroundImage: {
        'sketch-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}


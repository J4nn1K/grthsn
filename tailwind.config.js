/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: ['13px', {
          lineHeight: '22px',
          fontWeight: '500',
        }],
      },
    // },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

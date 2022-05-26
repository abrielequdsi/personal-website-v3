const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-rock': '#2C2E3E',
        'faux-charcoal': '#34374C',
        'custom-red': '#EE2B47',
        'custom-grey': '#929AAB',
        // 'custom-grey-secondary': '#D9D9D9',
        'custom-white': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

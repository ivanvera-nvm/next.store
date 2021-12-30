const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      black: colors.black,
      white: colors.white,
      green: colors.green,
      gray: colors.gray,
      transparent: colors.transparent,
      primary: {
        DEFAULT: '#732FE2',
        50: '#DFD0F8',
        100: '#D3BEF6',
        200: '#BB9AF1',
        300: '#A377EC',
        400: '#8B53E7',
        500: '#732FE2',
        600: '#591BBE',
        700: '#42148D',
        800: '#2B0D5C',
        900: '#14062B',
      },
      secondary: {
        DEFAULT: '#00419E',
        50: '#579CFF',
        100: '#4290FF',
        200: '#1978FF',
        300: '#0063F0',
        400: '#0052C7',
        500: '#00419E',
        600: '#002A66',
        700: '#00132E',
        800: '#000000',
        900: '#000000',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        'transparent-30': '#0000004d',
        'custom-gray-100': '#ffffff99',
        'custom-darkBlue-900': '#1f1f38',
        'custom-blue-300': '#6e9bda',
        'custom-blue-400': '#66c1f2',
        'custom-blue-500': '#49b6f1',
        'custom-blue-800': '#333472',
        'custom-blue-900': '#292a63',
      },
    },
    screens: {
      xs: '414px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};

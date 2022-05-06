const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],

  plugins: [require("daisyui")], 

  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-white',
    'bg-gray-200',
    'bg-slate-50',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg',
  ],

  theme: {
    colors: {
      white: {DEFAULT: '#ffffff', 500: '#F7FAFC',},
      black: {DEFAULT: '#2B2F4B', 500: '#2B2F4B',},
      pink: {500: '#EF0381',}, 
      blue: {500: '#009FE3',},
      gray: { light: '#CACED9', dark: '#7E7D8D' },
    },
    fontFamily: {
      sans: ['poppins', 'sans-serif'],
      serif: ['poppins', 'serif'],
    },
    extend: {
      columns: {
        '4xs': '35px',
        '4md': '300px',
        '3xs': '35px',
        '3md': '150px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },

    screens: {
      '3xl': { max: '1920px' },
      // => @media (max-width: 1535px) { ... }

      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },

    fontSize: {
      tiny: ['14px', '20px'],
      xs: ['20px', '28px'],
      sm: ['24px', '32px'],
      base: ['30px', '36px'],
      lg: ['40px', '48px'],
      xl: ['60px', '78px'],
    },
  },
}


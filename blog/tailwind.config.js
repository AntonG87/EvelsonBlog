/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs-only': {max: '480px'},
      'max-sm': {max: '640px '},
      'max-md': {max: '768px '},
      'max-lg': {max: '1024px '},
      'max-xl':  {max: '1280px'},
    },
    extend: {
      colors: {
        primary: '#4B6DB7',
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        floating: 'floating 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

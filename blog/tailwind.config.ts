import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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

export default config;

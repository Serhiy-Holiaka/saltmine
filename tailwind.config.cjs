/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gilroy', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        white: {
          DEFAULT: 'var(--white)',
        },
        blue: {
          light: 'var(--blue-light)',
        },
        black: {
          DEFAULT: 'var(--black)',
          light: 'var(--black-light)',
          dark: 'var(--black-dark)',
        },
        yellow: {
          DEFAULT: 'var(--yellow)',
        },
        gray: {
          DEFAULT: 'var(--gray)',
          dark: 'var(--gray-dark)',
          light: 'var(--gray-light)',
        },
      },
      gridTemplateColumns: {
        video: 'minmax(600px, 700px) minmax(300px, 390px)',
        footer: 'minmax(400px, 470px) 170px minmax(180px, 210px) 110px',
      },
      boxShadow: {
        DEFAULT: '0 8px 30px 0 rgba(31, 34, 35, 0.25)',
      },
      keyframes: {
        fade: {
          '0%': {
            transform: 'translateY(0%)',
            opacity: '1'
          },
          '25%': {
            transform: 'translateY(5%)',
            opacity: '0'
          },
          '50%': {
            transform: 'translateY(-5%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: '1'
          },
        },
      },
      animation: {
        fade: 'fade 1s ease-in-out 1',
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/line-clamp')],
};

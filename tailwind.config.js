/** @type {import('tailwindcss').Config} */

const FormKitVariants = require('@formkit/themes/tailwindcss')

export default {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./tailwind-theme.js"],
  plugins: [FormKitVariants],
  theme: {
    extend: {
      fontFamily: {
        'nunito': 'Nunito'
      },
      spacing: {
        '50': '12.5rem',
        '100': '25rem'
      },
      padding: {
        '24px': '1.5rem',
        '4px': '.25rem',
        '86px': '5.375rem',
        '134px': '8.375rem',
        '4.5': '1.125rem',
        '13': '3.25rem'
      },
      gap: {
        '30px': '1.8rem'
      },
      width: {
        '360': '22.5rem',
        '460': '28.75rem',
        '55%': '55%'
      },
      height: {
        '1.5': '0.375rem',
        '2.5': '0.875rem',
        '4.5': '1.125rem',
        '130vh': '130vh'
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '10px': '0.625rem',
        '20px': '1.25rem'
      },
      colors: {
        'light-black': '#2E3032',
        'dark-grey': '#474D66',
        'medium-grey': '#D9DDE3',
        'soft-grey': '#8F95B2',
        'medium-black': '#2B2F32',
        'shadow-grey': '#5E6366',
        'bar-grey':  '#E2E6F9',
        'separator-grey': '#D8DADC',
        'label-grey': '#83898C',
        'primary': '#5570F1',
        'primary-link': '#2F80ED',
        'border-grey': '#DDE2E5'
      },
      boxShadow: {
        'light-grey': '0px 0px 2px 0px rgba(0, 0, 0, 0.20), 0px 2px 10px 0px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
};

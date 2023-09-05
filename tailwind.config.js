/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
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
        '134px': '8.375rem'
      },
      gap: {
        '30px': '1.8rem'
      },
      width: {
        '360': '22.5rem',
        '460': '28.75rem',
        '55%': '55%'
      },
      colors: {
        'light-black': '#2E3032',
        'dark-grey': '#474D66',
        'medium-grey': '#D9DDE3',
        'soft-grey': '#8F95B2'
      },
      boxShadow: {
        'light-grey': '0px 0px 2px 0px rgba(0, 0, 0, 0.20), 0px 2px 10px 0px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'ebony': {
          '50': '#f5f3fc',
          '100': '#e9e5f9',
          '200': '#cdc6f1',
          '300': '#9f93e6',
          '400': '#6959d7',
          '500': '#4534c3',
          '600': '#3824a5',
          '700': '#301e86',
          '800': '#2b1d6f',
          '900': '#070510',
        },
      }
    }
  },
  plugins: []
};

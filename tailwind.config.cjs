/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', "Helvetica Neue", "Noto Sans", "sans-serif"],
      },
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
      },
      animation: {
        fadeIn: 'fadeIn 500ms ease-in-out',
        wave: "wave 1.5s infinite",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "15%": { transform: "rotate(14.0deg)" },
          "30%": { transform: "rotate(-8.0deg)" },
          "40%": { transform: "rotate(14.0deg)" },
          "50%": { transform: "rotate(-4.0deg)" },
          "60%": { transform: "rotate(10.0deg)" },
          "70%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
    }
  },
  plugins: []
};

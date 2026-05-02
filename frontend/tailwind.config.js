/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2ebfae',
        'primary-dark': '#25a596',
        'primary-light': '#e8f8f6',
        accent: '#00a859',
        dark: '#0a0a0a',
        red: '#ed1c24',
        blue: '#1d7ec3',
        orange: '#FE5E00',
      },
      fontFamily: {
        roboto: ['"Roboto Condensed"', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: { xl: '1170px' },
      },
    },
  },
  plugins: [],
};

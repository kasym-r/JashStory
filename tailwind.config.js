export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sf: ["SF UI Display", 'sans-serif'],
        sfpro: ["SF Pro Display", 'sans-serif'],
        helvetica: ["Helvetica Neue LT Pro", 'sans-serif'],
        unbounded: ["Unbounded", 'sans-serif'],
        raleway: ["Raleway", 'sans-serif']
      },
      colors: {
        GrayBg: '#393939'
      },
      backgroundImage: {
        'olymp-bg': "url('./assets/japanese-art 1.svg')",
        'login-bg': "url('./assets/authorization.jpg')"
      },
      screens: {
        'xs': '375px'
      }
    },
  },
  plugins: [],
};

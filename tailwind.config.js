module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // This should cover your component files
  ],
  theme: {
    extend: {
      fontFamily: {
        sf: ["SF UI Display", 'sans-serif'],
        sfpro: ["SF Pro Display", 'sans-serif'],
        helvetica: ["Helvetica Neue LT Pro", 'sans-serif'],
        unbounded: ["Unbounded", 'sans-serif']
      },
      colors: {
        GrayBg: '#393939'
      }
    },
  },
  plugins: [],
};

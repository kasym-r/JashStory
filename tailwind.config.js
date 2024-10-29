module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // This should cover your component files
  ],
  theme: {
    extend: {
      fontFamily: {
        sf: ['"SF UI Display"', 'sans-serif'],
        unbounded: ["Unbounded", 'sans-swrif']
      }
    },
  },
  plugins: [],
};

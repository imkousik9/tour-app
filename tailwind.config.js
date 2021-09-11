module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      flex: {
        2: '0 1 40%'
      },
      colors: {
        'pink-error': '#ef2961'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

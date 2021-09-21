module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      width: {
        img: '30rem'
      },
      flex: {
        2: '0 1 40%',
        3: '0 0.2 20%',
        4: '0 1 100%'
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

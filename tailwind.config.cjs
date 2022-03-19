const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {},
    fontFamily: {
      sans: ['"marck script"']
    }
  },

  plugins: [require('daisyui')]
}

module.exports = config

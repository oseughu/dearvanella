const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {},
    fontFamily: {
      sans: ['raleway']
    }
  },

  plugins: [require('daisyui')]
}

module.exports = config

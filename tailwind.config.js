module.exports = {
  purge: [
    './**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0069a9'
      }
    },
    fontFamily: {
      sans: ['Helvetiva', 'Arial', 'sans-serif'],
      display: ['Roboto', '"Open Sans"']
    }
  },
  variants: {
    extend: {}
  },
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}

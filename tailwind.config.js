const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["**/*.{html, js}", "**/**/*.{html, js}", "./index.html"],
  theme: {
    screens: {
      'xs': '361px',
      ...defaultTheme.screens,
    },
    spacing: {
      top: '100px',
      ...defaultTheme.spacing,
    },
    extend: {
      colors: {
        'primary-color': '#0fa',
        'heading': '#30d4a1',
        'body': '#94a3b8'
      },
    },
    fontFamily: {
      source: ['"Source Code Pro"', ...defaultTheme.fontFamily.sans]
    },
  },
  plugins: [],
}

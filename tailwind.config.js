const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["resources/public/**/*.js", "resources/public/**/*.html"],
  variants: {},
  mode: "jit",
  plugins: [],
  darkMode: "media",
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      blue: colors.blue,
      green: colors.green,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
  },
};

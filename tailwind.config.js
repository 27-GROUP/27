const isProd = process.env.NODE_ENV === 'production'
// Use the CDN in production and localhost for development.
module.exports = {
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/Mamadou2727/27group.github.io/gh-pages/' : '',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
       // for webpack 5 use
       // { and: [/\.(js|ts)x?$/] }
      },
      
      use: ['@svgr/webpack'],
    });

    return config;
  },

  content: [
    "./node_modules/flowbite/**/*.js"
],

  plugins: [
    require('flowbite/plugin')
],
  plugins: [require("daisyui")],
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#FBFBFB",
          200: "#EAEAEA",
          300: "#DFDFDF",
          400: "#999999",
          500: "#7F7F7F",
          600: "#666666",
          700: "#4C4C4C",
          800: "#333333",
          900: "#191919",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

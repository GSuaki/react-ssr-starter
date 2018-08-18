module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 14,
      propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
      selectorBlackList: ['html', 'body']
    },
    'css-mqpacker': {},
    'autoprefixer': {
      "browserlist": [
        "last 10 versions",
        "ie >= 11",
        "Safari >= 6"
      ]
    },
    'cssnano': {}
  }
}
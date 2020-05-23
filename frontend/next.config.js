const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpackDevMiddleware: config => {
    config.watchOptions = {
      ignored: /node_modules/,
      poll: 1000,
      aggregateTimeout: 300,
    }

    return config
  },
})

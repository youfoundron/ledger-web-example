const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  },
  assetPrefix: isDev ? '' : 'https://youfoundron.github.io/ledger-web-example/'
}
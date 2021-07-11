module.exports = {
  reactStrictMode: true,
}
const path = require('path')

module.exports = {
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'components')
    config.resolve.alias['@'] = path.join(__dirname, 'styles')
    config.resolve.alias['@'] = path.join(__dirname, 'utils')
    config.resolve.alias['@'] = path.join(__dirname, 'types')
    return config
  },
}
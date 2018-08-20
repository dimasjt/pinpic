const WebpackNotifierPlugin = require('webpack-build-notifier')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

environment.plugins.insert('WebpackNotifierPlugin', new WebpackNotifierPlugin({ title: 'Webpack build' }))

module.exports = environment.toWebpackConfig()

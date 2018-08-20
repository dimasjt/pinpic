const { environment } = require('@rails/webpacker')

const typescript =  require('./loaders/typescript')
const customConfig = require('./custom')

environment.loaders.append('typescript', typescript)

environment.config.merge(customConfig)

module.exports = environment

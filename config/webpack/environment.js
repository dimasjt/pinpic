const { environment } = require('@rails/webpacker')

// loaders
const typescript = require('./loaders/typescript')
const graphql = require('./loaders/graphql')

const customConfig = require('./custom')

environment.loaders.append('typescript', typescript)
environment.loaders.append('graphql', graphql)

environment.config.merge(customConfig)

module.exports = environment

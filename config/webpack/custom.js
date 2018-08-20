const { resolve } = require('path')

function resolveTsConfigPaths() {
  const { paths } = require('../../tsconfig.json').compilerOptions

  const aliases = {}

  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '')
    const value = resolve('./', paths[item][0].replace('/*', ''))

    aliases[key] = value
  })

  return aliases
}


module.exports = {
  resolve: {
    alias: resolveTsConfigPaths(),
  },
}
const { merge } = require('webpack-merge')
const commonConfig = require('./wbepack.common.js')

module.exports = (envVars) => {
    const { env } = envVars
    const envConfig = require(`./webpack.${env}.js`)
    const config = merge(commonConfig, envConfig)
    return config
}
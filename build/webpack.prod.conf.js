var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')

var webpackConfig = merge(baseWebpackConfig, {
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // extract css into its own file
        new webpack.optimize.CommonsChunkPlugin({
            names: ['myDocJsx',],
            minChunks: Infinity,
        }),
    ]
})

module.exports = webpackConfig
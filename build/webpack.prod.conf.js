var path = require('path')
var config = require('./config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var env = config.build.env

var webpackConfig = merge(baseWebpackConfig, {
    module: {
        loaders: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },
    externals: {

        'React': {
            commonjs: 'React',
            commonjs2: 'React',
            var: 'React'
        },
        'babel-standalone': {
            commonjs: 'babel-standalone',
            commonjs2: 'babel-standalone',
            var: 'Babel'
        },
    },
    plugins: [
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // extract css into its own file
        new ExtractTextPlugin(utils.assetsPath('../[name].css')),
        new webpack.optimize.CommonsChunkPlugin({
            names: [ 'apiPlugin','myDocJsx',],
            minChunks: Infinity,
        }),
    ]
})

module.exports = webpackConfig
var path = require('path')
var webpack = require('webpack')
var projectRoot = path.resolve(__dirname, '../')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var _package = require('../package.json')

var autoprefixer = require('autoprefixer')({
    browsers: ['last 2 version', 'iOS >=8', 'IE >=9']
})

module.exports = {
    entry: {
        'myDocJsx': ['./src/run-browser.js'],
    },
    externals: {
        'React': {
            commonjs: 'React',
            commonjs2: 'React',
            root: 'React'
        },
        'babel-standalone': {
            commonjs: 'babel-standalone',
            commonjs2: 'babel-standalone',
            root: 'Babel'
        },
        vm: {
            commonjs: 'vm',
            commonjs2: 'vm',
        }
    },
    output: {
        path: path.join(__dirname, "../dist"),
        libraryTarget: 'umd',
        umdNamedDefine: true,
        filename: '[name].js',
        library: '[name]'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'], // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        //加载器配置
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.join(__dirname, '../src'),
        }, {
            test: /\.ts(x?)$/,
            include: path.join(__dirname, '../src'),
            use: [{
                loader: 'babel-loader',
            }, {
                loader: 'ts-loader',
            }]
        }, {
            test: /\.css$/,
            use: [
                'to-string-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                      options: {
                        plugins: function () {
                            return [ autoprefixer ]
                        }
                    }
                },
            ]
        }, 
        {
            test: /\.scss$/,
            use: [
                'to-string-loader',
                'css-loader',
                'sass-loader',
                {
                    loader: 'postcss-loader',
                      options: {
                        plugins: function () {
                            return [ autoprefixer ]
                        }
                    }
                },
            ]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            PLUGIN_VERSION: '"v' + _package.version + '"'
        }),
    ]
}
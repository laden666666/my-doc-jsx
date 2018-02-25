var path = require('path')
var webpack = require('webpack')
var projectRoot = path.resolve(__dirname, '../')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

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
        // Add `.ts` and `.tsx` as a resolvable extension.
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
            use: ExtractTextPlugin.extract({
                use: ["css-loader"]
            })
        }]
    },
    plugins:[
        new webpack.LoaderOptionsPlugin({
            // test: /\.xxx$/, // may apply this only for some modules
            options: {
                postcss: [ require('autoprefixer')({
                    browsers: ['last 2 versions']
                })],
            }
        }),
        new ExtractTextPlugin('[name].css'),
    ]
}
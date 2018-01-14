var path = require('path')
var projectRoot = path.resolve(__dirname, '../')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

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
        extensions: ['', '.js'],
        fallback: [path.join(__dirname, '../node_modules')],
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    postcss: [ require('autoprefixer')({
        browsers: ['last 2 versions']
    })],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            include: projectRoot,
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("css-loader")
        }]
    },
    plugins:[
        new ExtractTextPlugin('[name].css'),
    ]
}
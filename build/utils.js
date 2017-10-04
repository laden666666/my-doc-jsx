var path = require('path')
var config = require('./config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = function(_path) {
    var assetsSubDirectory = process.env.NODE_ENV === 'production' ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory
    return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function(options,  extractTextPlugin) {
    extractTextPlugin = extractTextPlugin || ExtractTextPlugin
    options = options || {}
        // generate loader string to be used with extract text plugin
    function generateLoaders(loaders) {
        var sourceLoader = loaders.map(function(loader) {
            var extraParamChar
            if (/\?/.test(loader)) {
                loader = loader.replace(/\?/, '-loader?')
                extraParamChar = '&'
            } else {
                loader = loader + '-loader'
                extraParamChar = '?'
            }
            return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
        }).join('!')

        if (options.extract) {
            return extractTextPlugin.extract(sourceLoader)
        } else {
            return sourceLoader
        }
    }

    // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
    return {
        css: generateLoaders(['css']),
        sass: generateLoaders(['css', 'sass?indentedSyntax']),
        scss: generateLoaders(['css', 'sass']),
    }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options, rootPath, extractTextPlugin) {
    rootPath = rootPath || ''
    var output = []
    var loaders = exports.cssLoaders(options, extractTextPlugin)
    for (var extension in loaders) {
        var loader = loaders[extension]
        output.push({
            test: new RegExp(rootPath + '\\.' + extension + '$'),
            loader: loader
        })
    }
    return output
}
var path = require('path');
var fs = require('fs-extra');
require('babel-register')({});
var myDocJsx = require('../index.js');

var options = {
    html: {
        option: {
            engine: 'HTML',
        },
        handleStr: function(str){
            //将样式加入到文档中
            return fs.readFile(path.join(__dirname, '../../dist/myDocJsx.min.css')).then(function (cssStr) {
                return '<!doctype html><head><meta charset="utf-8"><style>' + cssStr + '</style></head>' + str
            })
        },
        extname: 'html'
    },
    md: {
        option: {
            engine: 'MARKDOWN',
        },
        handleStr: function(str){
            return str
        },
        extname: 'md'
    },
}

/**
 *
 * @param file
 * @param output
 * @param type
 * @param plugins
 */
module.exports = function (file, output, type, plugins) {
    file = path.join(process.cwd(), file)

    var option = options[type]

    fs.readFile(file).then(function (jsxStr) {
        var outputStr = myDocJsx.out(jsxStr.toString(), option.option)
        return option.handleStr(outputStr)
    }).then(function(outputStr){
        var outFileName = path.basename(file, path.extname(file)) + '.' + option.extname;
        output = path.join(process.cwd(), output, outFileName)
        return fs.outputFile(output, outputStr)
    })
}
/**
 * @file    docjsx的cli工具
 */

var path = require('path');
var fsExtra = require('fs-extra');
var fs = require('fs');

//因为docjsx是采用es6开发，为了兼容node6环境，故使用babel-register引用源码
require('babel-register')({});
var myDocJsx = require('../../dist/myDocJsx');

//对应不同转换形式的配置
var options = {
    html: {
        option: {
            format: 'HTML',
        },
        handleStr: function(str){
            //将样式加入到文档中
            return fsExtra.readFile(path.join(__dirname, '../../dist/myDocJsx.css')).then(function (cssStr) {
                return '<!doctype html><head><meta charset="utf-8"><style>' + cssStr + '</style></head>' + str
            })
        },
        extname: 'html'
    },
    md: {
        option: {
            format: 'MARKDOWN',
        },
        handleStr: function(str){
            return str
        },
        extname: 'md'
    },
}

/**
 * 转换函数，供cli使用
 * @param file          用户输入的转换文件路径
 * @param output        用户输入的输出文件路径
 * @param format        输出格式
 * @param option        输出配置： watch——是否使用文件监听修改模式。  plugin——转换时候使用的插件
 */
module.exports = function (file, output, format, option) {
    //获取要转换的文件路径
    file = path.join(process.cwd(), file)

    //转换函数
    function converter() {
        var formatOption = options[format]
        return fsExtra.readFile(file).then(function (jsxStr) {
            var outputStr = myDocJsx.convert(jsxStr.toString(), formatOption.option)
            return formatOption.handleStr(outputStr)
        }).then(function(outputStr){
            var outFileName = path.basename(file, path.extname(file)) + '.' + formatOption.extname;
            var _output = path.join(process.cwd(), output, outFileName)
            return fsExtra.outputFile(_output, outputStr)
        })
    }

    if(option.watch){
        fs.watchFile(file, function () {
            converter()
        })
    } else {
        converter()
    }
}
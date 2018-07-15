/**
 * @file    docjsx的cli工具
 */

var path = require('path');
var fsExtra = require('fs-extra');
var fs = require('fs');
var myDocJsx = require('../../dist/myDocJsx');

//对应不同转换形式的配置
var options = {
    html: {
        option: {
            format: 'HTML',
        },
        handleStr: function(str){
            //将样式加入到文档中
            return '<!doctype html><head><meta charset="utf-8"></head>' + str
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
 * @param option        输出配置： watch——是否使用文件监听修改模式。  plugins——转换时候使用的插件
 */
module.exports = function (file, output, format, option) {
    //获取要转换的文件路径
    if(!path.isAbsolute(file)){
        file = path.join(process.cwd(), file)
    }

    //注册插件
    option.plugins.forEach(function (pluginName){
        try{
            if(!pluginName){
                return
            }

            var Plugin = require(pluginName)
            if(Plugin)
                myDocJsx.usePlugin(new Plugin)
        } catch (e){
            console.warn('not find plugin ' + pluginName)
        }

    })

    //转换函数
    function converter() {
        var formatOption = options[format]
        return Promise.resolve()
        .then(function(){
            return fsExtra.readFile(file)
        }).then(function (jsxStr) {
            return myDocJsx.convert(jsxStr.toString(), formatOption.option).then(function(outputStr){
                return formatOption.handleStr(outputStr)
            })
        }).then(function(outputStr){
            var outFileName = path.basename(file, path.extname(file)) + '.' + formatOption.extname;
            //获取要输出的路径
            var _output
            if(!path.isAbsolute(file)){
                _output = path.join(process.cwd(), output, outFileName)
            } else {
                _output = path.join(output, outFileName)
            }
            return fsExtra.outputFile(_output, outputStr)
        }).catch(function(err){
            console.error(err)
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
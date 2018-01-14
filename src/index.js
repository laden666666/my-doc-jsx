import transform from './docjsx/core/transform';
import InlineTag from './docjsx/core/InlineTag';
import BlockTag from './docjsx/core/BlockTag';
import BasePlugin from './docjsx/core/BasePlugin';
import BaseRenderTools from './docjsx/core/BaseRenderTools';
import HTMLRender from './docjsx/render/HTMLRender';
import MarkdownRender from './docjsx/render/MarkdownRender';
var React = require('React');

var vm = require("vm");

//当前注册的插件列表
var pluginList = []

/**
 * 使用usePlugin函数注册插件
 * @param plugin            注册的插件
 */
function usePlugin(plugin) {
    pluginList.push(plugin)
}

/**
 * 转换函数，将jsx字符串转换为指定的文档格式输出
 * @param jsxStr            jsx字符串
 * @param option            转换的配置。主要配置有：format，转换的格式配置
 * @returns {*}
 */
function convert(jsxStr, option={format: 'HTML'}) {
    //使用IIFE，达到沙箱效果
    return (function(sandbox, vm){
        var script = "";
        for(var tagName in sandbox.tags){
            sandbox[tagName] = sandbox.tags[tagName];
        }

        script += "'use strict'; return " + transform(jsxStr, option);
        script = "(function(){" + script + "})()";
        
        var ctx = vm.createContext(sandbox);
        var vd = vm.runInContext(script, ctx);

        if(option.format == 'HTML'){
            var render = new HTMLRender();
            pluginList.forEach(plugin=>{
                if(plugin.format && plugin.format['HTML']){
                    render._usePlugin(plugin.format['HTML'])
                }
            })
            return render.$render(vd);
        } else if(option.format == 'MARKDOWN'){
            var render = new MarkdownRender();
            pluginList.forEach(plugin=>{
                if(plugin.format && plugin.format['MARKDOWN']){
                    render._usePlugin(plugin.format['MARKDOWN'])
                }
            })
            return render.$render(vd);
        } else  {
            throw new Error(`The format ${option.format} does not exist`)
        }
    }).bind(this)({tags:{}, React}, vm)
}

module.exports = {
    InlineTag,
    BlockTag,
    BaseRenderTools,
    BasePlugin,
    convert,
    usePlugin,
}
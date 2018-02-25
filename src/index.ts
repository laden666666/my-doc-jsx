import transform from './docjsx/core/transform';
import {InlineNode} from './docjsx/core/InlineNode';
import {BlockNode} from './docjsx/core/BlockNode';
import {BasePlugin} from './docjsx/core/BasePlugin';
import {BaseRender} from './docjsx/core/BaseRenderTools';
import HTMLRender from './docjsx/render/HTMLRender';
// import MarkdownRender from './docjsx/render/MarkdownRender';
import {reactVDomTree2Tree} from './docjsx/core/ReactVDomTree2Tree';
import * as util from './docjsx/util';

declare function require(name: string): any
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
 * @param option            转换的配置。主要配置有：format，转换的格式配置，支持“HTML”和“MARKDOWN”两种
 * @returns {convertedDoc}  转换好的指定格式的文档
 */
function convert(jsxStr: string, option={format: 'HTML'}) {
    //使用IIFE，达到沙箱效果
    return (function(sandbox, vm){
        var script = "";
        for(var tagName in sandbox.tags){
            sandbox[tagName] = sandbox.tags[tagName];
        }

        script += "'use strict'; return " + transform(jsxStr, option);
        script = "(function(){" + script + "})()";

        if(vm){
            //如果存在vm，表示在node环境。使用vm执行
            var ctx = vm.createContext(sandbox);
            var vd = vm.runInContext(script, ctx);
        } else {
            //如果不存在vm，表示在浏览器环境，直接在window上执行
            var keys = Object.keys(sandbox)
            var backup = {}
            keys.forEach(key=>{
                backup[key] = window[key]
                window[key] = sandbox[key]
            })
            var vd = eval(script)
            keys.forEach(key=>{
                window[key] = backup[key]
            })
        }

        if(option.format == 'HTML'){
            var render: BaseRender = new HTMLRender();
            pluginList.forEach(plugin=>{
                if(plugin.format && plugin.format['HTML']){
                    render.$usePlugin(plugin.format['HTML'])
                }
            })
            return render.$renderTree(reactVDomTree2Tree(vd, render));
        } else if(option.format == 'MARKDOWN'){
            // var render = new MarkdownRender();
            // pluginList.forEach(plugin=>{
            //     if(plugin.format && plugin.format['MARKDOWN']){
            //         render.$usePlugin(plugin.format['MARKDOWN'])
            //     }
            // })
            // return render.$renderTree(reactVDomTree2Tree(vd, render));
        } else  {
            throw new Error(`The format ${option.format} does not exist`)
        }
    }).bind(this)({tags:{}, React}, vm)
}

module.exports = {
    InlineNode,
    BlockNode,
    BaseRender,
    BasePlugin,
    convert,
    usePlugin,
    util,
}
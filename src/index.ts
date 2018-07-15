import jsxStr2Tree from './docjsx/core/jsxStr2Tree';
import {InlineNode} from './docjsx/core/InlineNode';
import {BlockNode} from './docjsx/core/BlockNode';
import {BasePlugin} from './docjsx/core/BasePlugin';
import {BaseRender} from './docjsx/core/BaseRenderTools';
import {Node} from './docjsx/core/Node';
import {PseudoNode} from './docjsx/core/PseudoNode';
import HTMLRender from './docjsx/render/HTMLRender';
import MarkdownRender from './docjsx/render/MarkdownRender';
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
function convert(jsxStr: string, option={format: 'HTML'}): Promise<string> {
    if(option.format == 'HTML'){
        var render: BaseRender = new HTMLRender();
        pluginList.forEach(plugin=>{
            if(plugin.format && plugin.format['HTML']){
                render.$usePlugin(plugin.format['HTML'])
            }
        })
        return render.$renderTree(jsxStr2Tree(jsxStr, render, option));
    } else if(option.format == 'MARKDOWN'){
        var render: BaseRender = new MarkdownRender();
        pluginList.forEach(plugin=>{
            if(plugin.format && plugin.format['MARKDOWN']){
                render.$usePlugin(plugin.format['MARKDOWN'])
            }
        })
        return render.$renderTree(jsxStr2Tree(jsxStr, render, option));
    } else  {
        throw new Error(`The format ${option.format} does not exist`)
    }
}

/**
 * 将jsx字符串转为Node数组，为标签复用标签提供可能。这是一个对控件开发者开发的函数
 * @param {string} jsxStr               jsx字符串
 * @param {BaseRender} render           当前正在使用的render对象
 * @param {*} option                    配置
 * @returns {Node[]} 
 */
function jsxStr2Nodes(jsxStr: string, render: BaseRender, option: any): Node[] {
    return jsxStr2Tree(jsxStr, render, option).root.childNodes
}

//当前版本
//通过DefinePlugin对去package.json的版本
declare const PLUGIN_VERSION: string;
const version = PLUGIN_VERSION

export {
    version,
    InlineNode,
    BlockNode,
    BaseRender,
    BasePlugin,
    convert,
    usePlugin,
    util,
    HTMLRender,
    MarkdownRender,
    jsxStr2Nodes,
}

export default {
    version,
    InlineNode,
    BlockNode,
    BaseRender,
    BasePlugin,
    convert,
    usePlugin,
    util,
    HTMLRender,
    MarkdownRender,
    jsxStr2Nodes,
}
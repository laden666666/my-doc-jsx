import {Tree} from './Tree';
import {reactVDomTree2Tree} from './ReactVDomTree2Tree';
import transform from './transform';
import {BaseRender} from './BaseRenderTools';

declare function require(name: string): any
var React = require('React');
var vm = require("vm");


/**
 * 转换函数，将jsx字符串转换为指定的文档格式输出
 * @param jsxStr            jsx字符串
 * @param option            转换的配置。主要配置有：format，转换的格式配置，支持“HTML”和“MARKDOWN”两种
 * @returns {convertedDoc}  转换好的指定格式的文档
 */
export default function(jsxStr: string, render: BaseRender, option: any): Tree {
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

        return reactVDomTree2Tree(vd, render)
    }).bind(this)({tags:{}, React}, vm)
}
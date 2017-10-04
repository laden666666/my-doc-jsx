import transform from './core/transform';
import InlineTag from './core/InlineTag';
import BlockTag from './core/BlockTag';
import BasePlugin from './core/BasePlugin';
import BaseRenderTools from './core/BaseRenderTools';
import HTMLRender from './render/HTMLRender';
import MarkdownRender from './render/MarkdownRender';
var React = require('React');

var tags = {
    h1:{}
}

var vm = require("vm");

var pluginList = []
function usePlugin(plugin) {
    pluginList.push(plugin)
}

function out(file, option={engine: 'HTML'}) {
    return (function(sandbox, vm){
        var script = "";
        for(var tagName in sandbox.tags){
            sandbox[tagName] = sandbox.tags[tagName];
        }

        script += "'use strict'; return " + transform(file, option);
        script = "(function(){" + script + "})()";
        
        var ctx = vm.createContext(sandbox);
        var vd = vm.runInContext(script, ctx);

        if(option.engine == 'HTML'){
            var render = new HTMLRender();
            pluginList.forEach(plugin=>{
                if(plugin.engine && plugin.engine['HTML']){
                    render.usePlugin(plugin.engine['HTML'])
                }
            })
            return render.render(vd);
        } else if(option.engine == 'MARKDOWN'){
            var render = new MarkdownRender();
            pluginList.forEach(plugin=>{
                if(plugin.engine && plugin.engine['MARKDOWN']){
                    render.usePlugin(plugin.engine['MARKDOWN'])
                }
            })
            return render.render(vd);
        } else  {
            throw new Error(`The engine ${option.engine} does not exist`)
        }


    }).bind(this)({tags, React}, vm)
}

module.exports = {
    InlineTag,
    BlockTag,
    BaseRenderTools,
    BasePlugin,
    out,
    usePlugin,
}
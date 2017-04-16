import transform from './core/transform';
import InlineTag from './core/InlineTag';
import BaseRenderTools from './core/BaseRenderTools';
import HTMLRender from './render/HTMLRender';
var React = require('React');

var tags = {
    h1:{}
}

var vm = require("vm");

function out(file, option) {
    return (function(sandbox, vm){
        var script = "";
        for(var tagName in sandbox.tags){
            sandbox[tagName] = sandbox.tags[tagName];
        }

        script += "'use strict'; return " + transform(file, option);
        script = "(function(){" + script + "})()";
        
        var ctx = vm.createContext(sandbox);
        var vd = vm.runInContext(script, ctx);

        return new HTMLRender().render(vd);
    }).bind(this)({tags, React}, vm)
}

module.exports = {
    InlineTag,
    BaseRenderTools,
    out,
}
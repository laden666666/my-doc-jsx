import transform from './core/transform';
import BaseTag from './core/InlineTag';
import BaseRender from './core/BaseRender';
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
        return vm.runInContext(script, ctx);
    }).bind(this)({tags, React}, vm)
}

module.exports = {
    BaseTag,
    BaseRender,
    out,
}
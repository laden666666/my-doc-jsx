/**
 * Created by njz on 17/2/28.
 */
import * as tags from './tag/index';
import cilRender from './render/cilRender';
import domRender from './render/domRender';
import transform from './core/transform';
import BaseTag from './core/BaseTag';
import BaseRender from './core/BaseRender';
import React from 'React';
var vm = require("vm");

function out(file, option) {
    return (function(sandbox, vm){
        var script = "";
        for(var tagName in tags){
            script += "var " + tagName + " = tags['" + tagName + "'];";
        }
        script += "return " + transform(file, option);
        script = "(function(){" + script + "})()";


        console.log("@@@",script)
        var ctx = vm.createContext(sandbox);
        return vm.runInContext(script, ctx);
    }).bind(this)({tags, React}, vm)
}

export default {
    BaseTag,
    BaseRender,
    domRender,
    cilRender,
    tags,
    out,
}
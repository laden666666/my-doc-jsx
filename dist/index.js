'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('./tag/index');

var tags = _interopRequireWildcard(_index);

var _cilRender = require('./render/cilRender');

var _cilRender2 = _interopRequireDefault(_cilRender);

var _domRender = require('./render/domRender');

var _domRender2 = _interopRequireDefault(_domRender);

var _transform = require('./core/transform');

var _transform2 = _interopRequireDefault(_transform);

var _BaseTag = require('./core/BaseTag');

var _BaseTag2 = _interopRequireDefault(_BaseTag);

var _BaseRender = require('./core/BaseRender');

var _BaseRender2 = _interopRequireDefault(_BaseRender);

var _React = require('React');

var _React2 = _interopRequireDefault(_React);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var vm = require("vm"); /**
                         * Created by njz on 17/2/28.
                         */


function out(file, option) {
    return function (sandbox, vm) {
        var script = "";
        for (var tagName in tags) {
            script += "var " + tagName + " = tags['" + tagName + "'];";
        }
        script += "return " + (0, _transform2.default)(file, option);
        script = "(function(){" + script + "})()";

        console.log("@@@", script);
        var ctx = vm.createContext(sandbox);
        return vm.runInContext(script, ctx);
    }.bind(this)({ tags: tags, React: _React2.default }, vm);
}

exports.default = {
    BaseTag: _BaseTag2.default,
    BaseRender: _BaseRender2.default,
    domRender: _domRender2.default,
    cilRender: _cilRender2.default,
    tags: tags,
    out: out
};
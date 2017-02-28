"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by njz on 17/2/28.
 */
var DomRender = function () {
    function DomRender() {
        _classCallCheck(this, DomRender);
    }

    _createClass(DomRender, [{
        key: "beginRender",
        value: function beginRender() {
            console.group("********** 开始博客输出 **********");
        }
    }, {
        key: "writeLine",
        value: function writeLine(str) {
            console.log(str);
        }
    }, {
        key: "endRender",
        value: function endRender() {
            console.group("********** 博客输出结束 **********");
        }
    }, {
        key: "render",
        value: function render(vd) {
            this.beginRender();

            this.endRender();
        }
    }]);

    return DomRender;
}();

exports.default = new DomRender();
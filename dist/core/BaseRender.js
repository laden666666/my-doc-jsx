"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by njz on 17/2/28.
 * 渲染平台的基础类。因为同一个xml(jxl)博客会渲染为不同的形式平台上,所以需要提供不同形式的博客渲染类,故采用策略模式。
 * 此为一个渲染平台策略的基础类,每个渲染策略都要继承这个类,并注册到渲染策略表中,由page标签统一配置渲染策略。
 * 每个标签都应该将他的渲染策略注册到,饼子
 */
var BaseRender = function () {
    function BaseRender() {
        _classCallCheck(this, BaseRender);

        this.$tagMap = {};
    }

    //抽象函数,渲染的具体逻辑


    _createClass(BaseRender, [{
        key: "render",
        value: function render(dom) {}
    }, {
        key: "registerTag",
        value: function registerTag(tagName, fn) {
            this.$tagMap[tagName] = fn;
        }
    }, {
        key: "getAllTags",
        value: function getAllTags() {
            return this.$tagMap;
        }
    }]);

    return BaseRender;
}();
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("vm"), require("babel-standalone"));
	else if(typeof define === 'function' && define.amd)
		define("myDocJsx", [, , ], factory);
	else if(typeof exports === 'object')
		exports["myDocJsx"] = factory(require("React"), require("vm"), require("babel-standalone"));
	else
		root["myDocJsx"] = factory(root["React"], root[undefined], root["Babel"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_99__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 100);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = __webpack_require__(5);
/**
 * 基础标签，所有标签都是继承该标签的。这是一个抽象类
 */

var BlockNode = function (_Node_1$Node) {
    _inherits(BlockNode, _Node_1$Node);

    function BlockNode(node) {
        _classCallCheck(this, BlockNode);

        //块级标签优先级
        var _this = _possibleConstructorReturn(this, (BlockNode.__proto__ || Object.getPrototypeOf(BlockNode)).call(this, node['content'], node.tree, node.parentNode));

        _this.priority = 0;
        return _this;
    }
    /**
     * 渲染函数，这个是需要继承的虚函数
     * @returns {string}                渲染后的字符串
     */


    _createClass(BlockNode, [{
        key: "render",
        value: function render(renderTools) {
            console.warn("不支持渲染此块标签：" + this.tagName);
            return "";
        }
    }]);

    return BlockNode;
}(Node_1.Node);
//用于标记类


BlockNode.$$NodeClassID = 'BlockNode';
exports.BlockNode = BlockNode;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var PseudoNode_1 = __webpack_require__(6);
/**
 * 基础标签,所有标签都是继承继承标签的
 */

var InlineNode = function (_PseudoNode_1$PseudoN) {
    _inherits(InlineNode, _PseudoNode_1$PseudoN);

    function InlineNode() {
        var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        _classCallCheck(this, InlineNode);

        var _this = _possibleConstructorReturn(this, (InlineNode.__proto__ || Object.getPrototypeOf(InlineNode)).call(this, node['content'], node.node, node.parentPseudoNode));

        _this.childPseudoNodes = node.childPseudoNodes;
        return _this;
    }
    /**
     * 渲染函数，这个是需要继承的虚函数
     * @returns {string}                渲染后的字符串
     */


    _createClass(InlineNode, [{
        key: "render",
        value: function render(renderTools) {
            console.warn("不支持渲染此行内标签：" + this.tagName);
            return "";
        }
    }]);

    return InlineNode;
}(PseudoNode_1.PseudoNode);
//用于标记类


InlineNode.$$NodeClassID = 'InlineNode';
exports.InlineNode = InlineNode;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 17/2/28.
 * 渲染平台的基础类。因为同一个xml(jsx)博客会渲染为不同的形式平台上,所以需要提供不同形式的博客渲染类,故采用策略模式。
 * 此为一个渲染平台策略的基础类,每个渲染策略都要继承这个类,并注册到渲染策略表中,由page标签统一配置渲染策略。
 * 每个标签都应该将他的渲染策略注册到
 *
 * jsx要求不可以标签嵌套，即使嵌套了渲染的时候也不会也不允许渲染子元素，这主要是吸取了markdown的优点，即不允许嵌套
 * 每个标签都有优先级，渲染的时候，会自动根据优先级渲染出一颗树，优先级低的标签会自动成为优先级高的标签的子元素。同时
 * 又扩充了markdown不支持的扩张性，使其可以输出更加丰富的内容
 *
 * 虚标签是供block标签内部渲染的标签，并不会被放到tree中。inlineNode是特殊的虚标签，他会被renderLine处理。inlineNode和其他虚标签一样
 * ，必须放到block标签中，否则会被忽略掉
 */

var BaseRender = function () {
    function BaseRender() {
        _classCallCheck(this, BaseRender);

        this.$blockNodeMap = {};
        this.$inlineNodeMap = {};
    }

    _createClass(BaseRender, [{
        key: "registerBlockNode",
        value: function registerBlockNode(nodeName, fn) {
            this.$blockNodeMap[nodeName] = fn;
        }
    }, {
        key: "registerInlineNode",
        value: function registerInlineNode(nodeName, fn) {
            this.$inlineNodeMap[nodeName] = fn;
        }
    }, {
        key: "getBlockNode",
        value: function getBlockNode(nodeName) {
            return this.$blockNodeMap[nodeName];
        }
    }, {
        key: "getInlineNode",
        value: function getInlineNode(nodeName) {
            return this.$inlineNodeMap[nodeName];
        }
    }, {
        key: "getAllBlockNodes",
        value: function getAllBlockNodes() {
            var arr = [];
            for (var key in this.$blockNodeMap) {
                arr.push([key, this.$blockNodeMap[key]]);
            }
            return arr.map(function (arrs) {
                return {
                    name: arrs[0],
                    plugin: arrs[1]
                };
            });
        }
    }, {
        key: "getAllInlineNodes",
        value: function getAllInlineNodes() {
            var arr = [];
            for (var key in this.$inlineNodeMap) {
                arr.push([key, this.$inlineNodeMap[key]]);
            }
            return arr.map(function (arrs) {
                return {
                    name: arrs[0],
                    plugin: arrs[1]
                };
            });
        }
    }, {
        key: "$usePlugin",
        value: function $usePlugin(plugins) {
            for (var key in plugins.blockNodeMap) {
                this.registerBlockNode(key, plugins.blockNodeMap[key]);
            }
            for (var _key in plugins.inlineNodeMap) {
                this.registerInlineNode(_key, plugins.inlineNodeMap[_key]);
            }
        }
    }]);

    return BaseRender;
}();

exports.BaseRender = BaseRender;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var escape = __webpack_require__(82);
function escapeHTML(htmlString) {
    return escape(htmlString);
}
exports.escapeHTML = escapeHTML;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 一个组成tree的节点。
 */

var Node = function () {
    /**
     * @param content           节点对应的虚拟dom
     * @param tree              对应的tree结构
     * @param parentNode        节点的父节点
     */
    function Node(content, tree, parentNode) {
        _classCallCheck(this, Node);

        /**
         * 子节点
         * @type {Node[]}
         * @memberof Node
         */
        this.childNodes = [];
        /**
         * 子伪节点
         * @type {Node[]}
         * @memberof Node
         */
        this.childPseudoNodes = [];
        //父节点
        this.parentNode = parentNode;
        //节点对应的dom参数
        this.content = content;
        //节点的子节点
        this.childNodes = [];
        //树节点
        this.tree = tree;
    }
    //增加子节点


    _createClass(Node, [{
        key: "appendChild",
        value: function appendChild(node) {
            this.childNodes.push(node);
            node.parentNode = this;
        }
        //属性

    }, {
        key: "getText",

        //获得文本
        value: function getText() {
            return typeof this.content === 'string' ? this.content : '';
        }
    }, {
        key: "props",
        get: function get() {
            return this.content && this.content.props || {};
        }
        //标签名称

    }, {
        key: "tagName",
        get: function get() {
            return this.content && this.content && this.content.type || "";
        }
    }]);

    return Node;
}();

exports.Node = Node;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var PseudoNode = function () {
    function PseudoNode(content, node, parentPseudoNode) {
        _classCallCheck(this, PseudoNode);

        /**
         * 子节点
         * @type {Node[]}
         * @memberof Node
         */
        this.childPseudoNodes = [];
        //父节点
        this.node = node;
        //父节点
        this.parentPseudoNode = parentPseudoNode;
        //节点对应的dom参数
        this.content = content;
    }
    //增加子节点


    _createClass(PseudoNode, [{
        key: "appendChild",
        value: function appendChild(node) {
            this.childPseudoNodes.push(node);
            node.parentPseudoNode = this;
        }
        //属性

    }, {
        key: "getText",

        //获得文本
        value: function getText() {
            return typeof this.content === 'string' ? this.content : '';
        }
    }, {
        key: "props",
        get: function get() {
            return this.content && this.content.props || {};
        }
        //标签名称

    }, {
        key: "tagName",
        get: function get() {
            if (typeof this.content === 'string') {
                return 'string';
            }
            return this.content && this.content && this.content.type || '';
        }
    }]);

    return PseudoNode;
}();
//用于标记类


PseudoNode.$$NodeClassID = 'PseudoNode';
exports.PseudoNode = PseudoNode;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: black;\n\tbackground: none;\n\ttext-shadow: 0 1px white;\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\n@media print {\n\tcode[class*=\"language-\"],\n\tpre[class*=\"language-\"] {\n\t\ttext-shadow: none;\n\t}\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #f5f2f0;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray;\n}\n\n.token.punctuation {\n\tcolor: #999;\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #905;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #690;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n\tcolor: #a67f59;\n\tbackground: hsla(0, 0%, 100%, .5);\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n\tcolor: #07a;\n}\n\n.token.function {\n\tcolor: #DD4A68;\n}\n\n.token.regex,\n.token.important,\n.token.variable {\n\tcolor: #e90;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(60);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(97);

module.exports = __webpack_require__(51);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 插件库的基础类
 */

var BasePlugin = function () {
    function BasePlugin() {
        _classCallCheck(this, BasePlugin);

        //输出工具
        this.blockNodeMap = {};
        //输出工具
        this.inlineNodeMap = {};
        this.format = {};
    }
    /**
     * 向插件库注册块级标签
     * @param format        引擎
     * @param name          标签名
     * @param blockNode      块级标签扩展
     */


    _createClass(BasePlugin, [{
        key: "registerBlockNode",
        value: function registerBlockNode(format, name, blockNode) {
            if (!this.format[format]) {
                this.format[format] = {
                    blockNodeMap: {},
                    inlineNodeMap: {}
                };
            }
            this.format[format].blockNodeMap[name] = blockNode;
        }
        /**
         * 向插件库注册行内标签
         * @param format        引擎
         * @param name          标签名
         * @param inlineNode     行内标签扩展
         */

    }, {
        key: "registerInlineNode",
        value: function registerInlineNode(format, name, inlineNode) {
            if (!this.format[format]) {
                this.format[format] = {
                    blockNodeMap: {},
                    inlineNodeMap: {}
                };
            }
            this.format[format].inlineNodeMap[name] = inlineNode;
        }
    }]);

    return BasePlugin;
}();

exports.BasePlugin = BasePlugin;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @file
 * 将react虚拟DOM树，转为一颗Tree对象
 */

Object.defineProperty(exports, "__esModule", { value: true });
var Tree_1 = __webpack_require__(14);
var BlockNode_1 = __webpack_require__(1);
var Node_1 = __webpack_require__(5);
var PseudoNode_1 = __webpack_require__(6);
//增加节点，这里增加的是快级元素生成的节点，不允许增加行内元素节点
function appendBlockChildren(tree, node) {
    if (tree.currentNode && tree.currentNode.constructor['$$NodeClassID'] === BlockNode_1.BlockNode.$$NodeClassID) {
        var blockNode = tree.currentNode;
        if (blockNode.priority > node.priority) {
            tree.currentNode.appendChild(node);
            node.parentNode = tree.currentNode;
            tree.currentNode = node;
            node.tree = tree;
        } else if (blockNode.priority == node.priority) {
            tree.currentNode.parentNode.appendChild(node);
            tree.currentNode = node;
            node.tree = tree;
        } else if (blockNode.priority < node.priority) {
            tree.currentNode = tree.currentNode.parentNode;
            appendBlockChildren(tree, node);
        }
    }
}
//增加节点，这里增加的是快级元素生成的节点，不允许增加行内元素节点
function appendChildren(node, parentNode) {
    var children = [];
    //将props.children不是数组的情况，都改为数组，这样方便后续处理
    if (parentNode.props.children && parentNode.props.children.length != null && typeof parentNode.props.children !== 'string') {
        children = Array.from(parentNode.props.children);
    } else if (parentNode.props.children) {
        children = [parentNode.props.children];
    }
    children.forEach(function (vdom) {
        var subNode = new PseudoNode_1.PseudoNode(vdom, node, parentNode && parentNode.constructor['$$NodeClassID'] === PseudoNode_1.PseudoNode.$$NodeClassID ? parentNode : null);
        parentNode.childPseudoNodes.push(subNode);
        appendChildren(node, subNode);
    });
}
function createDocTree(doc, renderTools) {
    //因为props是只读字段，故采用...使其变为可写字段
    doc = Object.assign({}, doc, { props: Object.assign({}, doc.props) });
    if (doc.props.children) {
        //将props.children不是数组的情况，都改为数组，这样方便后续处理
        if (!Array.isArray(doc.props.children)) {
            doc.props.children = [doc.props.children];
        }
        //获取doc根元素，将其封装为Node对象
        var DocClass = renderTools.getBlockNode(doc.type) || BlockNode_1.BlockNode;
        var domTree = new Tree_1.Tree(new DocClass(new Node_1.Node(doc, null, null)));
        domTree.root.tree = domTree;
        //将其鞥这为块级的Node对象
        doc.props.children.forEach(function (item) {
            var ItemClass = renderTools.getBlockNode(item.type) || BlockNode_1.BlockNode;
            var tagInstance = new ItemClass(new Node_1.Node(item, domTree, null));
            appendBlockChildren(domTree, tagInstance);
            appendChildren(tagInstance, tagInstance);
        });
    }
    return domTree;
}
/**
 * 将react的虚拟dom树转为Tree对象
 * @param {any} doc
 * @param {BaseRenderTools} renderTools
 * @returns {Tree}
 */
function reactVDomTree2Tree(doc, renderTools) {
    //检验是否是虚拟dom
    if (!doc || !doc.props || doc.type != "doc") {
        throw new TypeError("doc is invalid Virtual Dom");
    }
    return createDocTree(doc, renderTools);
}
exports.reactVDomTree2Tree = reactVDomTree2Tree;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 整个doc生成的树
 */

var Tree = function Tree(root) {
    _classCallCheck(this, Tree);

    this.root = root;
    root.Tree = this;
    this.currentNode = this.root;
};

exports.Tree = Tree;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var ReactVDomTree2Tree_1 = __webpack_require__(13);
var transform_1 = __webpack_require__(16);
var React = __webpack_require__(9);
var vm = __webpack_require__(10);
/**
 * 转换函数，将jsx字符串转换为指定的文档格式输出
 * @param jsxStr            jsx字符串
 * @param option            转换的配置。主要配置有：format，转换的格式配置，支持“HTML”和“MARKDOWN”两种
 * @returns {convertedDoc}  转换好的指定格式的文档
 */
function default_1(jsxStr, render, option) {
    //使用IIFE，达到沙箱效果
    return function (sandbox, vm) {
        var script = "";
        for (var tagName in sandbox.tags) {
            sandbox[tagName] = sandbox.tags[tagName];
        }
        script += "'use strict'; return " + transform_1.default(jsxStr, option);
        script = "(function(){" + script + "})()";
        if (vm) {
            //如果存在vm，表示在node环境。使用vm执行
            var ctx = vm.createContext(sandbox);
            var vd = vm.runInContext(script, ctx);
        } else {
            //如果不存在vm，表示在浏览器环境，直接在window上执行
            var keys = Object.keys(sandbox);
            var backup = {};
            keys.forEach(function (key) {
                backup[key] = window[key];
                window[key] = sandbox[key];
            });
            var vd = eval(script);
            keys.forEach(function (key) {
                window[key] = backup[key];
            });
        }
        return ReactVDomTree2Tree_1.reactVDomTree2Tree(vd, render);
    }.bind(this)({ tags: {}, React: React }, vm);
}
exports.default = default_1;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var babel = __webpack_require__(99);
/**
 * 将jsx文本转为目标文本
 * @param jsxStr				jsx文本
 * @param option				转换配置。保留参数
 * @returns {*|string}
 */
function default_1(jsxStr, option) {
    //文档如果省略了最初的<doc>标签，会自动补充该标签
    jsxStr = jsxStr.trim();
    jsxStr = !jsxStr.startsWith("<doc>") ? "<doc>" + jsxStr + "</doc>" : jsxStr;
    var code = babel.transform(jsxStr, {
        "presets": ["es2015", "react", "stage-2"],
        "plugins": []
    }).code;
    return code.substr(code.indexOf("React"));
}
exports.default = default_1;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/4/17.
 */
var BlockNode_1 = __webpack_require__(1);
var style = __webpack_require__(84);

var Blockquote = function (_BlockNode_1$BlockNod) {
    _inherits(Blockquote, _BlockNode_1$BlockNod);

    function Blockquote(node) {
        _classCallCheck(this, Blockquote);

        var _this = _possibleConstructorReturn(this, (Blockquote.__proto__ || Object.getPrototypeOf(Blockquote)).call(this, node));

        _this.priority = 0;
        return _this;
    }

    _createClass(Blockquote, [{
        key: "render",
        value: function render(_render) {
            _render.setStyle('blockquote', style);
            var str = "<blockquote class=\"mydoc_blockquote\">" + _render.renderInlineNodes(this.childPseudoNodes) + "</blockquote>";
            return str;
        }
    }]);

    return Blockquote;
}(BlockNode_1.BlockNode);

exports.Blockquote = Blockquote;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var BlockNode_1 = __webpack_require__(1);
var style = __webpack_require__(85);
var Prism = __webpack_require__(83);
var languages = {
    javascript: Prism.languages.javascript,
    java: Prism.languages.java,
    markdown: Prism.languages.markdown,
    c: Prism.languages.c,
    cpp: Prism.languages.cpp,
    php: Prism.languages.php,
    basic: Prism.languages.basic,
    go: Prism.languages.go,
    groovy: Prism.languages.groovy,
    html: Prism.languages.html,
    css: Prism.languages.css,
    json: Prism.languages.json,
    less: Prism.languages.less,
    scss: Prism.languages.scss,
    'c#': Prism.languages.csharp,
    python: Prism.languages.python,
    ruby: Prism.languages.ruby,
    rust: Prism.languages.rust,
    scala: Prism.languages.scala,
    typescript: Prism.languages.typescript
};
function mirror(code, lang) {
    return Prism.highlight(code, languages[lang]);
}
;

var Code = function (_BlockNode_1$BlockNod) {
    _inherits(Code, _BlockNode_1$BlockNod);

    function Code(node) {
        _classCallCheck(this, Code);

        var _this = _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).call(this, node));

        _this.priority = 0;
        return _this;
    }

    _createClass(Code, [{
        key: "render",
        value: function render(_render) {
            _render.setStyle('code', style);
            var lang = this.props.lang || 'javascript';
            var code = mirror((this.childPseudoNodes[0] ? this.childPseudoNodes[0].getText() : '').trim(), lang);
            return "<figure class='mydoc_code'>\n                    <pre class=\"mydoc_code_pre cm-s-eclipse\">" + code + "</pre>\n                </figure>";
        }
    }]);

    return Code;
}(BlockNode_1.BlockNode);

exports.Code = Code;
exports.default = Code;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var BlockNode_1 = __webpack_require__(1);
var style = __webpack_require__(86);

var Doc = function (_BlockNode_1$BlockNod) {
    _inherits(Doc, _BlockNode_1$BlockNod);

    function Doc(node) {
        _classCallCheck(this, Doc);

        var _this = _possibleConstructorReturn(this, (Doc.__proto__ || Object.getPrototypeOf(Doc)).call(this, node));

        _this.priority = Infinity;
        return _this;
    }

    _createClass(Doc, [{
        key: "render",
        value: function render(_render) {
            var subText = _render.renderBlockNodes(this.childNodes);
            _render.setStyle('doc', style);
            return _render.renderStyle() + "\n<article class='mydoc'>\n    " + subText + "\n</article>";
        }
    }]);

    return Doc;
}(BlockNode_1.BlockNode);

exports.Doc = Doc;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var BlockNode_1 = __webpack_require__(1);
var style = __webpack_require__(87);

var H1 = function (_BlockNode_1$BlockNod) {
    _inherits(H1, _BlockNode_1$BlockNod);

    function H1(node) {
        _classCallCheck(this, H1);

        var _this = _possibleConstructorReturn(this, (H1.__proto__ || Object.getPrototypeOf(H1)).call(this, node));

        _this.priority = 0;
        return _this;
    }

    _createClass(H1, [{
        key: "render",
        value: function render(_render) {
            _render.setStyle('h1', style);
            var str = "<div class=\"mydoc_h1\">\n                <a class=\"mydoc_h1_a\">\n                    <h1 class=\"mydoc_h1_h1\">" + _render.renderInlineNodes(this.childPseudoNodes) + "</h1>\n                </a>\n                <div class=\"mydoc_h1_content\">\n                    " + _render.renderBlockNodes(this.childNodes) + "\n                </div>\n            </div>";
            return str;
        }
    }]);

    return H1;
}(BlockNode_1.BlockNode);

exports.H1 = H1;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var BlockNode_1 = __webpack_require__(1);
var style = __webpack_require__(88);

var H2 = function (_BlockNode_1$BlockNod) {
    _inherits(H2, _BlockNode_1$BlockNod);

    function H2(node) {
        _classCallCheck(this, H2);

        var _this = _possibleConstructorReturn(this, (H2.__proto__ || Object.getPrototypeOf(H2)).call(this, node));

        _this.priority = 3.99;
        return _this;
    }

    _createClass(H2, [{
        key: "render",
        value: function render(_render) {
            _render.setStyle('h2', style);
            var str = "<div class=\"mydoc_h2\">\n                    <a class=\"mydoc_h2_a\">\n                        <h2 class=\"mydoc_h2_h2\">" + _render.renderInlineNodes(this.childPseudoNodes) + "</h2>\n                    </a>\n                    <div class=\"mydoc_h2_content\">\n                        " + _render.renderBlockNodes(this.childNodes) + "\n                    </div>\n                </div>";
            return str;
        }
    }]);

    return H2;
}(BlockNode_1.BlockNode);

exports.H2 = H2;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2018/2/14.
 */
var BlockNode_1 = __webpack_require__(1);
var style = __webpack_require__(89);

var H3 = function (_BlockNode_1$BlockNod) {
    _inherits(H3, _BlockNode_1$BlockNod);

    function H3(node) {
        _classCallCheck(this, H3);

        var _this = _possibleConstructorReturn(this, (H3.__proto__ || Object.getPrototypeOf(H3)).call(this, node));

        _this.priority = 3.98;
        return _this;
    }

    _createClass(H3, [{
        key: "render",
        value: function render(_render) {
            _render.setStyle('h3', style);
            var str = "<div class=\"mydoc_h3\">\n                <a class=\"mydoc_h3_a\">\n                    <h3 class=\"mydoc_h3_h3\">" + _render.renderInlineNodes(this.childPseudoNodes) + "</h3>\n                </a>\n                <div class=\"mydoc_h3_content\">\n                    " + _render.renderBlockNodes(this.childNodes) + "\n                </div>\n            </div>";
            return str;
        }
    }]);

    return H3;
}(BlockNode_1.BlockNode);

exports.H3 = H3;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2018/2/14.
 */
var BlockNode_1 = __webpack_require__(1);
var style = __webpack_require__(90);

var H4 = function (_BlockNode_1$BlockNod) {
    _inherits(H4, _BlockNode_1$BlockNod);

    function H4(node) {
        _classCallCheck(this, H4);

        var _this = _possibleConstructorReturn(this, (H4.__proto__ || Object.getPrototypeOf(H4)).call(this, node));

        _this.priority = 3.97;
        return _this;
    }

    _createClass(H4, [{
        key: "render",
        value: function render(_render) {
            _render.setStyle('h4', style);
            var str = "<div class=\"mydoc_h4\">\n                <a class=\"mydoc_h4_a\">\n                    <h4 class=\"mydoc_h4_h4\">" + _render.renderInlineNodes(this.childPseudoNodes) + "</h4>\n                </a>\n                <div class=\"mydoc_h4_content\">\n                    " + _render.renderBlockNodes(this.childNodes) + "\n                </div>\n            </div>";
            return str;
        }
    }]);

    return H4;
}(BlockNode_1.BlockNode);

exports.H4 = H4;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/4/17.
 */
var BlockNode_1 = __webpack_require__(1);
var style = __webpack_require__(91);

var Img = function (_BlockNode_1$BlockNod) {
    _inherits(Img, _BlockNode_1$BlockNod);

    function Img(node) {
        _classCallCheck(this, Img);

        var _this = _possibleConstructorReturn(this, (Img.__proto__ || Object.getPrototypeOf(Img)).call(this, node));

        _this.priority = 0;
        return _this;
    }

    _createClass(Img, [{
        key: "render",
        value: function render(_render) {
            _render.setStyle('img', style);
            var str = "<img class=\"mydoc_img\" " + (this.props.height ? "height=\"" + this.props.height + "\"" : '') + " " + (this.props.width ? "width=\"" + this.props.width + "\"" : '') + " src=\"" + this.props.src + "\"/>";
            return str;
        }
    }]);

    return Img;
}(BlockNode_1.BlockNode);

exports.Img = Img;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var BlockNode_1 = __webpack_require__(1);
var style = __webpack_require__(8);

var Li = function (_BlockNode_1$BlockNod) {
    _inherits(Li, _BlockNode_1$BlockNod);

    function Li(node) {
        _classCallCheck(this, Li);

        var _this = _possibleConstructorReturn(this, (Li.__proto__ || Object.getPrototypeOf(Li)).call(this, node));

        _this.priority = 0;
        return _this;
    }

    _createClass(Li, [{
        key: "render",
        value: function render(_render) {
            _render.setStyle('li', style);
            var str = "<ul class=\"mydoc_li\"><li> " + _render.renderInlineNodes(this.childPseudoNodes) + "</li></ul>";
            return str;
        }
    }]);

    return Li;
}(BlockNode_1.BlockNode);

exports.Li = Li;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var BlockNode_1 = __webpack_require__(1);
var style = __webpack_require__(8);

var Nav = function (_BlockNode_1$BlockNod) {
    _inherits(Nav, _BlockNode_1$BlockNod);

    function Nav(node) {
        _classCallCheck(this, Nav);

        var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, node));

        _this.priority = 10;
        return _this;
    }

    _createClass(Nav, [{
        key: "render",
        value: function render(_render) {
            _render.setStyle('nav', style);
            var str = "<div class='mydoc_nav'>\n                <aside class='mydoc_nav_nav'>\n                </aside>\n                <div class='mydoc_nav_content'>\n                    " + _render.renderBlockNodes(this.childNodes) + "\n                </div>\n            </div>";
            return str;
        }
    }]);

    return Nav;
}(BlockNode_1.BlockNode);

exports.Nav = Nav;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var BlockNode_1 = __webpack_require__(1);
var style = __webpack_require__(92);

var P = function (_BlockNode_1$BlockNod) {
    _inherits(P, _BlockNode_1$BlockNod);

    function P(node) {
        _classCallCheck(this, P);

        var _this = _possibleConstructorReturn(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, node));

        _this.priority = 0;
        return _this;
    }

    _createClass(P, [{
        key: "render",
        value: function render(_render) {
            _render.setStyle('p', style);
            var str = "<p class=\"mydoc_p\"> " + _render.renderInlineNodes(this.childPseudoNodes) + "</p>";
            return str;
        }
    }]);

    return P;
}(BlockNode_1.BlockNode);

exports.P = P;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2018/2/15.
 */
var BlockNode_1 = __webpack_require__(1);
var style = __webpack_require__(93);

var Table = function (_BlockNode_1$BlockNod) {
    _inherits(Table, _BlockNode_1$BlockNod);

    function Table(node) {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, node));

        _this.priority = 0;
        return _this;
    }

    _createClass(Table, [{
        key: "tableTdRender",
        value: function tableTdRender(tds, render) {
            return tds.map(function (td) {
                if (td.tagName == 'td') {
                    return "<td class=\"mydoc_td\">" + render.renderInlineNodes(td.childPseudoNodes) + "</td>";
                } else if (td.tagName == 'th') {
                    return "<th class=\"mydoc_th\">" + render.renderInlineNodes(td.childPseudoNodes) + "</th>";
                } else {
                    return '';
                }
            }).join("");
        }
    }, {
        key: "tableTrRender",
        value: function tableTrRender(trs, render) {
            var _this2 = this;

            return trs.map(function (tr) {
                if (tr.tagName == 'tr') {
                    return "<tr class=\"mydoc_tr\">" + _this2.tableTdRender(tr.childPseudoNodes, render) + "</tr>";
                } else {
                    return '';
                }
            }).join("");
        }
    }, {
        key: "render",
        value: function render(_render) {
            _render.setStyle('table', style);
            var str = "<table class=\"mydoc_table\">" + this.tableTrRender(this.childPseudoNodes, _render) + "</table>";
            return str;
        }
    }]);

    return Table;
}(BlockNode_1.BlockNode);

exports.Table = Table;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/25.
 */
var BaseRenderTools_1 = __webpack_require__(3);
var BlockNode_1 = __webpack_require__(1);
var InlineNode_1 = __webpack_require__(2);
var Doc_1 = __webpack_require__(19);
var H1_1 = __webpack_require__(20);
var H2_1 = __webpack_require__(21);
var H3_1 = __webpack_require__(22);
var H4_1 = __webpack_require__(23);
var Table_1 = __webpack_require__(28);
var P_1 = __webpack_require__(27);
var Nav_1 = __webpack_require__(26);
var Blockquote_1 = __webpack_require__(17);
var Code_1 = __webpack_require__(18);
var Li_1 = __webpack_require__(25);
var Img_1 = __webpack_require__(24);
var Strong_1 = __webpack_require__(33);
var A_1 = __webpack_require__(30);
var Span_1 = __webpack_require__(31);
var String_1 = __webpack_require__(32);

var HTMLRender = function (_BaseRenderTools_1$Ba) {
    _inherits(HTMLRender, _BaseRenderTools_1$Ba);

    function HTMLRender() {
        _classCallCheck(this, HTMLRender);

        var _this = _possibleConstructorReturn(this, (HTMLRender.__proto__ || Object.getPrototypeOf(HTMLRender)).call(this));

        _this.styleMap = {};
        var blockNodeMap = {
            p: P_1.P,
            h1: H1_1.H1,
            h2: H2_1.H2,
            h3: H3_1.H3,
            h4: H4_1.H4,
            table: Table_1.Table,
            doc: Doc_1.Doc,
            nav: Nav_1.Nav,
            blockquote: Blockquote_1.Blockquote,
            code: Code_1.default,
            li: Li_1.Li,
            img: Img_1.Img
        };
        for (var key in blockNodeMap) {
            _this.registerBlockNode(key, blockNodeMap[key]);
        }
        var inlineNodeMap = {
            strong: Strong_1.Strong,
            string: String_1.String,
            span: Span_1.Span,
            a: A_1.A
        };
        for (var _key in inlineNodeMap) {
            _this.registerInlineNode(_key, inlineNodeMap[_key]);
        }
        return _this;
    }

    _createClass(HTMLRender, [{
        key: "$renderTree",
        value: function $renderTree(tree) {
            return this.renderBlockNodes([tree.root]);
        }
    }, {
        key: "setStyle",
        value: function setStyle(tagName, styleText) {
            this.styleMap[tagName] = styleText;
        }
    }, {
        key: "renderStyle",
        value: function renderStyle() {
            var arr = [];
            for (var key in this.styleMap) {
                arr.push(this.styleMap[key]);
            }
            return "<style>" + arr.join('') + "</style>";
        }
    }, {
        key: "renderBlockNodes",
        value: function renderBlockNodes(blockNodeList) {
            var _this2 = this;

            return blockNodeList.map(function (node) {
                if (node && node.constructor['$$NodeClassID'] === BlockNode_1.BlockNode.$$NodeClassID) {
                    return node.render(_this2);
                } else {
                    return '';
                }
            }).join('');
        }
    }, {
        key: "renderInlineNodes",
        value: function renderInlineNodes(inlineNodeList) {
            var _this3 = this;

            return inlineNodeList.map(function (pseudoNode) {
                var inlineNode = new (_this3.getInlineNode(pseudoNode.tagName) || InlineNode_1.InlineNode)(pseudoNode);
                return inlineNode.render(_this3);
            }).join('');
        }
    }]);

    return HTMLRender;
}(BaseRenderTools_1.BaseRender);

exports.HTMLRender = HTMLRender;
exports.default = HTMLRender;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/4/17.
 */
var InlineNode_1 = __webpack_require__(2);
var style = __webpack_require__(94);

var A = function (_InlineNode_1$InlineN) {
    _inherits(A, _InlineNode_1$InlineN);

    function A() {
        _classCallCheck(this, A);

        return _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A)).apply(this, arguments));
    }

    _createClass(A, [{
        key: "render",
        value: function render(_render) {
            _render.setStyle('a', style);
            return "<a class=\"mydoc_a\" " + (this.props.href ? 'href="' + this.props.href + '"' : '') + ">" + _render.renderInlineNodes(this.childPseudoNodes) + "</a>";
        }
    }]);

    return A;
}(InlineNode_1.InlineNode);

exports.A = A;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var InlineNode_1 = __webpack_require__(2);
var style = __webpack_require__(95);

var Span = function (_InlineNode_1$InlineN) {
    _inherits(Span, _InlineNode_1$InlineN);

    function Span() {
        _classCallCheck(this, Span);

        return _possibleConstructorReturn(this, (Span.__proto__ || Object.getPrototypeOf(Span)).apply(this, arguments));
    }

    _createClass(Span, [{
        key: "render",
        value: function render(_render) {
            _render.setStyle('span', style);
            return "<span class=\"mydoc_span\">" + _render.renderInlineNodes(this.childPseudoNodes) + "</span>";
        }
    }]);

    return Span;
}(InlineNode_1.InlineNode);

exports.Span = Span;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var util = __webpack_require__(4);
var InlineNode_1 = __webpack_require__(2);

var String = function (_InlineNode_1$InlineN) {
    _inherits(String, _InlineNode_1$InlineN);

    function String() {
        _classCallCheck(this, String);

        return _possibleConstructorReturn(this, (String.__proto__ || Object.getPrototypeOf(String)).apply(this, arguments));
    }

    _createClass(String, [{
        key: "render",
        value: function render(_render) {
            return util.escapeHTML(this.content);
        }
    }]);

    return String;
}(InlineNode_1.InlineNode);

exports.String = String;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by njz on 2017/4/17.
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var InlineNode_1 = __webpack_require__(2);
var style = __webpack_require__(96);

var Strong = function (_InlineNode_1$InlineN) {
    _inherits(Strong, _InlineNode_1$InlineN);

    function Strong() {
        _classCallCheck(this, Strong);

        return _possibleConstructorReturn(this, (Strong.__proto__ || Object.getPrototypeOf(Strong)).apply(this, arguments));
    }

    _createClass(Strong, [{
        key: "render",
        value: function render(_render) {
            _render.setStyle('strong', style);
            return "<strong class=\"mydoc_strong\">" + _render.renderInlineNodes(this.childPseudoNodes) + "</strong>";
        }
    }]);

    return Strong;
}(InlineNode_1.InlineNode);

exports.Strong = Strong;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/4/17.
 */
var BlockNode_1 = __webpack_require__(1);

var Blockquote = function (_BlockNode_1$BlockNod) {
    _inherits(Blockquote, _BlockNode_1$BlockNod);

    function Blockquote(node) {
        _classCallCheck(this, Blockquote);

        var _this = _possibleConstructorReturn(this, (Blockquote.__proto__ || Object.getPrototypeOf(Blockquote)).call(this, node));

        _this.priority = 0;
        return _this;
    }

    _createClass(Blockquote, [{
        key: "render",
        value: function render(_render) {
            var str = "> " + _render.renderInlineNodes(this.childPseudoNodes) + "\n";
            return str;
        }
    }]);

    return Blockquote;
}(BlockNode_1.BlockNode);

exports.Blockquote = Blockquote;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var BlockNode_1 = __webpack_require__(1);

var Code = function (_BlockNode_1$BlockNod) {
    _inherits(Code, _BlockNode_1$BlockNod);

    function Code(node) {
        _classCallCheck(this, Code);

        var _this = _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).call(this, node));

        _this.priority = 0;
        return _this;
    }

    _createClass(Code, [{
        key: "render",
        value: function render(_render) {
            var lang = this.props.lang || 'javascript';
            var code = this.childPseudoNodes[0] ? this.childPseudoNodes[0].getText() : '';
            return "```" + lang + "\n" + code + "\n```\n";
        }
    }]);

    return Code;
}(BlockNode_1.BlockNode);

exports.Code = Code;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var BlockNode_1 = __webpack_require__(1);

var Doc = function (_BlockNode_1$BlockNod) {
    _inherits(Doc, _BlockNode_1$BlockNod);

    function Doc(node) {
        _classCallCheck(this, Doc);

        var _this = _possibleConstructorReturn(this, (Doc.__proto__ || Object.getPrototypeOf(Doc)).call(this, node));

        _this.priority = Infinity;
        return _this;
    }

    _createClass(Doc, [{
        key: "render",
        value: function render(_render) {
            return "" + _render.renderBlockNodes(this.childNodes);
        }
    }]);

    return Doc;
}(BlockNode_1.BlockNode);

exports.Doc = Doc;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var BlockNode_1 = __webpack_require__(1);

var H1 = function (_BlockNode_1$BlockNod) {
    _inherits(H1, _BlockNode_1$BlockNod);

    function H1(node) {
        _classCallCheck(this, H1);

        var _this = _possibleConstructorReturn(this, (H1.__proto__ || Object.getPrototypeOf(H1)).call(this, node));

        _this.priority = 4;
        return _this;
    }

    _createClass(H1, [{
        key: "render",
        value: function render(_render) {
            var str = "# " + _render.renderInlineNodes(this.childPseudoNodes) + "\n" + _render.renderBlockNodes(this.childNodes) + "\n";
            return str;
        }
    }]);

    return H1;
}(BlockNode_1.BlockNode);

exports.H1 = H1;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var BlockNode_1 = __webpack_require__(1);

var H2 = function (_BlockNode_1$BlockNod) {
    _inherits(H2, _BlockNode_1$BlockNod);

    function H2(node) {
        _classCallCheck(this, H2);

        var _this = _possibleConstructorReturn(this, (H2.__proto__ || Object.getPrototypeOf(H2)).call(this, node));

        _this.priority = 3.99;
        return _this;
    }

    _createClass(H2, [{
        key: "render",
        value: function render(_render) {
            var str = "## " + _render.renderInlineNodes(this.childPseudoNodes) + "\n" + _render.renderBlockNodes(this.childNodes) + "\n";
            return str;
        }
    }]);

    return H2;
}(BlockNode_1.BlockNode);

exports.H2 = H2;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var BlockNode_1 = __webpack_require__(1);

var H3 = function (_BlockNode_1$BlockNod) {
    _inherits(H3, _BlockNode_1$BlockNod);

    function H3(node) {
        _classCallCheck(this, H3);

        var _this = _possibleConstructorReturn(this, (H3.__proto__ || Object.getPrototypeOf(H3)).call(this, node));

        _this.priority = 3.98;
        return _this;
    }

    _createClass(H3, [{
        key: "render",
        value: function render(_render) {
            var str = "### " + _render.renderInlineNodes(this.childPseudoNodes) + "\n" + _render.renderBlockNodes(this.childNodes) + "\n";
            return str;
        }
    }]);

    return H3;
}(BlockNode_1.BlockNode);

exports.H3 = H3;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var BlockNode_1 = __webpack_require__(1);

var H4 = function (_BlockNode_1$BlockNod) {
    _inherits(H4, _BlockNode_1$BlockNod);

    function H4(node) {
        _classCallCheck(this, H4);

        var _this = _possibleConstructorReturn(this, (H4.__proto__ || Object.getPrototypeOf(H4)).call(this, node));

        _this.priority = 3.97;
        return _this;
    }

    _createClass(H4, [{
        key: "render",
        value: function render(_render) {
            var str = "#### " + _render.renderInlineNodes(this.childPseudoNodes) + "\n" + _render.renderBlockNodes(this.childNodes) + "\n";
            return str;
        }
    }]);

    return H4;
}(BlockNode_1.BlockNode);

exports.H4 = H4;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/4/17.
 */
var BlockNode_1 = __webpack_require__(1);

var Img = function (_BlockNode_1$BlockNod) {
    _inherits(Img, _BlockNode_1$BlockNod);

    function Img(node) {
        _classCallCheck(this, Img);

        var _this = _possibleConstructorReturn(this, (Img.__proto__ || Object.getPrototypeOf(Img)).call(this, node));

        _this.priority = 0;
        return _this;
    }

    _createClass(Img, [{
        key: "render",
        value: function render() {
            return "![Alt](" + this.props.src + ")\n";
        }
    }]);

    return Img;
}(BlockNode_1.BlockNode);

exports.Img = Img;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var BlockNode_1 = __webpack_require__(1);

var Li = function (_BlockNode_1$BlockNod) {
    _inherits(Li, _BlockNode_1$BlockNod);

    function Li(node) {
        _classCallCheck(this, Li);

        var _this = _possibleConstructorReturn(this, (Li.__proto__ || Object.getPrototypeOf(Li)).call(this, node));

        _this.priority = 0;
        return _this;
    }

    _createClass(Li, [{
        key: "render",
        value: function render(_render) {
            var str = "*   " + _render.renderInlineNodes(this.childPseudoNodes) + "\n";
            return str;
        }
    }]);

    return Li;
}(BlockNode_1.BlockNode);

exports.Li = Li;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var BlockNode_1 = __webpack_require__(1);

var Nav = function (_BlockNode_1$BlockNod) {
    _inherits(Nav, _BlockNode_1$BlockNod);

    function Nav(node) {
        _classCallCheck(this, Nav);

        var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, node));

        _this.priority = 10;
        return _this;
    }

    _createClass(Nav, [{
        key: "render",
        value: function render(_render) {
            var str = "[TOC]\n" + _render.renderBlockNodes(this.childNodes);
            return str;
        }
    }]);

    return Nav;
}(BlockNode_1.BlockNode);

exports.Nav = Nav;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var BlockNode_1 = __webpack_require__(1);

var P = function (_BlockNode_1$BlockNod) {
    _inherits(P, _BlockNode_1$BlockNod);

    function P(node) {
        _classCallCheck(this, P);

        var _this = _possibleConstructorReturn(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, node));

        _this.priority = 0;
        return _this;
    }

    _createClass(P, [{
        key: "render",
        value: function render(_render) {
            var str = _render.renderInlineNodes(this.childPseudoNodes) + "\n\n";
            return str;
        }
    }]);

    return P;
}(BlockNode_1.BlockNode);

exports.P = P;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2018/2/15.
 */
var BlockNode_1 = __webpack_require__(1);

var Table = function (_BlockNode_1$BlockNod) {
    _inherits(Table, _BlockNode_1$BlockNod);

    function Table(node) {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, node));

        _this.priority = 0;
        return _this;
    }

    _createClass(Table, [{
        key: "isTh",
        value: function isTh(tr) {
            return tr.childPseudoNodes.reduce(function (bool, td) {
                return bool && td.tagName == 'th';
            }, true);
        }
    }, {
        key: "tableTdRender",
        value: function tableTdRender(tds, render) {
            return "|" + tds.map(function (td) {
                if (td.tagName == 'td') {
                    return "" + render.renderInlineNodes(td.childPseudoNodes);
                }
            }).join("|") + "|";
        }
    }, {
        key: "tableThRender",
        value: function tableThRender(ths, render) {
            return "|" + ths.map(function (th) {
                if (th.tagName == 'th') {
                    return "" + render.renderInlineNodes(th.childPseudoNodes);
                }
            }).join("|") + "|\n|" + ths.map(function (th) {
                return '----';
            }).join("|") + "|";
        }
    }, {
        key: "tableTrRender",
        value: function tableTrRender(trs, render) {
            var _this2 = this;

            return trs.map(function (tr) {
                if (tr.tagName == 'tr') {
                    if (_this2.isTh(tr)) {
                        return _this2.tableThRender(tr.childPseudoNodes, render);
                    } else {
                        return _this2.tableTdRender(tr.childPseudoNodes, render);
                    }
                } else {
                    return '';
                }
            }).join("\n");
        }
    }, {
        key: "render",
        value: function render(_render) {
            var str = "" + this.tableTrRender(this.childPseudoNodes, _render);
            return str;
        }
    }]);

    return Table;
}(BlockNode_1.BlockNode);

exports.Table = Table;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/25.
 */
var BaseRenderTools_1 = __webpack_require__(3);
var BlockNode_1 = __webpack_require__(1);
var InlineNode_1 = __webpack_require__(2);
var Doc_1 = __webpack_require__(36);
var H1_1 = __webpack_require__(37);
var H2_1 = __webpack_require__(38);
var H3_1 = __webpack_require__(39);
var H4_1 = __webpack_require__(40);
var P_1 = __webpack_require__(44);
var Table_1 = __webpack_require__(45);
var Nav_1 = __webpack_require__(43);
var Blockquote_1 = __webpack_require__(34);
var Code_1 = __webpack_require__(35);
var Li_1 = __webpack_require__(42);
var Img_1 = __webpack_require__(41);
var Strong_1 = __webpack_require__(50);
var A_1 = __webpack_require__(47);
var Span_1 = __webpack_require__(48);
var String_1 = __webpack_require__(49);

var MarkdownRender = function (_BaseRenderTools_1$Ba) {
    _inherits(MarkdownRender, _BaseRenderTools_1$Ba);

    function MarkdownRender() {
        _classCallCheck(this, MarkdownRender);

        var _this = _possibleConstructorReturn(this, (MarkdownRender.__proto__ || Object.getPrototypeOf(MarkdownRender)).call(this));

        var blockNodeMap = {
            p: P_1.P,
            h1: H1_1.H1,
            h2: H2_1.H2,
            h3: H3_1.H3,
            h4: H4_1.H4,
            table: Table_1.Table,
            doc: Doc_1.Doc,
            nav: Nav_1.Nav,
            blockquote: Blockquote_1.Blockquote,
            code: Code_1.Code,
            li: Li_1.Li,
            img: Img_1.Img
        };
        for (var key in blockNodeMap) {
            _this.registerBlockNode(key, blockNodeMap[key]);
        }
        var inlineNodeMap = {
            strong: Strong_1.Strong,
            string: String_1.String,
            span: Span_1.Span,
            a: A_1.A
        };
        for (var _key in inlineNodeMap) {
            _this.registerInlineNode(_key, inlineNodeMap[_key]);
        }
        return _this;
    }

    _createClass(MarkdownRender, [{
        key: "$renderTree",
        value: function $renderTree(tree) {
            return this.renderBlockNodes([tree.root]);
        }
    }, {
        key: "renderBlockNodes",
        value: function renderBlockNodes(blockNodeList) {
            var _this2 = this;

            return blockNodeList.map(function (node) {
                if (node && node.constructor['$$NodeClassID'] === BlockNode_1.BlockNode.$$NodeClassID) {
                    return node.render(_this2);
                } else {
                    return '';
                }
            }).join('');
        }
    }, {
        key: "renderInlineNodes",
        value: function renderInlineNodes(inlineNodeList) {
            var _this3 = this;

            return inlineNodeList.map(function (pseudoNode) {
                var inlineNode = new (_this3.getInlineNode(pseudoNode.tagName) || InlineNode_1.InlineNode)(pseudoNode);
                return inlineNode.render(_this3);
            }).join('');
        }
    }]);

    return MarkdownRender;
}(BaseRenderTools_1.BaseRender);

exports.MarkdownRender = MarkdownRender;
exports.default = MarkdownRender;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/4/17.
 */
var InlineNode_1 = __webpack_require__(2);

var A = function (_InlineNode_1$InlineN) {
    _inherits(A, _InlineNode_1$InlineN);

    function A() {
        _classCallCheck(this, A);

        return _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A)).apply(this, arguments));
    }

    _createClass(A, [{
        key: "render",
        value: function render(_render) {
            return "[" + _render.renderInlineNodes(this.childPseudoNodes) + "](" + (this.content.props.href || '') + " \"\") ";
        }
    }]);

    return A;
}(InlineNode_1.InlineNode);

exports.A = A;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var InlineNode_1 = __webpack_require__(2);

var Span = function (_InlineNode_1$InlineN) {
    _inherits(Span, _InlineNode_1$InlineN);

    function Span() {
        _classCallCheck(this, Span);

        return _possibleConstructorReturn(this, (Span.__proto__ || Object.getPrototypeOf(Span)).apply(this, arguments));
    }

    _createClass(Span, [{
        key: "render",
        value: function render(_render) {
            return "" + _render.renderInlineNodes(this.childPseudoNodes);
        }
    }]);

    return Span;
}(InlineNode_1.InlineNode);

exports.Span = Span;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/3/26.
 */
var util = __webpack_require__(4);
var InlineNode_1 = __webpack_require__(2);

var String = function (_InlineNode_1$InlineN) {
    _inherits(String, _InlineNode_1$InlineN);

    function String() {
        _classCallCheck(this, String);

        return _possibleConstructorReturn(this, (String.__proto__ || Object.getPrototypeOf(String)).apply(this, arguments));
    }

    _createClass(String, [{
        key: "render",
        value: function render(_render) {
            return util.escapeHTML(this.content);
        }
    }]);

    return String;
}(InlineNode_1.InlineNode);

exports.String = String;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by njz on 2017/4/17.
 */
var InlineNode_1 = __webpack_require__(2);

var Strong = function (_InlineNode_1$InlineN) {
    _inherits(Strong, _InlineNode_1$InlineN);

    function Strong() {
        _classCallCheck(this, Strong);

        return _possibleConstructorReturn(this, (Strong.__proto__ || Object.getPrototypeOf(Strong)).apply(this, arguments));
    }

    _createClass(Strong, [{
        key: "render",
        value: function render(_render) {
            return " **" + _render.renderInlineNodes(this.childPseudoNodes) + "** ";
        }
    }]);

    return Strong;
}(InlineNode_1.InlineNode);

exports.Strong = Strong;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var jsxStr2Tree_1 = __webpack_require__(15);
var InlineNode_1 = __webpack_require__(2);
exports.InlineNode = InlineNode_1.InlineNode;
var BlockNode_1 = __webpack_require__(1);
exports.BlockNode = BlockNode_1.BlockNode;
var BasePlugin_1 = __webpack_require__(12);
exports.BasePlugin = BasePlugin_1.BasePlugin;
var BaseRenderTools_1 = __webpack_require__(3);
exports.BaseRender = BaseRenderTools_1.BaseRender;
var HTMLRender_1 = __webpack_require__(29);
exports.HTMLRender = HTMLRender_1.default;
var MarkdownRender_1 = __webpack_require__(46);
exports.MarkdownRender = MarkdownRender_1.default;
var util = __webpack_require__(4);
exports.util = util;
var React = __webpack_require__(9);
var vm = __webpack_require__(10);
//当前注册的插件列表
var pluginList = [];
/**
 * 使用usePlugin函数注册插件
 * @param plugin            注册的插件
 */
function usePlugin(plugin) {
    pluginList.push(plugin);
}
exports.usePlugin = usePlugin;
/**
 * 转换函数，将jsx字符串转换为指定的文档格式输出
 * @param jsxStr            jsx字符串
 * @param option            转换的配置。主要配置有：format，转换的格式配置，支持“HTML”和“MARKDOWN”两种
 * @returns {convertedDoc}  转换好的指定格式的文档
 */
function convert(jsxStr) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { format: 'HTML' };

    if (option.format == 'HTML') {
        var render = new HTMLRender_1.default();
        pluginList.forEach(function (plugin) {
            if (plugin.format && plugin.format['HTML']) {
                render.$usePlugin(plugin.format['HTML']);
            }
        });
        return render.$renderTree(jsxStr2Tree_1.default(jsxStr, render, option));
    } else if (option.format == 'MARKDOWN') {
        var render = new MarkdownRender_1.default();
        pluginList.forEach(function (plugin) {
            if (plugin.format && plugin.format['MARKDOWN']) {
                render.$usePlugin(plugin.format['MARKDOWN']);
            }
        });
        return render.$renderTree(jsxStr2Tree_1.default(jsxStr, render, option));
    } else {
        throw new Error("The format " + option.format + " does not exist");
    }
}
exports.convert = convert;
/**
 * 将jsx字符串转为Node数组，为标签复用标签提供可能。这是一个对控件开发者开发的函数
 * @param {string} jsxStr               jsx字符串
 * @param {BaseRender} render           当前正在使用的render对象
 * @param {*} option                    配置
 * @returns {Node[]}
 */
function jsxStr2Nodes(jsxStr, render, option) {
    return jsxStr2Tree_1.default(jsxStr, render, option).root.childNodes;
}
exports.jsxStr2Nodes = jsxStr2Nodes;
exports.default = {
    InlineNode: InlineNode_1.InlineNode,
    BlockNode: BlockNode_1.BlockNode,
    BaseRender: BaseRenderTools_1.BaseRender,
    BasePlugin: BasePlugin_1.BasePlugin,
    convert: convert,
    usePlugin: usePlugin,
    util: util,
    HTMLRender: HTMLRender_1.default,
    MarkdownRender: MarkdownRender_1.default,
    jsxStr2Nodes: jsxStr2Nodes
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_blockquote{\r\n    padding: 12px 5px 12px 30px;\r\n    margin: 2em 0 0 8px;\r\n    border-width: 0;\r\n    border-left: 4px solid #f66;\r\n    background-color: #f8f8f8;\r\n    position: relative;\r\n    border-bottom-right-radius: 2px;\r\n    border-top-right-radius: 2px;\r\n    line-height: 1.6em;\r\n}\r\n.mydoc_blockquote::before{\r\n    position: absolute;\r\n    top: 14px;\r\n    left: -12px;\r\n    background-color: #f66;\r\n    color: #fff;\r\n    content: \"!\";\r\n    width: 20px;\r\n    height: 20px;\r\n    text-align: center;\r\n    line-height: 20px;\r\n    font-weight: bold;\r\n    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;\r\n    font-size: 14px;\r\n    border-radius: 10px;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports
exports.i(__webpack_require__(7), "");

// module
exports.push([module.i, ".mydoc_code{\r\n    overflow-x: auto;\r\n    position: relative;\r\n    background-color: #f8f8f8;\r\n    padding: 0;\r\n    line-height: 1.1em;\r\n    border-radius: 2px;\r\n    margin: 1.2em 0;\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AgMAAABHkjHhAAAACVBMVEWAgIBaWlo+Pj7rTFvWAAAAA3RSTlMHCAw+VhR4AAAA+klEQVQoz4WSMW7EQAhFPxKWNh2FCx+HkaZI6RRb5DYbyVfIJXLKDCFoMbaTKSw/8ZnPAPjaH2xgZcUNUDADD7D9LtDBCLZ45fbkvo/30K8yeI64pPwl6znd/3n/Oe93P3ho9qeh72btTFzqkz0rsJle8Zr81OLEwZ1dv/713uWqvu2pl+k0fy7MWtj9r/tN5q/02z89qa/L4Dc2LvM93kezPfXlME/O86EbY/V9GB9ePX8G1/6W+/9h1dq/HGfTfzT3j/xNo7522Bfnqe5jO/fvhVthlfk434v3iO9zG/UOphyPeinPl1J8Gtaa7xPTa/Dk+RIs4deMvwGvcGsmsCvJ0AAAAABJRU5ErkJggg==');\r\n}\r\n.mydoc_code_pre{\r\n    padding: 1.2em 1.4em;\r\n    line-height: 1.5em;\r\n    margin: 0;\r\n}", ""]);

// exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc{\r\n    font-size: 14px;\r\n    overflow: hidden;\r\n}", ""]);

// exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_h1{\r\n    margin: 0 0 1em;\r\n}\r\n.mydoc_h1_a{\r\n    color: #2c3e50;\r\n    text-decoration: none;\r\n    font-size: 2em;\r\n}\r\n.mydoc_h1_h1{\r\n    margin: 45px 0 8px;\r\n    padding-bottom: 7px;\r\n    font-size: 28px;\r\n}\r\n.mydoc_h1_content{\r\n\r\n}", ""]);

// exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_h2{\r\n    margin: 35px 0 0.8em;\r\n}\r\n.mydoc_h2_a{\r\n    font-size: 1.5em;\r\n    text-decoration: none;\r\n    color: #2c3e50;\r\n}\r\n.mydoc_h2_a::before{\r\n    content: '';\r\n    display: block;\r\n    margin-top: -40px;\r\n    height: 40px;\r\n    visibility: hidden;\r\n}\r\n.mydoc_h2_h2{\r\n    margin: 5px 0 8px;\r\n    border-bottom: 1px solid #ddd;\r\n    font-size: 22px;\r\n    padding-bottom: 1em;\r\n}\r\n.mydoc_h2_content{\r\n\r\n}", ""]);

// exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_h3{\r\n    margin: 35px 0 0.8em;\r\n}\r\n.mydoc_h3_a{\r\n    font-size: 1.3em;\r\n    text-decoration: none;\r\n    color: #2c3e50;\r\n}\r\n.mydoc_h3_a::before{\r\n    content: '';\r\n    display: block;\r\n    margin-top: -30px;\r\n    height: 30px;\r\n    visibility: hidden;\r\n}\r\n.mydoc_h3_h3{\r\n    margin: 5px 0 8px;\r\n    border-bottom: 1px solid #ddd;\r\n    font-size: 18px;\r\n    padding-bottom: .6em;\r\n}\r\n.mydoc_h3_content{\r\n\r\n}", ""]);

// exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_h4{\r\n    margin: 35px 0 0.8em;\r\n}\r\n.mydoc_h4_a{\r\n    font-size: 1.2em;\r\n    text-decoration: none;\r\n    color: #2c3e50;\r\n}\r\n.mydoc_h4_a::before{\r\n    content: '';\r\n    display: block;\r\n    margin-top: -20px;\r\n    height: 20px;\r\n    visibility: hidden;\r\n}\r\n.mydoc_h4_h4{\r\n    margin: 5px 0 8px;\r\n    border-bottom: 1px solid #ddd;\r\n    font-size: 16px;\r\n    padding-bottom: 0.3em;\r\n}\r\n.mydoc_h4_content{\r\n\r\n}", ""]);

// exports


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_img{\r\n    display: block;\r\n    max-width: 100%;\r\n}", ""]);

// exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ":not(.mydoc_li) + .mydoc_li, .mydoc_li:first-child{\r\n    margin-top: 10px;\r\n}\r\n.mydoc_li + .mydoc_li{\r\n    margin-top: -10px;\r\n}\r\n\r\n.mydoc_li{\r\n    margin: 0;\r\n    color: #34495e;\r\n    margin-bottom: 10px;\r\n    position: relative;\r\n}", ""]);

// exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_p{\r\n    line-height: 1.6em;\r\n    margin: 1.2em 0 -1.2em;\r\n    padding-bottom: 1.2em;\r\n    position: relative;\r\n    z-index: 1;\r\n    color: #333;\r\n}", ""]);

// exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_table{\r\n    margin : 15px 0px 0px ;\r\n    padding : 0px ;\r\n    border : 1px solid rgb(170, 170, 170) ;\r\n    border-collapse : collapse ;\r\n    width : 100% ;\r\n    color : rgb(0, 0, 0) ;\r\n    font-size : 14px ;\r\n    background-color : rgb(253, 252, 248) ;\r\n}\r\n\r\n.mydoc_table .mydoc_tr{\r\n    margin : 0px ;\r\n    padding : 0px ;\r\n    border : 0px ;\r\n    background-color : rgb(255, 255, 255) ;\r\n}\r\n.mydoc_table .mydoc_tr:nth-child(odd){\r\n    background-color : rgb(245, 245, 245) ;\r\n}\r\n.mydoc_table .mydoc_tr:nth-child(1){\r\n    background-color : rgb(63, 63, 63);\r\n}\r\n\r\n.mydoc_table .mydoc_th{\r\n    margin : 0px ;\r\n    padding : 5px 15px 5px 6px ;\r\n    border : 1px solid rgb(63, 63, 63) ;\r\n    vertical-align : baseline ;\r\n    background-color : rgb(63, 63, 63) ;\r\n    text-align : left ;\r\n    color : rgb(255, 255, 255) ;\r\n    width : 123px ;\r\n    word-break: break-all;\r\n    font-weight: normal;\r\n}\r\n\r\n.mydoc_table .mydoc_td{\r\n    margin : 0px ;\r\n    padding : 6px 15px 6px 6px ;\r\n    border : 1px solid rgb(170, 170, 170) ;\r\n    vertical-align : text-top ;\r\n    word-break: break-all;\r\n}\r\n.mydoc_table .mydoc_td{\r\n    margin : 0px ;\r\n    padding : 6px 15px 6px 6px ;\r\n    border : 1px solid rgb(170, 170, 170) ;\r\n    vertical-align : text-top ;\r\n}", ""]);

// exports


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_a{\r\n    color: #42b983;\r\n    font-weight: 400;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}", ""]);

// exports


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_span{\r\n    padding: 2px 4px;\r\n    font-size: 90%;\r\n    color: #c7254e;\r\n    background-color: #f9f2f4;\r\n    border-radius: 4px;\r\n}", ""]);

// exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_strong{\r\n    font-weight: 600;\r\n    color: #2c3e50;\r\n}", ""]);

// exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports
exports.i(__webpack_require__(69), "");
exports.i(__webpack_require__(67), "");
exports.i(__webpack_require__(68), "");
exports.i(__webpack_require__(70), "");
exports.i(__webpack_require__(71), "");
exports.i(__webpack_require__(72), "");
exports.i(__webpack_require__(73), "");
exports.i(__webpack_require__(78), "");
exports.i(__webpack_require__(74), "");
exports.i(__webpack_require__(75), "");
exports.i(__webpack_require__(76), "");
exports.i(__webpack_require__(77), "");
exports.i(__webpack_require__(79), "");
exports.i(__webpack_require__(80), "");
exports.i(__webpack_require__(81), "");

// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_blockquote{\r\n    padding: 12px 5px 12px 30px;\r\n    margin: 2em 0 0 8px;\r\n    border-width: 0;\r\n    border-left: 4px solid #f66;\r\n    background-color: #f8f8f8;\r\n    position: relative;\r\n    border-bottom-right-radius: 2px;\r\n    border-top-right-radius: 2px;\r\n    line-height: 1.6em;\r\n}\r\n.mydoc_blockquote::before{\r\n    position: absolute;\r\n    top: 14px;\r\n    left: -12px;\r\n    background-color: #f66;\r\n    color: #fff;\r\n    content: \"!\";\r\n    width: 20px;\r\n    height: 20px;\r\n    text-align: center;\r\n    line-height: 20px;\r\n    font-weight: bold;\r\n    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;\r\n    font-size: 14px;\r\n    border-radius: 10px;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports
exports.i(__webpack_require__(7), "");

// module
exports.push([module.i, ".mydoc_code{\r\n    overflow-x: auto;\r\n    position: relative;\r\n    background-color: #f8f8f8;\r\n    padding: 0;\r\n    line-height: 1.1em;\r\n    border-radius: 2px;\r\n    margin: 1.2em 0;\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AgMAAABHkjHhAAAACVBMVEWAgIBaWlo+Pj7rTFvWAAAAA3RSTlMHCAw+VhR4AAAA+klEQVQoz4WSMW7EQAhFPxKWNh2FCx+HkaZI6RRb5DYbyVfIJXLKDCFoMbaTKSw/8ZnPAPjaH2xgZcUNUDADD7D9LtDBCLZ45fbkvo/30K8yeI64pPwl6znd/3n/Oe93P3ho9qeh72btTFzqkz0rsJle8Zr81OLEwZ1dv/713uWqvu2pl+k0fy7MWtj9r/tN5q/02z89qa/L4Dc2LvM93kezPfXlME/O86EbY/V9GB9ePX8G1/6W+/9h1dq/HGfTfzT3j/xNo7522Bfnqe5jO/fvhVthlfk434v3iO9zG/UOphyPeinPl1J8Gtaa7xPTa/Dk+RIs4deMvwGvcGsmsCvJ0AAAAABJRU5ErkJggg==');\r\n}\r\n.mydoc_code_pre{\r\n    padding: 1.2em 1.4em;\r\n    line-height: 1.5em;\r\n    margin: 0;\r\n}", ""]);

// exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc{\r\n    font-size: 14px;\r\n    overflow: hidden;\r\n}", ""]);

// exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_h1{\r\n    margin: 0 0 1em;\r\n}\r\n.mydoc_h1_a{\r\n    color: #2c3e50;\r\n    text-decoration: none;\r\n    font-size: 2em;\r\n}\r\n.mydoc_h1_h1{\r\n    margin: 45px 0 8px;\r\n    padding-bottom: 7px;\r\n    font-size: 28px;\r\n}\r\n.mydoc_h1_content{\r\n\r\n}", ""]);

// exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_h2{\r\n    margin: 35px 0 0.8em;\r\n}\r\n.mydoc_h2_a{\r\n    font-size: 1.5em;\r\n    text-decoration: none;\r\n    color: #2c3e50;\r\n}\r\n.mydoc_h2_a::before{\r\n    content: '';\r\n    display: block;\r\n    margin-top: -40px;\r\n    height: 40px;\r\n    visibility: hidden;\r\n}\r\n.mydoc_h2_h2{\r\n    margin: 5px 0 8px;\r\n    border-bottom: 1px solid #ddd;\r\n    font-size: 22px;\r\n    padding-bottom: 1em;\r\n}\r\n.mydoc_h2_content{\r\n\r\n}", ""]);

// exports


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_h3{\r\n    margin: 35px 0 0.8em;\r\n}\r\n.mydoc_h3_a{\r\n    font-size: 1.3em;\r\n    text-decoration: none;\r\n    color: #2c3e50;\r\n}\r\n.mydoc_h3_a::before{\r\n    content: '';\r\n    display: block;\r\n    margin-top: -30px;\r\n    height: 30px;\r\n    visibility: hidden;\r\n}\r\n.mydoc_h3_h3{\r\n    margin: 5px 0 8px;\r\n    border-bottom: 1px solid #ddd;\r\n    font-size: 18px;\r\n    padding-bottom: .6em;\r\n}\r\n.mydoc_h3_content{\r\n\r\n}", ""]);

// exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_h4{\r\n    margin: 35px 0 0.8em;\r\n}\r\n.mydoc_h4_a{\r\n    font-size: 1.2em;\r\n    text-decoration: none;\r\n    color: #2c3e50;\r\n}\r\n.mydoc_h4_a::before{\r\n    content: '';\r\n    display: block;\r\n    margin-top: -20px;\r\n    height: 20px;\r\n    visibility: hidden;\r\n}\r\n.mydoc_h4_h4{\r\n    margin: 5px 0 8px;\r\n    border-bottom: 1px solid #ddd;\r\n    font-size: 16px;\r\n    padding-bottom: 0.3em;\r\n}\r\n.mydoc_h4_content{\r\n\r\n}", ""]);

// exports


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_img{\r\n    display: block;\r\n    max-width: 100%;\r\n}", ""]);

// exports


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ":not(.mydoc_li) + .mydoc_li, .mydoc_li:first-child{\r\n    margin-top: 10px;\r\n}\r\n.mydoc_li + .mydoc_li{\r\n    margin-top: -10px;\r\n}\r\n\r\n.mydoc_li{\r\n    margin: 0;\r\n    color: #34495e;\r\n    margin-bottom: 10px;\r\n    position: relative;\r\n}", ""]);

// exports


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_p{\r\n    line-height: 1.6em;\r\n    margin: 1.2em 0 -1.2em;\r\n    padding-bottom: 1.2em;\r\n    position: relative;\r\n    z-index: 1;\r\n    color: #333;\r\n}", ""]);

// exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_table{\r\n    margin : 15px 0px 0px ;\r\n    padding : 0px ;\r\n    border : 1px solid rgb(170, 170, 170) ;\r\n    border-collapse : collapse ;\r\n    width : 100% ;\r\n    color : rgb(0, 0, 0) ;\r\n    font-size : 14px ;\r\n    background-color : rgb(253, 252, 248) ;\r\n}\r\n\r\n.mydoc_table .mydoc_tr{\r\n    margin : 0px ;\r\n    padding : 0px ;\r\n    border : 0px ;\r\n    background-color : rgb(255, 255, 255) ;\r\n}\r\n.mydoc_table .mydoc_tr:nth-child(odd){\r\n    background-color : rgb(245, 245, 245) ;\r\n}\r\n.mydoc_table .mydoc_tr:nth-child(1){\r\n    background-color : rgb(63, 63, 63);\r\n}\r\n\r\n.mydoc_table .mydoc_th{\r\n    margin : 0px ;\r\n    padding : 5px 15px 5px 6px ;\r\n    border : 1px solid rgb(63, 63, 63) ;\r\n    vertical-align : baseline ;\r\n    background-color : rgb(63, 63, 63) ;\r\n    text-align : left ;\r\n    color : rgb(255, 255, 255) ;\r\n    width : 123px ;\r\n    word-break: break-all;\r\n    font-weight: normal;\r\n}\r\n\r\n.mydoc_table .mydoc_td{\r\n    margin : 0px ;\r\n    padding : 6px 15px 6px 6px ;\r\n    border : 1px solid rgb(170, 170, 170) ;\r\n    vertical-align : text-top ;\r\n    word-break: break-all;\r\n}\r\n.mydoc_table .mydoc_td{\r\n    margin : 0px ;\r\n    padding : 6px 15px 6px 6px ;\r\n    border : 1px solid rgb(170, 170, 170) ;\r\n    vertical-align : text-top ;\r\n}", ""]);

// exports


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_a{\r\n    color: #42b983;\r\n    font-weight: 400;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}", ""]);

// exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_span{\r\n    padding: 2px 4px;\r\n    font-size: 90%;\r\n    color: #c7254e;\r\n    background-color: #f9f2f4;\r\n    border-radius: 4px;\r\n}", ""]);

// exports


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".mydoc_strong{\r\n    font-weight: 600;\r\n    color: #2c3e50;\r\n}", ""]);

// exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */



/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

module.exports = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-(\w+)\b/i;
var uniqueId = 0;

var _ = _self.Prism = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function (o) {
			var type = _.util.type(o);

			switch (type) {
				case 'Object':
					var clone = {};

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key]);
						}
					}

					return clone;

				case 'Array':
					return o.map(function(v) { return _.util.clone(v); });
			}

			return o;
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];

			if (arguments.length == 2) {
				insert = arguments[1];

				for (var newToken in insert) {
					if (insert.hasOwnProperty(newToken)) {
						grammar[newToken] = insert[newToken];
					}
				}

				return grammar;
			}

			var ret = {};

			for (var token in grammar) {

				if (grammar.hasOwnProperty(token)) {

					if (token == before) {

						for (var newToken in insert) {

							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					ret[token] = grammar[token];
				}
			}

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === root[inside] && key != inside) {
					this[key] = ret;
				}
			});

			return root[inside] = ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function(o, callback, type, visited) {
			visited = visited || {};
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, null, visited);
					}
					else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || container.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		if (element.parentNode) {
			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		_.hooks.run('before-sanity-check', env);

		if (!env.code || !env.grammar) {
			if (env.code) {
				_.hooks.run('before-highlight', env);
				env.element.textContent = env.code;
				_.hooks.run('after-highlight', env);
			}
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				env.highlightedCode = evt.data;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(env.element);
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
		}
	},

	highlight: function (text, grammar, language) {
		var tokens = _.tokenize(text, grammar);
		return Token.stringify(_.util.encode(tokens), language);
	},

	matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
		var Token = _.Token;

		for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			if (token == target) {
				return;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					pattern.lastIndex = 0;

					var match = pattern.exec(str),
					    delNum = 1;

					// Greedy patterns can override/remove up to two previously matched tokens
					if (!match && greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						/*
						 * If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						 * If strarr[k - 1] is greedy we are in conflict with another greedy pattern
						 */
						if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					}

					if (!match) {
						if (oneshot) {
							break;
						}

						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1].length;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						++i;
						pos += before.length;
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);

					if (delNum != 1)
						_.matchGrammar(text, strarr, grammar, i, pos, true, token);

					if (oneshot)
						break;
				}
			}
		}
	},

	tokenize: function(text, grammar, language) {
		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		_.matchGrammar(text, strarr, grammar, 0, 0, false);

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	}
};

var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
};

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (_.util.type(o) === 'Array') {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (o.alias) {
		var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';

};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _self.Prism;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _self.Prism;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (!_.manual && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _self.Prism;

})();

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': /<!DOCTYPE[\s\S]+?>/i,
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
				inside: {
					'punctuation': [
						/^=/,
						{
							pattern: /(^|[^\\])["']/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

Prism.languages.css = {
	'comment': /\/\*[\s\S]*?\*\//,
	'atrule': {
		pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	'url': /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	'selector': /[^{}\s][^{};]*?(?=\s*\{)/,
	'string': {
		pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
	'important': /\B!important\b/i,
	'function': /[-a-z0-9]+(?=\()/i,
	'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
			lookbehind: true,
			inside: Prism.languages.css,
			alias: 'language-css',
			greedy: true
		}
	});

	Prism.languages.insertBefore('inside', 'attr-value', {
		'style-attr': {
			pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
			inside: {
				'attr-name': {
					pattern: /^\s*style/i,
					inside: Prism.languages.markup.tag.inside
				},
				'punctuation': /^\s*=\s*['"]|['"]\s*$/,
				'attr-value': {
					pattern: /.+/i,
					inside: Prism.languages.css
				}
			},
			alias: 'language-css'
		}
	}, Prism.languages.markup.tag);
}

/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
	'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
		alias: 'function'
	}
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|[^\\`])*`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\$\{[^}]+\}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'script': {
			pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript,
			alias: 'language-javascript',
			greedy: true
		}
	});
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	self.Prism.fileHighlight = function() {

		var Extensions = {
			'js': 'javascript',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell',
			'sh': 'bash',
			'bat': 'batch',
			'h': 'c',
			'tex': 'latex'
		};

		Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
			var src = pre.getAttribute('data-src');

			var language, parent = pre;
			var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}

			if (parent) {
				language = (pre.className.match(lang) || [, ''])[1];
			}

			if (!language) {
				var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
				language = Extensions[extension] || extension;
			}

			var code = document.createElement('code');
			code.className = 'language-' + language;

			pre.textContent = '';

			code.textContent = 'Loading…';

			pre.appendChild(code);

			var xhr = new XMLHttpRequest();

			xhr.open('GET', src, true);

			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {

					if (xhr.status < 400 && xhr.responseText) {
						code.textContent = xhr.responseText;

						Prism.highlightElement(code);
					}
					else if (xhr.status >= 400) {
						code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
					}
					else {
						code.textContent = '✖ Error: File does not exist or is empty';
					}
				}
			};

			xhr.send(null);
		});

	};

	document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);

})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(98)))

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(52);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(53);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(54);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(55);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(56);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(57);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(58);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(59);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(61);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(62);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(63);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(64);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(65);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(66);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 98 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_99__;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ })
/******/ ]);
});
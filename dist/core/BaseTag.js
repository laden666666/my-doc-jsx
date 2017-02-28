"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by njz on 17/2/28.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 定义基础标签,所有标签都是继承继承标签的
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * 基础标签,所有标签都是继承继承标签的
 */
var BaseTag = function (_Component) {
  _inherits(BaseTag, _Component);

  function BaseTag() {
    _classCallCheck(this, BaseTag);

    return _possibleConstructorReturn(this, (BaseTag.__proto__ || Object.getPrototypeOf(BaseTag)).apply(this, arguments));
  }

  return BaseTag;
}(_react.Component);

exports.default = BaseTag;
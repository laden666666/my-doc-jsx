"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (file, option) {
  return reactTools.transform(file, option);
};

/**
 * Created by njz on 17/2/28.
 * 将jsx文件转换为js文件
 */
var reactTools = require("react-tools");
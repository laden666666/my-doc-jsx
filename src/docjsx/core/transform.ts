/**
 * Created by njz on 17/2/28.
 * 将jsx文件转换为js文件
 */
declare function require(name: string): any
var babel = require("babel-standalone");

/**
 * 将jsx文本转为目标文本
 * @param jsxStr				jsx文本
 * @param option				转换配置。保留参数
 * @returns {*|string}
 */
export default function (jsxStr: string, option: any) {
	//文档如果省略了最初的<doc>标签，会自动补充该标签
    jsxStr = jsxStr.trim()
    jsxStr = !jsxStr.startsWith("<doc>") ? "<doc>" + jsxStr + "</doc>" : jsxStr

    var code = babel.transform(jsxStr, {
		"presets": [
			"es2015",
			"react",
			"stage-2"
		],
		"plugins": []
	}).code;
	return code.substr(code.indexOf("React"));
}



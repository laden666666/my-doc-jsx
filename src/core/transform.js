/**
 * Created by njz on 17/2/28.
 * 将jsx文件转换为js文件
 */
var babel = require("babel-standalone");

export default function (file, option) {
    var code = babel.transform("<blog>" + file + "</blog>", {
	  "presets": [
	    "es2015",
	    "react",
	    "stage-2"
	  ],
	  "plugins": []
	}).code;
	return code.substr(code.indexOf("React"));
}



/**
 * Created by njz on 17/2/28.
 */
var fs = require("fs");
var myBlogTheme = require("../dist/index").default;
var text = fs.readFileSync("./test/text.jsx", "utf-8");
var script = myBlogTheme.out(text);
console.log(script);
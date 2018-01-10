var path = require('path');
var fs = require('fs-extra');
require('babel-register')({});
var myDocJsx = require('../index.js');

/**
 *
 * @param file
 * @param output
 * @param type
 * @param plugins
 */
module.exports = function (file, output, type, plugins) {
    file = path.resolve(process.cwd(), file)
    output = path.resolve(process.cwd(), output)

    fs.readFile(file).then(function (jsxStr) {
        console.log(myDocJsx.out(jsxStr.toString()))

    })
}
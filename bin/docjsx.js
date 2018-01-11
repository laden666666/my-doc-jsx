#!/usr/bin/env node
var program = require('commander');
var fileConverter = require('../src/fileConverter')

program.version('v' + require('../package.json').version)
    .description('Manipulate asar archive files')

//转换函数，将jsx文件转为制定的格式
program.command('convert <type> <file> <output>')
    .alias('c')
    .option('-p, --plugin <pluginName>', 'Add plugin. multiple plugins are separated by commas, such as: -p api,path')
    .description('convert jsx file into specified type file')
    .action(function (type, file, output, option) {
        fileConverter(file, output, type, (option.plugin || '').split(','))
    })

//可转换的格式列表。目前支持html、markdown。未来会支持doc
program.command('list')
    .alias('l')
    .description('list the types of conversion support')
    .action(function () {
        console.log('html, markdown');
    })


program.parse(process.argv)

if (program.args.length === 0) {
    program.help()
}
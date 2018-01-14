#!/usr/bin/env node
var program = require('commander');
var fileConverter = require('../src/cli')

program.version('v' + require('../package.json').version)
    .description('Manipulate asar archive files')

//转换函数，将jsx文件转为制定的格式
program.command('convert <format> <file> <output>')
    .alias('c')
    .option('-p, --plugin <pluginName>', 'Add plugin. multiple plugins are separated by commas, such as: -p api,path')
    .option('-w, --watch', 'Add plugin. multiple plugins are separated by commas, such as: -p api,path')
    .description('convert jsx file into specified format file')
    .action(function (format, file, output, option) {
        fileConverter(file, output, format, {
            plugins: (option.plugin || '').split(','),
            watch: !!option.watch
        })
    })

//可转换的格式列表。目前支持html、markdown。未来会支持doc
program.command('list')
    .alias('l')
    .description('list the formats of conversion support')
    .action(function () {
        console.log('html', '\t--html');
        console.log('md', '\t--markdown');
    })


program.parse(process.argv)

if (program.args.length === 0) {
    program.help()
}
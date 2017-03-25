var path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "./dist"),
        libraryTarget: 'umd',
        umdNamedDefine: true,
        filename: 'my-blog-theme.js',
        library: 'myBlogTheme'
    },
    module: {
        loaders: [
            {
                test: /\.js*$/,
                loader: 'babel-loader',
                include: [
                    // 只去解析运行目录下的 src 和 demo 文件夹
                    path.join(process.cwd(), './src')
                ],
            }
        ]
    },
    externals: {
        'React': true
    }
}
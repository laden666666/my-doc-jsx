var gulp = require('gulp')
var minifycss = require('gulp-minify-css')
var concat = require('gulp-concat')
//语法检查
//压缩css
gulp.task('minifycss', function() {
    return gulp.src('src/render/**/*.css')    //需要操作的文件
        .pipe(concat('myDocJsx.min.css'))
        .pipe(minifycss())   //执行压缩
        .pipe(gulp.dest('dist'));   //输出文件夹
});
//默认命令,在cmd中输入gulp后,执行的就是这个任务(压缩js需要在检查js之后操作)
gulp.task('default', function() {
    gulp.start('minifycss');
});
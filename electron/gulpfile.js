var gulp = require('gulp'),  
    cssmin = require('gulp-minify-css'),             //css压缩  
    uglify = require('gulp-uglify'),               //js压缩  
    imagemin = require('gulp-imagemin'),            //图片的压缩 
    htmlmin = require('gulp-htmlmin'),              //html的压缩  
    babel = require('gulp-babel'),
    gutil = require('gulp-util'),
    less = require('gulp-less'),
    rename = require('gulp-rename');

// pages 部分
gulp.task('esfless', function () {  
    gulp.src('pages/css/*/*.css')
        .pipe(gulp.dest('dist/css'));  
});

gulp.task('esfjs', function() {
        gulp.src('pages/js/*/*.js')
            .pipe(babel({
                presets: ['es2015'] // es5检查机制
            }))
            .pipe(uglify())
            .on('error', function(err) {
                gutil.log(gutil.colors.red('[Error]'), err.toString());
            })
            .pipe(gulp.dest('dist/js'))
    })
gulp.task('esfimg', function () {  
    gulp.src('pages/*/*.{png,jpg,gif,ico}')  
        .pipe(imagemin({  
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）  
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片  
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染  
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化  
        })) 
        .pipe(gulp.dest('dist/img'));  
});
gulp.task('esfhtml', function () {  
    var options = {  
        removeComments: true,//清除HTML注释  
        collapseWhitespace: true,//压缩HTML  
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />  
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />  
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"  
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"  
        minifyJS: true,//压缩页面JS  
        minifyCSS: true//压缩页面CSS  
    };  
    gulp.src('pages/*.html')  
        .pipe(htmlmin(options))  
        .pipe(gulp.dest('dist'));  
});  

gulp.task('destmain', function () {  
    gulp.src('main.js') 
        .pipe(rename('index.js')) 
        .pipe(gulp.dest('dist'));
        
});
gulp.task('default', [
        'esfless',
        'esfjs',
        'esfimg',
        'esfhtml',
        'destmain'
    ]
);  
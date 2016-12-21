var gulp = require('gulp') ,
watch = require("gulp-watch")
postCss = require("gulp-postcss")
autoPrefixer = require("autoprefixer")
cssVars = require("postcss-simple-vars")
nested = require("postcss-nested")
;

gulp.task('default',function(){
    console.log('default task');
});

gulp.task('html', function(){
console.log("html changes");
});

gulp.task('styles', function(){
    gulp.src('./app/assets/styles/styles.css')
        .pipe(postCss([   cssVars , 
                         nested ,
                          autoPrefixer  ]))
        .pipe(gulp.dest('./app/temp/styles'))
});

gulp.task('watch', function(){

    console.log('watch');

    watch("./app/index.html",function(){
        gulp.start("html");
    });

    watch("./app/assets/styles/**/*.css",function(){
        gulp.start("styles");
    });

});




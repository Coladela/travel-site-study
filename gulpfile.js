var gulp = require('gulp') ,
watch = require("gulp-watch")
;
gulp.task('default',function(){
    console.log('default task');
});

gulp.task('html', function(){
console.log("html changes");
});

gulp.task('styles', function(){
    gulp.src('./app/assets/styles/styles.css')
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




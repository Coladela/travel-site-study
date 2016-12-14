var gulp = require('gulp') ,
watch = require("gulp-watch")
;
gulp.task('default',function(){
    console.log('default task');
});

gulp.task('html', function(){
console.log("imagine");
});

gulp.task('styles', function(){
console.log("styles");
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




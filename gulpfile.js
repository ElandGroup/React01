const gulp =require('gulp');
const browserSync =require('browser-sync').create();

gulp.task('serve',function () {
    browserSync.init({
        server:{
            baseDir:"app"
        },
        port:178
    });
})



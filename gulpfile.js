let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let rename = require('gulp-rename');
let browserSync = require('browser-sync').create();

//SASS
gulp.task('sass', function () {
    return gulp.src('./scss/style.scss')
        .pipe(sass())
        .pipe(rename('otm_bs5.2.css'))
        .pipe(gulp.dest('app/css'))
});

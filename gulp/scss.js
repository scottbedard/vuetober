var autoprefixer = require('gulp-autoprefixer'),
    gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');

//
// Compile SCSS
//
module.exports = function(path, filename, output_dir) {
    return gulp.src('./assets/scss/app.scss')
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>"),
        }))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false,
        }))
        .pipe(minifycss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./assets/compiled'))
        .pipe(notify({
            message: "SCSS compiled.",
        }));
};

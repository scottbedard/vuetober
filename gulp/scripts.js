var babelify = require('babelify'),
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    gulp = require('gulp'),
    notify = require('gulp-notify'),
    stringify = require('stringify'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

//
// JavaScript compilation
//
module.exports = function() {
    return browserify('./assets/js/app.js', {
            debug: true,
            extensions: ['.js', '.htm'],
            paths: ['./node_modules', './assets/js'],
        })
        .transform(stringify({
            extensions: ['.htm'],
            minify: true,
            minifier: { extensions: ['.htm'] },
        }))
        .transform(babelify)
        .bundle()
        .on('error', notify.onError({
            title: "Javascript compilation error",
            message: "<%= error.message %>"
        }))
        .pipe(source('app.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./assets/compiled'))
        .pipe(notify({ message: 'Javascript compiled!', onLast: true }));
};

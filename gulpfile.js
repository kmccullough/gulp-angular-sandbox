var gulp = require('gulp');
var sass = require('gulp-sass');
var transform = require('gulp-transform');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass-pre', function(cb) {
    gulp.src('app/**/*.scss')
        .pipe(transform(function(contents) {
            return contents.toString('utf-8')
                .replace(/\/\*.*\*\/(\n)?/g, '');
        }))
        .pipe(gulp.dest('build/pre'));
    cb();
});


gulp.task('sass', ['sass-pre'], function() {
    return gulp.src('build/pre/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/dist'));
});

gulp.task('default', ['sass']);
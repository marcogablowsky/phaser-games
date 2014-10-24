var gulp = require('gulp');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var bases = {
    app: '/',
    dist: 'dist/'
};

var paths = {
    scripts: ['src/**/*.js'],
    html: ['index.html']
};

// Delete the dist directory
gulp.task('clean', function() {
    return gulp.src(bases.dist)
        .pipe(clean());
});

gulp.task('scripts', ['clean'], function() {
    gulp.src(paths.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('geostrike.min.js'))
        .pipe(gulp.dest(bases.dist + 'scripts/'));
});

gulp.task('default',['clean', 'scripts']);

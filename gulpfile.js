var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default', ['css', 'javascript'], function() {
    browserSync.init({
        server: "./front"
    });

    gulp.watch("front/origin/assets/js/*.js", ["javascript"]).on('change', browserSync.reload);
    gulp.watch("front/origin/assets/stylesheets/**/*.scss", ['css']);
    gulp.watch("front/*.html").on('change', browserSync.reload);
});

gulp.task('img', function() {
    gulp.src('front/origin/assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('front/public/assets/img'));
});

gulp.task('javascript', function() {
    gulp.src('front/origin/assets/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('front/public/assets/js'));
});

gulp.task('css', function(){
    return gulp.src('front/origin/assets/stylesheets/**/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('front/public/assets/css'))
        .pipe(browserSync.stream());
});
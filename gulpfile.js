const gulp = require('gulp');
const sass = require('gulp-sass');
const twig = require('gulp-twig');
const webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    return gulp.src('./build/')
        .pipe(webserver({
            host: 'localhost',
            port: 3000,
            livereload: true,
            open: true,
            fallback: './build/index.html'
        }));
});

gulp.task('sass', function () {
    return gulp.src('./src/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/assets/css'));
});

gulp.task('fonts', function () {
    return gulp.src('./src/assets/fonts/**/*')
        .pipe(gulp.dest('./build/assets/fonts'))
});

gulp.task('img', function () {
    return gulp.src('./src/assets/img/**/*')
        .pipe(gulp.dest('./build/assets/img'))
});

gulp.task('js', function () {
    return gulp.src('./src/assets/js/**/*.js')
        .pipe(gulp.dest('./build/assets/js'))
});

gulp.task('twig', function () {
    const files = [
        "./src/views/index.twig"
    ];

    return gulp.src(files)
        .pipe(twig())
        .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*', ['default']);
});

gulp.task('default', ['sass', 'js', 'img', 'twig', 'fonts']);
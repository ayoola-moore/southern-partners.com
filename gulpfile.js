var gulp = require('gulp'),
    plumber= require('gulp-plumber'),
    watch = require('gulp-watch'),
    sass= require('gulp-sass'),
    fs = require('fs'),
    connect = require('gulp-connect');

    
gulp.task('sass', function () {
 return gulp.src('scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('connect', function() {
    connect.server({
        root: 'dev',
        livereload: true,
        port: 8888
    });
});

gulp.task('watch', function (){
    return watch('scss/**/*.scss', {
        events: ['add', 'change', 'unlink']
    }, function(vinylFile) {
        if (vinylFile.event === 'unlink') {
            var fileName = vinylFile.basename.replace('.scss', '.css');
            fs.unlink('css/' + fileName, function(err) {
                if (err) {
                    console.log('error removing file ' + fileName);
                } else {
                    console.log('successfully removed file ' + fileName);
                }
            });
        }
    })
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('plumber', function(){
    console.log("plumber working !!!");
})
    
gulp.task('default', [
    'sass',
    'watch',
    'connect',
]);
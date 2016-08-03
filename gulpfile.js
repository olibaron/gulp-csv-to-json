var gulp = require('gulp');
var csvToJson = require('gulp-csv-to-json');

gulp.task('csvToJson', function () {
    return gulp
    	.src('src/**/*.csv')
        .pipe(csvToJson({}))
        .pipe(gulp.dest('dist'));
});
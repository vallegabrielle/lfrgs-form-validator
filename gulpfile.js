'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('build', function(done) {

    return gulp.src('./index.js')
    .pipe(webpack({
        mode: "production",
        output: {
            filename: "FormValidator.js"
        }
    }))
    .pipe(gulp.dest('./dist'))
    .on('end', done);

})



gulp.task('demo', function(done) {

    return gulp.src('./demo.js')
    .pipe(webpack({
        mode: "production",
        output: {
            filename: "main.js"
        }
    }))
    .pipe(gulp.dest('./demo'))
    .on('end', done);

})

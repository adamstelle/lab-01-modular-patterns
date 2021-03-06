'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('test', function() {
  gulp.src('./test/*-test.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('lint', function(){
  return gulp.src(['**/*.js','!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('dev', function() {
  gulp.watch(['**/*.js', '!node_modules/**'],['test', 'lint']);
});

gulp.task('default', function() {
  console.log('Now tracking all updates & additions to your node modules...');
  gulp.watch(['node_modules/**'],[function(){
    console.log('You added or changed your modules!');
  }]);
});

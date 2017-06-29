var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
// var concat = require('gulp-concat');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');

gulp.task('css', function(){
	gulp.src('src/sass/*.sass')
		.pipe(sass({outputStyle:'compressed'}))
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(gulp.dest('styles'))
});

gulp.task('html', function(){
	gulp.src('src/pug/*.pug')
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest('./'))
});

// gulp.task('js', function(){
// 	gulp.src([
// 		'bower_components/jquery/dist/jquery.js',
// 		'bower_components/modernizr/src/modernizr.js'
// 		])
// 		.pipe(concat('output.min.js'))
// 		.pipe(uglify())
// 		.pipe(gulp.dest('build/js'))
// });

gulp.task('watch', function(){
	gulp.watch('src/sass/*.sass', ['css']);
	gulp.watch('src/pug/*.pug', ['html']);
});

// gulp.task('default', ['html', 'css', 'js']);
gulp.task('default', ['html','css']);
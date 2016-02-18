'use strict';

import gulp from 'gulp';
import del from 'del';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import gulpLoadPlugins from 'gulp-load-plugins';

const path = (() => {

	const root = './';

	return {
		root,
		dev: root + 'dev/',
		dist: root + 'dist/'
	}
})();

const NAME = 'no-sheet-reset';
const $ = gulpLoadPlugins({lazy: true});

gulp.task('del', () => del(path.dist));

gulp.task('test', () => gulp
	.src(path.dev + '*.scss')
	.pipe($.sassLint())
	.pipe($.sassLint.format())
	.pipe($.sassLint.failOnError())
);

gulp.task('sass', () => gulp
	.src(path.dev + '*.scss')
	.pipe($.sass({outputStyle: 'expanded'}).on('error', $.sass.logError))
	.pipe($.postcss([autoprefixer({browsers: ['last 2 versions']})]))
	.pipe(gulp.dest(path.dist))
);

gulp.task('get-minified-css', () => gulp
	.src(path.dist + NAME + '.css')
	.pipe($.rename({suffix: '.min'}))
	.pipe($.postcss([cssnano]))
	.pipe(gulp.dest(path.dist))
);

gulp.task('get-scss', () => gulp
	.src(path.dev + NAME + '.scss')
	.pipe($.rename({prefix: '_'}))
	.pipe(gulp.dest(path.dist))
);

gulp.task('default', gulp.series('test', 'del', 'sass', 'get-minified-css', 'get-scss'));

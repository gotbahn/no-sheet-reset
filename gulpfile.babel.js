'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import del from 'del';
import rename from 'gulp-rename';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const path = (() => {

	const root = './';

	return {
		root,
		dev: root + 'dev/',
		dist: root + 'dist/'
	}
})();

const NAME = 'no-sheet-reset';

gulp.task('del', () => del(path.dist));

gulp.task('sass', () => gulp
	.src(path.dev + '*.scss')
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
	.pipe(gulp.dest(path.dist))
);

gulp.task('get-minified-css', () => gulp
	.src(path.dist + NAME + '.css')
	.pipe(rename({suffix: '.min'}))
	.pipe(postcss([cssnano]))
	.pipe(gulp.dest(path.dist))
);

gulp.task('get-scss', () => gulp
	.src(path.dev + NAME + '.scss')
	.pipe(rename({prefix: '_'}))
	.pipe(gulp.dest(path.dist))
);

gulp.task('default', gulp.series('del', 'sass', 'get-minified-css', 'get-scss'));

/* Gulp packages */
var gulp = require('gulp'),
    path = require('path'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css'),
    angularTemplates = require('gulp-angular-templates');
    plumber      = require('gulp-plumber');
    less         = require('gulp-less');
    autoprefixer = require('gulp-autoprefixer');
    sourcemaps   = require('gulp-sourcemaps');

/* Global variables */
var application_name = 'application';

/* DIRS */
var assets_dir = 'assets';
var static_dir = 'staticfiles';
var bower_dir = 'bower_components';
var less_dir = assets_dir + '/less';
var js_dir = assets_dir + '/js';
var ng_template_dir = assets_dir + '/ng-templates';


/* Include all needed javascript packages here. */

var packages_includes = [
    bower_dir + '/lodash/lodash.js',
    bower_dir + '/angularjs/angular.js',
    bower_dir + '/angular-ui-router/release/angular-ui-router.js',
    bower_dir + '/restangular/dist/restangular.js',
    bower_dir + '/angular-bootstrap/ui-bootstrap.js',
    bower_dir + '/angular-bootstrap/ui-bootstrap-tpls.js',
    bower_dir + '/angular-translate/angular-translate.js',
    bower_dir + '/ng-page-head-meta/ng-page-head-meta.js',
//    bower_dir + '/jquery/dist/jquery.js',
//    bower_dir + '/bootstrap/dist/js/bootstrap.js',
];

/* Include all application related files here, for now we'll include all
 * javascript files that belongs to the directory 'assets/js/'. This includes
 * all our angular files and external javascript files */
var application_includes = [
    js_dir + '/**/*.js', // Leave this here
];

/* Include all of your projects styling here.
 *  For example you could include a third-party css file here. */
var style_includes = [
    less_dir + '/main.less',
];
var style_watches = [
	less_dir + '/**/*.less',
];

/* Include all template paths here, for now all of our angular
 * templates belongs to /assets/ng-templates/ */
var ng_template_includes = [
    ng_template_dir + '/**/*.html',
];

/* Task to build our angular templates, be aware that this task only builds our
 * angular template files as javascript files, the next task which has to run to compile our new
 * templates is 'build-js-application' */

/* Task to build our javascript packages */
gulp.task('build-js-packages', function () {
    gulp.src(packages_includes)
		.pipe(sourcemaps.init())
		.pipe(concat(application_name + '.packages.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(sourcemaps.write('.', {
			sourceRoot: static_dir + '/js',
		}))
		.pipe(gulp.dest(static_dir + '/js'))
});

/* Task to build our javascript application */
gulp.task('build-js-application', function () {
	gulp.src(application_includes)
		.pipe(sourcemaps.init())
		.pipe(concat(application_name + '.js'))
			.pipe(sourcemaps.write('.', {
			sourceRoot: static_dir + '/js',
		}))
		.pipe(gulp.dest(static_dir + '/js'))
});

/* Sass task */
gulp.task('build-css', function () {
	gulp.src(style_includes)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(concat(application_name + '.css'))
		.pipe(autoprefixer({
			browsers: [
				'last 2 versions',
				'ie 8',
				'ie 9',
				'android 2.3',
				'android 4',
				'opera 12'
			]
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(cleanCSS({}))
		.pipe(sourcemaps.write('.', {
			sourceRoot: static_dir + '/css',
		}))
		.pipe(gulp.dest(static_dir + '/css'));
});

gulp.task('build-angular-templates', function () {
    return gulp.src(ng_template_includes)
        .pipe(angularTemplates({module: 'mainModule'}))
        .pipe(gulp.dest(js_dir + '/angular/tmp'));
});

/* Task to build our production application */
gulp.task('build-js-production', ['build-angular-templates', 'build-css'], function () {
    gulp.src(packages_includes.concat(application_includes))
        .pipe(concat(application_name + '.production.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(static_dir + '/js'))
});

/* Build application */
gulp.task('build-application', function () {
    gulp.run(['build-angular-templates', 'build-js-packages', 'build-js-application', 'build-css']);
});

/* Watch tasks */
gulp.task('watch', function () {
    gulp.run(['build-application']);
    gulp.watch(packages_includes, ['build-js-packages']);
    gulp.watch(application_includes, ['build-js-application']);
    gulp.watch(ng_template_includes, ['build-angular-templates']);
    gulp.watch(style_watches, ['build-css']);
});

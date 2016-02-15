var path = require('path');
var del = require('del');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

var $ = require('gulp-load-plugins')();

// set variable via $ gulp --type production
var environment = $.util.env.type || 'development';
var isProduction = environment === 'production';
var webpackConfig = require('./webpack.config.js').getConfig(environment);

var port = $.util.env.port || 1337;
var app = 'app/';
var dist = 'dist/';
var Public = 'public/';

// https://github.com/ai/autoprefixer
var autoprefixerBrowsers = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 6',
  'opera >= 23',
  'ios >= 6',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('scripts', function() {
  return gulp.src(webpackConfig.entry)
    .pipe($.webpack(webpackConfig))
    .pipe(isProduction ? $.uglify() : $.util.noop())
    .pipe(gulp.dest(dist + 'js/'))
    .pipe($.size({ title : 'js' }))
    .pipe($.connect.reload());
});

// copy html from app to dist
gulp.task('html', function() {
  return gulp.src(app + 'index.html')
    .pipe(gulp.dest(dist))
    .pipe($.size({ title : 'html' }))
    .pipe($.connect.reload());
});

// add livereload on the given port
gulp.task('serve', function() {
  $.connect.server({
    root: [dist, Public],
    port: port,
    livereload: {
      port: 35729
    }
  });
});

// watch styl, html and js file changes
gulp.task('watch', function() {
  gulp.watch(app + 'stylus/*.styl', ['styles']);
  gulp.watch(app + 'index.html', ['html']);
  gulp.watch(app + 'scripts/**/*.js', ['scripts']);
  gulp.watch(app + 'scripts/**/*.jsx', ['scripts']);
  gulp.watch(Public + 'js/imports/*.js', ['scripts']);
  gulp.watch(Public + 'css/imports/*.css', ['scripts']);
});


gulp.task("copy", function() {
  del(["public2"])
  return gulp.src("public/js/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("public2/js/"))
})

// remove bundels
gulp.task('clean', function(cb) {
  del([dist, "public2"], cb);
});

// by default build project and then watch files in order to trigger livereload
gulp.task('default', ['html','scripts', 'serve', 'watch']);

// waits until clean is finished then builds the project
gulp.task('build', function(){
  gulp.start(['html','scripts']);
});

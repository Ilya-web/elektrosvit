const developmentBuild = false;
const bundleCssFileName = 'styles.min.css';

const { src, dest, parallel, series, watch } = require('gulp');
const sass           = require('gulp-sass');
const browserSync    = require('browser-sync').create();
const sourcemaps     = require('gulp-sourcemaps');
const autoprefixer   = require('gulp-autoprefixer');
const fileinclude    = require('gulp-file-include');
const replace        = require('gulp-replace');
//const webpack        = require('webpack');
const webpackStream  = require('webpack-stream');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const concat         = require('gulp-concat');
const gulpif         = require('gulp-if');
const cleanCSS       = require('gulp-clean-css');
const formatHtml     = require('gulp-format-html');
const imagemin       = require('gulp-imagemin');
const newer          = require('gulp-newer');

function imageMin() {
  return src('src/images/**/*')
    .pipe(newer('./images'))
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 100, progressive: false}),
        imagemin.optipng({quality: '90'}),
        imagemin.svgo({
          plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
          ]
        })
      ]
    ))
    .pipe(dest('images'))
}

//Styles
function Sass() {
  return src(['src/scss/**/*.scss', '!src/scss/plugins.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(sourcemaps.write('maps'))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream())
}

function SassPlugins() {
  return src('src/scss/plugins.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(sourcemaps.write('maps'))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream())
}

//Styles concat
function ConcatCss() {
  return src('src/css/**/*.css')
    .pipe(replace('..\/..\/', '..\/'))
    .pipe(concat(bundleCssFileName))
    .pipe(cleanCSS({level: {1: {specialComments: 0}}}))
    .pipe(dest('css'))
    .pipe(browserSync.stream())
}


//Browser-sync
function BrowserSync() {
  browserSync.init({
    server: { baseDir: './' },
    notify: false,
    // tunnel: 'kaskad' //'write-site-name'
  })
}


//Build HTML
function BuildHtml() {
  return src(['src/*.html', '!src/_*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(replace('..\/', ''))
    .pipe(gulpif(
      !developmentBuild,
      replace('<link rel="stylesheet" href="src/css/plugins.css">', '')
    ))
    .pipe(
      gulpif(
        !developmentBuild,
        replace(
          '<link rel="stylesheet" href="src/css/style.css">',
          `<link rel="stylesheet" href="css/${bundleCssFileName}">`
        )
      )
    )
    .pipe(formatHtml({}))
    .pipe(dest('./'))
    .pipe(browserSync.stream())
}


//Scripts
function Scripts() {
  return src('src/js/main.js')
    .pipe(webpackStream({
      mode: developmentBuild ? 'development' : 'production',
      output: {
        filename: '[name].min.js',
      },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['@babel/env']
            }
          }
        ],
      },
      optimization: {
        minimizer: [
          new UglifyJsPlugin({
            uglifyOptions: {
              output: {
                comments: false
              }
            }
          })
        ]
      }
    }))
    .pipe(dest('js'))
    .pipe(browserSync.stream())
}


//Watch
function Watch() {
  watch('src/js/*.js', Scripts);
  watch('src/*.html', BuildHtml);
  watch('src/images/**/*', imageMin);
  watch(
    ['src/scss/*.scss', '!src/scss/plugins.scss', '!src/scss/_fonts.scss'],
    developmentBuild ? Sass : series(Sass, ConcatCss)
  );
  watch(
    ['src/scss/plugins.scss', 'src/scss/_fonts.scss'],
    developmentBuild ? SassPlugins : series(SassPlugins, ConcatCss)
  );
}


//Exports
exports.Sass              = Sass;
exports.SassPlugins       = SassPlugins;
exports.ConcatCss         = ConcatCss;
exports.BrowserSync       = BrowserSync;
exports.BuildHtml         = BuildHtml;
exports.Scripts           = Scripts;

exports.default = developmentBuild
  ? series(Sass, SassPlugins, Scripts, BuildHtml, imageMin, parallel(BrowserSync, Watch))
  : series(Sass, SassPlugins, ConcatCss, Scripts, BuildHtml, imageMin, parallel(BrowserSync, Watch));
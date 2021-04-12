//variables

const { src, dest, series, parallel, watch } = require('glup');
const sass = require("gulp-sass");
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss')
const autoPrefix = require('autoprefixer');
const replace = require('gulp-replace');
const  gulp  =  require('gulp');
const ts = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsindex = require('gulp-create-tsindex');
const del = require('del');
const vinylPaths = require('vinyl-paths');
const merge = require('merge2');
const tslint = require("gulp-tslint");
const Configuration = require("tslint").Configuration;
const paths = require("./paths").paths;

const tsProject = () => ts.createProject(paths.tsconfig());

/**
 * Cleans dist folder
 * @returns 
 */
function clean() {
  return gulp.src([paths.output, paths.testOutputRoot], {
      allowEmpty: true
    })
    .pipe(vinylPaths(del));
}
clean.description = "Removes all files from the output";

function tslintTask() {
  return gulp.src([paths.root + "/**/*.ts"])
    .pipe(tslint({
      formatter: "stylish",
      configuration: Configuration.findConfiguration(paths.tsLintConfig(), undefined).results,
    }))
    .pipe(tslint.report({
      emitError: false,
      summarizeFailureOutput: true
    }))
}
tslintTask.displayName = "tslint";

function buildTypescript() {

  const moduleTsProject = tsProject();
  const tsResult = gulp.src([paths.typeScript])
    .pipe(tsindex(`./src/${process.env.COMPONENT_NAME}.ts`))
    .pipe(sourcemaps.init())
    .pipe(moduleTsProject());

  return merge([
    tsResult.dts.pipe(gulp.dest(paths.output)),
    tsResult.js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.output))
  ]);
}
buildTypescript.displayName = "build-typescript";

function copyStatic(staticFiles, base) {
  return gulp.src(staticFiles, {
      base,
      allowEmpty: true
    })
    .pipe(gulp.dest(paths.output));
}
copyStatic.displayName = "copy-static";

/**
 * copies changed json files to the output directory
 * @returns 
 */
function buildJson() {
  return copyStatic(paths.json);
}
buildJson.displayName = "build-json";

/**
 * copies changed html files to the output directory
 * @returns 
 */
function buildHtml() {
  return copyStatic(paths.html);
}
buildHtml.displayName = "build-html";

gulp.task(clean);
gulp.task(tslintTask);
gulp.task(buildTypescript);
gulp.task(copyStatic);
gulp.task(buildJson);
gulp.task(buildHtml);

module.exports.clean = clean;
module.exports.tslintTask = tslintTask;
module.exports.buildTypescript = buildTypescript;
module.exports.copyStatic = copyStatic;
module.exports.buildJson = buildJson;
module.exports.buildHtml = buildHtml;
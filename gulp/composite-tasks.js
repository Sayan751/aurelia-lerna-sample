const gulp = require("gulp");
const paths = require("./paths").paths;
const tasks = require("./tasks-build");

//#region build
const buildWithoutHtml = gulp.series(
  tasks.clean,
  tasks.tslintTask,
  gulp.parallel(
    tasks.buildTypescript,
    tasks.buildJson)
);

const buildWithHtml = gulp.series(
  tasks.clean,
  tasks.tslintTask,
  gulp.parallel(
    tasks.buildTypescript,
    tasks.buildHtml,
    tasks.buildJson)
);
buildWithoutHtml.displayName = buildWithHtml.displayName = "build";
buildWithoutHtml.description = buildWithHtml.description = "Builds the project and saves the output in the /dist folder";
//#endregion

//#region watch
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

function watchTs(callback) {
  const tsWatcher = gulp.watch(paths.typeScript, gulp.series(tasks.tslintTask, tasks.buildTypescript));
  tsWatcher.on("change", reportChange);
  callback();
}
watchTs.displayName = "watch-TypeScript";

function watchJson(callback) {
  const jsonWatcher = gulp.watch(paths.json, tasks.buildJson);
  jsonWatcher.on("change", reportChange);
  callback();
}
watchJson.displayName = "watch-JSON";

function watchHtml(callback) {
  const htmlWatcher = gulp.watch(paths.html, tasks.buildHtml);
  htmlWatcher.on("change", reportChange);
  callback();
}
watchHtml.displayName = "HTML watcher";

const watchWithHtml = gulp.parallel(watchTs, watchHtml, watchJson);
const watchWithoutHtml = gulp.parallel(watchTs, watchJson);

watchWithoutHtml.displayName = watchWithHtml.displayName = "watch";
watchWithoutHtml.description = watchWithHtml.description = "Watches the folder for changes. If changes occur, they are built and deployed locally.";

//#endregion
module.exports.buildWithHtml = buildWithHtml;
module.exports.buildWithoutHtml = buildWithoutHtml;
module.exports.watchWithHtml = watchWithHtml;
module.exports.watchWithoutHtml = watchWithoutHtml;
const gulp = require("gulp");
const tasks = require("../../gulp/tasks-build");

const copyStaticFiles = (cb) => {
    tasks.copyStatic(["assets/*", "config/*"], ".");
    cb();
};
copyStaticFiles.displayName = "copy-static";

gulp.task("build", gulp.series(
    tasks.clean,
    tasks.tslintTask,
    copyStaticFiles));
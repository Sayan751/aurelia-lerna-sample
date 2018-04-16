const  gulp  =  require('gulp');
const tasks = require("../../gulp/composite-tasks");
require("../../GulpFile");

process.env.COMPONENT_NAME = "services";

gulp.task(tasks.buildWithoutHtml);
gulp.task(tasks.watchWithoutHtml);
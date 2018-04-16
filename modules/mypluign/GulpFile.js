const  gulp  =  require('gulp');
const tasks = require("../../gulp/composite-tasks");
require("../../GulpFile");

process.env.COMPONENT_NAME = "myplugin";


gulp.task(tasks.buildWithHtml);
gulp.task(tasks.watchWithHtml);
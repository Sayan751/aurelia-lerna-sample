const path = require("path");
const appRoot = 'src/';
const outputRoot = 'dist/';
const typings = 'typings/';

module.exports.paths = {
    root: appRoot,
    source: appRoot + '**/*.js',    
    typeScript: appRoot + '**/*.ts',
    typeScriptTypings: typings + '**/*.d.ts',
    typeScriptTypingsPath: typings,
    json: [appRoot + '**/*.json', "!**/tsconfig*.json"],
    output: outputRoot,
    html: appRoot + '**/*.html',
    testOutputRoot: "test-dist/",
    testSpecs: 'tests/**/*.spec.ts',

    tsLintConfig: () => path.resolve(`../../tslint.json`),
    tsconfig: () => path.resolve(`../../tsconfig.json`),
};
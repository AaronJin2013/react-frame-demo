var gulp = require('gulp');
var path = require('path');
var gulpWebpack = require('gulp-webpack');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var $ = require('gulp-load-plugins')();

var webpackConfig;
var taskConfig = {
    publicPath:'http://127.0.0.1:9090/asset/'
    ,
    entry:{
        app:[
            "webpack-dev-server/client?http://0.0.0.0:9090",
            "webpack/hot/dev-server"
        ]
    },
    devtool : {
        test: 'inline-source-map',
        build: 'eval',
        dev: 'source-map'
    }
}

gulp.task("webpack", function () {
    console.log(webpackConfig);
    return gulp.src('')
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(webpackConfig.output.path));

});


gulp.task('default', function () {
    var gulpJson = require('./ayi/gulp/ayicenter.gulp.json');
    gulpJson.entry.app.push(taskConfig.entry.app[0]);
    gulpJson.entry.app.push(taskConfig.entry.app[1]);
    gulpJson.devtool=taskConfig.devtool.dev;
    gulpJson.output.publicPath=taskConfig.publicPath;
    webpackConfig = require('./webpack.make')(gulpJson);
    gulp.start('webpack','watch');
});

gulp.task('watch', function () {

    new WebpackDevServer(webpack(webpackConfig), {
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        historyApiFallback: true,
        stats: {
            colors: true
        }
    }).listen(9090, 'localhost', function (err) {
            if (err) throw new gutil.PluginError('webpack-dev-server', err);

        });
});
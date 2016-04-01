'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");


module.exports = function makeWebpackConfig(options) {

    var config = {};

    var sassLoaders = [
        "css-loader",
        "autoprefixer-loader?browsers=last 2 version",
        "sass-loader?indentedSyntax=sass&includePaths[]=" + path.resolve(__dirname, options.gulp.sassLoaderspath),
    ];

    config.entry = {
        app: options.entry.app
    }

    config.output = {
        path: path.join(__dirname + options.gulp.path),
        publicPath: options.output.publicPath,
        filename: options.output.filename,
        chunkFilename: options.output.chunkFilename
    }

    config.devtool = options.devtool;

    config.module = {
        preLoaders: [],
        loaders: [{
            test: /\.js$/,
            loader: 'babel?optional[]=runtime',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!"))
        }]
    };


    config.plugins = [
        new HtmlWebpackPlugin({
            filename: options.HtmlWebpackPlugin.filename,
            template: options.HtmlWebpackPlugin.template,
            inject: 'body',
            minify: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('css/[name].bundle.css', {}),
        //new webpack.NoErrorsPlugin(),
        //new webpack.optimize.DedupePlugin(),
        //new webpack.optimize.UglifyJsPlugin()
    ];


    return config;
};
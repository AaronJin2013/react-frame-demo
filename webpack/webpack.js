
var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");
var entry = require("./entry");

var hotMiddleware=[
    'webpack-hot-middleware/client'
];
var loaders=[
    {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'ts-loader']
    },{
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file'
    },{
        test: /\.html$/,
        loader: 'raw'
    },{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!postcss')
    },
    {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader",[
            "css-loader",
            "autoprefixer-loader?browsers=last 2 version",
            "sass-loader?outputStyle=expanded&includePaths[]=" + path.resolve(__dirname, './src/')
        ].join("!"))
    }
];
var plugins=[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].[hash].css', {
        disable: true
    })
];
module.exports = function(env) {
    var outpath=process.cwd();
    if(env=== "production"){
        hotMiddleware=[];
        outpath=process.cwd();
    }else{
        plugins.push(
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"development"'
            }));
        outpath=__dirname;
    }
    console.log(outpath);
    return {
        devtool: 'sourcemap',
        debug: true,
        entry: hotMiddleware.concat(entry),
        module: {
            loaders: loaders
        },
        output: {
            filename: 'bundle.js',
            path: outpath + "/static/",
            publicPath: "/static/",
            include: outpath,
            chunkFilename: 'js/[hash].chunk.js'
        },
        plugins:plugins ,
        resolve: {
            extensions: ['', '.jsx', '.js', '.tsx', '.ts']
        }
    };

}
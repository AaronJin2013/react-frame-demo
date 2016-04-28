
var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var PathChunkPlugin = require('path-chunk-webpack-plugin');
var path = require("path");
var entry = require("./entry");

var hotMiddleware={
    hotmid:'webpack-hot-middleware/client'
};
var extractSASS = new ExtractTextPlugin('[name].css');
var loaders=[
    {
        test: /\.(ts|tsx)?$/,
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
        loader: extractSASS.extract("style-loader",[
            "css-loader",
            "autoprefixer-loader?browsers=last 2 version",
            "sass-loader?outputStyle=expanded&includePaths[]=" + path.resolve(__dirname, './src/')
        ].join("!"))
    }
];
var plugins=[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    extractSASS,
    //new webpack.optimize.CommonsChunkPlugin({
    //    name: "vendor",
    //    //filename: ["vendor"],
    //    chunks: ["vendor"]
    //})

    new PathChunkPlugin({
        name: 'vendor',
        test: 'node_modules/'
    })
];
module.exports = function(env) {
    var outpath=process.cwd();
    if(env=== "production"){
        hotMiddleware={};
        outpath=process.cwd();
        plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        );
        plugins.push(
            new ExtractTextPlugin('css/[name].bundle.css', {})
        );
    }else{
        plugins.push(
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"development"'
            }));
        outpath=__dirname;
    }
    console.log(entry);
    console.log(Object.assign(hotMiddleware,entry));
    return {
        devtool: 'sourcemap',
        debug: true,
        entry: Object.assign(hotMiddleware,entry),
        module: {
            loaders: loaders
        },
        output: {
            filename: '[name].js',
            path: outpath + "/static/",
            publicPath: "/static/",
            include: outpath,
            chunkFilename: 'js/[hash].chunk.js'
        },
        plugins:plugins ,
        resolve: {
            extensions: ['', '.jsx', '.js', '.tsx', '.ts'],
            //alias:{
            //    'vendor':'vendor.js'
            //}
        },
        //externals:{
        //    'react':'React'
        //}
    };

}
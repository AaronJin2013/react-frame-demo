import * as webpack from "webpack";
import * as express from "express";
import * as path from "path";
import * as http from "http";
import favicon = require("serve-favicon");
import logger = require("morgan");
import methodOverride = require("method-override");
import session = require("express-session");
import bodyParser = require("body-parser");
import multer = require("multer");
import errorhandler = require("errorhandler");
import * as DB from './server/db' ;
import * as uuid from 'node-uuid';
import router from './server/routes';
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

var config = require('./webpack/webpack.js')("develop");

var app = express();


app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true, saveUninitialized: true,
    secret: 'uwotm8' }));

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse multipart/form-data
//app.use(multer());

app.use(express.static(path.join(__dirname, '')));

app.use('/', router);
app.use('/api/*', function(req,res){

    console.log(req);
    proxy.web(req,res,{
        auth:'',
        target:'http://wap.yunjiazheng.com'+req.originalUrl,
        changeOrigin:true
    })
});
console.log(router);

var compiler = webpack(config);
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
    stats: { colors: true },
    poll: true,
    quiet: false,
    reload: true
});

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    reload: true,
    //log: console.log,
    path: '/__webpack_hmr'
});

app.use(devMiddleware);
app.use(hotMiddleware);

app.use((req, res, next) => {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});

app.use((err: any, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
    return null;
});
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
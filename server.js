/**
 * Created by aaronjin on 16/4/5.
 */
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack/webpack')("develop")

var app = new (require('express'))()
var port = 8080

var compiler = webpack(config)
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

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})

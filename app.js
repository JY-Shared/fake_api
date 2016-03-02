var express = require('express');
var path =require('path');
var bodyParser = require('body-parser');

//fakes
var fakeEvent = require('./api/event');
var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(function(req, res, next) {//fake cros
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use('/', fakeEvent);
//livereload
if(app.get('env') == 'development'){
    app.use(require('connect-livereload')());
}
app.use('/fakedocs',express.static(path.join(__dirname, 'fakedocs')));



module.exports = app;
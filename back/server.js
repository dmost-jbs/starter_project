var express = require('express');
var app = express();

app.get('/', function (req, res) {


    res.send('Hello World!');
});

app.get('/api/message', function (req, res) {
    res.send('get api endpoint');
});

app.post('/api/message', function (req, res) {
    res.send('post api endpoint');
});

var server = app.listen(5000, function () { });
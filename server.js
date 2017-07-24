var express = require('express');
var serverStatic = require('server-static');

var app = express();

app.use(serverStatic(__dirname + '/dist'));

var port = process.env.PORT || 5000;

app.listen(port);

console.log('server started ' + port);
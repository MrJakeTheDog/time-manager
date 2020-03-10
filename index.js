let express = require('express'),
app = express(),
// bodyParser = require('body-parser'),
// config = require('./config'),
http = require('http').Server(app);
// task = require('./tasks/task');

// var http = require('http');
// var server = new http.Server();
// server.listen(3000, '127.0.0.1');
// var counter=0;
// server.on('request', function(req, res){
//     res.end("Hi nigga"+ ++counter);
// })
http.listen(process.env.PORT || 3000, function() {
    console.log('Listening on:' + (process.env.PORT || 3000));
});

app.use(express.static(__dirname + '/static/'));
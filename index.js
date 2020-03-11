var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://time-manager-6d8bd.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("server/saving-data/fireblog");

var usersRef = ref.child("users");
usersRef.set({
  alanisawesome: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  }
});

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
    console.log('Listening on :' + (process.env.PORT || 3000));
});

app.use(express.static(__dirname + '/static/'));
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendfile('example.html');
});

var nsp = io.of('/my_id');
nsp.on('connection', function(socket) {
   console.log('abdoo connected');
   nsp.emit('hi', 'Hello everyone!');
});

http.listen(3000, function() {
   console.log('listening on localhost:3000');
});
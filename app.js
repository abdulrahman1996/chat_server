
var port = process.env.port || 3000;
var express = require('express');
var app = express();
var server = app.listen(port);
var io = require('socket.io').listen(server);


app.get('/', function(req, res) {
   
  res.sendfile('user_1.html');

  
});

app.get('/2', function(req, res) {
   
 res.sendfile('user_2.html');

});




io.sockets.on('connection', function (socket) {
 socket.on('join', function (data) {
   socket.join(data.id); // We are using room of socket io
   console.log(data.id);
 });
 socket.on('chat', function(data){
   io.sockets.in(data.to).emit('chat', data);
   console.log(data);
 });
});



//http.listen(process.env.PORT);‏ 
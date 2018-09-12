var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);





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





var port = process.env.port || 3000;  
http.listen(port, function() {
  
});
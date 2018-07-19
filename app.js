var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


// app.get('/', function(req, res) {
    
//    res.sendfile('user_1.html');

   
// });
// app.get('/2', function(req, res) {
    
//   res.sendfile('user_2.html');

// });




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



// io.
// var test = io.of('/test');
// test.on('connection', function (socket) {
//   console.log('rest');
//   test.on('chat', function(msg){

//     io.emit('chat', msg);
//   });
 
// });

    
http.listen(3000, function() {
   console.log('listening on localhost:3000');
});
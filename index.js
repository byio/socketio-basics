const express = require('express');
const socket = require('socket.io');

// App Setup
const app = express();
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Express server started on port ${port}.`);
});

// Static files directory
app.use(express.static('public'));

// Socket Setup
const io = socket(server);

io.on('connection', (socket) => {
  // console.log('made socket connection');
  // console.log('==========');
  // console.log(socket.id);

  // Listen for Client's Emitted Data ('chat')
  socket.on('chat', data => {
    // Emit Data through All Sockets with Other Clients Connected to this Server
    io.sockets.emit('chat', data);
  });

  socket.on('typing', data => {
    socket.broadcast.emit('typing', data);
  });

});

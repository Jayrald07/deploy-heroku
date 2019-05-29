const express = require('express');
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http);

app.use(express.static('public'));
io.on('connection',socket => {
	socket.on('announce',function(message) {
		socket.broadcast.emit('broadcastMessage',message);
	})
});

http.listen(process.env.PORT || 5000,() => {
	console.log('Listening Now...');
})
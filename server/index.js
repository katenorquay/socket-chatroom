var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket) {
  socket.on('chat', function(message) {
    io.emit('chat', message)
  })
  // socket.on('login', function(user) {
  //   io.emit('login', user)
  // })
})

http.listen(3000, function() {
  console.log('listening on localhost:3000')
})

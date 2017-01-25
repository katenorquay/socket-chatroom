var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(client) {
  console.log('someone connected')
  client.on('disconnect', function() {
    console.log('user disconnected')
  })
  client.on('chat message', function(message) {
    io.emit('chat message', message)
  })
})

http.listen(3000, function() {
  console.log('listening on localhost:3000')
})

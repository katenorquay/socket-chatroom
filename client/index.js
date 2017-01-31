var React = require('react')
var render = require('react-dom').render
var createStore = require('redux').createStore
var App = require('./components/App')
var reducer = require('./reducer')
var io = require('socket.io-client')
var socket = io(':3000')

const initialState = {
  loggedin: false,
  currentUser: {},
  messages: [],
  emoji: null,
  showEmojiPicker: false
}

const store = createStore(reducer, initialState)

var main = document.querySelector('main')

store.subscribe( () => {
  var state = store.getState()
  render(<App state={state} dispatch={store.dispatch}/>, main)
})

store.dispatch({type: 'INIT'})

socket.on('chat', function(message) {
  store.dispatch({type:'ADD_MESSAGE', payload: message})
})

// socket.on('login', function (user) {
//   store.dispatch({type: 'ADD_USER', payload: user})
// })

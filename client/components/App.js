var React = require('react')
var render = require('react-dom').render
var io = require('socket.io-client')
var socket = io(':3000')
var SignIn = require('./SignIn')
var Emoji = require('./Emoji')
var EnterMessage = require('./EnterMessage')
var ShowMessage = require('./ShowMessage')

function App({state, dispatch}) {
  return (
    <div>
      <h1>Socket Chat</h1>
      <SignIn state={state} dispatch={dispatch} />
      <ShowMessage state={state} dispatch={dispatch} />
      <EnterMessage state={state} dispatch={dispatch} />
    </div>
  )
}

module.exports = App

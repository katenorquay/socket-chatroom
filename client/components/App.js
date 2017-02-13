var React = require('react')
var render = require('react-dom').render
var io = require('socket.io-client')
var socket = io(':3000')
var SignIn = require('./SignIn')
var Emoji = require('./Emoji')
var EnterMessage = require('./EnterMessage')
var ShowMessage = require('./ShowMessage')

function App({state, dispatch}) {

  var messageClass = state.loggedin === false ? 'hide': 'chatlog'

  return (
    <div>
      <h1>Socket Chat</h1>
      <SignIn state={state} dispatch={dispatch} />
      <div className={messageClass}>
        {state.messages.map((message) => {
          var redClass = message.color === 'red' ? 'red' : ''
          var blueClass = message.color === 'blue' ? 'blue' : ''
          var greenClass = message.color === 'green' ? 'green' : ''
          var yellowClass = message.color === 'yellow' ? 'yellow' : ''
          return (
            <div>
              <p className='username'>{message.user}:</p>
              <p className={redClass + blueClass + greenClass + yellowClass}>{message.text}</p>
            </div>
          )  
          })}
      </div>
      <EnterMessage state={state} dispatch={dispatch} />
    </div>
  )
}

module.exports = App

var React = require('react')
var render = require('react-dom').render
var io = require('socket.io-client')
var socket = io(':3000')
var Admin = require('./Admin')
var Emoji = require('./Emoji')

function App({state, dispatch}) {
  function addMessage (e) {
    e.preventDefault()
    var message = {
    user: state.currentUser.username,
    text: document.getElementById('message').value,
    color: state.currentUser.color
    }
    socket.emit('chat', message)
  }

  var messageClass = state.loggedin === false ? 'hide': 'chatlog'
  var formClass = state.loggedin === false ? 'hide': ''
  var emojiClass = state.showEmojiPicker === true ? '' : 'hide'

  return ( <div>
    <h1>Socket Chat</h1>
    <Admin state={state} dispatch={dispatch} />
    <div className={messageClass}>
      {state.messages.map((message) => {
        var redClass = message.color === 'red' ? 'red' : ''
        var blueClass = message.color === 'blue' ? 'blue' : ''
        var greenClass = message.color === 'green' ? 'green' : ''
        var yellowClass = message.color === 'yellow' ? 'yellow' : ''
        return <div>
          <p className='username'>{message.user}:</p>
          <p className={redClass + blueClass + greenClass + yellowClass}>{message.text}</p>
         </div>
      })}
    </div>
    <form className={formClass}>
      <input className='input' type='text' placeholder='Message' id='message'/>
      <input id="submit" type='submit' value='Send' onClick={addMessage}/>
    </form>
    <Emoji state={state}/>
  </div>
  )
}

module.exports = App

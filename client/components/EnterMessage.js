var React = require('react')
var render = require('react-dom').render
var io = require('socket.io-client')
var socket = io(':3000')
var Emoji = require('./Emoji')

function EnterMessage({state, dispatch}) {
  function addMessage (e) {
    e.preventDefault()
    var message = {
    user: state.currentUser.username,
    text: document.getElementById('message').value,
    color: state.currentUser.color
    }
    socket.emit('chat', message)
  }

  var formClass = state.loggedin === false ? 'hide': ''

    return (
      <form className = {formClass}>
        <input className='input' type='text' placeholder='Message' id='message'/>
        <input id="submit" type='submit' value='Send' onClick={addMessage}/>
        <Emoji state={state} dispatch={dispatch} />
      </form>
    )

}

module.exports = EnterMessage

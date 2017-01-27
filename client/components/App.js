var React = require('react')
var render = require('react-dom').render
var io = require('socket.io-client')
var socket = io(':3000')
var Admin = require('./Admin')

function App({state, dispatch}) {
  function addMessage (e) {
    e.preventDefault()
    var message = {
    text: document.getElementById('message').value
    }
    socket.emit('chat', message)
  }

  return ( <div>
    <h1>chat-chat</h1>
    <Admin state={state} dispatch={dispatch} />
    <div className='chatlog'>
      {state.messages.map((message) => {
        console.log(state)
        var redClass = state.user.color === 'red' ? 'red' : ''
        var blueClass = state.user.color === 'blue' ? 'blue' : ''
        var greenClass = state.user.color === 'green' ? 'green' : ''
        var yellowClass = state.user.color === 'yellow' ? 'yellow' : ''
        return <div className='chat'>
          <p className='username'>{state.user.username}:</p>
          <p className={redClass + blueClass + greenClass + yellowClass}>{message.text}</p>
         </div>
      })}
    </div>
    <form>
      <input className='input' type='text' placeholder='Message' id='message'/>
      <input id="submit" type='submit' value='Send' onClick={addMessage}/>
    </form>
  </div>
  )
}

module.exports = App

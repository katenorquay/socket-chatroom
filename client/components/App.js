var React = require('react')
var render = require('react-dom').render
var io = require('socket.io-client')
var socket = io('localhost:3000')

function App({state, dispatch}) {
  function addMessage (e) {
    e.preventDefault()
    var message = document.getElementById('message').value
    socket.emit('chat', message)
  }

  return ( <div>
    <h1>chat-chat</h1>
    <div className='chatlog'>
      {state.messages.map((message) => {
        return <p>{message}</p>
      })}
    </div>
    <form>
      <div className ='form'>
        <input type='text' placeholder='message' id='message'/>
        <input id="submit" type='submit' value='Send' onClick={addMessage}/>
      </div>
    </form>
  </div>
  )
}

module.exports = App

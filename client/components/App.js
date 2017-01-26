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

  function addUser (e) {
    e.preventDefault()
    var username = document.getElementById('username').value
    dispatch({type: 'ADD_USER', payload: username})
  }

  return ( <div>
    <h1>chat-chat</h1>
    <div className='chatlog'>
      {state.messages.map((message) => {
        return <div className='chat'>
          <p className='username'>{state.username}</p>
          <p className='msg'>{message}</p>
         </div>
      })}
    </div>
    <form>
      <input className='input' type='text' placeholder='User Name' id='username'/>
      <input id="submit" type='submit' value='Sign In' onClick={addUser}/>
    </form>
    <form>
      <input className='input' type='text' placeholder='Message' id='message'/>
      <input id="submit" type='submit' value='Send' onClick={addMessage}/>
    </form>
  </div>
  )
}

module.exports = App

var React = require('react')
var render = require('react-dom').render
var io = require('socket.io-client')
var socket = io('localhost:3000')

function App({state, dispatch}) {
  function addMessage (e) {
    e.preventDefault()
    var color = null
    if (document.getElementById('red').checked) {
      color = 'red'
    } else if(document.getElementById('blue').checked) {
      color = 'blue'
    }  else if(document.getElementById('yellow').checked) {
      color = 'yellow'
    }  else if(document.getElementById('green').checked) {
      color = 'green'
    }
    var message = {
    username: document.getElementById('username').value,
    text: document.getElementById('message').value,
    color: color
    }
    socket.emit('chat', message)
  }


  return ( <div>
    <h1>chat-chat</h1>
    <div className='chatlog'>
      {state.messages.map((message) => {
        var redClass = message.color === 'red' ? 'red' : ''
        var blueClass = message.color === 'blue' ? 'blue' : ''
        var greenClass = message.color === 'green' ? 'green' : ''
        var yellowClass = message.color === 'yellow' ? 'yellow' : ''
        return <div className='chat'>
          <p className='username'>{message.username}:</p>
          <p className={redClass + blueClass + greenClass + yellowClass}>{message.text}</p>
         </div>
      })}
    </div>
    <form>
      <input type="radio" name="color" id="red" value="Red"/>
      <input type="radio" name="color" id="blue" value="Blue" />
      <input type="radio" name="color" id="green" value="Green" />
      <input type="radio" name="color" id="yellow" value="Yellow" />
    </form>
    <form>
      <input className='input' type='text' placeholder='User Name' id='username'/>
      <input className='input' type='text' placeholder='Message' id='message'/>
      <input id="submit" type='submit' value='Send' onClick={addMessage}/>
    </form>
  </div>
  )
}

module.exports = App

var React = require('react')
var render = require('react-dom').render
var io = require('socket.io-client')
var socket = io(':3000')

function App({state, dispatch}) {
  function addMessage (e) {
    e.preventDefault()
    var radios = document.getElementsByTagName('input');
    var color;
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].type === 'radio' && radios[i].checked) {
        color = radios[i].value;
      }
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
      <input type="radio" id="red" value="red"/>
      <input type="radio" id="blue" value="blue" />
      <input type="radio" id="green" value="green" />
      <input type="radio" id="yellow" value="yellow" />
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

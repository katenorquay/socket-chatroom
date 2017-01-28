var React = require('react')
var render = require('react-dom').render
var io = require('socket.io-client')
var socket = io(':3000')

function Admin({state, dispatch}) {
  function Login(e) {
    e.preventDefault()
    var color;
    var radios = document.getElementsByName('color')
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        color = radios[i].value
      }
    }
    var user = {
    username: document.getElementById('username').value,
    color: color
    }
    dispatch({type: 'ADD_USER', payload: user})
  }

  var customClass = state.loggedin === true ? 'hide': ''

  return (
    <div className={customClass}>
      <form className='color-selector'>
        <input type="radio" name="color" id="red" value="red"/>
        <label for="red" id="red-label">Red</label>
        <input type="radio" name="color" id="blue" value="blue" />
        <label for="blue" id="blue-label">Blue</label>
        <input type="radio" name="color" id="green" value="green" />
        <label for="green" id="green-label">Green</label>
        <input type="radio" name="color" id="yellow" value="yellow" />
        <label for="yellow" id="yellow-label">Yellow</label>
      </form>
      <form>
        <input className='input' type='text' placeholder='User Name' id='username'/>
        <input id="submit" type='submit' value='Enter Chatroom' onClick={Login}/>
      </form>
    </div>
  )
}


module.exports = Admin

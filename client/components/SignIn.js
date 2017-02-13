var React = require('react')
var render = require('react-dom').render
var io = require('socket.io-client')
var socket = io(':3000')

function SignIn({state, dispatch}) {
  function Login(e) {
    e.preventDefault()
    var color;
    var radios = document.getElementsByName('color')
    for(var i = 0; i < radios.length; i++) {
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

  var loginClass = state.loggedin === true ? 'hide': 'login'

    return (
      <div className={loginClass}>
        <div>
          <form className='color-selector'>
            <input type="radio" name="color" id="red" value="red"/>
            <label htmlFor="red" id="red-label">Red</label>
            <input type="radio" name="color" id="blue" value="blue" />
            <label htmlFor="blue" id="blue-label">Blue</label>
            <input type="radio" name="color" id="green" value="green" />
            <label htmlFor="green" id="green-label">Green</label>
            <input type="radio" name="color" id="yellow" value="yellow" />
            <label htmlFor="yellow" id="yellow-label">Yellow</label>
          </form>
        </div>
        <div>
          <form>
            <input className='input' type='text' placeholder='User Name' id='username'/>
            <input id="submit" type='submit' value='Enter Chatroom' onClick={Login}/>
          </form>
        </div>
      </div>
    )
}


module.exports = SignIn

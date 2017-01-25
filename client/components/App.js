var React = require('react')

function App({state, dispatch}) {
  function addMessage (e) {
    e.preventDefault()
    var message = document.getElementById('message').value
    dispatch({type: 'ADD_MESSAGE', payload: message})
  }

  return ( <div>
    <h1>chat-chat</h1>
    <div className='chatlog'>
      <p>{state.messages}</p>
    </div>
    <form>
      <input type='text' placeholder='message' id='message'/>
      <input type='submit' value='submit' onClick={addMessage}/>
    </form>
  </div>
  )
}

module.exports = App

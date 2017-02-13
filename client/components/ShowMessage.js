var React = require('react')
var render = require('react-dom').render

function ShowMessage({state, dispatch}) {
  if(state.loggedin) {
    return (
      <div className='chatlog'>
        {state.messages.map((message) => {
          var redClass = message.color === 'red' ? 'red' : ''
          var blueClass = message.color === 'blue' ? 'blue' : ''
          var greenClass = message.color === 'green' ? 'green' : ''
          var yellowClass = message.color === 'yellow' ? 'yellow' : ''
          return (
            <div>
              <p className='username'>{message.user}:</p>
              <p className={redClass + blueClass + greenClass + yellowClass}>{message.text}</p>
              </div>
          )
        })}
      </div>
    )
  }
}


module.exports = ShowMessage

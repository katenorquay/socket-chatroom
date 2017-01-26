var clone = require('clone')

function reducer(state, action) {
  var {type, payload} = action
  var newState = clone(state)
  switch(type) {
    case 'ADD_MESSAGE':
      newState.messages.push(payload)
      return newState
    case 'ADD_USER':
      newState.username = payload
      return newState
    default:
        return newState
  }
}

module.exports = reducer

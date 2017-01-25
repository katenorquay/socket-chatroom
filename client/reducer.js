var clone = require('clone')

function reducer(state, action) {
  var {type, payload} = action
  var newState = clone(state)
  switch(type) {
    case 'INIT':
      return newState
    default:
        return newState
  }
}

module.exports = reducer

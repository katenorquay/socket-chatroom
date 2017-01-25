var React = require('react')
var render = require('react-dom').render
var redux = require('redux')
var App = require('./components/App')
var reducer = require('./reducer')

const initialState = {
  messages: []
}

const store = redux.createStore(reducer, initialState)

var main = document.querySelector('main')

store.subscribe( () => {
  var state = store.getState()
  render(<App state={state} dispatch={store.dispatch}/>, main)
})

store.dispatch({type: 'INIT'})

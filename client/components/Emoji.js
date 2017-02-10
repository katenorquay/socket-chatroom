var React = require('react')
var render = require('react-dom').render
var Picker = require('emoji-mart').Picker

function Emoji({state, dispatch}) {
    if(state.showEmojiPicker) {
      return (
        <Picker/>
      )
    }
    else {
      return (
        <p className='submit'onClick={()=> {dispatch({type: 'SHOW_EMOJI'})}}>Emoji</p>
      )
    }
}

module.exports = Emoji

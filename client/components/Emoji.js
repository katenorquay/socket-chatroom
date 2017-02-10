var React = require('react')
var render = require('react-dom').render
var Picker = require('emoji-mart').Picker

function Emoji({state, dispatch}) {

  function addEmoji(emoji, event) {
    event.preventDefault
    document.getElementById('message').value += emoji.native
  }
    if(state.showEmojiPicker) {
      return (
        <Picker onClick={addEmoji}/>
      )
    }
    else {
      return (
        <p className='submit'onClick={()=> {dispatch({type: 'SHOW_EMOJI'})}}>Emoji</p>
      )
    }
}

module.exports = Emoji
